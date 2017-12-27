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
            <article class="u-article-excerpt" v-for="article in articleList">
              <a class="focus" href="#"><img src="http://www.daqianduan.com/wp-content/uploads/2017/08/git.jpg" class="thumb" alt="教你添加网站浏览器图标 favicon.ico_themebetter"></a>
              <h2>
                <span>[{{article.postType}}] </span>
                <router-link :to="{ name: 'PostDetail', params: { articleId: article.id }}">
                  {{ article.title }}
                </router-link>
              </h2>
              <div class="note">{{ article.title }}</div>
              <div class="meta">
                <time>{{ article.publicDate }}</time>
                <a class="meta-cat" href="#">WordPress使用教程</a>
                <span class="meta-cmt">评论(11)</span>
              </div>
            </article>
          </div>
      </div>
		</div>
    <footer-select></footer-select>
	</div>
</template>

<script src="./queryPage.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
