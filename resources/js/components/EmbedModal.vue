<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()"/>

      <div class="modal__dialog" @click="closeModal()">
        <div class="modal__header">
          <slot name="header" />
          <button type="button" class="modal__close" @click="closeModal()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
              <path
                fill="#ffff"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
            
          </button>
        </div>

        <div class="modal__body">
          <slot name="body"/>
        </div>

        <div class="modal__footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }
};
</script>


<style lang="scss" scoped>
.modal {
  position: fixed;
    height:120vh;
    
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  overflow-x: hidden;
  overflow-y: auto;
  background-color:rgba(0, 0, 0, 0.8);
  @media screen and (max-width: 992px) {
  margin-top:4rem;
  }
  // position: auto;

  //     height:120vh;
  //   padding: 0;
  //       z-index: 20;
  //       width: 120vw;
 
  //     // background-color:red;
  //   }
 
  &__backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  &__dialog {
    position: relative;
    width: 100%;
    height:90%;
    background-color: rgba(0, 0, 0, 0.9);
    // border-radius: 5px;
    // margin: 50px auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    z-index: 2;
 
  }
  &__close {
    //   display:float;
    position: absolute;
    right: 40px;
    margin:0 2rem;

    width: 30px;
    height: 30px;
    background-color: black;
    border: 1px solid black;

     @media screen and (max-width: 992px) {
       display: none;
      // position:relative;
width: 20px;
    height: 20px;
    margin-left:100rem ;
    // margin:1rem;
    background-color:transparent;
    border:none;
        // z-index: 20;
 
      // background-color:red;
    }
  }
  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px 20px 10px;
  }
  &__body {
    padding: 10px 20px 10px;
    
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 992px) {
      position:relative;

      padding: 0;
      z-index: 200;
      // margin-top: 16rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:center;
      width:100vw;
    //   height:100vh;
      height:120vh;
      // background-color:red;
    }
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
