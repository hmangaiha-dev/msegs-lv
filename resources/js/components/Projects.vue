<template>
  <div class="projects">
    <span class="projectsback">
      <p class="headings" style="margin:auto">Projects</p>
    </span>
    <div class="container">
      <div class="projectsrows" >
      <span v-for="project in projects" :key="project.id">

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
<project-card :title="project.title" :subtitle="project.subtitle" :imgsrc="project.imagepath" :id="project.id" ></project-card>
      </span>
        

      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from './Projects/ProjectCard.vue'
export default {
  components:{ProjectCard},
  data(){
    return{
      projects:[
        // {title:'m-covid',subtitle:' A single platform to get updates on covid cases, issue permit for travels donations for pandemic, monitoring quarantine zones and more.',imgsrc:"sdcproject.png"},
        
       

      ]
    }
  },
  mounted(){
    window.scrollTo(0,0);
   
  },
  created(){
     this.axios.get('/api/projects/').then((response)=>{
      console.log(response.data);
      this.projects=response.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.projects {
  margin-top: auto;
  // z-index: 0;
}
.projectsback {
  background-color: #ececec;
  padding-top:3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.projectsrows {
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
  .card{
    width:95%;
    margin-bottom:12px;
  }
  
}
</style>
