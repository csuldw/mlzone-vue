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
        <div class="g-source-container">
          <div style="width: 100%;float:left">
            <!--<h1>此功能尚未开放！</h1>-->
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
            <!--//upload.jianshu.io/collections/images/38/android.graphics.Bitmap_f3edcb1.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180
            //upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180
            //upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180
            -->

          </div>
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

</style>
