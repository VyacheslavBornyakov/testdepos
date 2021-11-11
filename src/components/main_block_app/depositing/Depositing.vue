<template>
  <section class="main-app-block">
    <main-block-header
        :Point="Point"
        @removePoint="removePoint"
    />

    <setting-depositing
        :stateId = Point.stateId
        :Point = Point
    />

    <div v-if="showFiles && Point.stateId === 2" class="files">
      <depositing-files
          v-for="file in Point.Files"
          :file="file"
      />
    </div>
    <div
        v-if="showFiles && Point.stateId !== 1 && Point.Files.length > 10"
        class="show-more"
    >
      Показать еще...
    </div>
    <a
        v-if="!showFiles"
        @click="(e) => {e.preventDefault(); Point.stateId === 2 ? this.showFiles = !showFiles : showFiles}"
        href=""
        class="show-files"
    >
      ПОКАЗАТЬ ФАЙЛЫ
    </a>
    <a
        v-if="showFiles"
        @click="(e) => {e.preventDefault(); this.showFiles = !this.showFiles}"
        href=""
        class="show-files"
    >
      СКРЫТЬ ФАЙЛЫ
    </a>
  </section>
</template>

<script>
import MainBlockHeader from "./../main_block_header/MainBlockHeader";
import SettingDepositing from "../../setting_depositing/SettingDepositing";
import DepositingFiles from "./DepositingFiles";

export default {
  name: "Depositing",
  components: {
    DepositingFiles,
    SettingDepositing,
    MainBlockHeader,
  },
  props: {
    Point: {
      type:Object
    }
  },
  data() {
    return {
      showFiles: false,
      limitShowFiles: 10,
    }
  },
  methods: {
    removePoint() {
      this.$emit('removePoint', this.Point)
    }
  }
}
</script>

<style scoped lang="scss">
.files {
  display: flex;
  flex-direction: column;
}
</style>