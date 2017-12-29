<template>
	<div class="g-container">
     <header-select></header-select>
    <div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-container-sidebar">
          <div class="pageside">
            <div class="pagemenus">
              <ul class="pagemenu">
                <li><a href="#/about">关于本站</a></li>
                <li><a href="#/links">友情链接</a></li>
                <li class="active"><a href="#/contact">联系站长</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="g-container-content">
        <div class="containter-right">
          <header class="containter-right-header">
            <span class="container-title">关于站长</span>
          </header>
          <div class="containter-right-top">
            <div class="weblog-author-widget">
              <a href="https://www.acmethemes.com/themes/weblog" target="_blank">
                <img height="150px" src="https://avatars2.githubusercontent.com/u/12168831?s=400&u=386a38a3e437e0d26e4317ff24c9cb471e357d79&v=4">
              </a>
            </div>
            <div class="weblog-author-content">
              <div>站长：刘帝伟. </div>
              <div>中南大学硕士毕业，关注机器学习、数据挖掘和人工智能领域.。</div>
              <div>Email: csu.ldw@csu.edu.cn</div>
              <div>新浪微博：@拾毅者</div>
            </div>
          </div>
          <div class="weblog-author-notice">
          </div>
        </div>
      </div>
    </div>
    <footer-select></footer-select>
	</div>
</template>

<script>
import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';

export default {
  components: {
    'header-select': header,
    'footer-select': footer
  },
	data () {
		return {
		}
	},
	computed: {
	},
}
</script>
<style scoped>
  .containter-right-top{
    width: 100%;
    position: relative;
    min-height: 200px;
  }
  .weblog-author-widget {
    text-align: left;
    padding: 20px 0 20px 0;
    float: left;
    width: 200px;
  }
  .weblog-author-widget img {
    border-radius: 50%;
    margin: 0 auto;
  }
  .weblog-author-content{
    width: 500px;
    padding: 40px 0 20px 0;
    float: left;
  }
  .weblog-author-notice{
    width:1000px;
    position: relative;
  }
</style>
