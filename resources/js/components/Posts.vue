<template>




<div class="updatesrows " >
	
        <img src="../assets/updates.png" alt="" srcset="" class="updateimage" />
        <!-- <div class="updatescontents">
          <div v-for="post in posts" :key="post.id">
            <h3>{{post.title}}</h3>
            <p>{{post.date}}</p>
            <p>{{post.published}}</p>


            <div v-html="post.contents"></div>

          </div>

        </div> -->
		  <div class="updatescontents">

	   
          <div v-for="post in posts" :key="post.id">
            <p class="posttitle">{{post.title}}</p>
            <p style="font-size:14px;">{{post.date}}</p>
			<p style="padding:1rem 0"></p>


            <div v-html="post.contents"></div>

          </div>

        </div>


<!--         

<div class="slider">
  
  <a href="#slide-1">1</a>
  <a href="#slide-2">2</a>
  <a href="#slide-3">3</a>
  <a href="#slide-4">4</a>
  <a href="#slide-5">5</a>

  <div class="slides">
    <div id="slide-1">
      1
    </div>
    <div id="slide-2">
      2
    </div>
    <div id="slide-3">
      3
    </div>
    <div id="slide-4">
      4
    </div>
    <div id="slide-5">
      5
    </div>
  </div>
</div> -->


        </div>
 
</template>

<script>
export default {
	data(){
		return{
            posts:[]
		}
	},

  created(){
     this.axios.get("/api/posts/").then((response) => {
            console.log(response.data);
            this.posts = response.data;
        });
  }

}
</script>

<style scoped>
.updatesrows{
	margin-bottom:-20rem

}
.updateimage{
  width: 42vw;
  height: auto;

	position: relative;
	left:30%;
	
}
.posttitle{
	font-size:24px;
	font-family: 'Playfair Display';
	font-weight: bold;
}



.updatescontents{
	position: relative;
	left:10%;
	/* top:2%; */
	top:-400px;
	/* bottom:1rem; */
	/* bottom:30rem; */
	  width:40%;
  height:20rem;
  color:white;
  font-size:16px;
  font-family:Poppins;
  padding-left:4rem;
  padding-top:4rem;

  background-color: #0a2458;
}

@media only screen and (max-width:800px){
	.updateimage{
		/* position: inherit; */
		display:none;
	}
	.updatescontents{
		position:initial;
		width:100%;
		padding-left:1rem;
		padding-top:1rem;
		
	}
	.updatesrows{
	margin-bottom:1rem

}
	
}
</style>