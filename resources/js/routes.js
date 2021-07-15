import { createWebHistory, createRouter } from "vue-router";

import LandingPage from './components/LandingPage'
// import Navbar from './components/Navbar'

// import Services from './components/Services'
// import Projects from './components/Projects'
// import Resources from './components/Resources'
// import AboutUs from './components/AboutUs'
// import ContactUs from './components/ContactUs'
import Pioneers from './components/Pioneers'
import Awards from './components/Awards'
// import page404 from './components/page404'
//  import Posts from './components/Posts'



// import ProjectDetails from './components/Projects/ProjectDetails'
// import ProjectsUpload from './components/Projects/ProjectsUpload'





// import Login from './components/Dashboard/Login'
// import Register from './components/Dashboard/Register'
// import Dashboard from './components/Dashboard/Dashboard'
// import Projectlist from './components/Dashboard/Projectlist'
// import Resourceslist from './components/Dashboard/Resourceslist'
// import Fileslist from './components/Dashboard/Fileslist'

// import Enquirylist from './components/Dashboard/Enquirylist'
// import AddResources from './components/Dashboard/AddResources'
// import AddFiles from './components/Dashboard/AddFiles'



// import AddProjects from './components/Dashboard/AddProjects'
// import UpdateProjects from './components/Dashboard/UpdateProjects'

// import Postslist from './components/Dashboard/Postslist'

// import AddPosts from './components/Dashboard/AddPosts'
// import UpdatePosts from './components/Dashboard/UpdatePosts'





import axios from "axios";







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
        {
            path:'/resources',
            name:'resources',
            component:()=> import(/* webpackChunkName:"Resources"*/"./components/Resources")
            
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
                axios.get('/api/authenticated').then(()=>{
                    next();
                }).catch(()=>{
                    return next({name:'login'})
                })
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


export default router





