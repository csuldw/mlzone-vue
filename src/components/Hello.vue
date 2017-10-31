<template>
	<div class="g-container">
    <h1> {{msg}}</h1>
    <h2><router-link to='/projectManagement'> {{linkName}} </router-link></h2>
		<div class="g-container-up">
			<template>
				<el-carousel :interval="2000" type="card" height="360px">
					<el-carousel-item v-for="item in images" :key="item.value">
						<img :src="item.image" class="img-responsive">
					</el-carousel-item>
				</el-carousel>
			</template>
			<h1>START</h1>
		</div>
		<div class="g-container-down">
      <h1>{{subTitle}}</h1>
			<div class="g-container-down-subcontent" v-for="i in ilength" v-if="(i-1)% numSize==0">
				<el-row>
					<el-col :span="4" v-for="(o, index) in ((ilength - (i -1)) > numSize ? numSize : (ilength - (i -1)))" :key="o" :offset="index > 0 ? 1 : 0">
						<el-card :body-style="{ padding: '0px' }">
							<router-link :to="{path:'/userDetail',query:{id:userlist[index + i - 1].id}}">
								<img :src="userlist[index + i - 1].image" class="img-profile">
							</router-link>
							<div class="g-container-down-infos">
								<span>{{userlist[index + i - 1].username}}</span>
								<div class="bottom clearfix">
									<time class="time">{{ currentDate }}</time>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
import '../assets/css/grid.css'; //引入外部css

export default {
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
	created(){
		this.$http.get('/api2/users/getUserInfo', {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With',
				'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
			}
		}).then((res) => {
			this.userlist = res.data["userlist"];
		}, (error)=> {
			console.log(error)
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}

a{ color:#2c850d; text-decoration:none;}
a:link{ color:#2c850d; text-decoration:none;}
a:visited{ color:#2c850d; text-decoration:none;}
a:hover{ color:#ff2020; text-decoration:underline;}
a:actived{ color:#2c850d; text-decoration:none;}

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
</style>
