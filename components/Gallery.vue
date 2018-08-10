<template>
  <div class="hnn__galerry">
    <!-- EVENTS -->
    <!-- @afterChange="handleAfterChange"
    @beforeChange="handleBeforeChange"
    @breakpoint="handleBreakpoint"
    @destroy="handleDestroy"
    @edge="handleEdge"
    @init="handleInit"
    @reInit="handleReInit"
    @setPosition="handleSetPosition"
    @swipe="handleSwipe"
    @lazyLoaded="handleLazyLoaded"
    @lazyLoadError="handleLazeLoadError" -->
      <div class="hnn__galerry__controls">
        <div class="hnn__galerry__controls__left" @click="prev">
          <p><img src="~/static/images/icons/arrow-circle-left-white.svg" alt="Prev"></p>
        </div>
        <div class="hnn__galerry__controls__center">
          <!-- <a href="#" class="btn white">View Gallery</a> -->
        </div>
        <div class="hnn__galerry__controls__right" @click="next">
          <p><img src="~/static/images/icons/arrow-circle-right-white.svg" alt="Next"></p>
        </div>
      </div>
      <slick
        ref="slick"
        :options="slickOptions"
        >
        <div class="hnn__galerry__image" v-for="element in data" :key="element.image" v-bind:style="{ 'background-image': 'url( ' + element.single_image.url + ')' }"></div>
      </slick>
  </div>
</template>

<script>
let Slick = null;
if (process.browser) {
    let $ = require("jquery")(window);
    Slick = require('vue-slick').default;
}

export default {
  components: { Slick },
  data () {
    return {
        actualCard: 1,
        slickOptions: {
           slidesToShow: 1,
       },
    }
  },
  props: ['data'],
  mounted() {
    console.log("Gal");
    console.log(this.data);
  },
  methods: {
        next() {
            this.$refs.slick.next();
        },
        prev() {
            this.$refs.slick.prev();
        },
        reInit() {
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        // handleAfterChange(event, slick, currentSlide) {
        //     console.log('handleAfterChange', event, slick, currentSlide);
        // },
        // handleBeforeChange(event, slick, currentSlide, nextSlide) {
        //     console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        // },
        // handleBreakpoint(event, slick, breakpoint) {
        //     console.log('handleBreakpoint', event, slick, breakpoint);
        // },
        // handleDestroy(event, slick) {
        //     console.log('handleDestroy', event, slick);
        // },
        // handleEdge(event, slick, direction) {
        //     console.log('handleEdge', event, slick, direction);
        // },
        // handleInit(event, slick) {
        //     console.log('handleInit', event, slick);
        // },
        // handleReInit(event, slick) {
        //     console.log('handleReInit', event, slick);
        // },
        // handleSetPosition(event, slick) {
        //     console.log('handleSetPosition', event, slick);
        // },
        // handleSwipe(event, slick, direction) {
        //     console.log('handleSwipe', event, slick, direction);
        // },
        // handleLazyLoaded(event, slick, image, imageSource) {
        //     console.log('handleLazyLoaded', event, slick, image, imageSource);
        // },
        // handleLazeLoadError(event, slick, image, imageSource) {
        //     console.log('handleLazeLoadError', event, slick, image, imageSource);
        // },
  }
}
</script>
