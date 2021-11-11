<template>
    <article>
      <main-block
        @showPopup="showPopup"
        @createPointType="createPointType"
        :Points="Points"
        :Files="Files"
        @removeFile="showPopupRemoveFile"
        @removePoint="showPopupRemovePoint"
      />
      <popup :show.sync="dialogVisibleShow">
        <specify-mail-popup
            v-if="dialogVisibleType === 'mail'"
            @showInfoPopup="showPopup"
        />
        <access-popup
            v-else-if="dialogVisibleType === 'access'"
            @hidePopupCreatePoint="hidePopupCreatePoint"
        />
        <file-remove
            v-else-if="dialogVisibleType === 'file-remove'"
            @answer="answerToRemoveFile"
        />
        <point-remove
            v-else-if="dialogVisibleType === 'point-remove'"
            @answer="answerToRemovePoint"
        />
        <warning-popup v-else-if="dialogVisibleType === 'warning'"/>
      </popup>
    </article>
</template>

<script>
import MainBlock from '../components/main_block_app/MainBlock.vue'
import AccessPopup from "../components/popups/AccessPopup";
import SpecifyMailPopup from "../components/popups/SpecifyMailPopup";
import WarningPopup from "../components/popups/WarningPopup";
import Popup from "../components/popups/Popup";
import extension_css from "../assets/images/extensions/css.svg";
import FileRemove from "../components/popups/FileRemove";
import PointRemove from "../components/popups/PointRemove";

export default {
  name: 'Home',
  components: {
    FileRemove,
    MainBlock,
    AccessPopup,
    SpecifyMailPopup,
    WarningPopup,
    Popup,
    PointRemove
  },
  data() {
    return {
      dialogVisibleShow: false,
      dialogVisibleType: '',
      Points: [],
      createNewPointType:'',
      extensions: {
        css: extension_css,
      },
      fileToDelete: {},
      pointToDelete: {},
      Files:[
        {id: 1,extensionsType:extension_css,name:'first test file'},
        {id: 2,extensionsType:extension_css,name:'first test file'},
        {id: 3,extensionsType:extension_css,name:'first test file'},
        {id: 4,extensionsType:extension_css,name:'first test file'},
        {id: 5,extensionsType:extension_css,name:'first test file'},
        {id: 6,extensionsType:extension_css,name:'first test file'},
        {id: 7,extensionsType:extension_css,name:'first test file'},
        {id: 8,extensionsType:extension_css,name:'first test file'},
        {id: 9,extensionsType:extension_css,name:'first test file'},
        {id: 10,extensionsType:extension_css,name:'first test file'}
      ],
      filesPoint: [
        {id: 1, name: 'тестовое имя1', directories:'folder1/folder1/',extensionsType:extension_css},
        {id: 2, name: 'тестовое имя2', directories:'folder1/',extensionsType:extension_css},
        {id: 3, name: 'тестовое имя3', directories:'folder1/folder1/',extensionsType:extension_css},
        {id: 4, name: 'тестовое имя4', directories:'folder1/',extensionsType:extension_css},
        {id: 5, name: 'тестовое имя5', directories:'folder1/folder1/',extensionsType:extension_css},
        {id: 6, name: 'тестовое имя6', directories:'folder1/folder1/',extensionsType:extension_css},
        {id: 7, name: 'тестовое имя7', directories:'/',extensionsType:extension_css},
        {id: 8, name: 'тестовое имя8', directories:'folder1/',extensionsType:extension_css},
        {id: 9, name: 'тестовое имя9', directories:'folder1/folder1/',extensionsType:extension_css},
        {id: 10, name: 'тестовое имя10', directories:'folder1/folder1/',extensionsType:extension_css},
        {id: 11, name: 'тестовое имя11', directories:'folder1/folder1/',extensionsType:extension_css},
        {id: 12, name: 'тестовое имя12', directories:'folder1/',extensionsType:extension_css},
        {id: 13, name: 'тестовое имя13', directories:'folder1/folder1/',extensionsType:extension_css},
        {id: 14, name: 'тестовое имя14', directories:'folder1/folder1/',extensionsType:extension_css},
        {id: 15, name: 'тестовое имя15', directories:'folder1/folder1/',extensionsType:extension_css},
        {id: 16, name: 'тестовое имя16', directories:'folder1/folder1/',extensionsType:extension_css},
      ]
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
        logoType: this.createNewPointType,
        stateId: 1,
        Files: this.filesPoint
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
    },
    showPopupRemovePoint(Point){
      this.pointToDelete = Point
      this.dialogVisibleShow = true
      this.dialogVisibleType = 'point-remove'
    },
    removePoint(Point) {
      this.Points = this.Points.filter(f => f.id !== Point.id)
    },
    answerToRemovePoint(arg) {
      if (arg) {
        this.removePoint(this.pointToDelete)
      }
      this.dialogVisibleShow = false
      this.dialogVisibleType = ''
      this.pointToDelete = {}
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