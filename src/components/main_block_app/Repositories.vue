<template>
  <section class="repositorys" :class="{'repositorys-crutch' : showMore}">
    <transition-group name="list" class="boxes">

      <button class="repository" :key="box.id" v-for="box in computedRepositories" @click="showPopupMail(box.name)">
        <img :src="box.src" :alt="box.name">
      </button>

    </transition-group>

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
        {id: 1, name: 'google_drive', src: google_drive},
        {id: 2, name: 'ydisk', src:ydisk},
        {id: 3, name: 'onedrive', src: onedrive},
        {id: 4, name: 'dropbox', src: dropbox},
        {id: 5, name: 'github', src: github},
        {id: 6, name: 'gitlab', src: gitlab},
        {id: 7, name: 'figma', src: figma},
        {id: 8, name: 'ssh', src:ssh}
      ],
      limit:5,
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
      if (name !== 'ssh') {
        this.$emit('showPopup', true, 'mail');
        this.$emit('createPointType', name);
      }
    },
  }
}
</script>

<style scoped lang="scss">
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateX(-30px);
  }
  section.repositorys {
    display: flex;
    align-items: flex-start;
    gap:20px;
    flex-wrap: wrap;
    margin-bottom: 25px;
    height: auto;
    max-height: 130px;
    transition: max-height .5s;
    .boxes {
      display: inline-flex;
      align-items: flex-start;
      gap: 20px;
      flex-wrap: wrap;
    }
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
        max-width: 80px;
        max-height: 80px;
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
  .repositorys-crutch {
    max-height: 285px !important;
  }

</style>
