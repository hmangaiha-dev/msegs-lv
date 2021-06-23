import { createApp } from "vue";
import App from './App.vue';

// createApp(App).mount("#app");

import './assets/msegs.css';
import './assets/msegsstyles.scss';
import axios from 'axios'
import VueAxios from 'vue-axios'
// var VueScrollTo = require('vue-scrollto');
// import VueAnimateOnScroll from 'vue-animate-onscroll'

// import AOS from "aos";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// import routes from 'routes';
import router from './routes'
import Vue3Autocounter from 'vue3-autocounter';

const app = createApp(App)
app.use(router);
app.use(VueAxios, axios)
app.use(AOS);
// { disable: "phone" }
app.AOS = new AOS.init();
app.component('vue3-autocounter', Vue3Autocounter)


app.mount('#app')
