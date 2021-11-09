<template>
  <div class="file-description__point">
    <div class="file-description__point-item">
      <div class="title">Правообладатели:</div>
      <div class="participants items">
        <transition-group name="item-list">
          <participant
                v-for="men in Participant"
                :key="men.id"
                :Participant="men"
                @remove="$emit('removeParticipant', men)"
            />
        </transition-group>
      </div>
      <div class="company items">
        <transition-group name="item-list">
          <company
              v-for="com in Company"
              :key="com.id"
              :Company="com"
              @removeCompany="$emit('removeCompany', com)"
          />
        </transition-group>
      </div>
      <div v-if="!savedDepon" class="add">
        <div class="add__point" @click="$emit('createNewParticipant')">
          + Добавить участника
        </div>
        <div class="add__point" @click="$emit('createNewCompany')">
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
import Participant from "./items/Participant";
import Company from "./items/Company";

export default {
  name: "SettingCopyrightHolders",
  components: {Company, Participant},
  props: {
    Company:{
      type:Array,
    },
    Participant:{
      type:Array
    },
    savedDepon: {
      type:Boolean
    }
  }
}
</script>
