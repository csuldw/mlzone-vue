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
          <div class="u-archive-title">
            <h1>文章列表</h1>
          </div>
          <div class="u-archive-content" >
            <div class="u-archive-body">
              <article class="u-archive-main" v-for="article in articleList">
                <router-link :to="{ name: 'PostDetail', params: { articleId: article.id, path: getFileName(article.filePath) }}" target="_blank">
                  <header class="post-header">
                    <div class="post-meta">{{getDateFromStr(article.publicDate)}}</div>
                    <span class="post-title"><!--[{{article.articleCategoryEntity.categoryName}}] -->{{ article.title }}</span>
                  </header>
                </router-link>
              </article>
            </div>
          </div>
          <div class="archive-pagination-meta">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-sizes="[20, 50, 100, 200, 300]"
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

<script src="./archives.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .u-archive-body{
    position: relative;
    border-left: 1px solid #ececec;
  }
  .u-archive-main{
    padding: 15px 10px 15px 0;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-property: border;
    position: relative;
  }
  .archive-pagination-meta{
    padding: 0 20px 50px 0;
    margin-top: 50px;
  }
  .u-archive-main::before {
    content: " ";
    left: 0;
    top: 26px;
    position: absolute;
    width: 6px;
    height: 6px;
    margin-left: -4px;
    background: #bbb;
    border-radius: 50%;
    border: 1px solid #fff;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-property: background;
  }
  .u-archive-main:hover::before{
    background: #222;
    width: 7px;
    height: 7px;
  }
  .u-archive-main a:hover{
    color: #666 !important;
  }
  .post-header {
    padding-left: 10px;
    position: relative;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-property: border;
    border-bottom: 1px dashed #ccc;
  }
  .post-header:hover {
    border-bottom-color: #666;
  }
  .post-header .post-meta {
    position: absolute;
    font-size: 12px;
    left: 20px;
    top: 5px;
  }
  .post-header .post-title {
    margin-left: 120px;
    font-size: 16px;
    font-weight: normal;
    font-family: Lato, "PingFang SC", "Microsoft YaHei", sans-serif;
    line-height: inherit;
  }
</style>
