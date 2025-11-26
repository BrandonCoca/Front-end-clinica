import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import { loadFonts } from './plugins/webfontloader.js'
import { router } from './router.js'

loadFonts()

createApp(App).use(router).use(vuetify).mount('#app')