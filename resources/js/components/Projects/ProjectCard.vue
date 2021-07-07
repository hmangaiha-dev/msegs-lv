<template>
          <router-link  :to="{name: 'projectdetails', params: { id:id }}" >
 
        <div class="card">
          <img
            :src="'..'+imgsrc"
            alt=""
            srcset=""
            class="cardimage"
          />
          <div class="cardcontainer" >
            <p class="carddate" v-if="date">{{date}}</p>
            <span class="cardtitle">{{title}}</span>
            <p class="cardtexts">
              {{subtitle}}
            </p>
          </div>
          <div class="cardbutton">
            <p class="seeproject" > SEE PROJECT <i class="fas fa-long-arrow-alt-right"></i></p>
          </div>
        </div>
          </router-link>


   
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

<style lang="scss">

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
}
.cardcontainer {
  padding: 2px 16px;
}

.carddate {
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a1a1a1;
}

.cardtitle {
  margin: -2rem 0 -2rem 0;
  font-family: 'Playfair Display';
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  // line-height: 2;
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
  font-size: 14px;
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


#app > div > div.spacing-top > div > div > div > span:nth-child(n) > div > div.cardbutton > p > a{
  text-decoration: none;
    color: #f23d46;
    margin:auto
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
  height:540px;
  border:1px solid #E4E5E6;
  position: relative;

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
  line-height: 1.6;
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
