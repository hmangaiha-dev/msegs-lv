<template>
  <div style="margin-top:auto">
    <div class="ourservices">
      <p class="headings " style="margin:auto">RTI</p>
    </div>

    <div class="container" style="padding:2rem 0 2rem 0 ;">
     
       <div>
         <h1>MIZORAM STATE e-GOVERNANCE SOCIETY (MSeGS)
</h1>

        <h2> RTI Information:</h2>
        <p class="regulartexts">
Mizoram State e-Governance Society (MSeGS) is a non profit society under Govt of Mizoram 
setup on 31st January, 2006, under the Societies Registration Act 1860 (Act No XXI of 
1860) and as modified by the societies Registration (extension to Mizoram) Act, 1976 
(Mizoram Act No. III of 1977) and bearing registration No. SR/MZ-89 of 2005-06. 
Government of India and Government of Mizoram are the main promoters of this society. 
        </p>

<b>Mandatory provisions of Right to Information Act 2005 Ref. Clause b (i) to (xvii) 
under Section 4, Sub-section 1</b>

<p>
Mizoram State e-Governance Society is construed a public authority under Section 2 (h) of 
RTI Act 2005. Accordingly under Section 4 (1) (b) of the act it is required to publish the 
particulars of its organization, functions and duties etc and update these on a regular basis. 
Mizoram State e-Governance Society furnishes the following details in compliance with the 
provisions of Section 4(1)(b) of RTI Act 2005:</p>

<b>I. The particulars of its organization, functions and duties. </b>
<p>
Mizoram State e-Governance Society is a society registered under the Societies Registration 
Act 1860 (Act No XXI of 1860) and as modified by the societies Registration (extension to 
Mizoram) Act, 1976 (Mizoram Act No. III of 1977). The following information is provided 
on the Organization and functions of Mizoram State e-Governance Society:</p>

<b>1. About MSeGS: </b>
Mizoram State e-Governance Society (MSEGS) was established in 2005 and is 
registered under the Societies Registration Act 1860 (Act No XXI of 1860) and as 
modified by the societies Registration (extension to Mizoram) Act, 1976 (Mizoram 
Act No. III of 1977). The society facilitated establishment and setting up of major e-Governance projects like the State Data Center (SDC), State Wide Area Network 
(SWAN) and Common Service Centre (CSC) and various other e-Government 
projects in the state.

<b>2. Vision:</b>
<p>
The vision of the Society is to administer the implementation of e-Governance 
projects for the overall benefit of the citizens and public by setting up the necessary 
administrative, financial, legal and technical framework, implementation 
mechanism and resources in the State of Mizoram. </p>
<b>3. Functions: The function of the society are:</b>
<p>
  <ol>
<li>a. Take decision on matters of policy relating to the administration, working and 
control of the Society.</li>
<li>b. Frame Rules, Regulations and Bye-laws for the conduct of the affairs of the 
Mizoram E-Governance Society to add, amend, or repeal the rules and 
regulation from time to time.</li>
<li>c. Consider, approve and authorize operation of the funds of the Society. Collect 
payments and user charges on behalf of other departments and agencies and 
transfer/ utilize it in the manner prescribed in the agreements.</li>
<li>d. Delegate, to such extent as it may deem necessary, any of its powers to any 
Officer or the Committees constituted by the Board.</li>
<li>e. Create project based contract positions and handle the work on job-work 
and/or outsourcing basis for the Society, lay down terms and conditions and 
method of hiring such human resources.</li>
<li>f. Negotiate, enter into and make contracts and deeds on behalf of the Society 
without any Government support. To enter into legal and corporate 
agreements for and on behalf of the society and to sue and defend all legal 
proceedings on behalf of the society;</li>
<li>g. To prepare and execute the detailed plans and programmes for working of the 
Society and to carry on its administration and management.</li>
<li>h. To have custody and ensure proper utilization of the funds of the Society and 
to manage all the resources of the Society.</li>
<li>i. To provide the required operating, administrative, technical, ministerial and 
other manpower under MSEGS on job work, contract or outsourcing basis for 
ensuring the efficient operation and management of the projects and the 
affairs of the society and to prescribe the conditions for hiring and firing of 
such manpower by the other departments and organizations as and when 
required.</li>
<li>j. To consider and pass such Resolutions on the annual report, the annual 
accounts and the financial estimates of the society as it thinks fit.</li>
</ol>
</p>
<b>4. Memorandum of Association (MoA) & Rules & Regulations: Can be seen at
ANNEXURE I</b>
        <p style="margin-top:1rem ">  </p>

<b>5. Certificate of incorporation: can be seen at ANNEXURE II</b>


       </div>
<div class="mainrow">

     <div class="rows1" v-if="resources.length">
      <div   v-for="resource in resources" :key="resource.id">
        <!-- <div class="resourcescol"> -->
            <a :href="resource.path" target="_blank" >

          <div class="resourcesitems">
            <div class="resourcescontents">
              <p class="resourcescontentsdate">{{resource.date}}</p>
              <p class="resourcescontentstexts">
                {{resource.title}}
              </p>
            </div>

            <div class="resourcesprinter">
             <!-- <a href="../assets/biometri.pdf" download="biometric.pdf">  -->
             <img src="../assets/pdficon.svg" alt="" srcset="" class="pdficon"/>
            </div>

          </div>
            </a>
        <!-- </div>       -->
      </div>
    
      </div>
 

     

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
              {title:'RTI MSeGS ',path:'https://drive.google.com/file/d/1iEX_GwuBIKfz8KFrYgyCxP6LqlIGM59F/view?usp=sharing'},
           


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
.regulartexts{
  font-size: 16px;
  font-family: 'Roboto';
  padding:1rem 0 ;
}

.ourservices {
  background-color: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 3rem 0;
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
