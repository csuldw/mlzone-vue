import '../../assets/css/grid.styl';
import '../../assets/css/header.styl'; //引入外部css
import '../../assets/css/comment.styl'
import ElCol from "element-ui/packages/col/src/col";
import { saveOrUpdateComment, getCommentListByParam } from "../../api/api"

export default {
  components: {ElCol},
  name: 'footer',
  props: [
    'filter'
  ],
  data() {
    return {
      filters: {
        pageNum : 1,
        pageSize : 0
      },
      commentLoading : false,
      msg: 'footer part',
      loginFormVisible: false,
      loginStatus : false,
      loginLoading: false,
      dataForm:{
        username: '',
        password: ''
      },
      total: 0,
      commentForm :{
        content: '',
        fromUserId:  1,
        toUserId: 1,
        articleId: 0,
        parentCommentId: 0
      },
      commentFormRules: {
        content: [
          { required: true,message: '评论内容不能为空',trigger: 'blur' },
        ],
      },
      dataFormRules: {
        username: [
          { required: true,message: '请输入用户名',trigger: 'blur' },
        ],
        password: [
          {required: true, message: '请输入密码',trigger: 'blur'},
        ]
      },
      commentList : []
    }
  },
  methods: {
    loginSubmit: function () {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            let para = Object.assign({}, this.dataForm);
            this.$message({
              message: '提交成功',
              type: 'success'
            });
            this.$refs['dataForm'].resetFields();
            this.loginFormVisible = false
            this.loginStatus = true
          });
        }
      });
    },
    //显示新增界面
    handleLogin: function () {
      if(this.loginStatus === false){
        this.loginFormVisible = true;
      }
    },
    saveComment: function () {
      this.$refs.commentForm.validate((valid) => {
        if (valid) {
          this.commentForm = Object.assign({}, this.commentForm);
          let para = this.commentForm;
          console.log(para)
          saveOrUpdateComment(para).then((res) => {
            this.$message({
              message: '评论成功',
              type: 'success'
            });
            this.$refs['commentForm'].resetFields();
            this.getCommentList();
          }).catch(function (error) {
            console.log(error);
          });
        }
      });
    },

    getCommentList : function () {
      let para = this.filter;
      this.commentLoading = true
      getCommentListByParam(para).then((res) => {
        this.total = res.data.total;//res.data.total;
        this.commentList = res.data.list; //res.data.articleList;
        this.commentLoading = false
      });
    },
    showReply : function (x) {
      $("[id^='index']").each(function(){
        $(this).css("display","none");
      });
      $("#" + x).css("display","block");
    }
  },
  mounted () {
    this.getCommentList()
  }
}
