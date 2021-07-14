<template>
 
        <div class="card">

          <span
            src="'.."
            alt=""
            srcset=""
            class="cardimage shine"
          ></span>
          <div class="cardcontainer " >
            <p class="carddate shine" > </p>
            <p class="cardtitle shine" style="margin-left:-4rem;"></p>
            <p class="cardtexts shine" style="margin-top:3rem;width:12rem"></p><br>
            <p class="cardtexts shine" style="margin-top:0.3rem;width:5rem"></p><br>
            <p class="cardtexts shine" style="margin-top:0.3rem;width:3rem"></p><br>
            <p class="cardtexts shine" style="margin-top:0.3rem;width:6rem"></p><br>


          </div>
          <div class="cardbutton shine">
            <!-- <p class="seeproject" > SEE PROJECT <i class="fas fa-long-arrow-alt-right"></i></p> -->
          </div>

        </div>


   
</template>

<script>

export default {
 props:['title','subtitle','imgsrc','id','date'
 ],
 data(){
     return{

     }
 }
};
</script>

<style lang="scss" scoped>

.card {
  // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.0);
  transition: 0.3s;
  width: 16rem;
  margin:1rem;
  min-height:10rem;
  height:26rem;
  border:1px solid #E4E5E6;
  position: relative;
  border-radius:5px;


}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.cardimage {
  width: 100%;
  color:grey;
  // background: grey;
  height:10rem;
}
.cardcontainer {
  padding: 2px 16px;
}

.carddate {

  height:0.8rem;
  width:4rem;
  background: grey;
}

.cardtitle {
  // margin: -2rem 0 -2rem 0;\
  margin-top:1rem;
  font-family: 'Playfair Display';
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  // line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
  width:10rem;
  height:1.2rem;
  background: grey;
}

.cardtexts {
   display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #76838f;
  // margin-top:3rem;
  height:0.2rem;
  background: grey;
  
}

.cardbutton {
  position:absolute;
  bottom:0;
  width:100%;
  background-color: rgba(10, 10, 10, 0.04);
  height: 50px;
  // margin-top: 1rem;
  
  display:flex;
  flex-direction:column;
  justify-content: center;
  
  // margin-top:-1.8rem;
}

.seeproject {
  padding: 10px 16px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #f23d46;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

}


// #app > div > div.spacing-top > div > div > div > span:nth-child(n) > div > div.cardbutton > p > a{
//   text-decoration: none;
//     color: #f23d46;
//     margin:auto
// }


.shine {
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 800px; 
  display: inline-block;
  // position: relative; 
  
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards; 
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
  }

  
@keyframes placeholderShimmer {
  0% {
    background-position: -468px 0;
  }
  
  100% {
    background-position: 468px 0; 
  }
}

@media screen and (max-width:800px){
  .card{
    width:90%;
    margin-bottom:12px;
    transition: 0.3s;
  width: 16rem;
  margin:0.5rem;
  min-height:10rem;
  height:26rem;
  border:1px solid #E4E5E6;
  position: relative;
  }
  
.cardtexts {
   display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #76838f;
}


  .cardbutton {
  position:absolute;
  bottom:0;
  width:100%;
  background-color: rgba(10, 10, 10, 0.04);
  height: 50px;
  // margin-top: 1rem;
  
  display:flex;
  flex-direction:column;
  justify-content: center;
  
  // margin-top:-1.8rem;
}

}

  @media only screen and (min-width:1367px) {

    
.card {
  // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.0);
  transition: 0.3s;
  width: 340px;
  // min-width:380px;
  margin:0.5rem 15px;
  min-height:10rem;
  height:512px;
  border:1px solid #E4E5E6;
  position: relative;
  margin-bottom:30px;

}




.carddate {
  font-family: 'Poppins';
  font-size: 12px;
  
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a1a1a1;
  padding-top:16px;
}

.cardtitle {
  margin: -2rem 0 -2rem 0;
  font-family: 'Playfair Display';
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
}

.cardtexts {
   display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  font-family: Poppins;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #76838f;
  padding-top:8px;
}

.cardbutton {
  position:absolute;
  bottom:0;
  width:100%;
  background-color: rgba(10, 10, 10, 0.04);
  height: 50px;
  // margin-top: 1rem;
  
  display:flex;
  flex-direction:column;
  justify-content: center;
  
  // margin-top:-1.8rem;
}

.seeproject {
  padding: 10px 16px;

  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #f23d46;
}

  }
</style>
