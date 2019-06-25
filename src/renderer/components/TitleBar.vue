<template>
  <div id="titleBar">
    <el-button
      type="danger"
      id="closeBtn"
      size="mini"
      @click="closeWin"
      circle
    ></el-button>
    <el-button
      type="warning"
      id="minBtn"
      size="mini"
      @click="minWin"
      circle
    ></el-button>
    <el-button
      type="success"
      id="maxBtn"
      size="mini"
      @click="maxWin"
      circle
    ></el-button>
  </div>
</template>

<style>
#closeBtn {
  position: relative;
  margin-top: 12px;
  -webkit-app-region: no-drag;
}
#minBtn {
  position: relative;
  margin-top: 12px;
  -webkit-app-region: no-drag;
}
#maxBtn {
  position: relative;
  margin-top: 12px;
  -webkit-app-region: no-drag;
}
</style>

<script>
const { ipcRenderer: ipc } = require("electron")
export default {
  methods: {
    closeWin: function() {
      console.log("click close button")
      ipc.send("close")
    },
    minWin: function() {
      console.log("click min button")
      ipc.send("hide-window")
    },
    maxWin: function() {
      console.log("click max button")
      ipc.send("max-window")
    }
  }
}
</script>
