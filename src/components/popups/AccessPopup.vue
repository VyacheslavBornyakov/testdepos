<template>
  <div class="popup__body">
    <div class="title">Дайте доступ сервису депонирование к одной из папок, к которой вы хотели бы применить услугу</div>

    <div class="mailbox">
      Для этого почтового ящика <span>deponirovanie@domain.com</span>
    </div>

    <div class="control-buttons">
      <button class="btn-edit_border">Инструкция</button>
      <button class="btn-orange" @click="hidePopupCreateRepository">Сделаю</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessPopup",
  methods: {
    hidePopupCreateRepository() {
      this.$emit('hidePopupCreateRepository')
    }
  }
}
</script>

<style></style>