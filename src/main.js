import { createApp} from 'vue'
import App from './App.vue'
import homePage from "@/pages/HomePage.vue";
import ConversationsIndexPage from "@/pages/ConversationsIndexPage.vue";
import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/lib/store'
const routes = [
    { path: '/', component: homePage },
    {
        path: '/conversations/:id',
        name: 'Conv',
        component: ConversationsIndexPage,
        // Add a beforeEnter guard to check if user is null
        beforeEnter: (to, from, next) => {
            // Replace 'user' with your actual user authentication check
            if (store.state.user === null) {
                // User is null, do not allow access to '/con'
                next('/'); // Redirect to the home page or another appropriate route
            } else {
                // User is authenticated, allow access to '/con'
                next();
            }
        }
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
const app = createApp(App);
app.use(store);
app.use(router)
app.mount('#app')
