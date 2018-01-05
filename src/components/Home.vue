<template>
	<div class="g-container">
     <header-select></header-select>
    <!--<div style="height:100px;"></div>-->
    <!--<h1> {{msg}}</h1>-->
    <!--<h2><router-link to='/projectManagement'> {{linkName}} </router-link></h2>-->
		<div class="g-container-up">
      <el-carousel :interval="2000" type="card" height="360px">
        <el-carousel-item v-for="item in images" :key="item.value">
          <img :src="item.image" class="img-responsive">
        </el-carousel-item>
      </el-carousel>
		</div>
		<div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-content">
          <div class="u-article-recent" >
            <h1>最新发布</h1>
            <div class="article-item" v-for="article in articleList">
              <article class="u-article-excerpt">
                <router-link :to="{ name: 'PostDetail', params: { articleId: article.id, path: getFileName(article.filePath) }}" >
                  <span class="focus" ><img src="http://www.daqianduan.com/wp-content/uploads/2017/08/git.jpg" class="thumb" alt="教你添加网站浏览器图标 favicon.ico_themebetter"></span>
                </router-link>
                <h2>
                  <span>[{{ getPostType(article.postType)}}] </span>
                    <router-link :to="{ name: 'PostDetail', params: { articleId: article.id, path: getFileName(article.filePath) }}" >
                      {{ article.title }}
                    </router-link>
                </h2>
                <div class="note">{{ article.title }}</div>
                <div class="meta">
                  <time>{{ getDateFromStr(article.publicDate, "yyyy-MM-dd hh:mm") }}</time>
                  <a :href="combineQueryUrl('category', article.articleCategoryEntity.categoryName)" > {{article.articleCategoryEntity.categoryName}}</a>
                  <span class="meta-cmt">评论数({{article.commentCount}})</span>
                </div>
              </article>
            </div>
          </div>
          <div class="u-article-push">
            <h1>文章推荐</h1>
            <div class="article-item" v-for="article in articleList">
              <article class="u-article-excerpt">
                <router-link :to="{ name: 'PostDetail', params: { articleId: article.id, path: getFileName(article.filePath) }}" >
                  <span class="focus" ><img src="http://www.daqianduan.com/wp-content/uploads/2017/08/git.jpg" class="thumb" alt="教你添加网站浏览器图标 favicon.ico_themebetter"></span>
                </router-link>
                <h2>
                  <span>[{{ getPostType(article.postType)}}] </span>
                  <router-link :to="{ name: 'PostDetail', params: { articleId: article.id, path: getFileName(article.filePath) }}" >
                    {{ article.title }}
                  </router-link>
                </h2>
                <div class="note">
                  {{ article.articleAbstract }}
                </div>
                <div class="meta">
                  <time>{{ getDateFromStr(article.publicDate, "yyyy-MM-dd hh:mm") }}</time>
                  <a :href="combineQueryUrl('category', article.articleCategoryEntity.categoryName)" > {{article.articleCategoryEntity.categoryName}}</a>
                  <span class="meta-cmt">评论数({{article.commentCount}})</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div class="g-sidebar">
        <!--公告 -->
        <div class="u-widget u-widget-tops">
          <ul class="u-widget-nav">
            <li class="active">网站公告</li>
          </ul>
          <ul class="u-widget-navcontent">
            <li class="item item-01 active">
              <ul>
                <li><time>07-27</time><a target="_blank" href="#">官方声明：ML网站</a></li>
                <li><time>07-10</time><a target="_blank" href="#">重要声明：ML网站</a></li>
                <li><time>07-02</time><a target="_blank" href="#">MLzero工单服务系统上线 欢迎这里来问答</a></li>
                <li><time>06-11</time><a target="_blank" href="#">对这段时间的MLzero有个交代</a></li>
                <li><time>04-01</time><a target="_blank" href="#">MLzero</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <!--归档-->
        <div class="u-widget u-post-archive">
          <h3>归档</h3>
          <ul class="archive-content">
            <div class="archive-list">
              <li v-for="item in articleCountStat">
                <span class="archive-detail">
                  <a :href="combineQueryUrl('date', item.queryType)" >
                     {{ getDateFromStr(item.queryType, "yyyy年MM月") }}
                  </a>
                  （{{item.articleNumber}}）
                </span>
              </li>
            </div>
          </ul>
        </div>

        <!-- 开源项目 -->
        <div class="u-widget u-post-archive">
          <h3>我的开源项目 <a href="https://github.com/csuldw?tab=repositories" target="_blank"><span style="font-size: 1em;float: right;">更多 »</span></a></h3>
          <ul class="open-source-content">
            <li>
              <div>
                <h5 class="prog-title">
                  <a href="https://github.com/csuldw/MachineLearning/" target="_blank">机器学习相关算法</a>
                  <iframe src="https://ghbtns.com/github-btn.html?user=csuldw&amp;repo=MachineLearning&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px" class="ml10" style="vertical-align:-5px;"/>
                </h5>
                <p class="prog-detail">机器学习算法代码及个人总结整理，对于算法实现部分，在相应目录中都包含有源码和数据以及测试实例。</p>
              </div>
            </li>
            <li class="mt10">
              <div>
                <h5 class="prog-title">
                  <a href="https://github.com/csuldw/WSpider" target="_blank">WSpider</a>
                  <iframe src="https://ghbtns.com/github-btn.html?user=csuldw&amp;repo=WSpider&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px" class="ml10" style="vertical-align:-5px;"/>
                </h5>
                <p class="prog-detail">一个用于爬取新浪微博的爬虫项目.</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- 标签云 -->
        <div class="u-widget u-widget_ui_tags"><h3>标签云</h3>
          <div class="items">
            <a href="#">前端技巧 (61)</a>
            <a href="#">CSS (53)</a>
            <a href="#">JavaScript (50)</a>
            <a href="#">用户体验 (46)</a>
            <a href="h#">设计思路 (43)</a>
            <a href="/tag/html5">HTML5 (40)</a>
            <a href="">SEO (40)</a>
            <a href="">网页设计 (40)</a>
            <a href="">CSS3 (37)</a>
            <a href="://../tag/professional">职业 (34)</a>
            <a href="://../tag/front-resources">前端资源 (33)</a>
            <a href="://..com/tag/daqianduan">大前端 (31)</a>
            <a href="://..com/tag/company">企业公司 (30)</a>
          </div>
        </div>
      </div>
		</div>
    <footer-select></footer-select>
	</div>
</template>

<script src="./home.js">
</script>

<style scoped>
</style>
