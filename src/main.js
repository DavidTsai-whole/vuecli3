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

import App from './App.vue'
import router from './router'
import { date } from '@/methods/filters'

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
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(router)
app.use(VueSweetalert2)
app.use(VueAxios, axios)
app.mount('#app')
