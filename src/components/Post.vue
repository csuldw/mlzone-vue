<template>
	<div class="g-container">
     <header-select></header-select>
		<div class="g-container-down">
      <div class="g-container-wrap" id="container-wrap">
        <div class="g-post-container">
          <div class="u-post-main">
            <header class="u-post-header">
              <h1 class="u-post-title" itemprop="name headline">
                  {{articleInfo.title}}
              </h1>
              <div class="u-post-meta">
                <span class="u-post-time">
                  发表于
                  <time itemprop="dateCreated" datetime="2017-09-22T23:10:00+08:00" content="2017-09-22">
                    {{getDateFromStr(articleInfo.publicDate)}}
                  </time>
                </span>
                <span class="u-post-category">
                  &nbsp; | &nbsp; 类别:
                  <span itemprop="about" itemscope="" itemtype="https://schema.org/Thing">
                    <a href="/categories/杂谈/" itemprop="url" rel="index">
                      <span itemprop="name">
                        <a :href="combineQueryUrl('category', articleInfo.articleCategoryEntity.categoryName)" > {{articleInfo.articleCategoryEntity.categoryName}}</a>
                      </span>
                    </a>
                  </span>
                </span>
                <span class="u-post-comments-count">
                  &nbsp; | &nbsp;
                  <!--<a href="/2017/09/22/2017-09-22-hello-september/#comments" itemprop="discussionUrl">-->
                    <span class="u-post-comments-count u-disqus-comment-count" data-disqus-identifier="2017/09/22/2017-09-22-hello-september/" itemprop="commentsCount">
                      评论数：{{articleInfo.commentCount}}
                    </span>
                  <!--</a>-->
                </span>
                <span id="/2017/09/22/2017-09-22-hello-september/" class="u-leancloud_visitors" data-flag-title="Hello，九月">
                  &nbsp; | &nbsp;
                  阅读量
                  : {{articleInfo.viewCount}}
                </span>
              </div>
            </header>
            <div id="post-content" class="u-post-content"></div>
            <div v-html="compiledMarkdown" style="display: none"></div>
            <div class="artical-copyright">版权声明：原创作品，如需转载，请注明出处。</div>
          </div>
        </div>
        <div class="g-post-plugin-comment">
          <comment-select :articleId="articleInfo.id" :articleUserId="articleInfo.userId"></comment-select>
          <!--<comment-select :to="{articleId:'articleInfo.id',userId:'articleInfo.userEntity.id'}"></comment-select>-->
        </div>
      </div>
      <div class="g-post-sidebar" id="post-sidebar">
        <div class="u-post-right" id="article-toc" >
            <p><b id="article-toc-title" title="收起" style="cursor:pointer;">目录[-]</b></p>
            <div id="article-toc-content"> </div>
          </div>
        <!--<p id="back-to-top">-->
          <!--<a href="#" onclick="return false">-->
            <!--<span><i class="fa fa-chevron-up" aria-hidden="true"></i>-->
            <!--</span>-->
          <!--</a>-->
        <!--</p>-->
      </div>
    </div>
    <footer-select></footer-select>
	</div>
</template>

<script src="./post.js">


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-container-comment{
    float: left;
  }
</style>
