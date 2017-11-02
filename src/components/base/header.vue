<template>
   <header class="u-header">
     <div class="header-container">
       <h1 class="logo"><a href="http://www.csuldw.com/" title="机器学习-MLZone"><img src="http://www.daqianduan.com/wp-content/uploads/2015/01/logo.png">MLZone社区</a></h1>
       <div class="brand">机器学习社区<br>MLZone 天地</div>
       <ul class="site-nav site-navbar">
       <li id="menu-item-3685" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-3685"><a href="#">首页</a></li>
       <li id="menu-item-4244" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-4244"><a href="#">机器学习</a>
         <!--<ul class="sub-menu">-->
           <!--<li id="menu-item-4438" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-4438"><a href="#">HTML/CSS</a></li>-->
           <!--<li id="menu-item-4439" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-4439"><a href="#">JavaScript</a></li>-->
           <!--<li id="menu-item-4437" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-4437"><a href="#">技巧资源</a></li>-->
         <!--</ul>-->
       </li>
       <li id="menu-item-5154" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-5154"><a href="#">深度学习</a></li>
       <li id="menu-item-5015" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5015"><a rel="relexternal nofollow" href="#">开源传送门</a></li>
       <li id="menu-item-5012" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-5012"><a href="#">生活天地</a></li>
       <!--<li id="menu-item-6365" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6365"><a target="_blank" href="#">关于本站</a></li>-->
       <li class="navto-search"><a href="javascript:;" class="search-show active"><i class="fa fa-search"></i></a></li>
     </ul>
     <div class="topbar">
       <ul class="site-nav topmenu">
         <li id="menu-item-6360" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6360"><a href="http://www.daqianduan.com/contact">联系站长</a></li>
         <li id="menu-item-6362" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6362"><a href="http://www.daqianduan.com/job-new">免费投稿</a></li>
         <li id="menu-item-6364" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6364"><a href="http://www.daqianduan.com/links">友情链接</a></li>
         <li class="menusns">
           <a href="javascript:;">关于本站 <i class="fa fa-angle-down"></i></a>
         </li>
       </ul>
     </div>
       <!--<i class="fa fa-bars m-icon-nav">aaa</i>-->
     </div>
   </header>
   <!--<div class="site-search">-->
     <!--<div class="container">-->
       <!--<form method="get" class="site-search-form" action="#"><input class="search-input" name="s" type="text" placeholder="输入关键字" value=""><button class="search-btn" type="submit"><i class="fa fa-search"></i></button></form>	</div>-->
   <!--</div>-->
  <!--<a id="logo" href="https://CSIClab.org/">-->
    <!--<span class='header-span'> {{msg}} </span>-->
  <!--</a>-->
</template>

<script>
import '../../assets/css/header.css'; //引入外部css

export default {
  name: 'header',
  data () {
    return {
      msg: 'CSICLab',
    }
  },
}
</script>

<style scoped>


/*#header {*/
  /*background-color: #272822;*/
  /*height: 30px;*/
  /*padding: 10px 60px;*/
  /*position: relative;*/
  /*z-index: 2;*/
/*}*/
/*#nav {*/
  /*list-style-type: none;*/
  /*margin: 0;*/
  /*padding: 0;*/
  /*position: absolute;*/
  /*right: 30px;*/
  /*top: 0px;*/
  /*height: 40px;*/
  /*line-height: 40px;*/
/*}*/
/*#logo {*/
  /*display: inline-block;*/
  /*font-size: 1.5em;*/
  /*line-height: 40px;*/
  /*color: #2c3e50;*/
  /*font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;*/
  /*font-weight: 500;*/
/*}*/
/*.header-span{*/
  /*color: white;*/
/*}*/
</style>
