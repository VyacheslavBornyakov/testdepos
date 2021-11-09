<template>
    <article>
      <main-block
        @showPopup="showPopup"
        @createPointType="createPointType"
        :Points="Points"
        :Files="Files"
        @removeFile="showPopupRemoveFile"
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
            @hidePopupCreatePoint="hidePopupCreatePoint"
        />
        <file-remove
            v-else-if="dialogVisibleType === 'file-remove'"
            @answer="answerToRemoveFile"
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
import extension_css from "../assets/images/extensions/css.svg";
import extension_excel from "../assets/images/extensions/excel.svg";
import FileRemove from "../components/popups/FileRemove";

export default {
  name: 'Home',
  components: {
    FileRemove,
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
      Points: [],
      createNewPointType:'',
      extensions: {
        css: extension_css,
        excel: extension_excel,
      },
      fileToDelete: {},
      Files:[
        {
          id: Date.now(),
          extensionsType:extension_css,
          name:'first test file'
        }
      ],
    }
  },
  methods: {
    createPointType(arg) {
      this.createNewPointType = arg
    },
    showPopup(arg, type) {
      this.dialogVisibleShow = arg
      this.dialogVisibleType = type
    },
    showInfoPopup(arg, type) {
      this.dialogVisibleShow = arg
      this.dialogVisibleType = type
    },
    hidePopupCreatePoint() {
      this.dialogVisibleShow = false
      this.dialogVisibleType = ''
      const newPoint = {
        id: Date.now(),
        Authors: [],
        Company:[],
        Participants:[],
        AdditionalInformation: '',
        Type: 1,
        logoType: this.createNewPointType
      }
      this.Points.push(newPoint)

      this.createNewPointType = ''
    },
    showPopupRemoveFile(file) {
      this.fileToDelete = file
      this.dialogVisibleShow = true
      this.dialogVisibleType = 'file-remove'
    },
    answerToRemoveFile(arg) {
      if (arg) {
        this.removeFile(this.fileToDelete)
      }
      this.dialogVisibleShow = false
      this.dialogVisibleType = ''
      this.fileToDelete = {}
    },
    removeFile(file) {
      this.Files = this.Files.filter(f => f.id !== file.id)
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