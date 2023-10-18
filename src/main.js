import { createApp } from 'vue'
import App from './App.vue'
import store from './lib/store'
import homePage from "@/pages/HomePage.vue";
import ConversationsIndexPage from "@/pages/ConversationsIndexPage.vue";
import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
    { path: '/', component: homePage },
    { path: '/conv', component: ConversationsIndexPage },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
const app = createApp(App);
app.use(store);
app.use(router)
app.mount('#app')
