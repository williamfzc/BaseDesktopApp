<template>
  <el-col :span="18" id='sideBar'>
    <el-menu 
    router
    >
      <el-menu-item index="/"><i class="el-icon-menu"></i>主页</el-menu-item>
      <el-menu-item index="/example"><i class="el-icon-edit"></i>例子</el-menu-item>
      <el-menu-item index="/about"><i class="el-icon-question"></i>关于</el-menu-item>
    </el-menu>
  </el-col>
</template>

<style>
#sideBar {
  height: 100%;
  text-align: left;
}
</style>

