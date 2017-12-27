<template>
	<div class="g-container">
     <header-select></header-select>
		<div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-page-sidebar">
          <div class="u-page-left-search">
            <el-input v-model="input" placeholder="关键字" @keyup.enter.native=""></el-input>
          </div>
          <div class="u-page-left">
          </div>
        </div>
      </div>
      <div class="g-page-container">
          <div class="u-page-title">
            <!--<h1>{{ $route.query.pageTitle }}</h1>-->
            <h1>文章列表</h1>
          </div>
          <div class="u-page-content" >
            <article class="u-archive-main" v-for="article in articleList">
                {{ article.publicDate }}
                  <router-link :to="{ name: 'PostDetail', params: { articleId: article.id }}">
                    {{ article.title }}
                  </router-link>

            </article>
          </div>
      </div>
		</div>
    <footer-select></footer-select>
	</div>
</template>

<script src="./archives.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .u-archive-main{
    padding: 8px 10px;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-property: border;
    border-bottom: 1px dashed #ccc;
  }
</style>
