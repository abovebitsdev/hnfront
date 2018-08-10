<template>
  <div class="hnn__horizontal">
    <div class="container" ref="horizontalCarousel">
      <div class="row">
        <div class="column-14 offset-1 column-xs-12">
          <div class="hnn__horizontal__head" ref="horizontalCarouselHead">
            <div class="hnn__horizontal__head__title">
              <p class="h3" v-text="data.title"></p>
              <div class="hnn__horizontal__head__title__arrows">
                <div class="hnn__horizontal__head__title__arrows__prev hnn__horizontal__head__title__arrows__single" :class="{'disabled': arrowDisabled.left}" @click.prevent="changeCard('prev')">
                  <img src="~/static/images/icons/arrow-circle-left.svg" alt="Prev">
                </div>
                <div class="hnn__horizontal__head__title__arrows__next hnn__horizontal__head__title__arrows__single" :class="{'disabled': arrowDisabled.right}" @click.prevent="changeCard('next')">
                  <img src="~/static/images/icons/arrow-circle-right.svg" alt="Next">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hnn__horizontal__body" ref="horizontalCarouselBody">
      <div class="hnn__horizontal__body__wrapper">
        <div class="hnn__horizontal__body__wrapper__card" v-for="element in data.cards" :key="element.image">
          <Promocard :data="{
              'size': cardSize,
              'image': element.image,
              'title': 'Bushwick',
              'description': 'A flourishing art community with plentiful art studios and galleries',
              'cta': {
                'text': 'Visit Bushwick',
                'url': 'http://google.com'
              }
            }"/>
        </div>
      </div>

    </div>
  </div>
</template>


<script>

import Promocard from '~/components/PromoCard'

export default {
  data () {
    return {
      cardSize: 320,
      cardPositions: [],
      horizontalScroll: 0,
      scrollWidthValue: 0,
      arrowDisabled: {
        left: true,
        right: false,
      },
      isMobile: false
    }
  },
  props: ['data'],
  components: {
    Promocard
  },
  mounted() {
    if(document.body.clientWidth > 768){
      this.$refs.horizontalCarouselBody.style.paddingLeft = this.$refs.horizontalCarouselHead.offsetLeft + 'px';
      this.$refs.horizontalCarouselBody.firstChild.lastChild.style.marginRight = this.$refs.horizontalCarouselHead.offsetLeft + 'px';
      for(let i = 0; i < this.data.cards.length; i++){
        this.cardPositions.push( (this.cardSize + 30)*i );
      }
      this.$refs.horizontalCarouselBody.addEventListener('scroll', this.handleScroll);
      this.calculate();
    }
  },
  methods: {
    calculate(){
      this.scrollWidthValue = (this.data.cards.length * (this.cardSize + 30) ) -  (document.body.clientWidth - this.$refs.horizontalCarouselHead.offsetLeft);
    },
    changeCard(direction){
      if(direction === 'next'){
        if(!this.arrowDisabled.right){
          if(this.horizontalScroll < this.cardSize){
            this.goToCardPosition(this.cardSize + 30);
          }else{
            let self = this;
            this.cardPositions.forEach(function(element, index){
              if(self.horizontalScroll >= self.cardPositions[index] && self.horizontalScroll < self.cardPositions[index + 1]){
                self.goToCardPosition(self.cardPositions[index + 1]);
              }
            })
          }
        }
      }else{
        if(!this.arrowDisabled.left){
          let self = this;
          this.cardPositions.forEach(function(element, index){
            if(self.horizontalScroll <= self.cardPositions[index] && self.horizontalScroll > self.cardPositions[index - 1]){
              self.goToCardPosition(self.cardPositions[index - 1]);
            }
          })
        }
      }

    },
    goToCardPosition(value){
      const position = value;
      var timerID;
      if( (position + 30 <this.horizontalScroll) || (position - 30 > this.horizontalScroll)){
        if( position < this.horizontalScroll){
          timerID = setInterval(function() {
              this.$refs.horizontalCarouselBody.scrollBy(-20, 0);
              if( this.$refs.horizontalCarouselBody.scrollLeft <= position )
                  clearInterval(timerID);
          }.bind(this), 13);
        }else{
          timerID = setInterval(function() {
              this.$refs.horizontalCarouselBody.scrollBy(20, 0);
              if( this.$refs.horizontalCarouselBody.scrollLeft >= position )
                  clearInterval(timerID);
          }.bind(this), 13);
        }
      }
      setTimeout(function(){
        clearInterval(timerID);
      }, 1000);
    },
    handleScroll (event) {
      this.horizontalScroll = this.$refs.horizontalCarouselBody.scrollLeft;
      if(this.horizontalScroll > 0){
        this.arrowDisabled.left = false;
        if(this.horizontalScroll > this.scrollWidthValue){
          this.arrowDisabled.right = true;
        }else{
          this.arrowDisabled.right = false;
        }
      }else{
        this.arrowDisabled.left = true;
      }
    }
  }
}
</script>
