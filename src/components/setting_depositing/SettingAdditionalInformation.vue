<template>
  <div class="file-description__point-item">
    <div class="title">Дополнительная информация</div>
    <textarea :disabled="savedDepon" name="" id="" cols="30" rows="10" v-bind:value="AdditionalInformation"></textarea>
  </div>
</template>

<script>
export default {
  name: "SettingAdditionalInformation",
  props: {
    AdditionalInformation: {
      type: String
    },
    savedDepon: {
      type:Boolean
    }
  }
}
</script>

<style scoped>

</style>