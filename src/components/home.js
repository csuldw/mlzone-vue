import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';
import utils from "../common/js/util.js"
import {getArticleListByPage, getArticleCategoryListByParam, getArticleStatInfoByParam} from '../api/api';

export default {

  components: {
    'header-select': header,
    'footer-select': footer
  },
  data () {
    return {
      currentDate: new Date(),
      numSize: 4,
      subTitle: "人物简介",
      images: [
        {
          image:require("../assets/images/p1.jpg"),
        },
        {
          image:require("../assets/images/p2.jpg"),
        },
        {
          image:require("../assets/images/p3.jpg"),
        },
        {
          image:require("../assets/images/p4.jpg"),
        },
        {
          image:require("../assets/images/p5.jpg"),
        }
      ],
      userlist:[],
      filters : {
        pageNum: 1,
        pageSize: 4,
        isPublish: 1
      },
      queryParam: {
        queryType: 'month'
      },
      pageTitle: "机器学习",
      articleList: [],
      articleCountStat: [],
      total : 0,
    }
  },
  computed: {
    ilength:function(){
      return this.userlist.length
    },
  },
  methods: {
    getArticleInfos() {
      let para = this.filters;
      console.log(para.pageNum)
      getArticleListByPage(para).then((res) => {
        this.total = res.data.total;//res.data.total;
        this.articleList = res.data.list; //res.data.articleList;
        console.log(this.articleList)
      });
    },

    getArticleStatInfo() {
      let para = this.queryParam;
      getArticleStatInfoByParam(para).then((res) => {
        console.log(res)
        let result = res.result;  //res.data.total;
        this.articleCountStat = res.articleCountStat; //res.data.articleList;
        console.log(this.articleCountStat)
      });
    },
    getPostType(postType) {
      if(postType == 0){
        return "原创";
      }else {
        return "转载";
      }
    },
    getDateFromStr(dataStr, pattern) {
      return utils.getDateFromStr(dataStr, pattern)
    },
  },
  mounted:  function () {
    this.getArticleInfos();
    this.getArticleStatInfo();
  }
}
