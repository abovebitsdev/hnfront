<template>
  <div class="hnn__select">
      <div class="hnn__select__passive" @click="openDropdown">
          <!-- <p class="mobile-show">Explore</p> -->
          <p class="hnn__select__passive__principal">
            <span v-if="isMobile">Explore</span>
            <strong v-text="actualElementText"></strong>
            <img class="hnn__select__passive__arrow" src="~/static/images/icons/arrow-down.svg" alt="Change">
          </p>
          <!-- <img class="hnn__select__passive__arrow" src="~/static/images/icons/arrow-up.svg" alt="Change"> -->
      </div>
      <div class="hnn__select__active" :class="{'showing': dropDownOpened}">
          <ul>
            <li v-for="single in data" :key="single.name">
              <p @click="changeDropdown(single)" :class="{'active': (actualElementValue === single.value)}" v-text="single.name"></p>
            </li>
          </ul>
      </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
        isMobile: false,
        dropDownOpened: false,
        actualElementText: '',
        actualElementValue: 1,
    }
  },
  props: ['data'],
  mounted() {
    this.textStyle();
    window.addEventListener("resize", this.textStyle());

    this.actualElementText = this.data[0].name;
    this.actualElementValue = this.data[0].value;
  },
  methods: {
    textStyle(){
      console.log("Resize");
      if(document.body.clientWidth <= 600){
        this.isMobile = true;
      }else{
        this.isMobile = false;
      }
    },
    openDropdown(){
        this.dropDownOpened = !this.dropDownOpened;
    },
    changeDropdown(element){
      this.actualElementText = element.name;
      this.actualElementValue = element.value;
      this.dropDownOpened = false;
      this.$emit('changingDropdown', element.value);
    }
  }
}
</script>
