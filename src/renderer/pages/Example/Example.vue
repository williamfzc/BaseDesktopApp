<template>
  <div>
    <h4>点击运行会运行example目录下的example.py</h4>
    <el-button plain @click="execExample">运行</el-button>
    <p v-if="cmdResult">{{ cmdResult }}</p>
  </div>
</template>

<script>
const { exec } = require("child_process")
export default {
  data() {
    return {
      cmdResult: "",
      cmdInput: ""
    }
  },
  methods: {
    execCmd: function(cmdStr, loadingStr) {
      // start loading animation
      loadingStr = loadingStr || "loading"
      var loadingObject = this.$startLoading(loadingStr)
      // start exec
      exec(cmdStr, (error, stdout, stderr) => {
        // error happened
        if (error) {
          console.log("get a error: " + error)
          this.cmdResult = error
          loadingObject.close()
          return
        }
        // no error
        console.log(stdout)
        console.log(stderr)
        this.cmdResult = stdout + "\n" + stderr
        // stop loading animation
        loadingObject.close()
      })
    },
    execExample: function() {
      this.execCmd(
        // 命令行怎么运行它就怎么写
        `python ./example/example.py`,
        // 加载动效的文字
        "运行python example :)"
      )
    }
  }
}
</script>
