import header from './base/header.vue';
import footer from './base/footer.vue';
import ElRow from "element-ui/packages/row/src/row";
import ElCol from "element-ui/packages/col/src/col";
import { getBugInfoListPage, saveOrUpdateBugInfo, deleteBugInfoById, exportBugInfoToExcel, downloadBugInfoFile} from '../api/api';
import utils from "../common/js/util.js"
import $ from 'jquery'

export default {
  components: {
    ElCol,
    ElRow,
    'header-select': header,
    'footer-select': footer
  },
  name: 'bugManagement',
  data() {
    return {
      title: "Mini项目管理工具",
      bugInfos: [],
      total: 0,
      listLoading: false,
      filters : {
        pageNum: 1,
        pageSize: 10,
        keywords: '',
        level: '',
        status: ''
      },
      levelOptions: [{
          value: 0,
          label: '高'
        }, {
          value: 1,
          label: '中'
        }, {
          value: 2,
          label: '低'
        }
      ],
      // level: 1,

      statusOptions:[
        {
          value: 1,
          label: '打开'
        },
        {
          value: 0,
          label:'关闭'
        }
      ],

      dataFormTitle: '新增',
      dataFormVisible: false,//新增界面是否显示
      addLoading: false,
      dataFormRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      },
      bugNameList : [],

      //新增界面数据
      dataForm: {
        id: 0,
        bugName: '',
        projectName: '',
        moduleName: '',
        level: 0,
        createTime: '',
        closeTime: '',
        createPerson: '',
        personInCharge: '',
        status: true,
        desc:''
      },

    }
  },
  methods: {
    //性别显示转换
    formatSex: function (row, column) {
      return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
    },
    handleSizeChange(val) {
      this.filters.pageSize = val;
      this.handleCurrentChange(1);
      this.getBugInfos();
    },
    handleCurrentChange(val) {
      this.filters.pageNum = val;
      this.getBugInfos();
    },
    getSTime(val) {
      this.dataForm.createTime=val;//这个sTime是在data中声明的，也就是v-model绑定的值
    },

   //获取列表
    getBugInfos() {
      let para = this.filters;
      console.log(para.status)
      this.listLoading = true;
      getBugInfoListPage(para).then((res) => {
        this.total = res.data.total;//res.data.total;
        this.bugInfos = res.data.list; //res.data.users;
        this.listLoading = false;
      });
    },

    //导出Excel
    exportToExcel : function () {
      let para = this.filters;
      console.log(para.status)
      this.listLoading = true;
      exportBugInfoToExcel(para).then((res) => {
        this.listLoading = false

        $('#exportFile').attr("src", "/api/ProjectPlugin/file/bug/downloadFile.do?filePath=" + res.filePath);
      }).catch( (err) => {
        console.log(err);
      });
    },

    //删除
    handleDel: function (index, row) {
      this.$confirm('确认删除该记录吗?', '提示', {
        type: 'warning'
      }).then(() => {
        this.listLoading = true;
        var para = { id: row.id };
        deleteBugInfoById(para).then((res) => {
          this.listLoading = false;
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.getBugInfos();
        });
      }).catch(() => {

      });
    },

    //显示新增界面
    handleAdd: function () {
      this.dataFormVisible = true;
      this.dataForm = {
        bugName: '',
        projectName: '',
        moduleName: '',
        level: 1,
        createTime: '',
        createPerson: '',
        personInCharge: '',
        desc:'',
        status: true
      }
    },

    //显示编辑界面
    handleEdit: function (index, row) {
      this.dataFormVisible = true;
      this.dataForm = Object.assign({}, row);
      this.dataForm.status = (this.dataForm.status == 1 ? true : false);
      // alert(this.levelOptions[row.level].label);
      // this.dataForm.level = row.level;
    },

    updateBugStatus(index, row){
      this.dataForm = Object.assign({}, row);
      var statusStr;
      if(this.dataForm.status == 1){
        this.dataForm.closeTime =utils.getNowFormatDate();
        this.dataForm.status = 0;
        statusStr = "关闭";
      } else if(this.dataForm.status == 0){
        this.dataForm.status = 1;
        this.dataForm.closeTime = '';
        statusStr = "打开";
      };
      this.$confirm('确认' + statusStr + '吗？', '提示', {}).then(() => {
        this.addLoading = true;
        let para = this.dataForm;
        saveOrUpdateBugInfo(para).then((res) => {
          this.addLoading = false;
          this.$message({
            message: '提交成功',
            type: 'success'
          });
          this.getBugInfos();
        }).catch(function (error) {
          console.log(error);
        });
      });
    },

    //新增
    saveOrUpdate: function () {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.addLoading = true;
            this.dataForm = Object.assign({}, this.dataForm);
            this.dataForm.status = (this.dataForm.status == true ? 1 : 0);
            if(this.dataForm.status == 1){
              this.dataForm.closeTime = '';
            } else if(this.dataForm.status == 0){
              this.dataForm.closeTime =utils.getNowFormatDate();
            };
            let para = this.dataForm;
            console.log(para);
            saveOrUpdateBugInfo(para).then((res) => {
              this.addLoading = false;
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              // if (this.$refs['dataForm'] !== undefined) {
              this.$refs['dataForm'].resetFields();
              // }
              this.dataFormVisible = false;
              this.getBugInfos();
            }).catch(function (error) {
              console.log(error);
            });
          });
        }
      });
    },
    selsChange: function (sels) {
      this.sels = sels;
    },
    //根据下拉列表提示
    querySearch(queryString, cb) {
      let bugNameList = this.bugNameList;
      let results = queryString ? bugNameList.filter(this.createFilter(queryString)) : bugNameList;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (name) => {
        return (name.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "CSICLab" },
        { "value": "OpenCSIC"},
        { "value": "resourcesManage"},
        { "value": "个人输出"},
      ];
    },
  },
  mounted() {
    this.getBugInfos();
    this.bugNameList = this.loadAll();
  }
}
