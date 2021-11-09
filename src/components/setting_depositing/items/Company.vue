<template>
  <div class="input-title item">
    <span
        class="js-remove-item"
        @click="$emit('removeCompany', Company)"
    >
      +
    </span>

    <input type="text" autofocus required v-model.trim="Company.name">
  </div>
</template>

<script>
export default {
  name: "Company",
  props: {
    Company: {
      type:Object,
    }
  },
}
</script>

<style scoped lang="scss">
.input-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

input {
  width: 100%;
  margin-left: 2px;
  font-size: 16px;
  line-height: 21px;
  color: var(--text_gray_color);
  font-family: var(--ff_regular);
  background-color: transparent;
  &::placeholder {
    color: var(--text_gray_color);
  }
}
</style>