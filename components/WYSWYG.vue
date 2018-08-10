<template>
  <div v-if="data">
    <div  v-for="element in data" :key="element.key">
      <h1 v-if="element.type == 'heading1'" v-text="element.text"></h1>
      <h2 v-if="element.type == 'heading2'" v-text="element.text"></h2>
      <p v-if="element.type == 'paragraph'" v-text="element.text"></p>
      <img v-if="element.type == 'image'"  :src="element.url" :alt="title">

      <ul v-if="element.type == 'list-item'">
        <li v-text="element.text"></li>
      </ul>
      <ol v-if="element.type == 'o-list-item'">
        <li v-text="element.text"></li>
      </ol>
    </div>
    <!-- <span v-else>{{element.type}}</span> -->
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['data', 'title'],
  methods: {

  }
}
</script>
