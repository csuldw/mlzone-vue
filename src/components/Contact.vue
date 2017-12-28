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
          <article class="article-content">
            <p>作者：刘帝伟. </p>
            <p>中南大学硕士毕业，关注机器学习、数据挖掘和人工智能领域.。</p>
            <p>Email: csu.ldw@csu.edu.cn</p>
          </article>
          <p>&nbsp;</p>
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
</style>
