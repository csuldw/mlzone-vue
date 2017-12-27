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

  },
  mounted() {
  }
}
