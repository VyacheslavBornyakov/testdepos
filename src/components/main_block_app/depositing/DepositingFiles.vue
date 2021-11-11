<template>
  <div class="files__point">
    <div class="extension">
      <img :src="file.extensionsType"/>
    </div>

    <div class="link">
      <div class="way">
        <span>{{ file.directories }}</span>
        <p contenteditable="true">{{ file.name }}</p>
      </div>
      <div class="link__copy">
        <img :src="copy">
      </div>
    </div>

    <div class="controls">
      <div class="controls__item"
           @click="toggleOpen"
           :class="{'access-open' : control_open, 'access-close' : !control_open}"
      ></div>
      <div class="controls__item ru"
         @click="toggleLang"
         :class="{'ru' : control_ru, 'en' : !control_ru}"
      ></div>
      <div class="controls__item additionally js-additionally" @click="toggleAdditionaly"></div>
      <div class="additionally__js" v-if="show_additionaly">
        <p>свидетельство на русском</p>
        <p>свидетельство на английском</p>
        <p>изменить данные свидетельств</p>
        <p>передать права</p>
      </div>
    </div>
  </div>
</template>

<script>
import copy from "../../../assets/icons/copy.svg";

export default {
  name: "DepositingFiles",
  props: {
    file: {
      type: Object
    }
  },
  data() {
    return {
      copy:copy,
      control_open: true,
      control_ru: true,
      show_additionaly:false
    }
  },
  methods: {
    toggleLang() {
      this.control_ru = !this.control_ru
    },
    toggleOpen() {
      this.control_open = !this.control_open
    },
    toggleAdditionaly() {
      this.show_additionaly = !this.show_additionaly
    }
  }
}
</script>

<style scoped lang="scss">

.files__point {
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
    .way {
      display: inline-flex;
      align-items: center;
      p {
        font-size: 16px;
        line-height: 16px;
        font-family: var(--ff_regular);
        color: var(--gray);
      }
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
    background-image: url('../../../assets/icons/ru-gray.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    &:hover {
      background-image: url('../../../assets/icons/ru-gray-hover.svg');
    }
  }
  .en {
    background-image: url('../../../assets/icons/en-gray.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    &:hover {
      background-image: url('../../../assets/icons/en-gray-hover.svg');
    }
  }
  .access-open {
    background-image: url('../../../assets/icons/access-open.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    &:hover {
      background-image: url('../../../assets/icons/access-open-hover.svg');
    }
  }
  .access-close {
    background-image: url('../../../assets/icons/access-close.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    &:hover {
      background-image: url('../../../assets/icons/access-close-hover.svg');
    }
  }
  .additionally {
    background-image: url('../../../assets/icons/additionally.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    &:hover {
      background-image: url('../../../assets/icons/additionally-hover.svg');
    }
  }
  .onion {
    background-image: url('../../../assets/icons/onion.svg');
    background-repeat: no-repeat;
    background-position: 60% 60%;
    &:hover {
      background-color: var(--onion-hover);
      background-image: url('../../../assets/icons/onion-active.svg');
    }
  }
  .onion-active {
    background-image: url('../../../assets/icons/onion-active.svg');
    background-repeat: no-repeat;
    background-position: 60% 60%;
    background-color: var(--onion);
    &:hover {
      background-color: var(--onion-hover);
    }
  }
  .additionally__js {
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
  }
}
</style>