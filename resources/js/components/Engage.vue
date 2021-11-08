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

  <!-- <p class="regularheading">Engaging with MSeGS</p> -->
  <p class="regulartexts">
Mizoram State e-Governance Society (MSeGS) is a nodal implementing agency for various e governance projects within the state of Mizoram and has been implemented various state  mission mode projects and integrated projects under national e-governance plan. All the  engagements of MSeGS for implementation of various e-governance projects are so far have  been awarded on a nomination basis only. As long as MSeGS is 100% owned by the state  government, the state government departments can directly place work order to MSeGS  relating to computer hardware, software and consultancy services. Hence, MSeGS does not  participate in any tender bidding process. The general practice of government of Mizoram is  to get specific internal approvals of the competent authorities within their department.  

  </p>
  <!-- <p style="margin-top:1rem;"></p> -->


<p class="regularheading">MSeGS’s Business Benefit  </p>
  <p class="regulartexts">
MSeGS is an international standard organization with highly qualified engineers and  management teams. This organization have an experience more than 15 years in the field of  business management, software application architecture & development, hardware &  networking architecture, etc. Any projects taken up by MSeGS are well documented with  standardize documentation and delivered those documents to our clients for their future  reference. 
  </p>

<p class="regulartexts">
MSeGS is a self-sufficient organization and non-profit service-oriented organization. MSeGS is  entitled for Tax Deduction at Source (TDS) exemption for government departments and  service tax exemption for any grant-in-aid engagements. Whenever MSeGS is taking up grant in-aid projects under central or state government schemes, MSeGS is mandated to provide  utilization certificate for the expenses incurred.  
  </p>

<p class="regulartexts">
MSeGS does not enter into any revenue generating engagement with the private sector. The  performance of MSeGS is not measure based on financial results rather its measured based on  social cost benefit. Any government departments wanted to provide online government  services to its citizen, MSeGS are always ready to develop such online government services in  free of cost to that departments. 
  </p>

  <p class="regularheading">
    Relevant GFR provisions
  </p>

  <p class="regulartexts">
    MSeGS being a public institution as per rules of Information Commission of India , it can be  engaged for consultant and non-consultant by nomination basis with adequate justification.  GFR does provide the following permissible: 
  </p>


  <p class="regulartexts">
    (1) GFR Rule 194 (iv) states “Under some special circumstances, it may become necessary to  select a particular consultant where adequate justification is available for such single - source selection in the context of the overall interest of the Ministry or Department. Full  justification for single-source selection should be recorded in the file and approval of the  competent authority obtained before resorting to such single-source selection”. 
  </p>

  <p class="regulartexts">
    (2) Rule 204 states <b>"Procurement of Non-consulting services by nomination:</b> Should it  become necessary, in an exceptional situation to procure a non-consulting service from  a specifically chosen contractor, the Competent Authority in the Ministry or Department  may do so in consultation with the Financial Adviser. In such cases the detailed  justification, the circumstances leading to such procurement by choice and the special  interest or purpose it shall serve, shall form an integral part of the proposal.”
  </p>
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

.readingcontainer{
  margin:0 0.5rem;
}
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
