<template>
  <el-col :span="18" id='sideBar'>
    <el-menu :default-active="activeIndex" router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="dev">DEV</el-menu-item>
      <el-menu-item index="about">关于</el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  computed:{
    activeIndex(){
      return this.$route.path.replace('/','')
    }
  },
}
</script>

<style>
#sideBar {
  height: 100%;
}
</style>

