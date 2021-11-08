<template>
  <div id="app">
    <div class="main">
    <mobile-control-sidebar
      @toggleSidebar="showSidebar"
    />
    <Sidebar/>
    <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/SideBar";
import MobileControlSidebar from "./components/UI/MobileControlSidebar";

export default {
  name: "app",
  components: {MobileControlSidebar, Sidebar},
  methods: {
    showSidebar() {
      document.querySelector('aside').classList.toggle('aside-show')
      document.querySelector('article').classList.toggle('article-hide')
      document.querySelector('.control-sidebar').classList.toggle('control-sidebar-active')
    }
  }
  // data() {
  //   return {
  //     dialogVisibleShow: false,
  //     dialogVisibleType: '',
  //   }
  // },
  // methods: {
  //   showPopup(arg, type) {
  //     this.dialogVisibleShow = arg
  //     this.dialogVisibleType = type
  //   }
  // }
}
</script>

<style lang="scss">
@import "./assets/styles/reset";
@import "./assets/styles/fonts";
@import "./assets/styles/const";
@import "./assets/styles/buttons";
@import "./assets/styles/custom-radio-form-group";

* {
  font-family: var(--ff_regular);
}

main {
  background-color: var(--main_bg_content);
  min-height: 100vh;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  article {
    width: 100%;
    margin-left: 300px;
    .content {
      min-height: 100vh;
      max-width: 880px;
      width: 100%;
      margin: 0 auto;
      padding: 15px 0;
      box-sizing:border-box;
    }
    .content-account {
      display: flex;
      align-items:center;
      justify-content: center;
    }
  }
  .article-hide {
    display: none !important;
  }
}


</style>
