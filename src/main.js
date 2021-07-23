import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
// 匯入 vee-validate 相關規則
import rules from '@vee-validate/rules'
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'animate.css'
import AosVue from 'aos-vue'
import App from './App.vue'
import router from './router'

import { date } from '@/methods/filters'
import { sweetalert2, sweetalert } from '@/methods/sweetalert2'

Object.keys(rules).forEach(rule => {
  defineRule(rule, rules[rule])
})

// Activate the locale
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})

setLocale('zh_TW')

// createApp(App).use(router).mount('#app')
const app = createApp(App)

// 掛載給全域使用
app.config.globalProperties.$filters = {
  date
}
app.config.globalProperties.$sweetalert2 = sweetalert2
app.config.globalProperties.$sweetalert = sweetalert

app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('Loading', Loading)
app.use(router)
app.use(VueSweetalert2)
app.use(AosVue)
app.use(VueAxios, axios)
app.mount('#app')
