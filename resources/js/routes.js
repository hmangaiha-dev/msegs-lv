import { createWebHistory, createRouter } from "vue-router";
import store from "./components/store/index";
import LandingPage from './components/LandingPage'
// import Navbar from './components/Navbar'


import Pioneers from './components/Pioneers'
import Awards from './components/Awards'
// import page404 from './components/page404'

import Register from './components/Dashboard/Register'



import axios from "axios";

import { authStore } from './store/auth'





// Vue.use(VueRouter);
const routes =[

        {
            path:'/',
            name:'landingpage',
            component:LandingPage,
        },
        
        {
            path:'/services',
            name:'services',
            component:()=> import(/* webpackChunkName:"services"*/"./components/Services")
        },
        {
            path:'/projects',
            name:'projects',
            component:()=> import(/* webpackChunkName:"projects"*/"./components/Projects")

        },
        {
            path:'/projectdetails/:id',
            name:'projectdetails',
            component:()=> import(/* webpackChunkName:"projectdetails"*/"./components/Projects/ProjectDetails")

        },
        // {
        //     path:'/resources',
        //     name:'resources',
        //     component:()=> import(/* webpackChunkName:"Resources"*/"./components/Resources")
            
        // },
        {
            path:'/acts',
            name:'acts',
            component:()=> import(/* webpackChunkName:"ACTS"*/"./components/ACTS")
            
        },
        {
            path:'/rti',
            name:'rti',
            component:()=> import(/* webpackChunkName:"RTI"*/"./components/RTI")
            
        },
        {
            path:'/engagewithmsegs',
            name:'engagewithmsegs',
            component:()=> import(/* webpackChunkName:"Engage"*/"./components/Engage")
            
        },

        {
            path:'/aboutus',
            name:'aboutus',
            component:()=> import(/* webpackChunkName:"About us"*/"./components/AboutUs")

        },
        {
            path:'/contactus',
            name:'contactus',
            component:()=> import(/* webpackChunkName:"Contact us"*/"./components/ContactUs")
            

            
        },
        {
            path:'/pioneers',
            name:'pioneers',
            component:Pioneers


        },
        {
            path:'/awards',
            name:'awards',
            component:Awards


        },
        {
            path:'/page404',
            name:'page404',
            component:()=> import(/* webpackChunkName:"Page404"*/"./components/page404")


        },
      
        {
            path:'/login',
            name:'login',
            component:()=> import(/* webpackChunkName:"Login"*/"./components/Dashboard/Login")
            

        },
        // {
        //     path:'/register',
        //     name:'register',
        //     component:Register

        // },
        {
            path:'/dashboard',
            name:'dashboard',
            // component:Dashboard,
            component:()=> import(/* webpackChunkName:"Dashboard"*/"./components/Dashboard/Dashboard"),

            meta: {
                hideNav: true
            },
            beforeEnter:(to,from,next)=>{
                const userStore = authStore();

                // axios.get('/api/authenticated').then(()=>{
                //     next();
                // }).catch(()=>{
                //     return next({name:'login'})
                // })

                // if(userStore.loggedIn){
                //     next();
                // }
                // else{
                //     next({name:'login'})
                // }
                if ( !userStore.loggedIn) return next({path:'/login'})
                else return next()


            },
            children: [
                {
                  path: '',
            component:()=> import(/* webpackChunkName:"Dashboard"*/"./components/Dashboard/Login")

                },
                {
                    path:'/projectlist',
                    name:'dashboardprojectlist',
            component:()=> import(/* webpackChunkName:"Projectlist"*/"./components/Dashboard/Projectlist")

                },
                {
                    path:'/addproject',
                    name:'addproject',
            component:()=> import(/* webpackChunkName:"AddProjects"*/"./components/Dashboard/AddProjects")

                },
                {
                    path:'/projectsupdate/:id',
                    name:'projectsupdate',
            component:()=> import(/* webpackChunkName:"UpdateProjects"*/"./components/Dashboard/UpdateProjects")

        
                },
                {
                    path:'/resourceslist',
                    name:'dashboardresourceslist',
            component:()=> import(/* webpackChunkName:"Resourceslist"*/"./components/Dashboard/Resourceslist")

                },
                {
                    path:'/addresources',
                    name:'addresources',
            component:()=> import(/* webpackChunkName:"AddResources"*/"./components/Dashboard/AddResources")

                },
                {
                    path:'/enquirylist',
                    name:'dashboardenquirylist',
            component:()=> import(/* webpackChunkName:"Enquirylist"*/"./components/Dashboard/Enquirylist")

                },
                {
                    path:'/fileslist',
                    name:'fileslist',
            component:()=> import(/* webpackChunkName:"Fileslist"*/"./components/Dashboard/Fileslist")

                },
                {
                    path:'/addfiles',
                    name:'addfiles',
            component:()=> import(/* webpackChunkName:"AddFiles"*/"./components/Dashboard/AddFiles")

                },
             
                {
                    path:'/register',
                    name:'register',
                    
            component:()=> import(/* webpackChunkName:"Register"*/"./components/Dashboard/Register")

        
                },

                {
                    path:'/postslist',
                    name:'postslist',
            component:()=> import(/* webpackChunkName:"Postslist"*/"./components/Dashboard/Postslist")

                },
                {
                    path:'/addposts',
                    name:'addposts',
            component:()=> import(/* webpackChunkName:"AddPosts"*/"./components/Dashboard/AddPosts")

                },
                {
                    path:'/postsupdate/:id',
                    name:'postsupdate',
            component:()=> import(/* webpackChunkName:"UpdatePosts"*/"./components/Dashboard/UpdatePosts")

        
                },
              ],

        }
    ]

// const router = createRouter({
//     history: createWebHistory(),
//     routes,
//   });

// const router = new VueRouter({
//     mode:'history',
//     routes // short for `routes: routes`
//  });

const router = createRouter({ 'history': createWebHistory(),
    mode: 'history',
    routes,
    
    // scrollBehavior(to) {
    //     const position={};
    //     if (to.hash) {
          
    //         position.selector=  to.hash;
    //         return position.selector;
          
    //     }
    //   }, 
    })

    // router.beforeEach((to, from, next) => {
    //     document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
    //     if(to.meta.middleware=="guest"){
    //         if(store.state.auth.authenticated){
    //             next({name:"dashboard"})
    //         }
    //         next()
    //     }else{
    //         if(store.state.auth.authenticated){
    //             next()
    //         }else{
    //             next({name:"login"})
    //         }
    //     }
    // })
export default router





