<template>
	<div class="g-container">
     <header-select></header-select>
		<div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-page-sidebar">
          <div class="u-page-left-search">
            <el-input v-model="queryData.keywords"  placeholder="关键字" @keyup.enter.native="getArticleInfos"></el-input>
          </div>
          <div class="u-page-left">
          </div>
        </div>
      </div>
      <div class="g-page-container">
          <div class="u-page-title">
            <h1> {{ pageTitle }} </h1>
          </div>
        <div class="u-page-content">
          <article class="u-article-excerpt" v-for="article in articleList">
            <router-link :to="{ name: 'PostDetail', params: { articleId: article.id, path: getFileName(article.filePath) }}" >
              <a onclick="_hmt.push(['_trackEvent', 'kgc', 'click', 'home'])" class="focus" href="#" target="_blank">
                <img src="http://www.daqianduan.com/wp-content/uploads/2017/10/kgc2.jpg" class="thumb">
              </a>
            </router-link>
            <header>
              <h2>
                [{{ getPostType(article.postType)}}]
                <router-link :to="{ name: 'PostDetail', params: { articleId: article.id, path: getFileName(article.filePath) }}" >
                  {{ article.title }}
                </router-link>
              </h2>
            </header>
            <p class="meta">
              <time><i class="fa fa-clock-o"></i>
                {{ getDateFromStr(article.publicDate, "yyyy-MM-dd hh:mm") }}
              </time>
              <span class="author"><i class="fa fa-user"></i>{{ article.author }}</span>
            </p>
            <p class="note">工作累，拿钱少？想转行，但是自己学历不高，又没有其他技能怎么办？难道自己一辈子就这样了......不，我要逆袭！敲敲代码，照样月月高薪，0基础也不怕，快来看腾讯前端大咖揭秘月薪30k的方法......</p>
          </article>
        </div>
        <!--工具条-->
        <div class="pagination-meta">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[5, 10, 20, 30, 40]"
            :page-size="queryData.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
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
