<template>
   <div id="header">
      {{msg}}
    </div>
</template>

<script>
  export default {
  name: 'header',
  data () {
    return {
      msg: 'footer part'
    }
  }
}
</script>

<style>
#header {
  background-color: #fff;
  height: 40px;
  padding: 10px 60px;
  position: relative;
  z-index: 2;
}
</style>
