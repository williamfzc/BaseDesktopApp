<template>
  <div>
    <h4> 正常输入命令行指令点击运行即可看到结果。例如dir、ls等等。 </h4>
    <p>{{ cmdResult }}</p>
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
      cmdInput: '',
    }
  },
  methods: {
    // exec command
    _execCmd: function(cmdStr, loadingStr) {
      // start loading animation
      loadingStr = loadingStr || 'loading'
      var loadingObject = this.$startLoading(loadingStr)

      // start exec
      exec(cmdStr, (error, stdout, stderr) => {
        // error happened
        if (error) {
          console.log('get a error: ' + error)
          this.cmdResult = error
          loadingObject.close()
          return
        }
        // no error
        console.log(stdout)
        console.log(stderr)
        this.cmdResult = stdout + '\n' + stderr

        // stop loading animation
        loadingObject.close()
      })
    },

    execCmd: function() {
      // empty input
      if (this.cmdInput == '') {
        this.$notify({
          title: '输入不能为空',
          type: 'error',
          duration: 1000
        })
        return
      }
      // not empty
      console.log('ready to exec: ' + this.cmdInput)
      this._execCmd(this.cmdInput)
    }
  }
}
</script>
