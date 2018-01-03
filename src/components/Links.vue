<template>
	<div class="g-container">
     <header-select></header-select>
    <div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-container-sidebar">
          <div class="pageside">
            <div class="pagemenus">
              <ul class="pagemenu">
                <li class="active"><a href="#/links">友情链接</a></li>
                <!--<li><a href="#/job-desc">免费发布招聘</a></li>-->
                <li><a href="#/copyright">免责声明</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="g-container-content">
        <div class="containter-right">
          <!--<header class="containter-right-header">
            <span class="container-title">友情链接</span>
          </header>-->
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
      <div class="g-post-plugin-comment">
        <comment-select :articleId="0" :articleUserId="articleInfo.userId"></comment-select>
        <!--<comment-select :to="{articleId:'articleInfo.id',userId:'articleInfo.userEntity.id'}"></comment-select>-->
      </div>
    </div>

    <footer-select></footer-select>
	</div>
</template>

<script>
import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';
import comment from './base/comment.vue';

export default {
  components: {
    'header-select': header,
    'footer-select': footer,
    'comment-select': comment
  },
	data () {
		return {
      articleInfo: {
        "id": this.$route.params.articleId,
        "userId": '712'
      }
		}
	},
	computed: {
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-container-comment{
    float: right;
  }
</style>
