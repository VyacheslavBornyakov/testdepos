<template>
  <section class="repositorys">
    <button class="repository" v-for="box in repositories" @click="showPopupMail(box.name)">
      <img :src="box.src" :alt="box.name">
    </button>
    <button class="repository">
      <img :src="ssh.src" :alt="ssh.name">
    </button>
    <button
        class="repository-show-more"
        v-if="!showMore"
        @click="showMore = true"
    >
      Ещё >
    </button>
    <button class="repository repository-new_string"
      v-for="box in repositories_more"
      @click="showPopupMail(box.name)"
      v-if="showMore"
    >
      <img :src="box.src" :alt="box.name">
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
      repositories: {
        google_drive:{
          name: 'google_drive',
          src: google_drive
        },
        ydisk: {
          name: 'ydisk',
          src:ydisk
        },
        onedrive: {
          name: 'onedrive',
          src: onedrive
        },
        dropbox: {
          name: 'dropbox',
          src: dropbox
        },
      },
      ssh: {
        name: 'ssh',
        src:ssh
      },
      showMore: false,
      repositories_more: {
        github: {
          name: 'github',
          src: github
        },
        gitlab: {
          name: 'gitlab',
          src: gitlab
        },
        figma: {
          name: 'figma',
          src: figma
        },
      }
    }
  },
  methods: {
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
    flex-wrap: wrap;
    align-items:flex-start;
    .repository {
      background: var(--white);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
      border-radius: 30px;
      width: 130px;
      height: 130px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      transition: all 0.3s ease-in-out;
      padding: 20px 10px;
      flex-wrap: wrap;
      margin-bottom: 25px;
      &:last-child {
        margin-right: 0;
      }
      &-new_string {
        margin-right: 0;
        &:last-child {
          margin-left: 20px;
        }
      }
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
</style>
