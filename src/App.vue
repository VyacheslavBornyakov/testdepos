<template>
  <div id="app">
    <div class="main">
    <Sidebar
      @showPopup="showPopup"
    />
    <router-view/>
    </div>
    <popup :show.sync="dialogVisibleShow">
      <specify-mail-popup v-if="dialogVisibleType === 'mail'"/>
      <access-popup v-else-if="dialogVisibleType === 'access'"/>
      <warning-popup v-else-if="dialogVisibleType === 'warning'"/>
    </popup>
  </div>
</template>

<script>
import Sidebar from "./components/SideBar";
import AccessPopup from "./components/popups/AccessPopup";
import SpecifyMailPopup from "./components/popups/SpecifyMailPopup";
import WarningPopup from "./components/popups/WarningPopup";
import Popup from "./components/popups/Popup";

export default {
  name: "app",
  components: {
    Sidebar,
    AccessPopup,
    SpecifyMailPopup,
    WarningPopup,
    Popup
  },
  data() {
    return {
      dialogVisibleShow: false,
      dialogVisibleType: ''
    }
  },
  methods: {
    showPopup(arg, type) {
      this.dialogVisibleShow = arg
      this.dialogVisibleType = type
    }
  }
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
      section {
        margin-top: 15px;
        margin-bottom: 15px;
      }
    }
    .content-account {
      display: flex;
      align-items:center;
      justify-content: center;
    }
  }
}


</style>
