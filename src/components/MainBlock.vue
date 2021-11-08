<template>
 <div class="content">
  <repositories
    @showPopup="showPopup"
  />
  <section class="main-app-block">
    <main-block-header
      :stepDepon = stepDepon
    />

    <setting-depositing
      :stepDepon = stepDepon
      :Point = Point
      @start="startDepos"
    />

    <div v-if="showFiles && stepDepon === 2" class="files">
      <div class="files__point">
        <div class="extension">
          <img>
        </div>

        <div class="link">
          <p><span>folder1/</span>deponirovanie</p>
          <div class="link__copy">
            <img :src="copy">
          </div>
        </div>

        <div class="controls">
          <div class="controls__item"></div>
          <div class="controls__item"></div>
          <div class="controls__item"></div>
        </div>
      </div>
    </div>
    <a
        v-if="!showFiles"
        @click="(e) => {e.preventDefault(); stepDepon === 2 ? showFiles = !showFiles : showFiles}"
        href=""
        class="show-files"
    >
      ПОКАЗАТЬ ФАЙЛЫ
    </a>
    <a
        v-if="showFiles"
        @click="(e) => {e.preventDefault(); showFiles = !showFiles}"
        href=""
        class="show-files"
    >
      СКРЫТЬ ФАЙЛЫ
    </a>
  </section>

   <section class="main-app-block" v-for="repository in Repositories">
     <div class="main-app-block__header">
       <img :src="ydisk" class="logo_repository">
       <div class="title">
         Хранилище iReg
       </div>
       <div class="button">
         <button class="btn-orange">ОПЛАТИТЬ</button>
       </div>
       <div class="count_files">
         Доступно файлов: <span>{{ repository.count_files }}</span>
       </div>
     </div>

     <div class="repository-files">

       <div class="repository-files__item">
         <div class="logo">
           <div class="file-control">
             <div class="file-control__ru point">
               <img :src="file_control_ru">
             </div>
             <div class="file-control__en point">
               <img :src="file_control_en">
             </div>
             <div class="file-control__close point">
               <img :src="file_control_close">
             </div>
             <div class="file-control__additionally point">
               <img :src="file_control_additionally">
             </div>
           </div>
           <img :src="extensions.excel" class="file-extension">
         </div>
         <div class="name">
           <p>logotip_final_v2</p>
           <div class="edit">
             <img :src="edit">
           </div>
         </div>
       </div>

       <div class="repository-files__item">
         <div class="logo">
           <div class="file-control">
             <div class="file-control__ru point">
               <img :src="file_control_ru">
             </div>
             <div class="file-control__en point">
               <img :src="file_control_en">
             </div>
             <div class="file-control__close point">
               <img :src="file_control_close">
             </div>
             <div class="file-control__additionally point">
               <img :src="file_control_additionally">
             </div>
           </div>
           <img :src="extensions.css" class="file-extension">
         </div>
       </div>

       <div class="repository-files__item">
         <div class="logo logo-add">
           <input type="file">
         </div>
       </div>

     </div>
   </section>
 </div>
</template>

<script>

import Repositories from "./main_block_app/Repositories";
import MainBlockHeader from "./main_block_app/main_block_header/MainBlockHeader";
import copy from "../assets/icons/copy.svg";
import SettingDepositing from "./setting_depositing/SettingDepositing";
import ydisk from "./../assets/images/y_disk.png";
import edit from "./../assets/icons/edit.svg";
import file_control_ru from "./../assets/icons/file-control-ru.svg";
import file_control_en from "./../assets/icons/file-control-en.svg";
import file_control_close from "./../assets/icons/file-control-close.svg";
import file_control_additionally from "./../assets/icons/file-control-additionally.svg";
import extension_css from "./../assets/images/extensions/css.svg";
import extension_excel from "./../assets/images/extensions/excel.svg";

export default {
  name: 'NameBlock',
  components: {
    SettingDepositing,
    MainBlockHeader,
    Repositories,
  },
  props:{
    Repositories: {
      type: Array
    }
    // dialogVisibleShow: {
    //   type:Boolean,
    // },
    // dialogVisibleType: {
    //   type:String,
    // }
    // Point: {
    //   Authors: {
    //     type:Array
    //   },
    //   Company: {
    //     type:Array
    //   },
    //   Participant: {
    //     type:Array
    //   },
    //   AdditionalInformation: {
    //     type:String
    //   },
    //   Type: {
    //     type:Number
    //   }
    // }

  },
  data() {
    return {
      stepDepon: 1,
      copy: copy,
      ydisk: ydisk,
      edit: edit,
      file_control_ru: file_control_ru,
      file_control_en: file_control_en,
      file_control_close: file_control_close,
      file_control_additionally: file_control_additionally,
      extensions: {
        css: extension_css,
        excel: extension_excel,
      },
      showFiles: false,
      Point: {
        Authors: [],
        Company:[],
        Participant:[],
        AdditionalInformation: '',
        Type: 1
      },
    }
  },
  methods: {
    startDepos(stepDepon) {
      this.stepDepon = stepDepon
    },
    showPopup(arg, type) {
      this.$emit('showPopup', arg, type)
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
  .files {
    display: flex;
    flex-direction: column;
    &__point {
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-top: 2px;
      margin-bottom: 2px;
      .extension {
        max-width: 40px;
        width: 100%;
        height: 40px;
        background: var(--white);
        border: 2px solid rgba(141, 141, 141, 0.6);
        box-sizing: border-box;
        border-radius: 20px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius:50%;
        }
      }


      .link {
        position: relative;
        background: var(--light_white);
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
        border-radius: 20px;
        padding: 9px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        p {
          font-size: 16px;
          line-height: 16px;
          font-family: var(--ff_regular);
          color: var(--gray);
          span {
            font-size: 16px;
            line-height: 21px;
            color: var(--text_gray_color);
            font-family: var(--ff_regular);
          }
        }
      }

      &-no_depositing {
        .link {
          max-width: 620px;
        }
      }

      .controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        &__item {
          width: 40px;
          height: 40px;
          background: var(--light_white);
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
          border-radius: 20px;
          cursor:pointer;
          margin-left: 10px;
        }
        .ru {
          background-image: url('../assets/icons/ru-gray.svg');
          background-repeat: no-repeat;
          background-position: 50%;
          &:hover {
            background-image: url('../assets/icons/ru-gray-hover.svg');
          }
        }
        .en {
          background-image: url('../assets/icons/en-gray.svg');
          background-repeat: no-repeat;
          background-position: 50%;
          &:hover {
            background-image: url('../assets/icons/en-gray-hover.svg');
          }
        }
        .access-open {
          background-image: url('../assets/icons/access-open.svg');
          background-repeat: no-repeat;
          background-position: 50%;
          &:hover {
            background-image: url('../assets/icons/access-open-hover.svg');
          }
        }
        .access-close {
          background-image: url('../assets/icons/access-close.svg');
          background-repeat: no-repeat;
          background-position: 50%;
          &:hover {
            background-image: url('../assets/icons/access-close-hover.svg');
          }
        }
        .additionally {
          background-image: url('../assets/icons/additionally.svg');
          background-repeat: no-repeat;
          background-position: 50%;
          &:hover {
            background-image: url('../assets/icons/additionally-hover.svg');
          }
        }
        .onion {
          background-image: url('../assets/icons/onion.svg');
          background-repeat: no-repeat;
          background-position: 60% 60%;
          &:hover {
            background-color: var(--onion-hover);
            background-image: url('../assets/icons/onion-active.svg');
          }
        }
        .onion-active {
          background-image: url('../assets/icons/onion-active.svg');
          background-repeat: no-repeat;
          background-position: 60% 60%;
          background-color: var(--onion);
          &:hover {
            background-color: var(--onion-hover);
          }
        }
        .additionally__js {
          display: none;
          position: absolute;
          right: 0;
          bottom: 30px;
          padding: 0 10px;
          background: var(--white);
          border-radius: 10px;
          width: 220px;
          z-index: 10;
          p {
            margin-top: 9px;
            margin-bottom: 9px;
            font-size: 13px;
            line-height: 15px;
            color: var(--black);
            font-family: var(--ff_regular);
            cursor: pointer;
          }
          &-show {
            display: block;
          }
        }
      }
    }
  }
  .repository-files {
    display:flex;
    align-items: flex-start;
    flex-wrap: wrap;
    &__item {
      display: flex;
      flex-direction: column;
      align-items:center;
      margin-bottom: 15px;
      margin-right: 20px;
      .logo {
        position: relative;
        width: 140px;
        height: 140px;
        background: var(--light_white);
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
        border-radius: 20px;
        margin-bottom: 8px;
        &:hover {
          .file-control {
            display: block;
          }
        }
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
          display: none;
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
          background-image: url('./../assets/icons/file-add.svg');
          background-repeat: no-repeat;
          background-position: 50%;
          cursor: pointer;
          &:hover {
            background-image: url('./../assets/icons/file-add-hover.svg');
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
