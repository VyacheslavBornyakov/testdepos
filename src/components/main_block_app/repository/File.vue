<template>
  <div class="repository-files__item">
    <div class="logo">
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
      <img :src="file.extensionsType" class="file-extension" @click="editName">
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
.name {
  p {
    max-width: 130px;
  }
}
</style>