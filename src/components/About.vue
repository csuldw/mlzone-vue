<template>
  <div class="g-container">
    <header-select></header-select>
    <div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-container-sidebar">
          <div class="weblog-author-widget">
            <a href="https://www.acmethemes.com/themes/weblog" target="_blank">
              <img height="150px" src="https://avatars2.githubusercontent.com/u/12168831?s=400&u=386a38a3e437e0d26e4317ff24c9cb471e357d79&v=4">
            </a>
          </div>
          <div class="weblog-author-widget">
            <div>作者：刘帝伟. </div>
            <div>中南大学硕士毕业，关注机器学习、数据挖掘和人工智能领域.。</div>
            <div>Email: csu.ldw@csu.edu.cn</div>
            <div>新浪微博：@拾毅者</div>
          </div>
        </div>
      </div>
      <div class="g-container-content">
        <div class="containter-right">
          <div class="article-content">
            <p>MLZero是一个专门发布与机器学习、后端相关资料的网站。</p><p></p>
            <h2>Q1：MLZero会涉及哪些领域呢？</h2>
            <p>答：主要是机器学习，其次还有大数据、数据挖掘、人工智能、云计算等领域的相关内容。</p>
          </div>
          <div class="u-container-content">
          </div>
        </div>
      </div>
      <div class="g-post-plugin-comment">
        <comment-select :articleId="-1" :articleUserId="712"></comment-select>
        <!--<comment-select :to="{articleId:'articleInfo.id',userId:'articleInfo.userEntity.id'}"></comment-select>-->
      </div>
    </div>
    <footer-select></footer-select>
  </div>
</template>

<script src="./about.js">
</script>

<style scoped>
  .g-container-comment{
    float: right;
    width: 74%;
  }
</style>
