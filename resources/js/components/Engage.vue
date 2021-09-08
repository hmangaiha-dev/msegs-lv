<template>
  <div style="margin-top:auto">
    <div class="ourservices">
      <p class="headings " style="margin:auto">Engaging with Msegs</p>
    </div>

    <div class="container" style="padding:2rem 0 2rem 0 ;">
     
       
<!-- <div class="mainrow">

     <div class="rows1" v-if="resources.length">
      <div   v-for="resource in resources" :key="resource.id">
            <a :href="resource.path" target="_blank">

          <div class="resourcesitems">
            <div class="resourcescontents">
              <p class="resourcescontentsdate">{{resource.date}}</p>
              <p class="resourcescontentstexts">
                {{resource.title}}
              </p>
            </div>

            <div class="resourcesprinter">
             <img src="../assets/pdficon.svg" alt="" srcset="" class="pdficon"/>
            </div>

          </div>
            </a>
      </div>
    
      </div>

          

</div> -->


<div class="readingcontainer">

  <p class="regularheading">Engaging with MSeGS</p>
  <p class="regulartexts">
    Mizoram State e-Governance Society (MSEGS) has a vision to administer the implementation  of e-Governance projects for the overall benefit of the citizens and public by setting up the  necessary administrative, financial, legal and technical framework, implementation  mechanism and resources in the State of Mizoram 


  </p>
  <!-- <p style="margin-top:1rem;"></p> -->
  <p class="regulartexts">
    As per the policy laid down in the Memorandum of Association (MoA) of the Society, MSeGS  is working with Central Government Ministries and Departments; State Government  Departments; and Public Sector Undertakings and may also work with International  Agencies when the end recipient of that service is the Government. MSeGS has a provision to  enter into revenue-generating engagements with the Private sector if the engagement is in  the interest of public service and to achieve the vision of the Society. 
  </p>

<p class="regularheading">The major engagements of the Society are: </p>


<p class="regulartexts">1. MSeGS providing its services in consultation with other concerned Departments in  Central and State and take appropriate steps for improving Citizen Services for use of  IT.</p>
<p class="regulartexts">2. MSeGS facilitating in the implementation of Citizen Charters framed by the  Departments under Government of Mizoram and its Offices using e-Governance and  IT tools.</p>
<p class="regulartexts">3. MSeGS established IT infrastructure projects in various Districts and make available  Connectivity and access to Information through Internet and Intranet Service. </p>
<p class="regulartexts">4. MSeGS provides IT resources and support as required by any Department/ Offices/  Public Sectors for IT and e-governance applications including hiring of professionals,  consultancy services, procurement of hardware and software, development of special  purpose software projects involving application of Information Technology on  turnkey basis. </p>
<p class="regulartexts">5. The Society also enters in collaborations, MoUs, partnerships, agreements and  contracts with Consulting Service or other organizations for purchase, installation and  go-live of equipment and services. </p>
<p class="regulartexts">6. MSeGS hiring professionals, consultants and other specialized agencies as found  necessary for efficient handling and conduct of the business of the society for the  interest of the public. Further, MSeGS also outsource Professionals to other  Departments. </p>
<p class="regulartexts">7. MSeGS facilitate inter-departmental coordination in all IT related matters and to  devise modalities for information sharing so as to avoid duplication of data entry and  development of software.  </p>
<p class="regulartexts">8. MSeGS provides international standard quality of Services as it is an ISO certified  Society. </p>
<p class="regulartexts">9. MSeGS workout the Standard of Service and Service Level Agreements in e governance for various Departments on their citizen services in the field of  Information Technology. </p>
<p class="regulartexts">10. MSeGS performs all necessary means for the safety and security of data and help in  laying policies procedures guidelines and rules for achieving the objectives of security  and authentication. This includes use of digital signatures and public key  infrastructure. </p>
</div>

    </div>
  </div>




</template>

<script>

export default {
  mounted(){
    window.scrollTo(0,0);
  },
    data() {
        return {
            resources: [
                    // {title:'Activities of MSeGS',path:'https://drive.google.com/file/d/1m_O-l5u9otk3o80oDDRvpo0arZoFAdQ4/view?usp=sharing'},
                    // {title:'Annexure I MOA and Rules & Regulations',path:'https://drive.google.com/file/d/108OHk3qxADuNj0JYYwhkOZJHsawrSwqN/view?usp=sharing'},
                    // {title:'Annexure II Certificate of Registration',path:'https://drive.google.com/file/d/1ZC6x_KqKvzuVha6eSRFFO9zvnX_FOI3a/view?usp=sharing'},
                    // {title:'Annexure III Board of Governors constitution',path:'https://drive.google.com/file/d/1NgfFmGwD55YnYCfiI90J4jG37TWVgtFu/view?usp=sharing'},
                    // {title:'Annexure IV Executive committee',path:'https://drive.google.com/file/d/1isJdrFwSe9N4C1GRUCx2lmWYxEGJc57u/view?usp=sharing'},






            ],  
            errors:''      
        };
    },
  //  created() {
  //       this.axios.get(`/api/resources/index/?date=2021`).then((response) => {
  //           console.log(response.data);
  //           this.resources = response.data;
  //       }).
  //       catch((error)=>{
  //         this.errors = error
  //       });
    // },
    // methods:{
    //   yearfilter(date){
    //        this.axios.get(`/api/resources/index/?date=`+date)
    //        .then((response) => {
    //         console.log(response.data);
    //         this.resources = response.data;
    //     }).
    //     catch((error)=>{
    //       this.errors = error;
    //       console.log(this.errors)
    //     });
    //   }
    // }
};
</script>

<style lang="scss">
.ourservices {
  background-color: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 3rem 0;
}

.readingcontainer{
  margin:0 4rem;
}
.regularheading {

  font-family: Poppins;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  //   line-height: 1.56;
  padding-top: 1rem 0;
  letter-spacing: normal;
  color: #4e4e4e;
}
.regulartexts{
  font-size: 14px;
  padding-bottom:1rem ;

  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  //   line-height: 1.56;
  padding-top: 1rem 0;
  letter-spacing: normal;
  color: #7e7e7e;
}
.mainrow{
  display: flex;
  flex-direction: row;
}
.rows1 {
  display: flex;
  flex-direction: column;
  width:80%;
}

.resourcescol {
  // width:80%;
  width:100%;
  display: flex;
  flex-direction: column;
}

.noresources{
  width:80%;
}

.archivecol {
  width:20%;
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
//   justify-content: center;
  align-items: center;
}

.resourcesitems {
  display: flex;
  flex-direction: row;
  padding: 6px 10.5px 8.5px 24.5px;
  border-radius: 2.5px;
  // border: solid 0.5px #e8e8e8;
  border:1px solid #E4E5E6;

  background-color: #ffffff;
  align-items: center;
  margin-bottom:10px;
  // justify-content: center;
}

.resourcesitems:hover {
  box-shadow: 1px 2px 5px rgba($color: #000000, $alpha: 0.2);
}
.resourcescontents {
  width: 95%;
  padding:1rem;
}

.resourcesprinter {
  width: 5%;
  padding-right: 1rem;
  
}

.resourcescontentsdate {
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a1a1a1;
}

.resourcescontentstexts {
  font-family: "Playfair Display";
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: left;
  color: #272727;
}

.archivetitle {
  font-family: PlayfairDisplay;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
}

.archivedates {
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
  padding-top:1rem;
  cursor: pointer;
}
.archivemobile{
  display: none;
}


@media screen and(max-width:800px){
//archivemobile selection options


.mainrow{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.archivemobile{
  display: block;
  width:100%;
  
}
.archivemobile > label:nth-child(1){
  font-family: 'Playfair Display';
  font-size: 16px;
  font-weight: bold;
  color: #2c3134;
}
#year{
  width:100%;
  border:1px solid #E4E5E6;
  padding:1rem 0;
  padding-left:1rem;
  border-radius: 6px;
 font-family: 'Poppins';
  font-size: 14px;
  color: #2c3134;
  
  }
  #year > option:nth-child(n){
    width:100%;
  border:1px solid #E4E5E6;
  padding:1rem 0;
  padding-left:1rem;
 font-family: Poppins;
  font-size: 14px;
  color: #2c3134;
  box-shadow: none;
  
  }
  //container
 #app > div > div.spacing-top > div > div.container {
   margin:0 8vw;
 }
.rows1 {
  display: flex;
  flex-direction: column;
}
.resourcescol {
  width:100%;
}
.pdficon{
  margin-right:2rem;
}

.archivecol{
  display: none;

}


}
</style>
