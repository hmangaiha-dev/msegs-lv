<template>
    <div>
        <div class="container">
            <h1 style="color:#0a2458">Login</h1>
            <hr />

            <label for="email"><b>Email</b></label>
            <input
                type="text"
                placeholder="Enter Email"
                v-model="form.email"
                id="email"
                required
            />

            <label for="password"><b>Password</b></label>
            <input
                type="password"
                placeholder="Enter Password"
                v-model="form.password"
                id="password"
                required
            />

            <button
                @click.prevent="loginUser"
                type="submit"
                class="registerbtn"
            >
                Login
            </button>
        </div>

    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            form: {
            
                email: "",
                password: "",
              
            },
            errors: [],
        };
    },
    methods: {
        loginUser() {
            this.axios
                .post("/api/login", this.form,{
  headers: {
    "Content-Type": "application/json",

  }
})
                .then((response) => {
					console.log(response);
                    this.$router.push({name:'dashboard'})
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(this.errors);
                });
        },
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

/* Add padding to containers */
.container {
    padding: 16px;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
    background-color: #ddd;
    outline: none;
}

/* Overwrite default styles of hr */
hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
    background-color:#0a2458;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
    font-weight:700;
}

.registerbtn:hover {
    opacity: 1;
}

/* Add a blue text color to links */
a {
    color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
    background-color: #f1f1f1;
    text-align: center;
}
</style>
