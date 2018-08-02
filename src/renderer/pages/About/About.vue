<template>
  <div>
    <div id="descDiv">
      <h3>electron + vue + element = cool desktop app</h3>
      <p>如有问题请随时反馈到github，传送门在下面。欢迎star/fork。</p>
      <el-button type="primary" @click="goGithub" plain>View On Github</el-button>
    </div>
  </div>
</template>

<style>
#descDiv {
  text-align: left;
}
</style>

<script>
const shell = require('electron').shell
export default {
  data() {
    return {
      githubUrl: 'https://github.com/williamfzc/BaseDesktopApp',
    }
  },
  methods: {
    goGithub: function() {
      shell.openExternal(this.githubUrl)
    },
  }
}
</script>
