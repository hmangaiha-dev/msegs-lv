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


import ProjectDetails from './components/Projects/ProjectDetails'




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
            path:'/projectdetails',
            name:'projectdetails',
            component:ProjectDetails
        },
        {
            path:'/resources',
            name:'resources',
            component:Resources
        },
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

const router = createRouter({ history: createWebHistory(process.env.BASE_URL),
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




