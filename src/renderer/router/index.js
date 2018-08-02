import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routeOptions = [
  {path: '/', component: 'Home'},
  {path: '/home', component: 'Home'},
  {path: '/about', component: 'About'},
  {path: '/example', component: 'Example'},
]

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(`../pages/${route.component}/${route.component}.vue`)
  }
})

export default new Router({
  routes: routes,
  mode: 'hash'
})
