<template>
  <div class="auth__form sign_in">
    <form action="" @submit.prevent="submitLogin">

      <div class="form-group">
        <label for="">Email:</label>
        <input
            type="email"
            name="email"
            v-model.trim="email"
            :class="{invalid:($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <div
            class="error"
            v-if="$v.email.$dirty && !$v.email.required"
        >
          Поле email не должно быть пустым
        </div>
        <div
            class="error"
            v-else-if="$v.email.$dirty && !$v.email.email"
        >
          Введите корректный Email
        </div>
      </div>

      <div class="form-group">
        <label for="">Пароль:</label>
        <input
            type="password"
            name="password"
            v-model.trim="password"
            :class="{invalid:($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <div
            class="error"
            v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите пароль
        </div>
        <div
            class="error"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Пароль должен быть не менее {{ $v.password.$params.minLength.min }} символов
        </div>
      </div>

      <div class="recaptcha">
        I'm not a robot
      </div>

      <button type="submit" class="btn-orange submit-form">Авторизоваться</button>
    </form>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: "SignInForm",
  data() {
    return {
      email:'',
      password:'',
    }
  },
  validations: {
    email:{email, required},
    password:{required, minLength: minLength(6)},
  },
  methods: {
    submitLogin() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      } else {
        alert('callback in php server')
      }
    }
  }
}
</script>
