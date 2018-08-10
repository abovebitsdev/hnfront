<template>
  <div class="hnn__accordion">
      <div v-for="(element, index) in data" :key="element.key" class="hnn__accordion__single" :class="{ 'opened': (accordionActualCard === index) }">
          <p class="hnn__accordion__single__title" @click="changeCard(index)"><strong v-text="element.title"></strong> </p>

          <div class="hnn__accordion__single__description">
            <p class="" v-if="element.description" v-text="element.description"></p>
            <!-- :style="{ 'height': $event.clientHeight + 'px' }" -->
            <div class="" v-if="element.html" v-html="element.html"></div>
          </div>
          <img class="hnn__accordion__single__arrow" src="~/static/images/icons/arrow-up.svg" alt="Arrow">
      </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
        accordionActualCard: 0,
    }
  },
  props: ['data'],
  mounted() {
  },
  methods: {
    changeCard(value){
        this.accordionActualCard = value;
    },
    check(value){
        console.log(value);
    }
  }
}
</script>
