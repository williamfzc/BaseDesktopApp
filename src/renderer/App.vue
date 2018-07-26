<template>
  <div id="app">
    <el-container>
      <el-header>
        <div id="electron-titlebar" class="drag" style="text-align: left; line-height: 40px; ">
          Base Desktop :)
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <sidebar/>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
el-header {
  padding: 0%;
  margin: 0%;
}
</style>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  components: {
    sidebar: SideBar
  }
};
</script>
