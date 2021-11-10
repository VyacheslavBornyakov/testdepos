<template>

  <div
      @click="startDepon"
      v-if="stateId === 1"
      class="setting-depositing"
  >
    Настроить депонирование
  </div>

  <div
      v-else-if="stateId === 2"
      class="file-description"
      :class="{'file-description-disable': savedDepon}"
  >
    <setting-copyright-holders
      :Participant = Point.Participants
      :Company = Point.Company
      :savedDepon = savedDepon
      @removeCompany="removeCompany"
      @createNewCompany="createNewCompany"
      @removeParticipant="removeParticipant"
      @createNewParticipant="createNewParticipant"
    />
    <setting-authors
      :Authors = Point.Authors
      :savedDepon = savedDepon
      @removeAuthor="removeAuthor"
      @createNewAuthor="createNewAuthor"
    />
    <div class="file-description__point">
      <setting-additional-information
        :AdditionalInformation = Point.AdditionalInformation
        :savedDepon = savedDepon
        @updateAdditionalInformation="updateAdditionalInformation"
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
    stateId: {
      type:Number
    },
    Point: {
      type: Object
    }
  },
  components: {SettingType, SettingAdditionalInformation, SettingAuthors, SettingCopyrightHolders},
  data() {
    return {
      savedDepon: false,
    }
  },
  methods: {
    startDepon() {
      this.Point.stateId = 2
    },
    createNewParticipant() {
      const newParticipant = {
        id: Date.now(),
        name: '',
        name_en: 'временная заглушка участника'
      }
      this.Point.Participants.push(newParticipant)
    },
    createNewCompany() {
      const newCompany = {
        id: Date.now(),
        name: '',
        name_en: 'Временная заглушка компании'
      }
      this.Point.Company.push(newCompany)
    },
    createNewAuthor() {
      const newAuthor = {
        id: Date.now(),
        name: '',
        name_en: 'временная заглушка автора'
      }
      this.Point.Authors.push(newAuthor)
    },
    updateAdditionalInformation(value) {
      this.Point.AdditionalInformation = value
    },
    removeParticipant(Participant) {
      this.Point.Participants = this.Point.Participants.filter(p => p.id !== Participant.id)
    },
    removeCompany(Company) {
      this.Point.Company = this.Point.Company.filter(p => p.id !== Company.id)
    },
    removeAuthor(Author) {
      this.Point.Authors = this.Point.Authors.filter(p => p.id !== Author.id)
    },
    saveData() {
      this.Point.Participants.forEach(element => {
        this.customValidateParticipants(element)
      })
      this.Point.Company.forEach(element => {
        this.customValidateCompany(element)
      })
      this.Point.Authors.forEach(element => {
        this.customValidateAuthors(element)
      })

      if (this.Point.Participants.length === 0 || this.Point.Company.length === 0 || this.Point.Authors.length === 0) {
        alert('Нужно заполнить все обязательные поля')
        return
      }

      this.savedDepon = true
    },
    editData() {
      this.savedDepon = false
    },

    customValidateParticipants(element) {
      if (this.customValidateFields(element)) {
        this.removeParticipant(element)
      }
    },
    customValidateCompany(element) {
      if (this.customValidateFields(element)) {
        this.removeCompany(element)
      }
    },
    customValidateAuthors(element) {
      if (this.customValidateFields(element)) {
        this.removeAuthor(element)
      }
    },
    customValidateFields(element) {
      return Boolean(element.name.length < 3)
    }
  }
}
</script>