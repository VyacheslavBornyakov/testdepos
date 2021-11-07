<template>

  <aside>
    <div class="aside">
      <div class="aside__links">
        <router-link to="/" v-bind:class="[this.$route.path === '/' ? 'active' : '']">Депонирование</router-link>
        <router-link to="">Антипиратство</router-link>
        <div class="aside__links__sublinks">
          <router-link to="/ap-file-selection" v-bind:class="[this.$route.path === '/ap-file-selection' ? 'active' : '']">выбор файла</router-link>
          <router-link to="/ap-result" v-bind:class="[this.$route.path === '/ap-result' ? 'active' : '']">результаты</router-link>
          <router-link to="/documents" v-bind:class="[this.$route.path === '/documents' ? 'active' : '']">документы</router-link>
        </div>
      </div>
      <div class="aside__popups">
        <div class="hint">Вызовы попапов, после разработки, удалить этот блок.</div>
        <button class="js-show-popup" data-popup-id="1" @click="showPopupAccess">первый</button>
        <button class="js-show-popup" data-popup-id="2" @click="showPopupMail">второй</button>
        <button class="js-show-popup" data-popup-id="3" @click="showPopupWarning">третий</button>
      </div>
      <div class="aside__links">
        <router-link to="/account" v-bind:class="[this.$route.path === '/account' ? 'active' : '']">Аккаунт</router-link>
        <router-link to="/subscriptions-management" v-bind:class="[this.$route.path === '/subscriptions-management' ? 'active' : '']">Управление подписками</router-link>
        <router-link to="/integration" v-bind:class="[this.$route.path === '/integration' ? 'active' : '']">Интеграция 1С</router-link>
      </div>
    </div>
  </aside>

</template>

<script>
export default {
    name: 'Sidebar',
    methods: {
      showPopupAccess: function() {
        this.$emit('showPopup', true, 'access');
      },
      showPopupMail: function() {
        this.$emit('showPopup', true, 'mail');
      },
      showPopupWarning: function() {
        this.$emit('showPopup', true, 'warning');
      }
    }
}
</script>

<style lang="scss">

aside {
  max-width: 300px;
  width: 100%;
  height: 100vh;
  position: fixed;
  .aside {
    display: flex;
    background-color: var(--aside_main_color);
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 25px 30px;
    box-sizing:border-box;
    &__links {
      display: flex;
      flex-direction: column;
      a {
        color: rgba(255, 255, 255, 0.9);
        margin-top: 15px;
        margin-bottom: 15px;
        position: relative;
        display: inline-block;
        width: fit-content;
        font-family: var(--ff_regular);
        font-size: 16px;
        line-height: 21px;
        &:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
      .active {
        color: rgba(255, 255, 255, 1);
        &::after {
          transition: .3s;
          width: 100%;
          height: 1px;
          position: absolute;
          bottom: -4px;
          left: 0;
          background-color: white;
          content: '';
        }
      }
      &__sublinks {
        display: flex;
        flex-direction: column;
        margin-top: -15px;
        margin-left: 20px;
        a {
          margin-bottom: 0;
          margin-top: 10px;
        }
      }
    }
    &__popups {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .hint {
        color: var(--white);
      }
      button {
        margin-top: 10px;
      }
    }
  }
}

</style>