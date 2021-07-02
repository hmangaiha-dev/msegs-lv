<template>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"> -->
    <ul class="nav" style="height: 5rem">
        <div class="navbar">
            <div class="desktopicons">
                <a href="/">
                    <img class="navlogo" src="../assets/logo1.svg"
                /></a>
            </div>
            <!-- <p>    onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"</p> -->

            <div class="mobileicons">
                <a href="/">
                    <img class="mobilenavlogo" src="../assets/logo1.svg"
                /></a>
                <div class="impicons">
                    
                    <!-- <i class="fas fa-wheelchair"></i> -->
                    <!-- <i class="fas fa-search" @click="searching"></i> -->

                    <a
                        @click="hamburgering"
                        style="z-index: 10; margin-left: 18vw"
                    >
                        <button
                            class="menu"
                            @click="burgers"
                            aria-label="Main Menu"
                        >
                            <svg width="40" height="40" viewBox="0 0 100 100">
                                <path
                                    class="line line1"
                                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                                />
                                <path class="line line2" d="M 20,50 H 80" />
                                <path
                                    class="line line3"
                                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                                />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
            <span class="itemslist">
                <li class="items"><router-link to="/" exact-active-class="activating">Home </router-link></li>
                <li class="items">
                    <router-link to="/services" exact-active-class="activating">Services</router-link>
                </li>
                <li class="items">
                    <router-link to="/projects" exact-active-class="activating">Projects</router-link>
                </li>
                <li class="items">
                    <router-link to="/resources" exact-active-class="activating">Resources</router-link>
                </li>
                <!-- <li class="items"> <router-link to="/aboutus">About us</router-link> </li> -->
                <li class="dropdown items">
                    <span
                        >About us
                        <i
                            class="fas fa-chevron-right"
                            style="padding-left: 2px"
                        ></i
                    ></span>
                    <div class="dropdown-content">
                        <router-link to="/aboutus"
                            ><li class="items">Who we are</li></router-link
                        >
                        <router-link to="/pioneers"
                            ><li class="items">Pioneers</li></router-link
                        >
                        <router-link to="/awards"
                            ><li class="items">Awards</li></router-link
                        >
                        <router-link to="/page404"
                            ><li class="items">
                                Engaging with Msegs
                            </li></router-link
                        >
                    </div>
                </li>
                <li class="items" >
                    <router-link to="/contactus" exact-active-class="activating">Contact Us</router-link>
                </li>
                <!-- <i class="fas fa-wheelchair" style="color: white"></i> -->
            </span>
        </div>
        <transition
            name="custom-classes-transition"
            enter-active-class="animated bounceInRight"
            leave-active-class="animated bounceOutRight"
        >
            <div
                class="navlist"
                v-if="expand"
                style="position: fixed; z-index: 100"
            >
                <span class="mobileitemslist">
                    <!-- <transition name="fade"  > -->

                    <div v-if="expand">
                        <!-- <div class="mobileview"> -->

                        <router-link to="/">
                            <li class="items" @click="chickenburger">
                                Home
                            </li></router-link
                        >
                        <router-link to="/services">
                            <li class="items" @click="chickenburger">
                                Services
                            </li></router-link
                        >
                        <router-link to="/projects"
                            ><li class="items" @click="chickenburger">
                                Projects
                            </li></router-link
                        >
                        <router-link to="/resources">
                            <li class="items" @click="chickenburger">
                                Resources
                            </li></router-link
                        >
                        <!-- <li class="items"> <router-link to="/aboutus">About us</router-link> </li> -->
                            <span @click="mobiledropdowning">
                        
                        <li class="items">
                                About us
                                <i
                                    class="
                                        fas
                                        fa-angle-right
                                        dropdownarrownavbar
                                    "
                                    style="position: absolute; right: 80px"
                                ></i
                            >
                            <div
                                :class="{
                                    mobiledropdown: mobiledropdown,
                                    'animated bounceInRight':
                                        'animated bounceInUp',
                                }"
                                @click="chickenburger"
                            >
                                <router-link to="/aboutus"
                                    ><li class="itemsdrop">
                                        Who we are
                                    </li></router-link
                                >
                                <router-link to="/pioneers"
                                    ><li class="itemsdrop">
                                        Pioneers
                                    </li></router-link
                                >
                                <router-link to="/awards"
                                    ><li class="itemsdrop">
                                        Awards
                                    </li></router-link
                                >
                                <router-link to="/page404"
                                    ><li class="itemsdrop">
                                        Engaging with Msegs
                                    </li></router-link
                                >
                            </div>
                        </li></span>
                        <router-link to="/contactus" @click="chickenburger"
                            ><li class="items">Contact Us</li></router-link
                        >
                    </div>
                    <!-- </transition> -->

                    <!-- </div> -->
                </span>
            </div>
        </transition>
        <!-- <div :class={searchbox:searchbox}>
  
  <input type=text class="searchtextbox"/>
  </div> -->
    </ul>
</template>
<script>
// import './assets/msegsstyles.scss'

export default {
    data() {
        return {
            // hamburgerActive: true,
            expand: false,
            trans: true,
            mobiledropdown: true,
            searchbox: false,
        };
    },

    methods: {
        hamburgering() {
            // this.hamburgerActive = !this.hamburgerActive;
            this.expand = !this.expand;
            console.log("Triggered");
        },
        mobiledropdowning() {
            this.mobiledropdown = !this.mobiledropdown;
            var arrows = document.querySelector(".dropdownarrownavbar");

            if (this.mobiledropdown == false) {
                arrows.classList.remove("fa-angle-right");
                arrows.classList.add("fa-angle-down");
            } else {
                arrows.classList.remove("fa-angle-down");
                arrows.classList.add("fa-angle-right");
            }
        },
        searching() {
            this.searchbox = !this.searchbox;
        },
        burgers() {
            // console.log("element",element.values);
            var elment = document.querySelector(".menu");
            // console.log("element name",element);
            // if (element.classList) {
            // element.classList.toggle('opened');
            // }
            // else{
            // element.classList.toggle('line');
            // }
            elment.classList.toggle("opened");
            // console.log("element name 2",element);

            elment.setAttribute(
                "aria-expanded",
                elment.classList.contains("opened")
            );
            // console.log("element name 2",element);
        },
        chickenburger() {
            this.expand = !this.expand;
            this.burgers();
        },
    },
};
</script>

<style lang="scss">
@import "../assets/msegsstyles.scss";

.fade-enter-active,
.fade-leave-active {
    transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 25;
}

.nav {
    background-color: $primarycolor;
    position: fixed;
    width: 100%;
    z-index: 5;
}
.navbar {
    // margin: 0 16vw 0px 16vw;
    margin: 0rem 12vw 0px 12vw;
}

#app > ul > div > span > li.dropdown.items > div > a:nth-child(n) > li {
    text-decoration: none;
    text-align: left;
    font-family: Poppins;
    font-size: 16px;
    color: $primarycolor;
    display: inline-block;
}
#app > ul > div > span > li.dropdown.items > div > a:nth-child(n) {
    text-decoration: none;
    text-align: left;

    color: $primarycolor;
}

#app > ul > div > span > li.dropdown.items > div > a:nth-child(3) > li {
    text-decoration: none;
    text-align: left;

    color: $primarycolor;
}

.navbar {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    background-color: $primarycolor;
    justify-content: space-between;
    align-items: center;
}
.mobileitemslist {
    display: none;
}

.navlogo {
    width: 140px;
    height: 40px;
    margin: 16px 16px 16px 0;
    align-self: flex-start;
}

.itemslist {
    display: inline-flex;
    align-items: flex-end;
    align-items: center;
    a {
        color: white;
    }
}

#app > div > ul > div > span > li:nth-child(n) > a::after {
    // border-bottom:2px solid $misccolours;
    // transition:width 3s;
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: $misccolours;
    // background: #000;
    transition: width 0.3s;
   
}
#app > div > ul > div > span > li:nth-child(n) > a:hover::after {
  
    width: 100%;
}

// active link
.activating{
 
 border-bottom: 3px solid $misccolours;

}


.items {
    //   width: 50px;
    //   height: 16.5px;
    margin: auto 16px auto 10.3px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    // padding: 12px 16px;
    z-index: 1;
    text-decoration: none;
    border-top: 1px solid #dc3d32;
    li {
        color: $primarycolor;
        text-align: left;
        font-family: Poppins;
        // margin-left:-0.05rem;
        margin: 0;
        padding-left: 1rem;
        padding-top: 8px;
        padding-bottom: 8px;
    }
}

.dropdown:hover .dropdown-content {
    display: block;
}

.mobileicons {
    display: none;
}
//dropdown side decoration
#app
    > div
    > ul
    > div
    > span
    > li.dropdown.items
    > div
    > a:nth-child(n)
    > li:hover {
    border-left: 3px solid $misccolours;
    // padding-left: 1rem;
    background: #ececec;
    font-weight: 600;
    margin-left: -1px;
}
#app > div > ul > div > span > li.dropdown.items > span:hover {
    i {
        transform: rotate(90deg);
        transition-delay: 0.1s;
        transition-timing-function: ease-in;
    }
}

.router-link-exact-active {
    // border-bottom: 2px solid #dc3d32;
    // width:2px;
    // width:4px;
}
@media only screen and(max-width:800px) {

  // padding for list nav mobile
  .mobileitemslist > div:nth-child(1) > a:nth-child(n) > li:nth-child(n){
    // background: chartreuse;
    padding-right:50vw;
  }
    // #app > div > ul{
    //   position:fixed;
    //   z-index: 100;
    // }
    .nav {
        position: fixed;
        width: 100%;
        margin: 0;
        z-index: 100;
    }
    #app > div > ul {
        // background: darkcyan;
        margin: 0;
        padding: 0;
    }
    .navbar {
        flex-direction: column;
        // margin: 4px 3rem 0 20px;
        // width: 100%;
        margin: 1rem 4vw 0 8vw;
        // background-color: cyan;
        width: device-width;
        // margin: 0;
        // padding-left:20px;
    }

    .navlist {
        width: 100vw;
        height: 100vh;
        background-color: $primarycolor;
        margin: 0;
        
        // margin-left: -2.5rem;
        padding-right: 2.5rem;
        // padding:0 8vw;
        list-style: none;

        a {
            color: white;
            letter-spacing: 2px;
            
        }
        li {
            padding: 0.5rem 0;
            text-align: left;
            // background:$misccolours;
            width: 100%;
            padding-left: 2rem;
            padding-top:12px ;
            padding-bottom:12px ;

            // padding-left:-5rem;
        }
    }
    #app > ul > div > span.mobileitemslist > div > li:nth-child(n) > a {
        color: white;
        text-decoration: none;
        letter-spacing: 2px;
        
    }
    .itemslist {
        display: none;
    }
    .mobileitemslist {
        // margin:auto;
        display: flex;
        margin-top: 1.5rem;
        flex-direction: column;

        // transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        align-items: flex-start;
        justify-content: center;
        min-width: 100%;
        color: white;
        
        

        // margin-left: 32px;
        // margin-left:-8rem;
    }
    .expand {
        display: none;
    }

    .navlogo {
        display: none;

        //  margin-left:-16rem;
    }

    // ICONS
    .mobileicons {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .mobilenavlogo {
        width: 100px;
        height: 30px;
        // margin: 16px 16px 16px -16px;
        align-self: flex-start;
    }

    .impicons {
        width: 40%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
    .mobiledropdown {
        display: none;
    }

    //DROPDOWN

    .mobileitemslist > div:nth-child(1) > span:nth-child(5) > li:nth-child(1):hover{
        cursor: pointer;
    }
    #app
        > ul
        > div
        > span.mobileitemslist
        > div
        > li:nth-child(5)
        > div
        > a:nth-child(n) {
        color: white;
        text-decoration: none;
        font-family: Poppins;
        padding-top:12px;
            padding-bottom:12px ;

        
    }
    // aboutus padding top
   

    #app
        > div
        > ul
        > div.navlist
        > span
        > div
        > li:nth-child(5)
        > div
        > a:nth-child(n)
        > li {
        text-align: left;
        color: white;
        text-decoration: none;
        font-family: Poppins;
        margin-bottom: -0.5rem;
        padding-left: 8%;
        animation-delay: 0;
        animation-duration: 0.1s;
    }
    // HAMBURGER
    .menu {
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        padding: 0;
    }
    .line {
        fill: none;
        stroke: white;
        stroke-width: 6;
        transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .line1 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
    }
    .line2 {
        stroke-dasharray: 60 60;
        stroke-width: 6;
    }
    .line3 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
    }
    .opened .line1 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
    }
    .opened .line2 {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
        stroke-width: 6;
    }
    .opened .line3 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
    }

    // SEARCH
    .searchbox {
        display: none;
    }
    .searchtextbox {
        width: 60%;
        margin-bottom: 8px;
        border-radius: 6px;
        border: 0;
        margin-left: 4rem;
    }

    //TRANSITION

    .fade-enter-active {
        // transition: opacity .5s;
        height: 50rem;
    }
    .fade-enter/* .fade-leave-active below version 2.1.8 */ {
        // opacity: 0;
        height: 30rem;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
}

/* laptops */
@media only screen and (max-width: 1366px) {
    // #app > div > ul{
    //   margin:0;
    // }
    //   #app > div > ul > div{
    //     margin:0 16vw;
    //   }

    .navbar {
        // margin: 0rem 12vw 0px 12vw;
    }
}
/* large screens */
@media only screen and (min-width: 1367px) {
    .navbar {
        margin: 0 20vw 0px 18vw;
        // padding:1rem 0;
        // padding-bottom:2rem;
    }
}
</style>
