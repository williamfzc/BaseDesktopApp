<template>
  <div>
    <h2> 该页面用于确保electron与命令行的交互正常，输入指令点击运行即可看到结果。 </h2>
    <p>{{cmdResult}}</p>
    <el-container>
      <el-input
        placeholder="输入命令行指令"
        v-model="cmdInput"
        clearable>
      </el-input>
      <el-button plain @click="execCmd">运行</el-button>
    </el-container>
  </div>
</template>

<script>
const { exec } = require('child_process')
export default {
  data() {
    return {
      cmdResult: '',
      cmdInput: ''
    }
  },
  methods: {
    execCmd: function() {
      var loadingObject = this.$startLoading()
      console.log('ready to exec: ' + this.cmdInput)
      exec(this.cmdInput, (error, stdout, stderr) => {
        if (error) {
          console.log('get a error: ' + error)
          this.cmdResult = error
          return
        }
        console.log(stdout)
        console.log(stderr)
        this.cmdResult = stdout + '\n' + stderr
        loadingObject.close()
      })
    }
  }
}
</script>
