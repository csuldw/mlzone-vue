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
          <div class="u-article-recent">
            <h1>最新发布</h1>
            <article class="u-article-excerpt">
              <a class="focus" href="#"><img src="http://www.daqianduan.com/wp-content/uploads/2017/08/git.jpg" class="thumb" alt="教你添加网站浏览器图标 favicon.ico_themebetter"></a>
              <h2><a href="#" title="教你添加网站浏览器图标 favicon.ico_WordPress使用教程_themebetter">教你添加网站浏览器图标 favicon.ico</a></h2>
              <div class="note">每个网站都可以设置favicon，而且添加是非常简单的</div>
              <div class="meta">
                <time>2017-09-28</time>
                <a class="meta-cat" href="#">WordPress使用教程</a>
                <span class="meta-cmt">评论(11)</span>
              </div>
            </article>
          </div>
          <div class="u-article-push">
            <h1>文章推荐</h1>
            <article class="u-article-excerpt">
              <a class="focus" href="#"><img src="http://www.daqianduan.com/wp-content/uploads/2017/08/git.jpg" class="thumb" alt="教你添加网站浏览器图标 favicon.ico_themebetter"></a>
              <h2><a href="#" title="教你添加网站浏览器图标 favicon.ico_WordPress使用教程_themebetter">教你添加网站浏览器图标 favicon.ico</a></h2>
              <div class="note">每个网站都可以设置favicon，而且添加是非常简单的</div>
              <div class="meta">
                <time>2017-09-28</time>
                <a class="meta-cat" href="#">WordPress使用教程</a>
                <span class="meta-cmt">评论(11)</span>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="g-sidebar">
        <div class="u-widget u-widget-tops">
          <ul class="u-widget-nav">
            <li class="active">网站公告</li>
          </ul>
          <ul class="u-widget-navcontent">
            <li class="item item-01 active">
              <ul>
                <li><time>07-27</time><a target="_blank" href="#">官方声明：大前端WordPress相关业务宣布themebetter独立运营</a></li>
                <li><time>07-10</time><a target="_blank" href="#">重要声明：有问题你得提工单，邮箱和评论将不支持服务</a></li>
                <li><time>07-02</time><a target="_blank" href="#">大前端工单服务系统上线 欢迎这里来问答</a></li>
                <li><time>06-11</time><a target="_blank" href="#">对这段时间的大前端有个交代</a></li>
                <li><time>04-01</time><a target="_blank" href="#">大前端和阿里百秀背后的团队</a></li>
              </ul>
            </li>
          </ul>
        </div>

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
        <div class="u-widget u-post-archive">
          <h3>我的开源项目 <a href="https://github.com/csuldw?tab=repositories" target="_blank"><span style="font-size: 1em;float: right;">更多 »</span></a></h3>
          <ul class="open-source-content">
            <li>
              <div>
                <h5 class="prog-title">机器学习相关算法 <iframe src="https://ghbtns.com/github-btn.html?user=csuldw&amp;repo=MachineLearning&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px" class="ml10" style="vertical-align:-5px;"></iframe></h5>
                <p class="prog-detail">机器学习算法代码及个人总结整理，对于算法实现部分，在相应目录中都包含有源码和数据以及测试实例。</p>
                <p class="prog-detail">地址：<a href="https://github.com/csuldw/MachineLearning" target="_blank">https://github.com/csuldw/MachineLearning</a></p>
              </div>
            </li>
            <li class="mt10">
              <div>
                <h5 class="prog-title">WSpider <iframe src="https://ghbtns.com/github-btn.html?user=csuldw&amp;repo=WSpider&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px" class="ml10" style="vertical-align:-5px;"></iframe></h5>
                <p class="prog-detail">一个用于爬取新浪微博的爬虫项目.</p>
                <p class="prog-detail">地址：<a href="https://github.com/csuldw/WSpider" target="_blank">https://github.com/csuldw/WSpider</a></p>
              </div>
            </li>
          </ul>
        </div>
        <div class="u-widget u-post-archive">
          <h3>归档</h3>
          <ul class="archive-content">
            <div class="archive-list">
              <li><span class="archive-detail"> <a href="https://github.com/csuldw/MachineLearning" target="_blank">2017年10月</a>（3）</span></li>
              <li><span class="archive-detail"> <a href="https://github.com/csuldw/MachineLearning" target="_blank">2017年09月</a>（13）</span></li>
              <li><span class="archive-detail"> <a href="https://github.com/csuldw/MachineLearning" target="_blank">2017年08月</a>（33）</span></li>
              <li><span class="archive-detail"> <a href="https://github.com/csuldw/MachineLearning" target="_blank">2017年07月</a>（23）</span></li>
              <li><span class="archive-detail"> <a href="https://github.com/csuldw/MachineLearning" target="_blank">2017年06月</a>（3）</span></li>
              <li><span class="archive-detail"> <a href="https://github.com/csuldw/MachineLearning" target="_blank">2017年05月</a>（43）</span></li>
            </div>
          </ul>
        </div>
      </div>
		</div>
    <footer-select></footer-select>
	</div>
</template>

<script>
import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';

export default {

  components: {
    'header-select': header,
    'footer-select': footer
  },
	data () {
		return {
			msg: '一切从这里开始...',
      linkName: 'Mini项目管理工具入口',
			currentDate: new Date(),
			numSize: 5,
			subTitle: "人物简介",
			images: [
			{
				image:require("../assets/images/p1.jpg"),
			},
			{
				image:require("../assets/images/p2.jpg"),
			},
			{
				image:require("../assets/images/p3.jpg"),
			},
			{
				image:require("../assets/images/p4.jpg"),
			},
			{
				image:require("../assets/images/p5.jpg"),
			}
//			,
//			{
//				image:require("../assets/images/a6.jpg"),
//			}
			],
			userlist:[]
		}
	},
	computed: {
		ilength:function(){
			return this.userlist.length
		},
	},
//	created(){
//		this.$http.get('/api2/users/getUserInfo', {
//			headers: {
//				'Access-Control-Allow-Origin': '*',
//				'Access-Control-Allow-Headers': 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With',
//				'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
//			}
//		}).then((res) => {
//			this.userlist = res.data["userlist"];
//		}, (error)=> {
//			console.log(error)
//		})
//	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    height: 320px !important;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    height: 320px !important;
  }
.el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
	height: 350px;
}
.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
	height: 350px;
}
.el-row{
	margin-top:30px;
}
.img-responsive {
	display: inline-block;
	height: 100%;
	width: 100%;
}
.img-profile{
	display: inline-block;
	height: 100px;
	padding-top: 20px;
}
.time {
	font-size: 13px;
	color: #999;
}
.bottom {
	margin-top: 13px;
	line-height: 12px;
}
.button {
	padding: 0;
	float: right;
}
.image {
	width: 100%;
	display: block;
}
.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}
.clearfix:after {
	clear: both
}
.g-container-down-infos{
	padding: 20px 0 20px 0;
}
  .archive-content li{
    list-style: none;
    padding-top: 5px;
  }
  .open-source-content li{
    padding-top: 5px;
  }
  .open-source-content li{color:#CCC}  /*点的颜色*/
  .open-source-content li div{color:#666666}  /*字的颜色*/

  .archive-content{
    padding: 10px 0 0 30px;
  }

  .u-post-archive ul{
    padding-left: 28px;
  }

</style>
