import { createWebHistory, createRouter } from "vue-router";


import HelloWorld from '../components/HelloWorld.vue'
import LoginView from '../components/LoginView.vue'
import InitialTestExpView from '../components/InitialTestExpView.vue'

const routes =  [
    { path: '/', component: HelloWorld },
    { path: '/login', component: LoginView},
    { path: '/initialtestexp', component: InitialTestExpView},
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;