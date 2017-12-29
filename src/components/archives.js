import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';
import {getArticleListByPage, getArticleCategoryListByParam} from '../api/api';
import utils from "../common/js/util.js"

export default {
  components: {
    'header-select': header,
    'footer-select': footer,
  },
  data () {
    return {
      queryData : {
        pageNum: 1,
        pageSize: 5,
        categoryName: '',
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
    getDateFromStr(dataStr) {
      return utils.getDateFromStr(dataStr, "yyyy-MM-dd hh:mm")
    },
  },
  mounted() {
    this.getArticleInfos();
  }
}
