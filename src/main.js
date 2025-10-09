import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import { loadFonts } from './plugins/webfontloader.js'

loadFonts()

import UserPage from './components/users/pages/UserIndexPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/usuarios',
        name: 'users',
        component: UserPage
    }]
});

createApp(App).use(router).use(vuetify).mount('#app')