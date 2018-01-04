import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';
import utils from "../common/js/util.js"
import {getArticleListByPage, getArticleCategoryListByParam} from '../api/api';

export default {
  components: {
    'header-select': header,
    'footer-select': footer,
  },
  data () {
    return {
      queryData : {
        pageNum: 1,
        pageSize: 10,
        categoryName: '机器学习',
        title:'',
        tags:'',
        keywords:'',
        publicDate: '',
        isPublish: 1
      },
      pageTitle: "",
      articleList: [],
      total : 0,
    }
  },
  computed: {
  },
  methods: {
    handleSizeChange(val) {
      this.queryData.pageSize = val;
      this.handleCurrentChange(1);
      this.getArticleInfos();
    },
    handleCurrentChange(val) {
      this.queryData.pageNum = val;
      this.getArticleInfos();
    },
    getArticleInfos() {
      let cname = this.$route.params.categoryName;
      if(cname != null && cname !='')
      {
        if(cname === "ML")
        {
          this.queryData.categoryName = "机器学习";
        }
      }
      let para = this.queryData;
      console.log(para)
      getArticleListByPage(para).then((res) => {
        this.total = res.data.total;//res.data.total;
        this.articleList = res.data.list; //res.data.articleList;
        console.log(this.articleList)
      });
    },
    getPostType(postType) {
      if(postType == 0){
        return "原创";
      }else {
        return "转载";
      }
    },
    getFileName(path){
      var pos1 = path.lastIndexOf('/');
      var pos2 = path.lastIndexOf('\\');
      var pos  = Math.max(pos1, pos2)
      if( pos<0 ){
        return path.split(".")[0];
      }else{
        return path.substring(pos+1).split(".")[0];
      }
    },
    getDateFromStr(dataStr, pattern) {
      return utils.getDateFromStr(dataStr, pattern)
    },
  },
  mounted() {
    this.getArticleInfos();
  }
}
