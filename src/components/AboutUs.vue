<template>
  <div class="g-container">
    <header-select></header-select>
    <div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-container-sidebar">
          <div class="pageside">
            <div class="pagemenus">
              <ul class="pagemenu">
                <li class="active"><a href="#/about">关于本站</a></li>
                <li><a href="#/links">友情链接</a></li>
                <li><a href="#/contact">联系站长</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div class="g-container-content">
        <div class="containter-right">
          <header class="containter-right-header">
            <span class="container-title">关于MLZone</span>
          </header>
          <article class="article-content">
            <p>MLZone是一个专门收集机器学习相关资料的网站。</p>
            <p>&nbsp;</p>
            <h2>问：MLZone会涉及哪些领域呢？</h2>
            <p>答：主要是机器学习，其次还有大数据、数据挖掘、人工智能、云计算等领域的相关内容。</p>
          </article>
          <p>&nbsp;</p>
        </div>
      </div>
      <!--<div class="g-post-plugin-comment">
        <comment-select :filter="{pageNum: 1, pageSize:0, articleId: 0, parentCommentId: 0 }"></comment-select>
      </div>-->
    </div>
    <footer-select></footer-select>
  </div>
</template>

<script src="./about.js">
</script>

<style scoped>
</style>
