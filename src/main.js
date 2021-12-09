import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui';

Vue.use(MintUI)

Vue.prototype.$axios = axios
Vue.config.productionTip = false

axios.interceptors.request.use(
  config => {
    Indicator.open();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

axios.interceptors.response.use(
  response => {
    Indicator.close();
    return response
  },
  error => {
    Indicator.close();
    return Promise.reject(error);
  }

)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

