<template>
  <section class="main-app-block">

    <div class="main-app-block__header">
      <div class="add_file">
        <div class="file">
          <div class="input-data">
            <input type="file">
          </div>
          <div class="hint">Загрузить Файл</div>
        </div>
        <div class="description">
          <p>900мб</p>
          <p>logotip_final_final_v2_okonchatelniy.jpg</p>
        </div>
      </div>
    </div>

    <div
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

    <div class="certificate">
      <div class="custom-radio-form-group">
        <input type="radio" class="custom-radio" name="certificate__language" id="certificate__rus">
        <label for="certificate__rus">Свидетельство на русском</label>
      </div>
      <div class="custom-radio-form-group">
        <input type="radio" class="custom-radio" name="certificate__language" id="certificate__en">
        <label for="certificate__en">Свидетельство на английском</label>
      </div>
    </div>

    <div class="payment">
      <div class="price">1690р.</div>
      <button class="btn-orange">ОПЛАТИТЬ</button>
    </div>

  </section>
</template>

<script>
import SettingAdditionalInformation from "../setting_depositing/SettingAdditionalInformation";
import SettingType from "../setting_depositing/SettingType";
import SettingAuthors from "../setting_depositing/SettingAuthors";
import SettingCopyrightHolders from "../setting_depositing/SettingCopyrightHolders";

export default {
  name: "NewFile",
  components: {
    SettingAdditionalInformation,SettingType,SettingAuthors,SettingCopyrightHolders
  },
  data() {
    return {
      Point: {
        Participants: [],
        Company: [],
        Authors: [],
        AdditionalInformation: '',
        Type: 1,
      },
      savedDepon:false,
      attachment : { name : null,file: null }
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

<style scoped lang="scss">
.certificate {
  margin-bottom: 13px;
  .form-group {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
}

.payment {
  display: inline-flex;
  flex-direction:column;
  align-items: center;
  .price {
    font-size: 12px;
    line-height: 18px;
    color: var(--text_gray_color);
    font-family: var(--ff_regular);
    opacity: 0.6;
  }
  button {
    padding: 12px 26px;
  }
}
</style>