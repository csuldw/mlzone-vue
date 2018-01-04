<template>
	<div class="g-container">
     <header-select></header-select>
    <div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-container-sidebar">
          <div class="pageside">
            <div class="pagemenus">
              <ul class="pagemenu">
                <!--<li class="active"><a href="#/links">友情链接</a></li>-->
                <!--<li><a href="#/job-desc">免费发布招聘</a></li>-->
                <!--<li><a href="/copyright">免责声明</a></li>-->
                <li class="active"><router-link :to="{ path: '/links'}">友情链接</router-link></li>
                <li><router-link :to="{ path: '/copyright'}">免责声明</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="g-container-content">
        <div class="containter-right">
          <!--<header class="containter-right-header">
            <span class="container-title">友情链接</span>
          </header>-->
          <article class="article-content">
            <p>展示本站所有友情站点，排列不分先后；</p>
            <p>如需友链，请先添加本站首页链接后再评论告知（小说站、下载站、采集站请勿扰，性格不符）。</p>
          </article>

          <div class="plinks">
            <div id="linkcat-2" class="linkcat">
              <div style="width:100%; left: 0; position: absolute;">
                <ul>
                  <li v-for="sourceItem in sourceList" >
                    <a :href="sourceItem.url" class="link-item" target="_blank">{{sourceItem.name}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="g-post-plugin-comment">
        <comment-select :articleId="-2" :articleUserId="articleInfo.userId"></comment-select>
        <!--<comment-select :to="{articleId:'articleInfo.id',userId:'articleInfo.userEntity.id'}"></comment-select>-->
      </div>
    </div>

    <footer-select></footer-select>
	</div>
</template>

<script>
import '../assets/css/grid.styl'; //引入外部css
import header from './base/header.vue';
import footer from './base/footer.vue';
import comment from './base/comment.vue';
import {getWebSourceListByParam} from '../api/api';

export default {
  components: {
    'header-select': header,
    'footer-select': footer,
    'comment-select': comment
  },
	data () {
		return {
      articleInfo: {
        "id": this.$route.params.articleId,
        "userId": '712'
      },
      queryData : {
        pageNum: 1,
        pageSize: 0,
        sourceType: 'link',
      },
      sourceList : [],
      total　: 0
		}
	},
  methods: {
    getWebSourceList() {
      let para = this.queryData;
      getWebSourceListByParam(para).then((res) => {
        this.total = res.data.total;//res.data.total;
        this.sourceList = res.data.list; //res.data.articleList;
        console.log(this.sourceList)
      });
    },
  },
  mounted(){
    this.getWebSourceList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-container-comment{
    float: right;
    width: 74%;
  }
  .link-item{
    text-align:center;
  }
  .link-item:hover{
    border: 1px solid #00AAEE;
  }
</style>
