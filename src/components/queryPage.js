import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';
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
        categoryName: '',
        title:'',
        tags:'',
        keywords:'',
        publicDate: ''
      },
      pageTitle: "",
      articleList: [],
      total : 0,
    }
  },
  computed: {
  },
  methods: {
    getArticleInfos() {
      let publicDate = this.$route.params.publicDate;
      if(publicDate != null && publicDate !='')
      {
          this.queryData.publicDate = publicDate;
      }
      let para = this.queryData;
      console.log(para)
      getArticleListByPage(para).then((res) => {
        this.total = res.data.total;//res.data.total;
        this.articleList = res.data.list; //res.data.articleList;
        console.log(this.articleList)
      });
    },
  },
  mounted() {
    this.getArticleInfos();
  }
}
