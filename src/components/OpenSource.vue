<template>
	<div class="g-container">
     <header-select></header-select>
		<div class="g-container-down">
      <div class="g-container-wrap">


        <div class="g-page-sidebar">
          <div class="u-page-left-search">
            <el-input v-model="queryData.keywords" placeholder="关键字" @keyup.enter.native="getWebSourceList"></el-input>
          </div>
          <div class="u-page-left" >
            <p>说明：主要收集来自Github优秀开源框架，排名不分先后，仅供学习。</p>
          </div>
          <div class="u-page-left">
          </div>
        </div>

        <!--<h1>开源框架</h1>-->
        <div class="g-source-container">

          <div class="jianshe_b" v-for="sourceItem in sourceList">
            <div class="js_li">
              <a :href="sourceItem.url" TARGET="_blank">
                <img class="img-circle" :src="getAvator(sourceItem.avator)" alt="" width="140" height="140">
                <h2>{{sourceItem.name}}</h2>
                <p>{{sourceItem.desc}}</p>
              </a>
            </div>
          </div>
          <!--<div style="width: 100%;float:left">
            <div class="u-archive-content">
              <div class="col-xs-8" v-for="sourceItem in sourceList">
                <div class="collection-wrap">
                  <a target="_blank" :href="sourceItem.url">
                    <img class="avatar-collection" :src="getAvator(sourceItem.avator)">
                    <h2 class="name">{{sourceItem.name}}</h2>
                  </a>
                  <div class="wrap-content"><p class="collection-description">{{sourceItem.desc}} </p></div>
                  <div class="wrap-bottom"><a target="_blank" :href="sourceItem.url">查看详情</a></div>
                </div>
              </div>
            </div>
          </div>-->
          <div class="source-pagination-meta" v-if="showPagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-sizes="[9, 12, 24, 48]"
              :page-size="queryData.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
          </div>
          <div v-if="!showPagination">
            <div class="search_null search_null02" name="noResult_correct">
              <h1 class="search_msg">抱歉，没有找到与“<span class="key_search">{{queryData.keywords}}</span>”相关的商品！</h1>
              <div class="search_null_ts">1、看看输入的文字是否有误</div>
              <div class="search_null_ts">2、请调整关键字，使关键词精准或者简单，如“redis”</div>
            </div>
          </div>
        </div>
      </div>
		</div>
    <footer-select></footer-select>
	</div>
</template>

<script src="./openSource.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col-xs-8 {
    width: 33.33333%;
  }

  .collection-wrap {
    height: 280px;
  }
  .collection-wrap:hover{
    border: 1px solid #00AAEE;
  }

  .collection-wrap .avatar-collection, .wrap .avatar-collection {
    border-radius: 8px;
  }

  .collection-wrap .avatar-collection, .wrap .avatar-collection {
    width: 70px;
    height: 70px;
    margin: -35px 0 10px;
    display: inline-block;
    border: 1px solid #ddd;
    background-color: #fff;
  }

  .collection-wrap h2 {
    font-size: 1.4em;
  }

  .collection-wrap, .wrap {
    height: 300px;
    margin-top: 80px;
    padding: 0 20px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    /*background-color: hsla(0, 0%, 71%, .1);*/
    transition: .2s ease;
    -webkit-transition: .2s ease;
    -moz-transition: .2s ease;
    -o-transition: .2s ease;
    -ms-transition: .2s ease;
  }

  .g-source-container {
    float: left;
    width: 74%;
    margin-left: 10px;
    position: relative;
    min-height: 500px;
    BACKGROUND-COLOR: #FFF;
    text-align: center;
    border: 1px solid #eaeaea;
    padding-bottom: 10px;
  }

  .collection-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  .collection-wrap .wrap-bottom{
    position: relative;
    text-align: center;
  }
  .collection-wrap .wrap-content{
    height: 150px;
  }
  .source-pagination-meta{
    padding: 0 20px 50px 40px;
    margin-top: 50px;
    float: left;
  }
<!-- -->
  .jianshe_b {
    max-width: 1150px;
    overflow: hidden;
    margin: auto;
  }
  .js_li {
    text-align: center;
    margin: 15px 0;
    padding-top: 10px;
    width: 33.3%;
    float: left;
    border: 1px solid transparent;
  }
  .js_li img {
    padding: 7px;
    background: #fff;
    border: 1px solid #CCC;
    height: 120px;
    width: 120px;
  }
  .js_li p {
    color: #838383;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-size: 12px;
    line-height: 18px;
    padding: 5px 25px;
    text-align: left;
    height: 90px;
  }
  .js_li:hover{
    border: 1px solid #00AAEE;
    transform: translate(0, 0);
    transition: all 0.2s ease-in 0.1s;
  }
  .js_li:hover img{
    transform: scale(1.1);
    transition: all 0.8s;
  }
  .js_li h2 {
    width: 100%;
    display: block;
    font-size: 18px;
    color: #262626;
    text-align: center;
    margin-bottom: 16px;
    font-weight: normal;
  }
  .search_null02 {
    padding: 0 0 18px 28px;
    margin: 12px auto 20px;
  }
  .search_null {
    padding: 0 0 10px;
    background: #f6f6f6;
    margin-bottom: 30px;
  }
  .search_null .search_msg {
    font-size: 14px;
    font-weight: bold;
    color: #505050;
    line-height: 24px;
    padding: 16px 20px 4px 12px;
  }
  .search_null .search_null_ts {
    color: #797979;
    line-height: 24px;
    margin-left: 27px;
    text-align: left;
  }
  .search_null .search_null_ts {
    color: #797979;
    line-height: 24px;
    margin-left: 27px;
    text-align: left;
  }
  span.key_search {
    color: #ff2328;
    font-weight: bold;
    float: none;
    margin-left: 0;
  }
</style>
