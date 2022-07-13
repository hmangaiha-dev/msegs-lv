import { createApp } from "vue";
import App from './App.vue';
import { createPinia } from 'pinia' // Import

// createApp(App).mount("#app");

import './assets/msegs.css';
import './assets/msegsstyles.scss';
import axios from 'axios'
import VueAxios from 'vue-axios'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

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

axios.defaults.withCredentials = true;

import store from "./components/store/index";

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router);
app.use(VueAxios, axios)
app.use(AOS);
app.use(pinia); // Create the root store

app.use(store);
// { disable: "phone" }
app.AOS = new AOS.init();
app.component('vue3-autocounter', Vue3Autocounter)


app.mount('#app')
