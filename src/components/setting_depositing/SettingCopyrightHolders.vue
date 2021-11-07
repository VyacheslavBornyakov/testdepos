<template>
  <div class="file-description__point">
    <div class="file-description__point-item">
      <div class="title">Правообладатели:</div>
      <div class="participants items">
        <div class="item" v-for="men in Participant">
          <setting-item
            :key="men.id"
            :item="men"
            @remove="removeParticipant"
          />
        </div>
      </div>
      <div class="company items">
        <div class="item" v-for="com in Company">
          <setting-item
              :key="com.id"
              :item="com"
              @remove="removeCompany"
          />
        </div>
      </div>
      <div v-if="!savedDepon" class="add">
        <div class="add__point" @click="createNewParticipant">
          + Добавить участника
        </div>
        <div class="add__point" @click="createNewCompany">
          + Добавить компанию
        </div>
      </div>
    </div>
    <div class="file-description__point-item js-owners-en">
    <div class="title">Owners:</div>
    <div class="participants items">
      <div class="item" v-for="men in Participant">
        <p>{{ men.name_en }}</p>
      </div>
    </div>
    <div class="company items">
      <div class="item" v-for="com in Company">
        <p>{{ com.name_en }}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import SettingItem from "./SettingItem";
export default {
  name: "SettingCopyrightHolders",
  components: {SettingItem},
  props: {
    Participant: {
      type:Array
    },
    Company: {
      type: Array
    },
    savedDepon: {
      type:Boolean
    }
  },
  data() {
    return {
      name:'',
    }
  },
  methods: {
    createNewParticipant() {
      const newParticipant = {
        id: Date.now(),
        name: '',
        name_en: 'заглушка'
      }
      this.Participant.push(newParticipant)
    },
    createNewCompany() {
      const newCompany = {
        id: Date.now(),
        name: '',
        name_en: 'заглушка'
      }
      this.Company.push(newCompany)
    },
    removeParticipant(Item) {
      this.Participant = this.Participant.filter(p => p.id !== Item.id)
    },
    removeCompany(Item) {
      this.Company = this.Company.filter(p => p.id !== Item.id)
    }
  }
}
</script>

<style scoped>

</style>