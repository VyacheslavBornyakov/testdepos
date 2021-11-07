<template>
  <div class="file-description__point-item">
    <div class="title">Тип:</div>
    <select name="" id="" :disabled="savedDepon">
      <option value="">Не нужен (по умолчанию)</option>
      <option value="">Нужен</option>
      <option value="">Важен</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SettingType",
  props: {
    Type: {
      type: Number
    },
    savedDepon: {
      type:Boolean
    }
  }
}
</script>

<style scoped>

</style>