import { createWebHistory, createRouter } from "vue-router";


import HelloWorld from '../components/HelloWorld.vue'
import LoginView from '../components/LoginView.vue'
import InitialTestExpView from '../components/InitialTestExpView.vue'
import InitialTestQView from '../components/InitialTestQView.vue'
import PageNotFoundView from '../components/PageNotFoundView.vue'
import HomeView from '../components/HomeView.vue'
import InitialTestResult from '../components/InitialTestResult.vue'

const routes =  [
    { path: '/', name: 'Hello world' ,  component: HelloWorld , meta:{auth:false,test:false}},
    { path: '/login', name: 'Login' , component: LoginView ,meta:{auth:false,test:false} },
    { path: '/initialtestexp', name: 'initial test explananation', component: InitialTestExpView, meta:{auth:true,test:false} },
    { path: '/initialtest' , name: 'initial test', component: InitialTestQView , meta:{auth:true,test:false} } ,
    { path: '/initialtestresult' , name: 'initial test result', component: InitialTestResult , meta:{auth:true, test:true}} ,
    { path: '/home' , name: 'home page', component: HomeView , meta:{auth:true,test:true} } ,
    { path: '/:pathMatch(.*)*', name: '404 Page Not Found' , component: PageNotFoundView},
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
  if (to.meta.auth && localStorage.getItem('token') == undefined) {
    router.push('/login');
  } 
  if (to.meta.test && JSON.parse(localStorage.getItem('initial_test')) == false) {
    router.push('/initialtestexp');
  }
  if (!to.meta.test && JSON.parse(localStorage.getItem('initial_test')) == true ) {
    router.push('/home');
  }
})

export default router;