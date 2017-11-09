import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';
import comment from './base/comment.vue';
import marked from 'marked'
import axios from 'axios'
import '../assets/css/marked.styl'; //引入外部css
import '../assets/css/highlight/highlight.styl'; //引入外部css
import '../assets/js/back-to-top.js'; //引入外部css

$(function() {
  $(".anchor-link").click(function () {
    $("html,body").animate({scrollTop: $($(this).attr("link")).offset().top - 30}, 900);
  });
  $("#article-toc-title").click(function(){
    let text = $(this).html();
    if(text == ("目录[-]")){
      $(this).html("目录[+]");
      $(this).attr({"title":"展开"});
    }else{
      $(this).html("目录[-]");
      $(this).attr({"title":"收起"});
    }
    $("#article-toc-content").toggle();
  });
})

$(function () {
  //绑定滚动条事件
  $(window).bind("scroll", function () {
    var sTop = $(window).scrollTop();
    var sTop = parseInt(sTop);
    if (sTop >= 100 ) {
      let obj = $(".u-post-right")
      let sideWidth = obj.css("width");
      obj.css({"position": "fixed", "top": "0px", "width": sideWidth});
    }else {
      let obj = $(".u-post-right")
      obj.css("width", "");
      obj.css({"position": "relative", "top": "0px", "min-width": "20%"});
    }
  });
})

export default {
  components: {
    'header-select': header,
    'footer-select': footer,
    'comment-select':comment
  },
  data () {
    return {
      input: 'abcd \n ```fdsafs```',
      tocContent: "a"
    }
  },
  mounted() {
    this.getFileContent();
//    this.compileMarked ();
    this.markdown();
  },
  computed: {
    compiledMarkdown: function () {
      let content = "";
      var FirstH1BookName = false;
      let obj = $("#post-content").append(this.input)
      let h1s = obj.find("h1");
      let h2s = obj.find("h2");
      let h3s = obj.find("h3");
      let h4s = obj.find("h4");
      let h5s = obj.find("h5");
      let h6s = obj.find("h6");
      var headCounts = [h1s.length, h2s.length, h3s.length, h4s.length, h5s.length, h6s.length];
      var vH1Tag = null;
      var vH2Tag = null;
      var vH3Tag = null;
      for(var i = 0; i < headCounts.length; i++) {
        if(headCounts[i] > 0) {
          if(vH1Tag == null) {
            vH1Tag = 'h' + (i + 1);
          } else if(vH2Tag == null) {
            vH2Tag = 'h' + (i + 1);
          } else {
            vH3Tag = 'h' + (i + 1);
          }
        }
      }
      if(vH1Tag == null) {
        return;
      }
      var vH1Index = 0;
      var vH2Index = 0;
      var vH3Index = 0;
      obj.find("h1,h2,h3,h4,h5,h6").each(function(i,item){
        var id = '';
        var name = '';
        var tag = $(item).get(0).tagName.toLowerCase();
        var className = '';
        if(tag == vH1Tag) {
          id = name = ++vH1Index;
          name = id + '.';
          vH2Index = 0;
          className = 'item_h1';
        } else if(tag == vH2Tag) {
          id = vH1Index + '_' + ++vH2Index;
          name = vH1Index + '.' + vH2Index + '.';
          vH3Index = 0;
          className = 'item_h2';
        } else if(tag == vH3Tag) {
          id = vH1Index + '_' + +vH2Index + '_' + ++vH3Index;
          name = vH1Index + '.' + vH2Index + '.' + vH3Index + '.';
          className = 'item_h3';
        }
        $(item).attr("id", "wow" + id);
        $(item).addClass("wow_head");
//        let tag = $(item).get(0).localName;
//        let titleName = $(this).text();
//        $(item).attr("id","item"+i);
        if(FirstH1BookName) {
          content += '<li><a class="nav_item anchor-link" onclick="return false;" href="#" link="#wow' + id + '">' + $(this).text() + '</a></li>';
          FirstH1BookName = false;
          vH1Index = 0;
        } else {
          content += '<li><a class="nav_item ' + className + ' anchor-link" onclick="return false;" href="#" link="#wow' + id + '">' + name + $(this).text() + '</a></li>';
        }
//        content += '<li><a onclick="return false;" class="new'+ tag +' anchor-link"  href="#"  link="#item'+i+'">'+(i+1) +" · "+ titleName +'</a></li>';
      });
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]); //每次加载数据之后就加载一次mathjax
      $("#article-toc-content").append(content)
      return ""
    },
  },
  methods: {
    markdown() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
          return require('highlight.js').highlightAuto(code).value;
        }
      });
    },
    getFileContent: function () {
      axios.get('/static/data/2016-08-28-adaboost-algorithm-theory.md').then((res) => {
        var result = res.data
        this.input = marked(result)
      })
    },
  }
}
