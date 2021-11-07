<template>
  <div>
    <span
        class="js-remove-item"
        @click="$emit('remove', Item)"
    >
      +
    </span>

    <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  name: "SettingItem",
  props: {
    Item: {
      type: Object
    }
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>