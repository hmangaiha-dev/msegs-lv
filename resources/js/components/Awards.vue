<template>
  <div class="projects">
    <span class="projectsback">
      <p class="headings" style="margin:auto">Awards</p>
      <p style="color: #707070;font-size:12px;">About Us / Awards</p>

    </span>
    <div class="container centercontainer">
      
      <div class="projectsrows"  >


<div class="cards">
          <img   src="../assets/awards/scho.png"  alt=""
            srcset="" class="cardimage"
          />          
          <div class="cardcontainer" >
            <p class="carddate" >2018</p>
            <span class="cardtitle">Skoch Order of Merit Award</span>
            <p class="cardtexts">Mizoram Scholarship Application Portal </p>
          </div>
        </div>


 <div class="cards">
          <img   src="../assets/awards/addma.png"  alt=""
            srcset="" class="cardimage"
          />          
          <div class="cardcontainer" >
            <p class="carddate" >2017</p>
            <span class="cardtitle">National e-Governance Award</span>
            <p class="cardtexts">Aizawl DDMA apps</p>
          </div>
        </div>

     <div class="cards">
          <img   src="../assets/awards/senhri.png"  alt=""
            srcset="" class="cardimage"
          />          
          <div class="cardcontainer" >
            <p class="carddate" >2016</p>
            <span class="cardtitle">National Platinum Award</span>
            <p class="cardtexts">Senhri CMS Porject </p>
          </div>
        </div>


            <div class="cards">
          <img   src="../assets/awards/inventory.png"  alt=""
            srcset="" class="cardimage"
          />          
          <div class="cardcontainer" >
            <p class="carddate" >2016</p>
            <span class="cardtitle">Skoch Order of Merit Award</span>
            <p class="cardtexts">Inventory Management System </p>
          </div>
        </div>


 <div class="cards">
          <img   src="../assets/awards/edist.png"  alt=""
            srcset="" class="cardimage"
          />          
          <div class="cardcontainer" >
            <p class="carddate" >2016</p>
            <span class="cardtitle">National Platinum Award</span>
            <p class="cardtexts">e-District Project </p>
          </div>
        </div>

    


        <div class="cards">
          <img   src="../assets/awards/5th.png"  alt=""
            srcset="" class="cardimage"
          />          
          <div class="cardcontainer" >
            <p class="carddate" >2014</p>
            <span class="cardtitle">5th e-North East Summit Award</span>
            <p class="cardtexts">Most Emerging I.T State of the year </p>
          </div>
        </div>


        

     
        
         




      <!-- <span v-for="award in awards" :key="award.id"> -->

        <!-- <div class="card">
          <img
            :src="require('../assets/'+ project.imgsrc)"
            alt=""
            srcset=""
            class="cardimage"
          />
          <div class="cardcontainer" >
            <span class="cardtitle">{{project.title}}</span>
            <p class="cardtexts">
              A single platform to get updates on covid cases, issue permit for
              travels, donations for pandemic, monitoring quarantine zones and
              more.
            </p>
          </div>
          <div class="cardbutton">
            <p class="seeproject" ><router-link  to='/projectdetails'> See Project <i class="fas fa-long-arrow-alt-right"></i></router-link></p>
          </div>
        </div> -->
<!-- <award-card :title="award.title" :subtitle="award.subtitle" :imgsrc="award.imgsrc" :id="award.id" :year="award.year" ></award-card> -->
      <!-- </span> -->
        

      </div>
    </div>
  </div>
</template>


<script>
import AwardCard from './AwardCard.vue'
export default {
  components:{AwardCard},
  data(){
    return{
      awards:[
        // {title:'m-covid',subtitle:' A single platform to get updates on covid cases, issue permit for travels donations for pandemic, monitoring quarantine zones and more.',imgsrc:"sdcproject.png"},
        
      //  {title:'5th e-North East Summit Award',year:'2014',subtitle:'Most Emerging I.T State of the year',imgsrc:'../../assets/address.png',},
      //  {title:'National Platinum Award',year:'2016',subtitle:'e-District Project',imgsrc:'../../assets/awards/edist.png',},
      //  {title:'Skoch Order of Merit Award',year:'2016',subtitle:'Inventory Management System',imgsrc:'../assets/dpar.jpg',},
      //  {title:'National Platinum Award',year:'2016',subtitle:'Senhri CMS Porject',imgsrc:'',},
      //  {title:'National e-Governance Award',year:'2017',subtitle:'Aizawl DDMA apps',imgsrc:'',},
      //  {title:'Skoch Order of Merit Award',year:'2018',subtitle:'Mizoram Scholarship Application Portal',imgsrc:'',},




      ]
    }
  },
  mounted(){
    window.scrollTo(0,0);
   
  },
 
};
</script>

<style lang="scss" scoped>
.projects {
  margin-top: auto;
  // z-index: 0;
}

.cards {
  // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.0);
  transition: 0.3s;
  width: 16rem;
  margin:1rem;
  min-height:10rem;
  height:20rem;
  border:1px solid #E4E5E6;
  position: relative;
  border-radius:5px;
}
.projectsback {
  background-color: #ececec;
  padding-top:3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.centercontainer{
  display: flex;
  justify-content: center;
}
.projectsrows {
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  
}


#app > div.projects > div > div > div > div.cardbutton > p > a{
    text-decoration: none;
    color: #f23d46;
}

@media screen and (max-width:800px){
  #app > div > div.spacing-top > div > div:nth-child(2){
    margin:0 6vw;
  }
  .projectsrows {
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  // margin:auto;
}
  .cards{
    width:90%;
    margin-bottom:12px;
    transition: 0.3s;
  width: 16rem;
  margin:0.5rem;
  min-height:10rem;
  height:20srem;
  border:1px solid #E4E5E6;
  position: relative;
  }
  
  
}
  @media only screen and (min-width:1367px) {

    
.cards {
  // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.0);
  transition: 0.3s;
  width: 340px;
  // min-width:380px;
  margin:0.5rem 15px;
  min-height:8rem;
  height:400px;
  border:1px solid #E4E5E6;
  position: relative;
  margin-bottom:30px;

}
  }
</style>
