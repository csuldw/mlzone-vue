import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';
import {getArticleListByPage, getArticleCategoryListByParam} from '../api/api';

export default {

  components: {
    'header-select': header,
    'footer-select': footer
  },
  data () {
    return {
      msg: '一切从这里开始...',
      linkName: 'Mini项目管理工具入口',
      currentDate: new Date(),
      numSize: 5,
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
        pageSize: 10
      },
      pageTitle: "机器学习",
      articleList: [],
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
  },
  mounted:  function () {
    this.getArticleInfos();
  }
}
