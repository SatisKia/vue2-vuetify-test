import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
