<template>
  <div id="footer">
      {{msg}}
    </div>
</template>

<script>
  import '../../assets/css/header.styl'; //引入外部css

  export default {
  name: 'footer',
  data () {
    return {
      msg: 'footer part'
    }
  }
}
</script>

<style>
#footer {
  background-color: #fff;
  height: 40px;
  padding: 10px 60px;
  position: relative;
  z-index: 2;
}
</style>
