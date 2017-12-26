<template>
  <div id="footer" class="g-container-footer">
      <footer class="footer">
        <div class="footer-inner"> <div class="copyright">
          ©  2014 -
          <span itemprop="copyrightYear">2017</span>
          <span class="with-love"><i class="icon-next-heart fa fa-heart"></i></span>
          <span class="author" itemprop="copyrightHolder">刘帝伟</span>
        </div>
        <div class="powered-by">
          Powered by <a class="theme-link" href="http://www.csuldw.com">@csuldw</a>
        </div>
        <div class="theme-info">
          Theme -
          <a class="theme-link" href="#">
            MLZone
          </a>
          <span id="">
            &nbsp; | &nbsp;  用户量: 10,000
            <span id=""></span>
          </span>
          <span id="">
            &nbsp; | &nbsp;  总访问量: 9,000,000
            <span id=""></span>
          </span>
        </div>
      </div>
    </footer>
    <p id="back-to-top">
      <el-button v-on:click="backToTop">
      <!--<a href="#" onclick="return false" v-on="backToTop">-->
            <span><i class="fa fa-chevron-up" aria-hidden="true"></i>
            </span>
      <!--</a>-->
      </el-button>
    </p>
    </div>
</template>

<script>
  import '../../assets/css/grid.styl';
  import '../../assets/css/header.styl'; //引入外部css
  import '../../assets/css/footer.styl'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  export default {
    components: {ElButton},
    name: 'footer',
  data () {
    return {
      msg: 'footer part'
    }
  },
  methods:{
    backToTop:function () {
      $('body,html').animate({scrollTop: 1}, 800);
    }
  }
}
</script>

<style>

</style>
