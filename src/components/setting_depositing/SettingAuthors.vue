<template>
  <div class="file-description__point">
    <div class="file-description__point-item">
      <div class="title">Авторы:</div>
      <div class="participants items">
        <div class="item" v-for="author in Authors">
          <author
              :Author="author"
              :key="author.id"
              @remove="$emit('removeAuthor', author)"
            />
          </div>
      </div>
      <div class="add">
        <div v-if="!savedDepon" class="add__point" @click="$emit('createNewAuthor')">
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
import Author from "./items/Author";
export default {
  name: "SettingAuthors",
  components: {Author},
  props:{
    Authors: {
      type:Array
    },
    savedDepon: {
      type:Boolean
    }
  },
}
</script>