<template>
  <div id="app">
    <el-container>
      <el-header>
        <title-bar />
      </el-header>
      <el-container>
        <el-aside>
          <side-bar />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-align: center;
}
.el-header {
  position: relative;
  -webkit-app-region: drag;
  text-align: left;
  background-color: #2c423f;
}
</style>

<script>
import TitleBar from "./components/TitleBar.vue"
import SideBar from "./components/SideBar.vue"
export default {
  components: {
    TitleBar,
    SideBar
  }
}
</script>
