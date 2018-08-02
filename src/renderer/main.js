import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'


Vue.use(ElementUI)


Vue.prototype.$startLoading = function(loadStr) {
  var loadingObject = this.$loading({
    lock: true,
    text: loadStr || 'Loading ...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  return loadingObject
}

const Store = require('electron-store')
Vue.prototype.$globalStore = new Store()


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
