<template>



       <!-- <agile :dots="true" :autoplay="true" :navButtons="false" :mobileFirst="true"> -->
        <div class="slide">
            

<div class="updatesrows " >
	
        <img src="../assets/mysticalMizoram.jpg" alt="" srcset="" class="updateimage" />
        <!-- <div class="updatescontents">
          <div v-for="post in posts" :key="post.id">
            <h3>{{post.title}}</h3>
            <p>{{post.date}}</p>
            <p>{{post.published}}</p>


            <div v-html="post.contents"></div>

          </div>

        </div> -->
		  <div class="updatescontents">

	   
          <!-- <div v-for="post in posts" :key="post.id"> -->
            <p class="posttitle">{{title}}</p>
            <!-- <p style="font-size:14px;">{{post.date}}</p> -->
			<p style="padding:1rem 0"></p>
            <!-- <p>{{post.published}}</p> -->


            <div v-html="contents"></div>

          </div>

        </div>
        </div>



        <!-- </div> -->
        
       
    <!-- </agile> -->
 
</template>

<script>
// import { VueAgile } from 'vue-agile'
export default {
  components: {
        // agile: VueAgile 
    },
	data(){
		return{
            title:'Mizoram Tourism',
            contents:'<p>Unveiling a new way to explore </p><p> Mizoram, journey into Mizoram using</p><p>the various features found on the</p><p>  official website.</p> <div style="margin:10px;"> </div><p> Download the official App to experience </p><p>Mystical Mizoram on the palm of your hands.</p> <br><a href="https://mizoramtourism.com/" style="color: #f23d46" target=_blank>Visit website</a>', 

		}
	},


  created(){
    //  this.axios.get("/api/posts/").then((response) => {
    //         // console.log(response.data);
    //         this.posts = response.data;
            
    //     });
  }

}
</script>

<style lang="scss" scoped>
.updatesrows{
	/* margin-bottom:-20rem; */
  position:relative;
  height:600px;

}
.updateimage{
  /* width: 42vw; */
  /* height: auto; */
  width:90%;
  // height:560px;
  height: auto;
	position: relative;
	left:18%;
	
}
.posttitle{
	font-size:25px;
	font-family: 'Playfair Display';
	font-weight: bold;
  
}



.updatescontents{
	position: absolute;
	/* left:80%; */
  // old right:0%;
  left:0%;
	//  old top:10%;
	top: 15%;
  /* top:-400px; */
	/* bottom:1rem; */
	/* bottom:30rem; */
	  width:30%;
  // height:24rem;
  height: auto;
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

.updatescontents > div:nth-child(n) > div:nth-child(n) > h3:nth-child(n){
  font-family: 'Poppins';

  font-size: 20px;

  font-weight: 500;

  font-stretch: normal;

  font-style: normal;
}


.updatescontents > div:nth-child(1) > div:nth-child(3) > p:nth-child(n){
   font-family: 'Poppins';

  font-size: 16px;

  font-weight: normal;

  font-stretch: normal;

  font-style: normal;
  background: red;
  border:3px solid red;
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
    margin:0 0;
		
	}
	.updatesrows{
	/* margin-bottom:1rem; */
  position: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height:auto;

}

// .container{
//   margin:0 4vw;
// }
	
}
</style>