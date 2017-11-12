<template>
	<div class="g-container">
     <header-select></header-select>
		<div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-page-sidebar">
          <div class="u-page-left">
            <h1>{{ $route.params.pageTitle }}</h1>
          </div>
          <div class="u-page-left" >
            this is a sidenav;
          </div>
          <div class="u-page-left">
            this is a sidenav;
          </div>
        </div>
      </div>
      <div class="g-page-container">
          <div class="u-page-title">
            <!--<h1>{{ $route.query.pageTitle }}</h1>-->
            <h1>{{ $route.params.pageTitle }}</h1>
          </div>
          <div class="u-page-content">
            <article class="u-article-excerpt u-excerpt-page">
              <a onclick="_hmt.push(['_trackEvent', 'kgc', 'click', 'home'])" class="focus" href="#" target="_blank">
                <img src="http://www.daqianduan.com/wp-content/uploads/2017/10/kgc2.jpg" class="thumb">
              </a>
              <header>
                <h2>
                  <a onclick="_hmt.push(['_trackEvent', 'kgc', 'click', 'home'])" class="cat" href="#" target="_blank">课工场
                  <i></i>
                </a>
                  <a onclick="_hmt.push(['_trackEvent', 'kgc', 'click', 'home'])" href="#/go/kgc02" target="_blank">腾讯大咖独家揭秘：月薪30k难吗？</a>
                </h2>
              </header>
              <p class="meta"><time><i class="fa fa-clock-o"></i>2017-10-21</time><span class="author"><i class="fa fa-user"></i>课工场</span></p>
              <p class="note">工作累，拿钱少？想转行，但是自己学历不高，又没有其他技能怎么办？难道自己一辈子就这样了......不，我要逆袭！敲敲代码，照样月月高薪，0基础也不怕，快来看腾讯前端大咖揭秘月薪30k的方法......</p>
            </article>
            <article class="u-article-excerpt u-excerpt-page">
              <a class="focus" href="#">
                <img src="http://www.daqianduan.com/wp-content/uploads/2017/09/https-220x150.jpg" alt="完美快速解决百度分享不支持HTTPS的问题-大前端" class="thumb">
              </a>
              <header>
                <h2>
                  <a class="cat" href="">技巧资源<i></i></a>
                  <a href="" title="完美快速解决百度分享不支持HTTPS的问题-大前端">完美快速解决百度分享不支持HTTPS的问题</a>
                </h2>
              </header>
              <p class="meta">
                <time><i class="fa fa-clock-o"></i>2017-09-21</time>
                <span class="author"><i class="fa fa-user"></i>浩子</span>
                <span class="pv"><i class="fa fa-eye"></i>阅读(3955)</span></p>
              <p class="note">百度分享不支持HTTPS这件事由来已久，我之前向百度分享提交过这个问题，无果！但近期themebetter主题用户咨询的比较多，我们就总结了解决方案。 第一步：下载百度分享必备文件 点此下载static.zip，将解压（解压密码：theme...</p>
            </article>
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
    'footer-select': footer,
  },
	data () {
		return {
      pageTitle: "机器学习"
		}
	},
	computed: {
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
