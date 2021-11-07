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
    stepDepon: {
      type:Number
    }
  },
  components: {SettingType, SettingAdditionalInformation, SettingAuthors, SettingCopyrightHolders},
  data() {
    return {
      savedDepon: false,
      Point:{
        Participants:[],
        Company:[],
        Authors:[],
        AdditionalInformation:'',
        Type:1
      }
    }
  },
  methods: {
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
      if (this.Point.Participants.length === 0 || this.Point.Company.length === 0 || this.Point.Authors.length === 0) {
        alert('Нужно заполнить все обязательные поля')
        return
      }

      for (let i = 0; i < this.Point.Participants.length; i++) {
        if (this.customValidateFields(this.Point.Participants[i])) {
          alert('Заполните все поля правообладателей')
          return
        }
      }
      for (let i = 0; i < this.Point.Company.length; i++) {
        if (this.customValidateFields(this.Point.Company[i])) {
          alert('Заполните все поля правообладателей')
          return
        }
      }
      for (let i = 0; i < this.Point.Authors.length; i++) {
        if (this.customValidateFields(this.Point.Authors[i])) {
          alert('Заполните все поля авторов')
          return
        }
      }

      this.savedDepon = true
    },
    editData() {
      this.savedDepon = false
    },

    customValidateFields(element) {
      return Boolean(element.name === '')
    }
  }
}
</script>