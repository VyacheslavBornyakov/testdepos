<template>
 <div class="content">
  <repositories
    @showPopup="showPopup"
    @createPointType="createPointType"
  />
   <transition-group name="item-list">
      <depositing
        v-for="Point in Points"
        :Point="Point"
        :key="Point.id"
        @removePoint="removePoint"
      />
   </transition-group>
   <storage
       @showBlockNewFile="showBlockNewFile"
       :Files="Files"
       :logo="ydisk"
       :count_files="this.Files.length"
       @removeFile="removeFile"
   />

   <new-file
       v-if="showComponentNewFile"
   />

 </div>
</template>

<script>

import Repositories from "./Repositories";
import ydisk from "../../assets/images/ydisk.jpeg";
import NewFile from "./NewFile";
import Storage from "./Storage";
import extension_css from "../../assets/images/extensions/css.svg";
import extension_excel from "../../assets/images/extensions/excel.svg";
import Depositing from "./depositing/Depositing";


export default {
  name: 'NameBlock',
  components: {
    Depositing,
    Storage,
    NewFile,
    Repositories,
  },
  props:{
    Points: {
      type: Array
    },
    Files: {
      type:Array,
    }
  },
  data() {
    return {
      ydisk: ydisk,
      showFiles: false,
      extensions: {
        css: extension_css,
        excel: extension_excel,
      },
      showComponentNewFile: false,
    }
  },
  methods: {
    createPointType(type) {
      this.$emit('createPointType', type)
    },
    showPopup(arg, type) {
      this.$emit('showPopup', arg, type)
    },
    showBlockNewFile() {
      this.showComponentNewFile = !this.showComponentNewFile
    },
    removeFile(file) {
      this.$emit('removeFile', file)
    },
    removePoint(Point) {
      this.$emit('removePoint', Point)
    }
  }
}
</script>

<style lang="scss">



</style>
