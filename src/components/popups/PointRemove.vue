<template>
  <div class="popup__body">
    <div class="title">Вы уверены, что хотите удалить хранилище?</div>
    <div class="control-buttons">
      <button class="btn-edit_border" @click="undoRemove">Отменить</button>
      <button class="btn-orange" @click="removePoint">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PointRemove",
  methods: {
    undoRemove() {
      this.$emit('answer', false)
    },
    removePoint() {
      this.$emit('answer', true)
    }
  }
}
</script>