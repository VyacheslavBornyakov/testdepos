<template>
  <div class="popup__body">
    <div class="title">Укажите вашу Google-почту</div>
    <form @submit.prevent>
      <div class="form-group">
        <input type="email" ref="input" @input="validateEmail" v-model.trim="email">
      </div>
      <div class="control-buttons">
        <button
            class="btn-orange"
            @click="sendEmail"
        >
          Продолжить
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SpecifyMailPopup",
  data() {
    return {
      email: '',
      error: '',
      validate: false
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.$refs.input.focus()
    });
  },
  methods: {
    validateEmail(){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        event.target.style.border = '1px solid green'
        this.validate = true
      } else {
        event.target.style.border = '1px solid red'
        this.validate = false
      }
    },
    sendEmail() {
      if (this.validate === true) {
        this.$emit('showInfoPopup', true, 'access')
      }
    }
  }
}
</script>

<style></style>