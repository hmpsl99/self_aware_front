import { createWebHistory, createRouter } from "vue-router";


import HelloWorld from '../components/HelloWorld.vue'
import LoginView from '../components/LoginView.vue'
import InitialTestExpView from '../components/InitialTestExpView.vue'
import InitialTestQView from '../components/InitialTestQView.vue'
import PageNotFoundView from '../components/PageNotFoundView.vue'

const routes =  [
    { path: '/', name: 'Hello world' ,  component: HelloWorld },
    { path: '/login', name: 'Login' , component: LoginView},
    { path: '/initialtestexp', name: 'initial test explananation', component: InitialTestExpView},
    { path: '/initialtest' , name: 'initial test', component: InitialTestQView} ,
    { path: '/:pathMatch(.*)*', name: '404 Page Not Found' , component: PageNotFoundView}
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;