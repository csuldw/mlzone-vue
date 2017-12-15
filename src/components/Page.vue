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
          <div class="u-page-content" >
            <article class="u-article-excerpt u-excerpt-page" v-for="article in articleList">
              <a onclick="_hmt.push(['_trackEvent', 'kgc', 'click', 'home'])" class="focus" href="#" target="_blank">
                <img src="http://www.daqianduan.com/wp-content/uploads/2017/10/kgc2.jpg" class="thumb">
              </a>
              <header>
                <h2>
                  <a onclick="_hmt.push(['_trackEvent', 'kgc', 'click', 'home'])" class="cat" href="#" target="_blank">
                  <i></i>
                </a>
                  <a onclick="_hmt.push(['_trackEvent', 'kgc', 'click', 'home'])" href="#/go/kgc02" target="_blank">{{article.title}}</a>
                </h2>
              </header>
              <p class="meta">
                <time><i class="fa fa-clock-o"></i>{{article.publicDate}}</time>
                <span class="author"><i class="fa fa-user"></i>{{ article.author }}</span>
              </p>
              <p class="note">工作累，拿钱少？想转行，但是自己学历不高，又没有其他技能怎么办？难道自己一辈子就这样了......不，我要逆袭！敲敲代码，照样月月高薪，0基础也不怕，快来看腾讯前端大咖揭秘月薪30k的方法......</p>
            </article>
          </div>
      </div>
		</div>
    <footer-select></footer-select>
	</div>
</template>

<script src="./page.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
