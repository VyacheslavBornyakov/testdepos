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



.description-point__en {
  .list-companies {
    input {
      font-size: 16px;
      width: 340px !important;
      line-height: 21px;
      color: #8D8D8D;
      display: block;
      font-family: var(--ff_regular);
      margin-left: 15px;
      margin-top: 5px;
      border: 1px solid rgba(60, 60, 60, 0.26);
      border-radius: 4px;
      height: 30px;
    }
  }
}

.file-description-disable .file-description__point  {
  .items {
    .item {
      pointer-events: none;
      .js-remove-item {
        display: none !important;
      }
      input {
        pointer-events: none;
      }
    }
  }
  &.description-point__en {
    pointer-events: none;
  }
  .list-owner, .list-company {
    pointer-events: none;


    .owner-item, .company-item {
      span {
        display: none !important;
      }
    }
  }
}

.file-description__point .list-owner {
  position: relative;
  div.owner-item:first-child {
    input {
      margin-top: 0;
    }
  }
  div.owner-item:last-child {
    span {
      display: inherit;
    }
  }
}

.file-description__point .list-company {

  .company-disabled {
    .input-select-company {
      pointer-events: none;

      .vs__dropdown-toggle {
        border: none;
      }
    }
  }

  div.company-item:last-child {
    span {
      display: inherit;
    }
  }
}

section.main-app-block {
  background: #FFFFFF;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  padding: 15px 15px 20px 15px;
  position: relative;
  margin-bottom: 20px;
  .setting-depositing {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--main_bg_content);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    font-size: 34px;
    line-height: 21px;
    color: rgba(141, 141, 141, 0.6);
    font-family: var(--ff_bold);
    cursor:pointer;
    &:hover {
      color: rgba(141, 141, 141, 1);
    }
  }
  .file-description {
    border: 2px solid rgba(141, 141, 141, 0.6);
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    justify-content: space-between;
    position: relative;
    margin-bottom: 15px;
    &-disable {
      border:none;
      background: var(--main_bg_content);
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
    }
    &__point {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
      &-item {
        width: 45%;
      }
      .items {
        .item {
          display: flex;
          align-items: center;
          .js-remove-item {
            display: inline-flex;
            width: 8px;
            height: 8px;
            color: var(--text_add);
            transform: rotate(45deg);
            position: relative;
            top: -1px;
            font-size: 14px;
            cursor: pointer;

            &:hover {
              color: var(--text_add-hover);
            }
          }
        }
      }
      &:last-child {
        margin-bottom: 0 !important;
      }
      .title {
        font-size: 12px;
        line-height: 21px;
        color: var(--text_gray_color);
        font-family: var(--ff_regular);
      }
      select {
        background-color: transparent;
        font-size: 16px;
        line-height: 21px;
        color: var(--text_gray_color);
        font-family: var(--ff_regular);
      }
      p {
        font-size: 16px;
        line-height: 21px;
        color: var(--text_gray_color);
        display: block;
        font-family: var(--ff_regular);
      }
      .add {
        display: flex;
        width: 100%;
        align-items:center;
        justify-content: space-between;
        margin-bottom: 20px;
        &__point {
          cursor: pointer;
          color: var(--text_add);
          font-family: var(--ff_regular);
          font-size: 12px;
          line-height: 21px;
          &:hover {
            color: var(--text_add-hover);
          }
        }

      }
      .js-owners-en, .js-authors-en {
        p {
          padding-left: 4px;
        }
      }
    }
    .save {
      position: absolute;
      right: 10px;
      bottom: 9px;
      height: 30px;
      width: 130px;
      cursor: pointer;
    }
  }
  .show-files {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 0;
    font-family: var(--ff_regular);
    font-size: 9px;
    line-height: 20px;
    color: var(--text_gray_color);
    width: fit-content;
  }
  .show-more {
    margin-left: 70px;
    margin-top: 17px;
    display: block;
    font-size: 16px;
    line-height: 16px;
    color: var(--gray);
    font-family: var(--ff_regular);
  }
}

</style>
