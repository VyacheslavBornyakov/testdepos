<template>
  <div class="file-description__point">
    <div class="file-description__point-item">
      <div class="title">Авторы:</div>
      <div class="participants items">
        <div class="item" v-for="author in Authors">
          <setting-item
              :key="author.id"
              @remove="removeAuthor"
          />
          </div>
      </div>
      <div class="add">
        <div v-if="!savedDepon" class="add__point" @click="createNewAuthor">
          + Добавить участника
        </div>
      </div>
    </div>
    <div class="file-description__point-item js-authors-en">
      <div class="title">Authors:</div>
      <div class="participants items">
        <div class="item" v-for="author in Authors">
          <p>{{ author.name_en }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingItem from "./SettingItem";
export default {
  name: "SettingAuthors",
  components: {SettingItem},
  props:{
    Authors: {
      type: Array
    },
    savedDepon: {
      type:Boolean
    }
  },
  methods: {
    createNewAuthor() {
      const newAuthor = {
        id: Date.now(),
        name: '',
        name_en: 'заглушка автора'
      }
      this.Authors.push(newAuthor)
    },
    removeAuthor(Item) {
      this.Authors = this.Authors.filter(p => p.id !== Item.id)

    }
  }
}
</script>

<style scoped>

</style>