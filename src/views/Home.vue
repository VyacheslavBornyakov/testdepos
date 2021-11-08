<template>
    <article>
      <main-block
        @showPopup="showPopup"
        :Repositories="Repositories"
      />
      <popup
          :show.sync="dialogVisibleShow"
      >
        <specify-mail-popup
            v-if="dialogVisibleType === 'mail'"
            @showInfoPopup="showInfoPopup"
        />
        <access-popup
            v-else-if="dialogVisibleType === 'access'"
            @hidePopupCreateRepository="hidePopupCreateRepository"
        />
        <warning-popup v-else-if="dialogVisibleType === 'warning'"/>
      </popup>
    </article>
</template>

<script>
import MainBlock from '../components/MainBlock.vue'
import AccessPopup from "../components/popups/AccessPopup";
import SpecifyMailPopup from "../components/popups/SpecifyMailPopup";
import WarningPopup from "../components/popups/WarningPopup";
import Popup from "../components/popups/Popup";

export default {
  name: 'Home',
  components: {
    MainBlock,
    AccessPopup,
    SpecifyMailPopup,
    WarningPopup,
    Popup
  },
  data() {
    return {
      dialogVisibleShow: false,
      dialogVisibleType: '',
      Repositories:[]
    }
  },
  methods: {
    showPopup(arg, type) {
      this.dialogVisibleShow = arg
      this.dialogVisibleType = type
    },
    showInfoPopup(arg, type) {
      this.dialogVisibleShow = arg
      this.dialogVisibleType = type
    },
    hidePopupCreateRepository() {
      this.dialogVisibleShow = false
      this.dialogVisibleType = ''
      const newRepository = {
        id: Date.now(),
        files:[],
        count_files:0
      }
      this.Repositories.push(newRepository)
    }
  }
}
</script>
<style lang="scss">

.main {
  background-color: var(--main_bg_content);
	min-height: 100vh;
	width:100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	article {
		width: 100%;
		margin-left: 300px;
    @media screen and (max-width: 992px) {
      margin-left: 0;
      padding-left: 15px;
      padding-right: 15px;
      box-sizing: border-box;
    }
		.content {
			min-height: 100vh;
			max-width: 880px;
			width: 100%;
			margin: 0 auto;
			padding: 15px 0;
      box-sizing:border-box;
		}
	}
  .article-hide {
    display: none !important;
  }
}

</style>