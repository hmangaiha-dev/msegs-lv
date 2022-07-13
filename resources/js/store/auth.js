import { defineStore } from 'pinia'
import axios from "axios";


export const authStore = defineStore('auth', {
    state: () => {
        return {
            user: {},
            skey:null,
            loggedIn:false,


        }
    },
    persist: true,

    getters:{
        bearerAuth(state){
            return "Bearer " + state.skey;
        }

    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        async loginAttempt(credentials) {
            await axios.post("/api/login", credentials, {
                    headers: {
                        "Content-Type": "application/json",

                    }
                })
                .then((response) => {
                    this.skey = response.data.access_token;
                    this.loggedIn = true;
                    this.fetchUser();

                    
                    // this.user.loginAttempt();
                    // this.$router.push({ name: 'dashboard' })
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(this.errors);
                });
            
        },
        async fetchUser(){
            // await axios.get('/sanctum/csrf-cookie')
           await axios.get('/api/user', {
                headers: {
                    "Content-Type": "application/json",
                    'Accept':'application/json',
                    'Authorization': this.bearerAuth

                }
            }).then((res)=>{
                console.log(JSON.stringify(res.data));
                this.user = res.data;
            }).catch((err)=>{
                console.log(err);

            })

        },
        async logoutAttempt(){
            await axios.post('/api/logout').then(()=>{
                this.loggedIn = false;
                this.user = {};
                this.skey = null
            })
        }
    },
})