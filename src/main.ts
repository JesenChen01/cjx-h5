import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import { bootstrap } from '@/config/install'
import App from '@/App.vue'
import router from '@/router'
import pinia from '@/stores'
import 'virtual:uno.css'
import '@/styles/index.less'
import { i18n } from '@/utils/i18n'

const app = createApp(App)
bootstrap(app)
const head = createHead()
app.use(head)
app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
