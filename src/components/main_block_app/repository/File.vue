<template>
  <div class="repository-files__item">
    <div class="logo" :class="'logo-'+file.extensionsType">
      <div class="file-control">
        <div class="file-control__ru point">
          <img :src="file_control_ru">
        </div>
        <div class="file-control__en point">
          <img :src="file_control_en">
        </div>
        <div
            class="file-control__close point"
            @click="$emit('removeFile', file)"
        >
          <img :src="file_control_close">
        </div>
        <div class="file-control__additionally point">
          <img :src="file_control_additionally">
        </div>
      </div>
      <div class="name-edit" @click="editName"></div>
    </div>
    <div class="name">
      <p contenteditable="true" ref="name">{{ file.name }}</p>
    </div>
  </div>
</template>

<script>
import file_control_ru from "./../../../assets/icons/file-control-ru.svg";
import file_control_en from "./../../../assets/icons/file-control-en.svg";
import file_control_close from "./../../../assets/icons/file-control-close.svg";
import file_control_additionally from "./../../../assets/icons/file-control-additionally.svg";
import edit from "../../../assets/icons/edit.svg";

export default {
  name: "File",
  props: {
    file: {
      type: Object
    }
  },
  data() {
    return {
      file_control_ru: file_control_ru,
      file_control_en: file_control_en,
      file_control_close: file_control_close,
      file_control_additionally: file_control_additionally,
      edit: edit,
    }
  },
  methods: {
    editName() {
      this.$nextTick(()=>{
        this.$refs.name.focus()
      });
    }
  }
}
</script>

<style lang="scss" scoped>

.file-control {
  .point {
    z-index: 4;
  }
}
.name-edit {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
}
.name {
  p {
    max-width: 130px;
  }
}
.logo{
  position: relative;
  cursor: pointer;
  background-position: 50%;
  background-repeat: no-repeat;
  &-pdf {
    background-image: url('../../../assets/images/extension-svg/main-pdf.svg');
    &:hover {
      background-image: url('../../../assets/images/extension-svg/main-pdf-hover.svg');
    }
  }
  &-mp3 {
    background-image: url('../../../assets/images/extension-svg/main-mp3.svg');
    &:hover {
      background-image: url('../../../assets/images/extension-svg/main-mp3-hover.svg');
    }
  }
  &-mp4 {
    background-image: url('../../../assets/images/extension-svg/main-mp4.svg');
    &:hover {
      background-image: url('../../../assets/images/extension-svg/main-mp4-hover.svg');
    }
  }
  &-xls {
    background-image: url('../../../assets/images/extension-svg/main-xls.svg');
    &:hover {
      background-image: url('../../../assets/images/extension-svg/main-xls-hover.svg');
    }
  }
  &-doc {
    background-image: url('../../../assets/images/extension-svg/main-doc.svg');
    &:hover {
      background-image: url('../../../assets/images/extension-svg/main-doc-hover.svg');
    }
  }
  &-txt {
    background-image: url('../../../assets/images/extension-svg/main-txt.svg');
    &:hover {
      background-image: url('../../../assets/images/extension-svg/main-txt-hover.svg');
    }
  }
  &-zip {
    background-image: url('../../../assets/images/extension-svg/main-zip.svg');
    &:hover {
      background-image: url('../../../assets/images/extension-svg/main-zip-hover.svg');
    }
  }
  &-img {
    background-image: url('../../../assets/images/extension-svg/main-img.svg');
    &:hover {
      background-image: url('../../../assets/images/extension-svg/main-img-hover.svg');
    }
  }
}
</style>