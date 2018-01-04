import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';
import {getWebSourceListByParam} from '../api/api';

export default {
  components: {
    'header-select': header,
    'footer-select': footer,
  },
  data () {
    return {
      queryData : {
        pageNum: 1,
        pageSize: 9,
        name:'',
        sourceType: 'openSource',
        keywords:'',
      },
      pageTitle: "",
      sourceList: [],
      total : 0,
      showPagination: false
    }
  },
  computed: {
  },

  methods: {
    handleSizeChange(val) {
      this.queryData.pageSize = val;
      this.handleCurrentChange(1);
      this.getWebSourceList();
    },
    handleCurrentChange(val) {
      this.queryData.pageNum = val;
      this.getWebSourceList();
    },
    getWebSourceList() {
      let para = this.queryData;
      getWebSourceListByParam(para).then((res) => {
        this.total = res.data.total;//res.data.total;
        if(this.total > 0) {
          this.showPagination = true
        }
        this.sourceList = res.data.list; //res.data.articleList;
        console.log(this.sourceList)
      });
    },
  },
  mounted() {
    this.getWebSourceList();
  }
}
