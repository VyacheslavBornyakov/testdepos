<template>
    <section class="auth account-setting">
      <div class="auth__form">
        <form>
          <div class="form-group form-group__name">
            <label for="">Фамилия, Имя, Отчество</label>
            <input type="text">
            <input type="text">
            <div class="error"></div>
          </div>

          <div class="form-group">
            <label for="">Email</label>
            <input type="email" >
            <div class="error"></div>
          </div>

          <div class="form-group">
            <label for="">Пароль</label>
            <input type="password">
            <div class="error"></div>
          </div>
          <button class="btn-orange change">ИЗМЕНИТЬ</button>
        </form>
      </div>
    </section>
</template>

<script>
export default {
  name: "AccountSetting"
}
</script>

<style lang="scss">
section.auth {
  margin: auto;
  max-width: 360px;
  width: 100%;
  background: var(--white);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  padding: 22px 0 0;
  display: flex;
  flex-direction: column;
  .auth__form {
    flex: 1 0 auto;
    form {
      .form-group {
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        margin-bottom: 15px;
      label {
        font-size: 12px;
        line-height: 18px;
        color: var(--text_gray_color);
        padding-left: 20px;
        font-family: var(--ff_regular);
      }
      input {
        background: var(--light_white);
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.05);
        border-radius: 20px;
        font-size: 16px;
        line-height: 21px;
        color: var(--text_gray_color);
        padding: 9px 20px;
        font-family: var(--ff_regular);
      }
      .error {
        margin-top: 5px;
        color: red;
        padding: 0 15px;
        font-size: 12px;
      }
      &__name {
      input {
        margin-bottom: 5px;
      }
      }
      }
      .recaptcha {
        margin: 40px 15px;
        height: 79px;
        display: flex;
        padding: 0 15px;
        align-items: center;
        background-color: #F9F9F9;
        border: 2px solid #E0E0E0;
      }
    }
  }
  .auth__nav {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    height: 40px;
    .nav__point	{
      width: 100%;
      background: var(--light_white);
      display: flex;
      align-items:center;
      padding-left: 30px;
      font-family: var(--ff_regular);
      font-size: 16px;
      line-height: 18px;
      color: var(--text_gray_color);
      cursor: pointer;
      &:hover {
         background-color: var(--white);
       }
      &:first-child {
         border-right: 1px solid var(--text_gray_color);
         border-bottom-left-radius: 30px;
       }
      &:last-child {
         border-left: 1px solid var(--text_gray_color);
         border-bottom-right-radius: 30px;
       }
      }
      .active {
        background: var(--white);
      }
  }
}

section.account-setting {
  padding: 15px;
  .form-group {
    padding: 0 !important;
  }
  .change {
    padding: 12px 28px;
    font-family: var(--ff_medium);
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    margin-top: -5px;
  }
}
</style>