<template>
  <section class="repositorys">
    <button class="repository" v-for="box in repositories" @click="showPopupMail">
      <img :src="box">
    </button>
  </section>
</template>

<script>
import google_drive from '../../assets/images/google_drive.png'
import ydisk from '../../assets/images/y_disk.png'
import api from '../../assets/images/api.png'

export default {
  name: "Repositories",
  data: function () {
    return {
      repositories: {
        google_drive: google_drive,
        ydisk: ydisk,
        api: api
      }
    }
  },
  methods: {
    showPopupMail: function() {
      this.$emit('showPopup', true, 'mail');
    },
  }
}
</script>

<style scoped lang="scss">
  section.repositorys {
    display: flex;
    align-items:center;
    margin-bottom: 25px;
    .repository {
      background: var(--white);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
      border-radius: 30px;
      width: 140px;
      height: 140px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      transition: all 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: scale(1.08)
      }
    }
}
</style>
