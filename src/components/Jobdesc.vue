<template>
	<div class="g-container">
     <header-select></header-select>
    <div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-container-sidebar">
          <div class="pageside">
            <div class="pagemenus">
              <ul class="pagemenu">
                <li><a href="#/links">友情链接</a></li>
                <li class="active"><a href="#/job-desc">免费发布招聘</a></li>
                <li><a href="#/copyright">免责声明</a></li>
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
            <p>感谢您选择MLZero作为招聘平台，我们只接受互联网行业内的职位招聘，机器学习相关职位效果最优，发布招聘免费。</p>
            <p><strong>目前有以下公司在本站发布招聘：</strong></p>
            <p>支付宝、阿里巴巴中国、淘宝网、腾讯（包含其几个设计相关部门）、完美世界、携程网、中企动力、康盛创想、迅雷、网易、网易有道、百度、盛大游戏、京东、Softtek、酷六、若邻网、腾讯邮箱、新华网、小米科技、丁香园、洋码头、金山软件……</p>
            <p>非常感谢各大公司对本平台的信赖，我们将更好的为好企业输送靠谱前端开发或互联网开发者。</p>
            <p><span style="color: #c4c4c4;">————————————-</span></p>
            <p><strong>招聘邮件请发送至：</strong><span style="color: #339966;">jobs@mlzero.com</span></p>
            <p><strong><span style="color: #ff0000;">注：</span></strong></p>
            <p><strong>标题：</strong>【招聘】这里显示公司名称</p>
            <p><strong>介绍：</strong>团队介绍（创业公司请包含公司发展历程）</p>
            <p><strong>职位：</strong>所需要招聘的职位</p>
            <p><strong>内容：</strong>招聘内容-工作内容</p>
            <p><strong>联系方式：</strong>公司地址+邮箱+网址</p>
            <p>ps：顺便再来个220*150的logo</p>
          </article>
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
		}
	},
	computed: {
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
