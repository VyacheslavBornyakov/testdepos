<template>
  <div class="input-title item">
    <span
        class="js-remove-item"
        @click="$emit('remove', Participant)"
    >
      +
    </span>

    <input type="text" ref="input" v-model.trim="Participant.name">
  </div>
</template>

<script>
export default {
  name: "Participant",
  props: {
    Participant: {
      type:Object,
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.$refs.input.focus()
    });
  }
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