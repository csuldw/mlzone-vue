<template>
  <div style=""><!--position: fixed; width:100%;z-index: 9999-->
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
          <li id="menu-item-3685" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-3685"><a href="#/">首页</a></li>
          <li id="menu-item-4244" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-4244">
            <!--<router-link :to="{ path: 'page', query: { pageTitle: '机器学习' }}">机器学习</router-link>-->
            <router-link :to="{ name: 'PostPage', params: { categoryName: 'ML' }}">机器学习</router-link>
          </li>
          <li id="menu-item-5154" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-5154">
            <router-link :to="{ name: 'Archives'}">文章列表</router-link>
          </li>

          <!--<li id="menu-item-5015" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5015">
            <router-link :to="{ path: '/openSource'}">开源传送门</router-link>
          </li>-->
          <!--<li id="menu-item-5012" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-5012"><a href="#">生活天地</a></li>-->
          <li id="menu-item-6364" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6364"><a href="#/links">友情链接</a></li>
          <li class="menusns"><a href="#/about">关于本站</a></li>
          <li class="navto-search"><a href="javascript:;" class="search-show active"><i class="fa fa-search"></i></a></li>
        </ul>
      </div>
      <div class="topbar">
        <ul class="site-nav topmenu">
          <!--<li id="menu-item-6362" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6362"><a href="#">免费投稿</a></li>-->
          <li class="menusns"><a @click="">注册</a></li>
          <li class="menusns"><a @click="login">登录</a></li>
        </ul>
      </div>
      <!--<i class="fa fa-bars m-icon-nav"></i>-->
      <!--<router-link :to="{ name: 'Page', params: { pageTitle: '123' }}">User111</router-link>-->
    </div>
    <div style="height:10px; v-index: 9999">
      <el-dialog title="登录" @keyup.enter.native="loginSubmit" v-model="loginFormVisible" :close-on-click-modal="false" class="el-dialog-login" style="width:800px;">
        <el-form :model="dataForm" label-width="100px" :rules="dataFormRules" ref="dataForm" style="text-align:center;">
          <el-row >
            <el-col :span="18">
              <el-form-item label="用户名：" prop="username">
                <el-input  v-model="dataForm.username" auto-complete="off" >111</el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="18">
              <el-form-item label="密码：" prop="password">
                <el-input  v-model="dataForm.password" auto-complete="off" type="password">111</el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center">
          <el-button @click.native="loginFormVisible=false"> &nbsp;取消&nbsp;</el-button>
          <el-button type="primary" @click.native="loginSubmit" :loading="loginLoading">&nbsp;登录&nbsp;</el-button>
        </div>
      </el-dialog>
    </div>
  </header>
  </div>
  <!--<div class="site-search">-->
  <!--<div class="container">-->
  <!--<form method="get" class="site-search-form" action="#"><input class="search-input" name="s" type="text" placeholder="输入关键字" value=""><button class="search-btn" type="submit"><i class="fa fa-search"></i></button></form>	</div>-->
  <!--</div>-->
  <!--<a id="logo" href="https://CSIClab.org/">-->
  <!--<span class='header-span'> {{msg}} </span>-->
  <!--</a>-->
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
        msg: 'CSICLab',
        dataForm:{
          username: '',
          password: ''
        },
        loginFormVisible: false,
        loginStatus : false,
        dataFormRules: {
          username: [
            { required: true,message: '请输入用户名',trigger: 'blur' },
          ],
          password: [
            {required: true, message: '请输入密码',trigger: 'blur'},
          ]
        },
        loginLoading: false,
        userId : '',
        tokenId: '',
      }
    },
    methods : {
      login: function () {
        this.loginFormVisible = true
        // $("#before-comment").css("display", "none")
        // $("#comment-main").css("display", "block")
      },
      loginSubmit: function () {
        alert()
        this.$refs.dataForm.validate((valid) => {
          if (valid) {
            let para = Object.assign({}, this.dataForm);
            login(para).then((res) => {
              console.log("login:", res)
              if(res.msg != null && res.msg == "success")
              {
                this.$message({
                  message: '登录成功',
                  type: 'success'
                });
                this.userId = res.data.userId;
                this.tokenId = res.data.tokenId;
                cookieUtils.setAuthData(this.tokenId, this.userId);

                let expireDays = 1000 * 60 * 60 * 24 * 15;
                cookieUtils.setCookie('session', res.session, expireDays);

                this.$refs['dataForm'].resetFields();
                this.loginFormVisible = false
                this.loginStatus = true
                this.getAuth();
              }
              else
              {
                this.$message({
                  message: '登录失败，用户名或密码错误!',
                  type: 'error'
                });
              }

            }).catch(function (error) {
              console.log(error);
            });
          }
        });
      },
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
    z-index: 2003 !important;
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
