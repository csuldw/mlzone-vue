<template>
	<div class="g-container">
     <header-select></header-select>
		<div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-page-sidebar">
          <div class="u-page-left-search">
            <el-input v-model="queryData.keywords" placeholder="关键字" @keyup.enter.native="getArticleInfos"></el-input>
          </div>
          <div class="u-page-left-up" >
            <div class="notice-content">
              <div class="muted">
                <i class="fa fa-thumb-tack"></i>
                欢迎关注我的新浪微博：<a href="https://weibo.com/liudiwei210" target="_blank">@拾毅者</a>，有事留言即可。    	</div>
            </div>
          </div>
        </div>
      </div>
      <div class="g-page-container">
          <div class="u-page-title">
            <h1>{{ queryData.categoryName }}</h1>
          </div>
          <div class="u-page-content" >
            <div class="article-item" v-for="article in articleList">
              <article class="u-article-excerpt u-excerpt-page" >
                <router-link :to="{ name: 'PostDetail', params: { articleId: article.id, path: getFileName(article.filePath) }}" >
                  <a onclick="_hmt.push(['_trackEvent', 'kgc', 'click', 'home'])" class="focus" href="#" target="_blank">
                    <img src="http://www.daqianduan.com/wp-content/uploads/2017/10/kgc2.jpg" class="thumb">
                  </a>
                </router-link>
                <header>
                  <h2>
                    <router-link :to="{ name: 'PostDetail', params: { articleId: article.id, path: getFileName(article.filePath) }}" target="_blank">
                      [{{ getPostType(article.postType)}}]
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
                <p class="note">{{article.articleAbstract}}</p>
              </article>
            </div>
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

<script src="./mlpage.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="true">
  .u-page-left-up{
    min-height: 20px;
    margin: 5px;
    padding: 10px;
  }
  .u-page-left-up div.muted {
    border-radius: 3px;
    position: relative;
    min-height: 40px;
    background: #FFFFFF !important;
    border: 1px #f0f0f0 solid !important;
    padding: 8px;
    font-size: 1em;
  }
  .u-page-left-up div.muted i {
    color: #73BF00;
    font-style: normal;
    margin-right: 16px;
  }
  .pagination-meta{
    padding: 0 20px 50px 0;
    text-align: right;
  }

</style>
