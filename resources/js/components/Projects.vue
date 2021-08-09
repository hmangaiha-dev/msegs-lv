<template>
  <div class="projects">
    <span class="projectsback">
      <p class="headings" style="margin:auto">Projects</p>
    </span>
    <div class="container centercontainer">
      


      
      <div class="projectsrows" >
        <span v-if="loading" class="loading" style="display:flex;flex-direction:row;flex-wrap:wrap"  >
          <span v-for="index in 3" :key="index">
<ProjectCardSkeleton/>

          </span>




        </span>



      <span v-else v-for="project in projects" :key="project.id">

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
        <span v-if="project.goals == '.'"></span>
<project-card :title="project.title" :subtitle="project.subtitle" :imgsrc="project.imagepath" :id="project.id" :date="project.date" v-else ></project-card>
      </span>
        

      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from './Projects/ProjectCard.vue'
import ProjectCardSkeleton from './Projects/ProjectCardSkeleton.vue'

export default {
  components:{ProjectCard,ProjectCardSkeleton},
  data(){
    return{
      loading:true,
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
      this.loading = false;
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
.centercontainer{
  display: flex;
  justify-content: center;
}
.projectsrows {
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: center;
  align-content: flex-start;
  
}


#app > div.projects > div > div > div > div.cardbutton > p > a{
    text-decoration: none;
    color: #f23d46;
}

// .loading{
//   display:flex;flex-direction:row;flex-wrap:wrap;
// }

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
