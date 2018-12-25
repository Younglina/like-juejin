import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// import VueCookie from 'vue-cookies'
import axios from 'axios'
// import VCharts from 'v-charts'
import store from './store'
import WPubUI from './pub-components/index.js'
// axios.defaults.baseURL = 'https://timeline-merger-ms.juejin.im/v1/'
Vue.prototype.axios = axios

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(VueCookie)
Vue.use(WPubUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
