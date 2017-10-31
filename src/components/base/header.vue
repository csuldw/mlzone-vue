<template>
 <div id="header">
  <a id="logo" href="https://CSIClab.org/">
    <span class='header-span'> {{msg}} </span>
  </a>
</div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'CSICLab'
    }
  }
}
</script>

<style scoped>
#header {
  background-color: #272822;
  height: 30px;
  padding: 10px 60px;
  position: relative;
  z-index: 2;
}
#nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 30px;
  top: 0px;
  height: 40px;
  line-height: 40px;
}
#logo {
  display: inline-block;
  font-size: 1.5em;
  line-height: 40px;
  color: #2c3e50;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-weight: 500;
}
.header-span{
  color: white;
}
</style>
