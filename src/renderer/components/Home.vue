<template>
  <div>
    <img src="../assets/logo.png">
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
      }, 2000)

      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>
