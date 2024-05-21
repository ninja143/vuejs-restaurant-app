import HomeView from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import PageNotFound from "./components/PageNotFound.vue";

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'Home',
        component: HomeView,
        path: '/'
    },
    {
        name: 'SignUp',
        path: '/Sign-up',
        component: SignUp
    },
    {
        name: 'SignIn',
        path: '/sign-in',
        component: SignIn
    },
    {
        name: 'notfound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
