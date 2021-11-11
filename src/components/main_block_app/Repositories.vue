<template>
  <section class="repositorys" :class="{'repositorys-crutch' : showMore}">
    <button class="repository" v-for="box in computedRepositories" @click="showPopupMail(box.name)">
      <img :src="box.src" :alt="box.name">
    </button>
    <button class="repository">
      <img :src="ssh.src" :alt="ssh.name">
    </button>
    <button
        class="repository-show-more"
        v-if="!showMore"
        @click="showMoreBox"
    >
      Ещё >
    </button>
  </section>
</template>

<script>
import google_drive from '../../assets/images/google_drive.jpeg'
import ydisk from '../../assets/images/ydisk.jpeg'
import ssh from '../../assets/images/ssh.png'
import onedrive from '../../assets/images/onedrive.jpg'
import github from '../../assets/images/github.svg'
import dropbox from '../../assets/images/dropbox.png'
import gitlab from '../../assets/images/gitlab.jpeg'
import figma from '../../assets/images/figma.png'

export default {
  name: "Repositories",
  data: function () {
    return {
      repositories: [
        {name: 'google_drive', src: google_drive},
        {name: 'ydisk', src:ydisk},
        {name: 'onedrive', src: onedrive},
        {name: 'dropbox', src: dropbox},
        {name: 'github', src: github},
        {name: 'gitlab', src: gitlab},
        {name: 'figma', src: figma},
      ],
      ssh: {
        name: 'ssh',
        src:ssh
      },
      limit:4,
      showMore: false,
    }
  },
  computed:{
    computedRepositories(){
      return this.limit ? this.repositories.slice(0,this.limit) : this.repositories
    }
  },
  methods: {
    showMoreBox() {
      this.showMore = true
      this.limit = null
    },
    showPopupMail(name) {
      this.$emit('showPopup', true, 'mail');
      this.$emit('createPointType', name);
    },
  }
}
</script>

<style scoped lang="scss">
  section.repositorys {
    display: flex;
    align-items: flex-start;
    gap:20px;
    flex-wrap: wrap;
    margin-bottom: 25px;

    .repository {
      background: var(--white);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
      border-radius: 30px;
      width: 130px;
      height: 130px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease-in-out;
      padding: 20px 10px;
      flex-wrap: wrap;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      &:hover {
        cursor: pointer;
        transform: scale(1.08)
      }
      &-show-more {
        border: 4px solid var(--show_more-border);
        box-sizing: border-box;
        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.05));
        background-color: transparent;
        border-radius: 30px;
        width: 130px;
        height: 130px;
        font-size: 22px;
        line-height: 16px;
        color: var(--show_more-color);
        font-family: var(--ff_bold);
        cursor:pointer;
      }
    }
}
  //.repositorys-crutch:after {
  //  content: '';
  //  flex: auto;
  //}
</style>
