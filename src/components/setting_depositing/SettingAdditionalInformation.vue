<template>
  <div class="file-description__point-item">
    <div class="title">Дополнительная информация</div>
    <input type="text" v-model="AdditionalInformation" :disabled="savedDepon" @input="updateData">
  </div>
</template>

<script>
export default {
  name: "SettingAdditionalInformation",
  props: {
    savedDepon: {
      type:Boolean
    }
  },
  data() {
    return {
      AdditionalInformation: '',
    }
  },
  methods: {
    updateData(e) {
      this.$emit('updateAdditionalInformation', e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
  input {
    background-color: transparent;
    border-radius: 20px;
    height: 40px;
    padding: 12px;
    box-sizing: border-box;
    color: var(--text_gray_color);
    border: 1px solid var(--btn_edit_border);
    outline: none;
    &:focus {
       border: 1px solid var(--aside_main_color);
     }
  }
</style>