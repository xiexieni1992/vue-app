import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import store from './store/'

Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})