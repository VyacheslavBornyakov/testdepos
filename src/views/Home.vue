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
      <popup
        :show.sync="dialogVisibleShow"
        @hidePopup="hidePopup"
      >

        <transition name="bounce">
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

        </transition>
      </popup>
    </article>
</template>

<script>
import MainBlock from '../components/main_block_app/MainBlock.vue'
import AccessPopup from "../components/popups/AccessPopup";
import SpecifyMailPopup from "../components/popups/SpecifyMailPopup";
import WarningPopup from "../components/popups/WarningPopup";
import Popup from "../components/popups/Popup";
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
      fileToDelete: {},
      pointToDelete: {},
      Files:[
        {id: 1,extensionsType:'pdf',name:'first test file'},
        {id: 2,extensionsType:'mp3',name:'first test file'},
        {id: 3,extensionsType:'mp4',name:'first test file'},
        {id: 4,extensionsType:'xls',name:'first test file'},
        {id: 5,extensionsType:'doc',name:'first test file'},
        {id: 6,extensionsType:'txt',name:'first test file'},
        {id: 7,extensionsType:'zip',name:'first test file'},
        {id: 8,extensionsType:'img',name:'first test file'},
      ],
      filesPoint: [
        {id: 1, name: 'тестовое имя1', directories:'folder1/folder1/',extensionsType:'pdf'},
        {id: 2, name: 'тестовое имя2', directories:'folder1/',extensionsType:'mp3'},
        {id: 3, name: 'тестовое имя3', directories:'folder1/folder1/',extensionsType:'mp4'},
        {id: 4, name: 'тестовое имя4', directories:'folder1/',extensionsType:'xls'},
        {id: 5, name: 'тестовое имя5', directories:'folder1/folder1/',extensionsType:'doc'},
        {id: 6, name: 'тестовое имя6', directories:'folder1/folder1/',extensionsType:'txt'},
        {id: 7, name: 'тестовое имя7', directories:'/',extensionsType:'zip'},
        {id: 8, name: 'тестовое имя8', directories:'folder1/',extensionsType:'img'},
        {id: 9, name: 'тестовое имя9', directories:'folder1/folder1/',extensionsType:'pdf'},
        {id: 10, name: 'тестовое имя10', directories:'folder1/folder1/',extensionsType:'mp3'},
        {id: 11, name: 'тестовое имя11', directories:'folder1/folder1/',extensionsType:'mp4'},
        {id: 12, name: 'тестовое имя12', directories:'folder1/',extensionsType:'xls'},
        {id: 13, name: 'тестовое имя13', directories:'folder1/folder1/',extensionsType:'doc'},
        {id: 14, name: 'тестовое имя14', directories:'folder1/folder1/',extensionsType:'txt'},
        {id: 15, name: 'тестовое имя15', directories:'folder1/folder1/',extensionsType:'zip'},
        {id: 16, name: 'тестовое имя16', directories:'folder1/folder1/',extensionsType:'img'},
      ]
    }
  },
  methods: {
    createPointType(arg) {
      this.createNewPointType = arg
    },
    showPopup(arg, type) {
      this.dialogVisibleShow = arg
      setTimeout(() => this.dialogVisibleType = type, 200);
    },
    hidePopup() {
      this.dialogVisibleType = ''
      setTimeout(() => this.dialogVisibleShow = false, 500);
    },
    hidePopupCreatePoint() {
      this.hidePopup()
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
      this.showPopup(true, 'file-remove')
    },
    answerToRemoveFile(arg) {
      if (arg) {
        this.removeFile(this.fileToDelete)
      }
      this.hidePopup()
      this.fileToDelete = {}
    },
    removeFile(file) {
      this.Files = this.Files.filter(f => f.id !== file.id)
    },
    showPopupRemovePoint(Point){
      this.pointToDelete = Point
      this.showPopup(true, 'point-remove')
    },
    removePoint(Point) {
      this.Points = this.Points.filter(f => f.id !== Point.id)
    },
    answerToRemovePoint(arg) {
      if (arg) {
        this.removePoint(this.pointToDelete)
      }
      this.hidePopup()
      this.pointToDelete = {}
    }
  }
}
</script>
<style lang="scss">
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
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
