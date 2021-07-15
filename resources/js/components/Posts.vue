<template>




<div class="updatesrows " >
	
        <img src="../assets/post.png" alt="" srcset="" class="updateimage" />
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
            <!-- <p style="font-size:14px;">{{post.date}}</p> -->
			<p style="padding:1rem 0"></p>
            <!-- <p>{{post.published}}</p> -->


            <div v-html="post.contents"></div>

          </div>

        </div>
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
            // console.log(response.data);
            this.posts = response.data;
        });
  }

}
</script>

<style scoped>
.updatesrows{
	/* margin-bottom:-20rem; */
  position:relative;
  height:780px;

}
.updateimage{
  /* width: 42vw; */
  /* height: auto; */
  width:840px;
  height:560px;
	position: relative;
	left:0;
	
}
.posttitle{
	font-size:25px;
	font-family: 'Playfair Display';
	font-weight: bold;
  
}



.updatescontents{
	position: absolute;
	/* left:80%; */
  right:0%;
	top:10%;
	/* top:-400px; */
	/* bottom:1rem; */
	/* bottom:30rem; */
	  width:30%;
  height:24rem;
  border-radius: 8px;
  color:white;
  font-size:16px;
  font-family:'Poppins';
  /* padding-left:2rem;
  padding-top:2rem; */
  padding:2rem;

  background-color: #0a2458;
}

/* richtext */

.updatescontents > div:nth-child(n) > div:nth-child(n) > h5:nth-child(n){
    font-family: 'Poppins';

  font-size: 20px;

  font-weight: 500;

  font-stretch: normal;

  font-style: normal;
}


.updatescontents > div:nth-child(n) > div:nth-child(n) > p:nth-child(n){
    font-family: 'Poppins';

  font-size: 16px;

  font-weight: normal;

  font-stretch: normal;

  font-style: normal;
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
	/* margin-bottom:1rem; */
  position: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height:auto;

}
	
}
</style>