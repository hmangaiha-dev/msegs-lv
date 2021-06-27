<template>
  <div>
	  <h1>MSeGS Dashboard</h1>
	  User:{{user}}
	  email:{{user.email}}

	  <button @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
export default {
	data(){
		return{
			user:null,
		}
	},
	methods:{
		logout(){
			this.axios.post('/api/logout').then(()=>{
				this.$router.push({path:'/'});
			})
		}
	},
	mounted(){
		this.axios.get('/api/user').then((response)=>{
			console.log("USER",response.data);
			this.user = response.data
		})
	}

}
</script>

<style>

</style>