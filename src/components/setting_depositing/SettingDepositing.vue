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

    <div class="file-description__point">
      <div class="file-description__point-item">
        <div class="title">Правообладатели:</div>
        <div class="participants items">
          <transition-group name="item-list">
            <input-data-owner
                v-for="men in Point.Participants"
                :key="men.id"
                :Model="men"
                @remove="removeParticipant(men)"
            />
          </transition-group>
        </div>
        <div class="company items">
          <transition-group name="item-list">
            <input-data-owner
                v-for="com in Point.Company"
                :key="com.id"
                :Model="com"
                @remove="removeCompany(com)"
            />
          </transition-group>
        </div>
        <div v-if="!savedDepon" class="add">
          <div class="add__point" @click="createNewParticipant">
            + Добавить участника*
          </div>
          <div class="add__point" @click="createNewCompany">
            + Добавить компанию
          </div>
        </div>
      </div>

      <div class="file-description__point-item js-owners-en">
        <div class="title">Owners:</div>
        <div class="participants items">
          <div class="item" v-for="men in Point.Participants">
            <p>{{ men.name_en }}</p>
          </div>
        </div>
        <div class="company items">
          <div class="item" v-for="com in Point.Company">
            <p>{{ com.name_en }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="file-description__point">
      <div class="file-description__point-item">
        <div class="title">Авторы:</div>
        <div class="participants items">
          <transition-group name="item-list">
            <input-data-owner
                v-for="author in Point.Authors"
                :Model="author"
                :key="author.id"
                @remove="removeAuthor(author)"
            />
          </transition-group>
        </div>
        <div class="add">
          <div v-if="!savedDepon" class="add__point" @click="createNewAuthor">
            + Добавить автора*
          </div>
        </div>
      </div>

      <div class="file-description__point-item js-authors-en">
        <div class="title">Authors:</div>
        <div class="participants items">
          <div class="item" v-for="author in Point.Authors">
            <p>{{ author.name_en }}</p>
          </div>
        </div>
      </div>
    </div>

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
        v-if="!savedDepon && allowSave"
        @click="saveData"
        class="save btn-purple"
    >
      СОХРАНИТЬ
    </button>
    <button
        v-if="savedDepon && allowSave"
        @click="editData"
        class="save btn-edit"
    >
      РЕДАКТИРОВАТЬ
    </button>
  </div>
</template>

<script>
import SettingAdditionalInformation from "./SettingAdditionalInformation";
import SettingType from "./SettingType";
import InputDataOwner from "../UI/InputDataOwner";

export default {
  name: "SettingDepositing",
  props: {
    stateId: {
      type:Number
    },
    Point: {
      type: Object
    },
    allowSave: {
      type: Boolean
    }
  },
  components: {SettingType, SettingAdditionalInformation, InputDataOwner},
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

      if (this.Point.Participants.length === 0 || this.Point.Authors.length === 0) {
        console.log(this.Point)
        this.Point.stateId = 1
        this.Point.Authors = []
        this.Point.Participants = []
        this.Point.Company = []
        this.Point.AdditionalInformation = ''
        return
      }

      this.savedDepon = true
    },
    editData() {
      this.savedDepon = false
    },
  }
}
</script>
