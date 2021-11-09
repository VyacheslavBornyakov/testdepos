<template>
  <div class="popup__body">
    <div class="title">Вы уверены что хотитие удалить файл?</div>
    <div class="control-buttons">
      <button class="btn-edit_border" @click="undoRemove">Отменить</button>
      <button class="btn-orange" @click="removeFile">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileRemove",
  methods: {
    undoRemove() {
      this.$emit('answer', false)
    },
    removeFile() {
      this.$emit('answer', true)
    }
  }
}
</script>