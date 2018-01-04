<template>
  <div style="">
  <header class="u-header">
    <div class="header-container">

      <h1 class="logo">
        <a href="http://www.csuldw.com/" title="机器学习-MLZero">
          <img src="../../assets/images/log.png">MLZero社区
        </a>
      </h1>
      <div class="brand">机器学习社区<br>MLZero 天地</div>
      <div class="nav-container">
        <ul class="site-nav site-navbar">
          <li id="menu-item-3685" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-3685"><a href="/">首页</a></li>
          <li id="menu-item-4244" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-4244">
            <!--<router-link :to="{ path: 'page', query: { pageTitle: '机器学习' }}">机器学习</router-link>-->
            <a href="/machine-learning">机器学习</a>
            <!--<router-link :to="{ name: 'PostPage', params: { categoryName: 'ML' }}">机器学习</router-link>-->
          </li>
          <li id="menu-item-5154" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-5154">
            <!--<router-link :to="{ name: 'Archives'}">文章列表</router-link>-->
            <a href="/archives">文章列表</a>
          </li>
          <li id="menu-item-5015" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5015">
            <router-link :to="{ name: 'OpenSource'}">开源传送门</router-link>
          </li>
          <!--<li id="menu-item-5012" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-5012"><a href="#">生活天地</a></li>-->
          <!--<li id="menu-item-6364" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6364"><a href="#">招聘信息</a></li>-->
          <li class="menusns">
            <!--<a href="/links">友情链接</a>-->
            <router-link :to="{ name: 'links'}">友情链接</router-link>
          </li>
          <li class="menusns">
            <!--<a href="/about">关于本站</a>-->
            <router-link :to="{ name: 'about'}">关于本站</router-link>
          </li>
          <li class="navto-search"><a href="javascript:;" class="search-show active"><i class="fa fa-search"></i></a></li>
        </ul>
      </div>
      <div class="topbar">
        <ul class="site-nav topmenu">
          <!--<li class="menusns"><a href="#/links">友情链接</a></li>-->
          <!--<li id="menu-item-6362" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6362"><a href="#/job-desc">免费发布招聘</a></li>-->
        </ul>
      </div>
    </div>
  </header>
  </div>
</template>

<script>
  import '../../assets/css/header.styl'; //引入外部css
  import $ from 'jquery'
  import Vue from 'vue';
  import comment from "./comment.js"
  import VueRouter from "vue-router";
  var VueResource = require('vue-resource');
  Vue.use(VueRouter);
  Vue.use(VueResource);
  import cookieUtils from '../../common/js/cookieUtils.js'
  import { login } from "../../api/api"

  export default {
    name: 'header',
    template: "test",
    data () {
      return {
      }
    },
    methods : {
    }
  }
</script>

<style scoped>
  .el-dialog-login {
    position: fixed;
    top: 5%;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 1000px;
  }

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
