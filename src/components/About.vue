<template>
	<div class="g-container">
     <header-select></header-select>
    <div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-links-sidebar">
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
      <div class="g-links-container">
        <div class="content">
          <header class="article-header">
            <h1 class="article-title"><a href="#">关于MLZone</a></h1>
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
      <div class="g-post-plugin-comment">
        <comment-select :filter="{pageNum: 1, pageSize:0, articleId: 0, parentCommentId: 0 }"></comment-select>
      </div>
    </div>
      <footer-select></footer-select>
	</div>
</template>

<script src="./about.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-container-comment{
    float: right;
    width: 75%;
  }
  .g-links-sidebar {
    position: relative;
    min-height: 400px;
    margin-right: 75%;
    border: 1px solid #eaeaea;
    margin-bottom: 15px;
    BACKGROUND-COLOR: #FFF;
  }
  .g-links-container {
    float: left;
    border: 1px solid #eaeaea;
    margin-left: -74%;
    width: 74%;
    position: relative;
    min-height: 600px;
    margin-bottom: 50px;
    BACKGROUND-COLOR: #FFF;
  }
  .pageside {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .pagemenu {
    list-style: none;
    margin: 0 0 15px;
    padding: 0;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
  }
  .pagemenu li {
    margin-bottom: -1px;
  }
  .pagemenu li a {
    display: block;
    padding: 12px 20px;
    font-size: 16px;
    color: #999;
    border: 1px solid #eee;
    background-color: #fff;
  }
  .pagemenu li.active a {
    color: #fff;
    background-color: #eef1f6;
    border: none;
  }
  .content {
    position: relative;
    min-height: 500px;
    margin-bottom: 15px;
    padding: 20px;
  }
  .article-header {
    margin-bottom: 20px;
    padding: 25px 0;
    border-bottom: 1px solid #eee;
    text-align: center;
  }
  .article-content {
    font-size: 15px;
    line-height: 25px;
    word-wrap: break-word;
  }
  .article-content p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }
  p {
    margin: 0 0 10px;
  }
  .article-content h2 {
    font-size: 18px;
  }
  .article-content h1, .article-content h2 {
    font-weight: bold;
    margin: 20px 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
</style>
About.vue
