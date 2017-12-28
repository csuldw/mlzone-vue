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
                <li class="active"><a href="#/links">友情链接</a></li>
                <li><a href="#/contact">联系站长</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="g-container-content">
        <div class="containter-right">
          <header class="containter-right-header">
            <span class="container-title">友情链接</span>
          </header>
          <article class="article-content">
            <p>展示本站所有友情站点，排列不分先后；</p>
            <p>如需友链，请先添加本站首页链接后再评论告知（小说站、下载站、采集站请勿扰，性格不符）。</p>
          </article>

          <div class="plinks">
            <div id="linkcat-2" class="linkcat">
              <div style="width:100%; left: 0; position: absolute;">
                <ul class="xoxo blogroll">
                  <li><a href="#" target="_blank"><img src="#">嗨酷哥</a></li>
                  <li><a href="#" target="_blank"><img src="#">百度程序媛</a></li>
                  <li><a href="#" target="_blank"><img src="#">pluskid</a></li>
                  <li><a href="#" target="_blank"><img src="#">csuldw</a></li>
                  <li><a href="#" target="_blank"><img src="#">拾毅者</a></li>
                </ul>
              </div>
            </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
