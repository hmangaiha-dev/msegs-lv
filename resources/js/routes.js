import { createWebHistory, createRouter } from "vue-router";

import LandingPage from './components/LandingPage'
import Services from './components/Services'
import Projects from './components/Projects'
import Resources from './components/Resources'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Pioneers from './components/Pioneers'
import Awards from './components/Awards'
import page404 from './components/page404'
// import Posts from './components/Posts'



import ProjectDetails from './components/Projects/ProjectDetails'
// import ProjectsUpload from './components/Projects/ProjectsUpload'





import Login from './components/Dashboard/Login'
import Register from './components/Dashboard/Register'
import Dashboard from './components/Dashboard/Dashboard'
import Projectlist from './components/Dashboard/Projectlist'
import Resourceslist from './components/Dashboard/Resourceslist'
import Fileslist from './components/Dashboard/Fileslist'

import Enquirylist from './components/Dashboard/Enquirylist'
import AddResources from './components/Dashboard/AddResources'
import AddFiles from './components/Dashboard/AddFiles'



import AddProjects from './components/Dashboard/AddProjects'
import UpdateProjects from './components/Dashboard/UpdateProjects'

import Postslist from './components/Dashboard/Postslist'

import AddPosts from './components/Dashboard/AddPosts'
import UpdatePosts from './components/Dashboard/UpdatePosts'




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
            component:Services
        },
        {
            path:'/projects',
            name:'projects',
            component:Projects
        },
        {
            path:'/projectdetails/:id',
            name:'projectdetails',
            component:ProjectDetails
        },
        {
            path:'/resources',
            name:'resources',
            component:Resources
        },
        // {
        //     path:'/resourcesupload',
        //     name:'resourcesupload',
        //     component:ResourcesUpload
        // },
        {
            path:'/aboutus',
            name:'aboutus',
            component:AboutUs
        },
        {
            path:'/contactus',
            name:'contactus',
            component:ContactUs
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
            component:page404

        },
        // {
        //     path:'/projectsupload',
        //     name:'projectsupload',
        //     component:ProjectsUpload

        // },
        // {
        //     path:'/projectsupdate/:id',
        //     name:'projectsupdate',
        //     component:ProjectsUpdate

        // },
        {
            path:'/login',
            name:'login',
            component:Login

        },
        {
            path:'/register',
            name:'register',
            component:Register

        },
        {
            path:'/dashboard',
            name:'dashboard',
            component:Dashboard,
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
                  component: Dashboard,
                },
                {
                    path:'/projectlist',
                    name:'dashboardprojectlist',
                    component:Projectlist
                },
                {
                    path:'/addproject',
                    name:'addproject',
                    component:AddProjects
                },
                {
                    path:'/projectsupdate/:id',
                    name:'projectsupdate',
                    component:UpdateProjects
        
                },
                {
                    path:'/resourceslist',
                    name:'dashboardresourceslist',
                    component:Resourceslist
                },
                {
                    path:'/addresources',
                    name:'addresources',
                    component:AddResources
                },
                {
                    path:'/enquirylist',
                    name:'dashboardenquirylist',
                    component:Enquirylist
                },
                {
                    path:'/fileslist',
                    name:'fileslist',
                    component:Fileslist
                },
                {
                    path:'/addfiles',
                    name:'addfiles',
                    component:AddFiles
                },
             
                // {
                //     path:'/register',
                //     name:'register',
                //     component:Register
        
                // },

                {
                    path:'/postslist',
                    name:'postslist',
                    component:Postslist
                },
                {
                    path:'/addposts',
                    name:'addposts',
                    component:AddPosts
                },
                {
                    path:'/postsupdate/:id',
                    name:'postsupdate',
                    component:UpdatePosts
        
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




