import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.css' // or 'ant-design-vue/dist/antd.less'
import './style/index.css'
import App from './App.vue'
import { Router } from '@/router'
const VueApp = createApp(App)
VueApp.use(Router)
VueApp.mount('#app')
