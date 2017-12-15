import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';
import comment from './base/comment.vue';

export default {
  components: {
    'header-select': header,
    'footer-select': footer,
    'comment-select':comment
  },
  data () {
    return {
      filters: {
        articleId : 0,
        toUserId: 1,
        pageNum : 1,
        pageSize : 0
      },
    }
  },
  computed: {
  }
}
