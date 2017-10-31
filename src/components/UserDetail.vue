<template>
  <div class="g-detail">
    <!-- <header-select></header-select> -->
    <h1>用 户 信 息</h1>
    <div class="g-left">
		<img :src="userinfo.image" class="img-profile">
	</div>
	<div class="g-right">
	    <li>{{name}} ： {{userinfo.username}}</li>
	    <li>{{age}} ： {{userinfo.age}}岁</li>
	    <li>{{address}} ： {{userinfo.address}}</li>
	    <li>{{desc}} ： {{userinfo.notes}}</li>
	</div>
	<div class="g-down">
		<el-button onclick="window.history.go(-1)">返回上层</el-button>
	</div>
    <!-- <footer-select></footer-select> -->
  </div>
</template>

<script>
// import header from './base/header.vue';
// import footer from './base/footer.vue';
export default{
	name: 'UserDetail',
	data(){
		return{
			name: '姓名',
			age: '年龄',
			desc:'座右铭',
			address: '祖籍',
			userinfo:{}
		}
	},
	created(){
		var url = '/api2/users/getUserInfo?id=' + this.$route.query.id;
		this.$http.get(url, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With',
				'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
			}
		}).then((res) => {
			this.userinfo = res.data["userlist"][0];
		}, (error)=> {
			console.log(error)
		})
	}
}
</script>


<style scoped>
.g-detail{
	text-align: center;
	width:80%;
	margin-left:5%;
	padding-top: 50px
}
.g-detail h1{
	font-size: 23px;
	padding: 18px;
}
.g-left{
	text-align: right;
	padding-top:20px;
	width: 50%;
	float: left;
}
.g-right{
	text-align: left;
	width: 50%;
	float: left;
	font-size: 17px;
	padding-top: 35px;
}
.g-down{
	text-align: center;
	width:100%;
	padding-top:40px ;
	float:left;
}

</style>

