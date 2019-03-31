import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.hostDomain ="http://192.168.1.108:31649"
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
