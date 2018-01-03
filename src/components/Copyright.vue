<template>
	<div class="g-container">
     <header-select></header-select>
    <div class="g-container-down">
      <div class="g-container-wrap">
        <div class="g-container-sidebar">
          <div class="pageside">
            <div class="pagemenus">
              <ul class="pagemenu">
                <!--<li><a href="/links">友情链接</a></li>-->
                <!--<li><a href="#/job-desc">免费发布招聘</a></li>-->
                <!--<li class="active"><a href="/copyright">免责声明</a></li>-->
                <li><router-link :to="{ path: '/links'}">友情链接</router-link></li>
                <li class="active"><router-link :to="{ path: '/copyright'}">免责声明</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="g-container-content">
        <div class="containter-right">
          <article class="article-content">
            <p><strong>免责声明：</strong></p>
            <p>MLZero提供的所有内容仅供学习、分享与交流，我们不保证内容的正确性。通过使用本站内容随之而来的风险与本站无关。当使用本站时，代表你已接受本站的免费声明和隐私原则等条款。</p>
            <p><strong>隐私原则：</strong></p>
            <p>MLZero站内目前涉及到浏览者隐私的只有一个地方，就是留言区。当你留言时，你的电子邮箱、Cookie信息和IP地址都会被记录。这些信息仅为了改进我们的网站质量和可能的交流沟通。我们不会将这些信息进行展示、出租或出售给任何人。但以下情况除外：</p>
            <ol>
              <li>只有透露你的个人资料，才能提供您所要求的产品和服务；</li>
              <li>我们需要听从法庭传票、法律命令或遵循法律程序；</li>
              <li>我们发现你违反了MLZero已发布的条款或声明。</li>
            </ol>
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

<style scoped>

</style>
