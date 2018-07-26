<template>
  <div>
    <h2>点击后会出现加载动画与提示，1s后消失</h2>
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>


<script>
export default {
  methods: {
    startHacking () {
      var loadingObject = this.$startLoading()
      setTimeout(()=>{
        loadingObject.close()
      }, 1000)

      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 1000
      })
    }
  }
}
</script>
