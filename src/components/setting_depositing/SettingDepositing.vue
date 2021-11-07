<template>

  <div
      @click="$emit('start', 2)"
      v-if="stepDepon === 1"
      class="setting-depositing"
  >
    Настроить депонирование
  </div>
  <div
      v-else-if="stepDepon === 2"
      class="file-description"
      :class="{'file-description-disable': savedDepon}"
  >
    <setting-copyright-holders
      :Participant = Point.Participant
      :Company = Point.Company
      :savedDepon = savedDepon
    />
    <setting-authors
      :Authors = Point.Authors
      :savedDepon = savedDepon
    />
    <div class="file-description__point">
      <setting-additional-information
        :AdditionalInformation = Point.AdditionalInformation
        :savedDepon = savedDepon
      />
      <setting-type
        :Type = Point.Type
        :savedDepon = savedDepon
      />
    </div>

    <button
        v-if="!savedDepon"
        @click="saveData"
        class="save btn-purple"
    >
      СОХРАНИТЬ
    </button>
    <button
        v-if="savedDepon"
        @click="editData"
        class="save btn-edit"
    >
      РЕДАКТИРОВАТЬ
    </button>
  </div>
</template>

<script>
import SettingCopyrightHolders from "./SettingCopyrightHolders";
import SettingAuthors from "./SettingAuthors";
import SettingAdditionalInformation from "./SettingAdditionalInformation";
import SettingType from "./SettingType";
export default {
  name: "SettingDepositing",
  props: {
    Point: {
      type:Object
    },
    stepDepon: {
      type:Number
    }
  },
  components: {SettingType, SettingAdditionalInformation, SettingAuthors, SettingCopyrightHolders},
  data() {
    return {
      savedDepon: false,
    }
  },
  methods: {
    saveData() {
      this.savedDepon = true
    },
    editData() {
      this.savedDepon = false
    }
  }
}
</script>

<style scoped>

</style>