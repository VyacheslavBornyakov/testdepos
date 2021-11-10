<template>
  <div class="main-app-block__header">
    <img :src="srcLogo" class="logo_repository" :alt="Point.logoType">
    <div class="link">
      <p>/deponirovanie</p>
      <div class="link__copy">
        <img :src="copy">
      </div>
    </div>
    <div v-if="Point.stateId === 1" class="button">
      <button class="btn-orange">ВЫБРАТЬ ТАРИФ</button>
    </div>
    <div v-if="Point.stateId === 2" class="button">
      <button class="btn-premium">Premium <p>(изменить)</p></button>
    </div>
    <div class="control">
      <div class="icon play"
         @click="play_active = true; pause_active = false; remove_active = false"
        :class="{'play-active' : play_active}"
      >
        <icon-play/>
      </div>
      <div class="icon pause"
         @click="pause_active = true; remove_active = false; play_active = false"
       :class="{'pause-active' : pause_active}"
      >
        <icon-pause/>
      </div>
      <div class="icon close"
         @click="
         pause_active = false;
         play_active = false;
         $emit('removePoint')"
        :class="{'close-active' : remove_active}"
      >
        <icon-close/>
      </div>
    </div>
  </div>
</template>

<script>
import google_drive from "../../../assets/images/google_drive.jpeg";
import ydisk from "../../../assets/images/ydisk.jpeg";
import ssh from "../../../assets/images/ssh.png";
import onedrive from '../../../assets/images/onedrive.jpg'
import github from '../../../assets/images/github.svg'
import dropbox from '../../../assets/images/dropbox.png'
import gitlab from '../../../assets/images/gitlab.jpeg'
import figma from '../../../assets/images/figma.png'

import copy from "../../../assets/icons/copy.svg";
import IconPlay from "../../icons/IconPlay";
import IconPause from "../../icons/IconPause";
import IconClose from "../../icons/IconClose";



export default {
  name: "MainBlockHeader",
  components: {
    IconPlay,IconPause,IconClose
  },
  beforeMount() {
    this.receiveLogo()
  },
  data: function () {
    return {
      google_drive: google_drive,
      ydisk: ydisk,
      ssh: ssh,
      copy: copy,
      onedrive: onedrive,
      github: github,
      dropbox: dropbox,
      gitlab: gitlab,
      figma: figma,
      srcLogo: '',
      play_active: false,
      pause_active: false,
      remove_active: false,
    }
  },
  props: {
    Point: {
      type:Object
    }
  },
  methods: {
    receiveLogo() {
      switch (this.Point.logoType) {
        case 'ydisk':
          this.srcLogo = ydisk
          break;
        case 'google_drive':
          this.srcLogo = google_drive
          break;
        case 'ssh':
          this.srcLogo = ssh
          break;
        case 'onedrive':
          this.srcLogo = onedrive
          break;
        case 'github':
          this.srcLogo = github
          break;
        case 'dropbox':
          this.srcLogo = dropbox
          break;
        case 'gitlab':
          this.srcLogo = gitlab
          break;
        case 'figma':
          this.srcLogo = figma
          break;
        default:
          this.srcLogo = ssh
          break;
      }
    },
  }
}
</script>

<style lang="scss">

.main-app-block__header {
  display: flex;
  flex-direction: row;
  align-items:center;
  width: 100%;
  margin-bottom: 15px;

  .logo_repository {
    width: auto;
    height: 40px;
    margin-left: 33px;
    margin-right: 22px;
  }

  .link {
    position: relative;
    background: var(--light_white);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding: 9px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // max-width: 420px;
    width: 100%;
    margin-left: 5px;
    margin-right: 5px;
    p {
      font-size: 16px;
      line-height: 21px;
      color: var(--text_gray_color);
      font-family: var(--ff_regular);
    }
  }

  .title {
    font-size: 22px;
    line-height: 21px;
    color: var(--text_gray_color);
    max-width: 445px;
    width: 100%;
    font-family: var(--ff_regular);
  }

  .button {
    position: relative;
    max-width: 120px;
    width: 100%;
    height: 40px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    button {
      font-weight: 500;
      font-size: 12px;
      font-family: var(--ff_medium);
      height: 40px;
      width: 130px;
      p {
        font-size: 10px;
      }
    }
  }

  .control {
    display: flex;
    flex-direction: row;
    align-items:center;
    max-width: 160px;
    width: 100%;
    justify-content: space-between;
    // margin-left: 10px;

    .icon {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border: 2px solid var(--control__icon);
      border-radius: 50%;
      margin-left: 10px;
      &:hover {
        border: 2px solid var(--control__icon-hover);
        svg {
          rect {
            fill-opacity: 1 !important;
          }
          path {
            fill-opacity:1 !important;
            stroke-opacity: 1 !important;
          }
        }
      }
    }
    .play-active {
      border:2px solid var(--control__play);
      svg {
        path {
          fill: var(--control__play);
          fill-opacity: 1;
        }
      }
      &:hover {
        border: 2px solid var(--control__play);
      }
    }
    .pause-active {
      border:2px solid var(--control__pause);
      svg {
        rect {
          fill: var(--control__pause);
          fill-opacity: 1 !important;
        }
      }
      &:hover {
        border: 2px solid var(--control__pause);
      }
    }
    .close-active {
      border:2px solid var(--control__close);
      svg {
        path {
          stroke: var(--control__close);
          stroke-opacity:1;
        }
      }
      &:hover {
        border: 2px solid var(--control__close);
      }
    }

  }

  .count_files {
    font-size: 12px;
    line-height: 21px;
    color: var(--text_gray_color);
    font-family: var(--ff_regular);
    margin-left: 20px;
    span {
      margin-left: 10px;
      font-size: 16px;
    }
  }
  .add_file {
    display: flex;
    flex-direction: row;
    align-items:flex-end;
    .file {
      background: var(--light_white);
      box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.05);
      border-radius: 20px;
      margin-right: 25px;
      position: relative;
      .input-data {
        position: relative;
        background-image: url('../../../assets/icons/file-add.svg');
        background-repeat: no-repeat;
        background-position: 50%;
        cursor: pointer;
        width: 140px;
        height: 165px;
        &:hover {
          background-image: url('../../../assets/icons/file-add-hover.svg');
        }
        input[type="file"] {
          cursor: pointer;
          opacity: 0;
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
      .hint {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 5px;
        width: fit-content;
        font-size: 12px;
        line-height: 21px;
        color: var(--text_gray_color);
        font-family: var(--ff_regular);
      }
    }
    .description {
      p {
        font-size: 12px;
        line-height: 21px;
        color: var(--text_gray_color);
        font-family: var(--ff_regular);
      }
    }
  }
}
</style>
