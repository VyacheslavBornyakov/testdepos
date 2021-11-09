<template>
  <section class="main-app-block">
    <div class="main-app-block__header">
      <img :src="logo" class="logo_repository">
      <div class="title">
        Хранилище
      </div>
      <div class="button">
        <button class="btn-orange">ОПЛАТИТЬ</button>
      </div>
      <div class="count_files">
        Доступно файлов: <span>{{ count_files }}</span>
      </div>
    </div>

    <div class="repository-files">

      <file
          v-for="file in Files"
          :file="file"
          :key="file.id"
          @removeFile="$emit('removeFile', file)"
        />

      <div class="repository-files__item">
        <div class="logo logo-add" @click="$emit('showBlockNewFile')"></div>
      </div>

    </div>
  </section>
</template>

<script>
import extension_css from "./../../assets/images/extensions/css.svg";
import extension_excel from "./../../assets/images/extensions/excel.svg";
import File from "./repository/File";


export default {
  name: "Storage",
  components: {File},
  data() {
    return {
      extensions: {
        css: extension_css,
        excel: extension_excel,
      },
    }
  },
  props: {
    Files: {
      type:Array
    },
    logo: {
      type:String,
      required: true
    },
    count_files: {
      type:Number
    },
  }
}
</script>

<style lang="scss">

.repository-files {
  display:flex;
  align-items: flex-start;
  flex-wrap: wrap;
  &__item {
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-bottom: 15px;
    margin-right: 25px;
    .logo {
      position: relative;
      width: 150px;
      height: 150px;
      background: var(--light_white);
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
      border-radius: 20px;
      margin-bottom: 8px;
      //&:hover {
      //  .file-control {
      //    display: block;
      //  }
      //}
      .file-extension {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto auto;
        width: 50px;
        height: 50px;
      }
      .file-control {
        //display: none;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        .point {
          position: absolute;
          background: var(--control-point);
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            background: var(--control-point-hover);
          }
        }
        &__ru {
          left: 0;
          top: 0;
          border-top-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }
        &__en {
          bottom: 0;
          left: 0;
          border-bottom-left-radius: 20px;
          border-top-right-radius: 20px;
        }
        &__close {
          top: 0;
          right: 0;
          border-bottom-left-radius: 20px;
          border-top-right-radius: 20px;
        }
        &__additionally {
          bottom: 0;
          right: 0;
          border-bottom-right-radius: 20px;
          border-top-left-radius: 20px;
        }
      }
      &-add {
        position: relative;
        background-image: url('./../../assets/icons/file-add.svg');
        background-repeat: no-repeat;
        background-position: 50%;
        cursor: pointer;
        &:hover {
          background-image: url('./../../assets/icons/file-add-hover.svg');
        }
        input[type="file"] {
          cursor: pointer;
          opacity: 0;
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    }
    .name {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 16px;
      color: var(--gray);
      font-family: var(--ff_regular);
      .edit {
        margin-left: 3px;
        cursor: pointer;
      }
    }
  }
}
</style>