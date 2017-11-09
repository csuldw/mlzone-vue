<template>
  <div class="g-container-comment">
    <div id="comment-list" class="u-comment-list">
      <div class="u-comment-input">
        <form class="new-comment">
          <a class="avatar">
            <img src="../../assets/images/avator.png">
          </a>
          <div class="sign-container">
            <a href="/sign_in?utm_source=desktop&amp;utm_medium=not-signed-in-comment-form" class="btn btn-sign">登录</a>
            <span>后发表评论</span>
          </div>
        </form> <!---->
      </div>
      <div id="normal-comment-list" class="normal-comment-list">
        <div>
          <div>
            <div class="top">
              <span>5条评论</span>
              <a class="author-only">只看作者</a>
              <a class="close-btn" style="display: none;">关闭评论</a>
              <div class="pull-right">
                <a class="active">按喜欢排序</a>
                <a class="">按时间正序</a><a class="">按时间倒序</a>
              </div>
            </div>
          </div> <!----> <!---->
          <div class="comments-placeholder" style="display: none;">
            <div class="author">
              <div class="avatar"></div>
              <div class="info">
                <div class="name"></div>
                <div class="meta"></div>
              </div></div>
            <div class="text"></div>
            <div class="text animation-delay"></div>
            <div class="tool-group">
              <i class="iconfont ic-zan-active"></i>
              <div class="zan"></div>
              <i class="iconfont ic-list-comments"></i>
              <div class="zan"></div></div></div> <div id="comment-17064420" class="comment"><div><div class="author"><a href="/u/c98a25c65544" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/3818108/e7b22eca-fa7e-4dc9-9e97-57789e20ed8b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114"></a> <div class="info"><a href="/u/c98a25c65544" target="_blank" class="name">未凡尘</a> <!----> <div class="meta"><span>2楼 · 2017.11.06 23:32</span></div></div></div> <div class="comment-wrap"><p>大哥，能认真点不</p> <div class="tool-group"><a class=""><i class="iconfont ic-zan"></i> <span>1人赞</span></a> <a class=""><i class="iconfont ic-comment"></i> <span>回复</span></a> <!----> <!----></div></div></div> <div class="sub-comment-list hide"><!----> <!----></div></div><div id="comment-17064489" class="comment"><div><div class="author"><a href="/u/fa6c4d19e12f" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/991817/a909688f3a10.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114"></a> <div class="info"><a href="/u/fa6c4d19e12f" target="_blank" class="name">简若凡</a> <!----> <div class="meta"><span>3楼 · 2017.11.06 23:33</span></div></div></div> <div class="comment-wrap"><p>感觉你最近不在状态</p> <div class="tool-group"><a class=""><i class="iconfont ic-zan"></i> <span>1人赞</span></a> <a class=""><i class="iconfont ic-comment"></i> <span>回复</span></a> <!----> <!----></div></div></div> <div class="sub-comment-list"><div id="comment-17117892" class="sub-comment"><p><a href="/u/ccf52bb26cf3" target="_blank">魏占江</a>：
    <span><a href="/users/fa6c4d19e12f" class="maleskine-author" target="_blank" data-user-slug="fa6c4d19e12f">@简若凡</a> 么里</span></p> <div class="sub-tool-group"><span>2017.11.08 10:00</span> <a class=""><i class="iconfont ic-comment"></i> <span>回复</span></a> <!----> <!----></div></div> <div class="sub-comment more-comment"><a class="add-comment-btn"><i class="iconfont ic-subcomment"></i> <span>添加新评论</span></a> <!----> <!----> <!----></div> <!----></div></div><div id="comment-17065333" class="comment"><div><div class="author"><a href="/u/3d1f5ab2eecf" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/324458/44c89782be48.png?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114"></a> <div class="info"><a href="/u/3d1f5ab2eecf" target="_blank" class="name">宋偲瑄</a> <!----> <div class="meta"><span>4楼 · 2017.11.07 00:00</span></div></div></div> <div class="comment-wrap"><p>请在没发过前面加上简书，谢谢。<br>真以为没人发现呢～</p> <div class="tool-group"><a class=""><i class="iconfont ic-zan"></i> <span>1人赞</span></a> <a class=""><i class="iconfont ic-comment"></i> <span>回复</span></a> <!----> <!----></div></div></div> <div class="sub-comment-list"><div id="comment-17117883" class="sub-comment"><p><a href="/u/ccf52bb26cf3" target="_blank">魏占江</a>：
    <span><a href="/users/3d1f5ab2eecf" class="maleskine-author" target="_blank" data-user-slug="3d1f5ab2eecf">@宋偲瑄</a> 我可</span></p> <div class="sub-tool-group"><span>2017.11.08 10:00</span> <a class=""><i class="iconfont ic-comment"></i> <span>回复</span></a> <!----> <!----></div></div> <div class="sub-comment more-comment"><a class="add-comment-btn"><i class="iconfont ic-subcomment"></i> <span>添加新评论</span></a> <!----> <!----> <!----></div> <!----></div></div></div></div> <!----> <div><!----></div></div>
  </div>
</template>

<script>
  import '../../assets/css/grid.styl';
  import '../../assets/css/header.styl'; //引入外部css
  import '../../assets/css/comment.styl'

  export default {
  name: 'footer',
  data () {
    return {
      msg: 'footer part'
    }
  }
}
</script>

<style scoped>

</style>
