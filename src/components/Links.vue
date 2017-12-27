<template>
	<div class="g-container">
     <header-select></header-select>
    <div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-links-sidebar">
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
      <div class="g-links-container">
        <div class="content">
          <header class="article-header">
            <h1 class="article-title"><a href="#">友情链接</a></h1>
          </header>
          <article class="article-content">
            <p>展示本站所有友情站点，排列不分先后；如需友链，请先添加本站首页链接后再评论告知（小说站、下载站、采集站请勿扰，性格不符）。</p>
          </article>

          <div class="plinks">
            <div id="linkcat-2" class="linkcat">
              <h2>友情链接</h2>
              <div style="width:100%; left: 0; position: absolute;">
                <ul class="xoxo blogroll">
                  <li><a href="#" target="_blank"><img src="#">嗨酷哥</a></li>
                  <li><a href="#" target="_blank"><img src="#">我的那些事儿</a></li>
                  <li><a href="#" target="_blank"><img src="#">伯乐网</a></li>
                  <li><a href="#" target="_blank"><img src="#">王振拯</a></li>
                  <li><a href="#" target="_blank"><img src="#">WEB前端开发网</a></li>
                  <li><a href="#" target="_blank"><img src="#">勇周博客</a></li>
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
  .g-links-sidebar {
    position: relative;
    min-height: 400px;
    margin-right: 75%;
    border: 1px solid #eaeaea;
    margin-bottom: 15px;
    BACKGROUND-COLOR: #FFF;
  }
  .g-links-container {
    float: left;
    border: 1px solid #eaeaea;
    margin-left: -74%;
    width: 74%;
    position: relative;
    min-height: 600px;
    margin-bottom: 50px;
    BACKGROUND-COLOR: #FFF;
  }
  .pageside {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .pagemenu {
    list-style: none;
    margin: 0 0 15px;
    padding: 0;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
  }
  .pagemenu li {
    margin-bottom: -1px;
  }
  .pagemenu li a {
    display: block;
    padding: 12px 20px;
    font-size: 16px;
    color: #999;
    border: 1px solid #eee;
    background-color: #fff;
  }
  .pagemenu li.active a {
    color: #fff;
    background-color: #eef1f6;
    border: none;
  }
  .content {
    position: relative;
    min-height: 500px;
    margin-bottom: 15px;
    padding: 0 20px 0 20px;
  }
  .article-header {
    margin-bottom: 20px;
    //border-bottom: 1px solid #eee;
    text-align: center;
  }
  .article-title {
    margin-top: 0;
    font-size: 26px;
    line-height: 36px;
    text-align: center;
  }
  .article-content {
    font-size: 15px;
    line-height: 25px;
    word-wrap: break-word;
  }
  .article-content p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }
  p {
    margin: 0 0 10px;
  }
  .plinks {
    overflow: hidden;
  }
  .plinks .linkcat {
    margin-bottom: 50px;
    list-style: none;
  }
  .plinks h2 {
    border-bottom: solid 1px #eee;
    font-size: 20px;
    padding-bottom: 5px;
  }
  .plinks ul li {
    width: 20%;
    float: left;
    list-style: none;
  }
  .plinks ul li a {
    display: block;
    padding: 0 10px;
    height: 38px;
    line-height: 38px;
    overflow: hidden;
    border: 1px solid #eaeaea;
    margin: 10px 10px 0 0;
  }
  .plinks ul li img {
    float: left;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    margin-top: 10px;
  }
</style>
