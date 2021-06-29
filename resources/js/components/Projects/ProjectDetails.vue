<template>
  <div style="margin-top:-1rem">
    <div class="details">
      <p class="headings " style="margin:auto">Project Details</p>
      <p style="color: #707070;font-size:12px;"><router-link to="/projects" style="text-decoration:underline;color:#707070">Projects</router-link> / {{title}}</p>
    </div>
    <div class="container">
      <div class="detailsrows">
        <div class="col1">
          <div class="detailscard">
            <p class="detailstitle">
              {{title}}
            </p>
            <hr style="opacity:30%">
            <div class="detailscardcontainer">
              <!-- ///// -->
              <div class="detailscardrows">
                <div class="detailscardcol1">
                  Client
                </div>
                <div class="detailscardcol2">
                  {{client}}
                </div>
              </div>
<!-- \\\\\\ -->


              <div class="detailscardrows">
                <div class="detailscardcol1">
                  Hosted at
                </div>

                <div class="detailscardcol2">
                    {{hostedat}}
                </div>
              </div>
           

            <!-- \\\\\ -->

   <!-- ///// -->
              <div class="detailscardrows">
                <div class="detailscardcol1">
                  Developed by
                </div>
                <div class="detailscardcol2">
                  {{developedby}}
                </div>
              </div>
<!-- \\\\\\ -->

   <!-- ///// -->
              <div class="detailscardrows">
                <div class="detailscardcol1">
                  Goals
                </div>
                <div class="detailscardcol2">
                  {{goals}}
                </div>
              </div>
<!-- \\\\\\ -->
 </div>


            <hr style="opacity:30%">
            <div class="detailscardcontainer">
              <div class="detailscardrows">
                <div class="detailscardcol1">
                  Products
                </div>

                <div class="detailscardcol2"></div>
              </div>
              <div class="detailscardrows">
                <div class="detailscardcol1">
                  <img
                    src="../../assets/chrome.svg"
                    alt=""
                    srcset=""
                    class="detailscardcol1image"
                  />
                </div>

                <div class="detailscardcol2">
                  Web application
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col2">
          <img
            :src="'..'+imagepath"
            alt=""
            srcset=""
            class="col2image"
          />
          <p class="col2heading">
           {{subtitle}}
          </p>
          <p class="col2contents">
            <span v-html="contents"></span>
          </p>
          

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  
  data(){
    return{
      id:'',
      title:'',
      subtitle:'',
      imagepath:'',
      contents:'',
      client:'',
      hostedat:'',
      developedby:'',
      goals:'',
    }
  },
  created(){
    this.id = this.$route.params.id;
    console.log("ID",this.id);
    axios.get('/api/projects/'+this.id).then((response) => {
  console.log("DATA",response.data);
  this.title = response.data.title;
  this.subtitle = response.data.subtitle;
  this.imagepath = response.data.imagepath;
  this.contents = response.data.contents;
    this.client = response.data.client;
  this.hostedat = response.data.hostedat;
  this.developedby = response.data.developedby;
  this.goals = response.data.goals;


})

  },
  mounted(){
    window.scrollTo(0,0);
  }
};
</script>

<style lang="scss">
.details {
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 3rem 0;
}

.detailsrows {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}

.col1 {
  width: 30%;
}

.detailscard {
  margin-top:1rem;

  width: 100%;
  box-shadow: 1px 1px 4px grey;
  border-radius: 5px;
}
.detailstitle {
  // margin:auto;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-family: Poppins;
  color: #0a2458;
  font-weight: bold;
  font-size: 20px;
}

.detailscardcontainer {
  padding: 1rem;
}
.detailscardrows {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0.5rem 0 0.1rem 0;
}

.detailscardcol1 {
  width: 30%;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
}
.detailscardcol2 {
  width: 70%;
  padding-left: 14px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #76838f;
   overflow: hidden;
   text-overflow: ellipsis;
}

.col2 {
  width: 70%;
  padding: 1rem 1rem 1rem 2rem;
}
.col2image {
  width: 100%;
}
.col2heading {
  font-family: 'Playfair Display';
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: #393939;
  padding-top:16px;
}

.col2contents {
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #393939;
}

@media screen and(max-width:800px) {

.detailsrows {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

}

.col1 {
  width: 100%;
}

.detailscard {
  width: 100%;
  box-shadow: 1px 1px 4px grey;
  border-radius: 5px;
}
.detailstitle {
  // margin:auto;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-family: Poppins;
  color: #0a2458;
  font-weight: bold;
  font-size: 20px;
}

.detailscardcontainer {
  padding: 1rem;
}
.detailscardrows {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0.5rem 0 0.1rem 0;
}

.detailscardcol1 {
  width: 30%;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
}
.detailscardcol2 {
  width: 70%;
  padding-left: 14px;
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

.col2 {
  width: 100%;
  padding: 1rem 0rem 1rem 0rem;
}
.col2image {
  width: 100%;
}


  
}
</style>
