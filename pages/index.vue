<template>
  <section>
      <div class="hnn">
        <div class="hnn__home_hero">
            <div class="hnn__home_hero__content" :class="{'active': homeShowing}">
                <h2 class="h1" v-text="heroData.title"></h2>
                <p v-text="heroData.description"></p>
                <!-- <a href="/tour" class="btn yellow">Book A Tour</a> -->
            </div>
            <div class="hnn__home_hero__go_down" @click="goDown">
              <p>Learn More ↓</p>
            </div>
            <div class="hnn__home_hero__background" :class="{'active': homeShowing}" :style="{'background-image': 'url('+heroData.image+')'}"></div>
        </div>

        <div class="white-section" v-fadescroll>
            <div class="global-section">
              <div class="global-section__head">
                <h4 class="h2">Get to know us.</h4>
              </div>
              <div class="global-section__body">
                <!-- <div v-if="isMobile" class="">
                  <slick
                    ref="slick"
                    :options="slickOptions"
                    >
                    <div>
                      <div class="home_icon_grid__icon">
                        <img src="~/static/images/icons/home-benefit-1.svg" alt="Real people">
                      </div>
                      <div class="home_icon_grid__title">Real people</div>
                      <div class="home_icon_grid__description">A sense of community and belonging in a new city</div>
                    </div>
                    <div>
                      <div class="home_icon_grid__icon">
                        <img src="~/static/images/icons/home-benefit-2.svg" alt="Benefit 2">
                      </div>
                      <div class="home_icon_grid__title">Big ideas</div>
                      <div class="home_icon_grid__description">Like-minded individuals who share your passion</div>
                    </div>
                    <div>
                      <div class="home_icon_grid__icon">
                        <img src="~/static/images/icons/home-benefit-3.svg" alt="Benefit 3">
                      </div>
                      <div class="home_icon_grid__title">Good vibes</div>
                      <div class="home_icon_grid__description">A stress-free, drama-free, jerk-free zone</div>
                    </div>
                    <div>
                      <div class="home_icon_grid__icon">
                        <img src="~/static/images/icons/home-benefit-4.svg" alt="Benefit 4">
                      </div>
                      <div class="home_icon_grid__title">Sweet digs</div>
                      <div class="home_icon_grid__description">Stylish furniture made by independent artisans</div>
                    </div>
                  </slick>
                </div> -->
                <div class="container col-vertical">
                  <div class="row row-md-4">
                    <div class="column-6 offset-2 column-xs-8 home_icon_grid column-xs-12 margin-bottom-xs">
                      <div class="home_icon_grid__wrapper">
                        <div class="home_icon_grid__wrapper__icon">
                          <img src="~/static/images/icons/Flexible-Leasing-.png" alt="Flexible Leasing">
                        </div>
                        <div class="home_icon_grid__wrapper__title">Flexible Leasing <small>(Starting at 4 Months)</small></div>
                      </div>
                    </div>
                    <div class="column-6 offset-8 column-xs-8 home_icon_grid column-xs-12 margin-bottom-xs cursor" @click="sendTo('/membership')">
                      <div class="home_icon_grid__wrapper">
                        <div class="home_icon_grid__wrapper__icon">
                          <img src="~/static/images/icons/Members-Vetted.png" alt="Members Vetted via In-Person Interviews">
                        </div>
                        <div class="home_icon_grid__wrapper__title">Members Vetted via In-Person Interviews</div>
                      </div>
                    </div>

                    <div class="column-6 offset-2 column-xs-8 home_icon_grid column-xs-12 margin-bottom-xs cursor" @click="goDown()">
                      <div class="home_icon_grid__wrapper">
                        <div class="home_icon_grid__wrapper__icon">
                          <img src="~/static/images/icons/Fully-Furnished-Apartments.png" alt="Fully Furnished Apartments">
                        </div>
                        <div class="home_icon_grid__wrapper__title">Fully Furnished Apartments</div>
                      </div>
                    </div>
                    <div class="column-6 offset-8 column-xs-8 home_icon_grid column-xs-12 margin-bottom-xs cursor" @click="animateTo('hustleGrind')">
                      <div class="home_icon_grid__wrapper">
                        <div class="home_icon_grid__wrapper__icon">
                          <img src="~/static/images/icons/10_-of-Profits-Donate.png" alt="10% of Profits Donated to Low-Income Entrepreneurs">
                        </div>
                        <div class="home_icon_grid__wrapper__title">10% of Profits Donated to Low-Income Entrepreneurs</div>
                      </div>
                    </div>

                    <div class="column-6 offset-2 column-xs-8 home_icon_grid column-xs-12 margin-bottom-xs cursor" @click="animateTo('hustleGrind')">
                      <div class="home_icon_grid__wrapper">
                        <div class="home_icon_grid__wrapper__icon">
                          <img src="~/static/images/icons/Co-working-Space.png" alt="Co-working Space">
                        </div>
                        <div class="home_icon_grid__wrapper__title">Co-working Space</div>
                      </div>
                    </div>
                    <div class="column-6 offset-8 column-xs-8 home_icon_grid column-xs-12 margin-bottom-xs">
                      <div class="home_icon_grid__wrapper">
                        <div class="home_icon_grid__wrapper__icon">
                          <img src="~/static/images/icons/Centrally-Located.png" alt="Centrally Located Near Transportation">
                        </div>
                        <div class="home_icon_grid__wrapper__title">Centrally Located Near Transportation</div>
                      </div>
                    </div>

                    <div class="column-6 offset-2 column-xs-8 home_icon_grid column-xs-12 margin-bottom-xs cursor" @click="animateTo('hustleGrind')">
                      <div class="home_icon_grid__wrapper">
                        <div class="home_icon_grid__wrapper__icon">
                          <img src="~/static/images/icons/Shared-Passion.png" alt="Shared Passion for Social Impact">
                        </div>
                        <div class="home_icon_grid__wrapper__title">Shared Passion for Social Impact</div>
                      </div>
                    </div>
                    <div class="column-6 offset-8 column-xs-8 home_icon_grid column-xs-12 margin-bottom-xs cursor" @click="sendTo('/membership')">
                      <div class="home_icon_grid__wrapper">
                        <div class="home_icon_grid__wrapper__icon">
                          <img src="~/static/images/icons/Weekly-Dinners.png" alt="Weekly Dinners and Events with Local Chefs and Artisans">
                        </div>
                        <div class="home_icon_grid__wrapper__title">Weekly Dinners and Events with Local Chefs and Artisans</div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="white-section" ref="homeDownSection">
          <div class="hnn__home_description" v-fadescroll>
            <div class="hnn__home_description__head">
              <h3 class="h2" v-text="whiteBlock.title"></h3>
            </div>
            <div class="hnn__home_description__body">
              <p v-html="whiteBlock.description_html"></p>
            </div>
          </div>
        </div>

        <div class="yellow-section" v-fadescroll>
            <div class="hnn__preview">
              <div class="global-section">
                <div class="global-section__head" id="noString">
                  <h4 class="h2" v-text="recommendation.title"></h4>
                  <p v-if="recommendation.description" v-html="recommendation.description"></p>
                </div>
              </div>

              <div class="hnn__preview__last">
                <p>Our Bushwick location is ready, with more on the way.</p>
                <div class="hnn__preview__last__cta">
                  <a class="btn-arrow" href="/membership"><span>Get the details</span></a>
                </div>
              </div>

              <div class="hnn__preview__body">
                <div class="container">
                  <div v-if="homeShowing" class="row">
                    <div :class="{'align-self-center': onlyOnePlace}"  class="column-7 column-md-6 offset-1 column-xs-12 margin-bottom-xs">
                      <Promocard :data="{
                          'image': placesData[0].image,
                          'title': placesData[0].name,
                          'description': placesData[0].description,
                          'cta': {
                            'text': 'Visit '+placesData[0].name,
                            'url': '/membership#the-space'
                          }
                        }"/>
                    </div>
                    <div v-if="!onlyOnePlace" class="column-7 column-md-6 column-xs-12">
                      <Promocard :data="{
                          'image': placesData[1].image,
                          'title': placesData[1].name,
                          'description': placesData[1].description,
                          'cta': {
                            'text': 'Visit '+placesData[1].name,
                            'url': 'www.herenowliving.com/membership'
                          }
                        }"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="white-section">
          <div class="hnn__home_friendship" v-fadescroll>
            <div class="global-section">
              <div class="global-section__head">
                <h3 class="h2">This is the place.</h3>
                <!-- <p>Meet your chosen family...</p> -->
              </div>
            </div>

            <div class="hnn__home_friendship__body">
              <div class="container col-vertical">
                <div class="row hnn__home_friendship__margin_bottom">
                  <div class="mobile-show column-xs-12 image margin-bottom-xs">
                    <div class="hnn__home_friendship__body__image">
                      <img :src="friendshipData.one.image" :alt="friendshipData.one.title"/>
                    </div>
                  </div>
                  <div class="column-4 offset-1 column-md-6 column-xs-12">
                    <div class="hnn__home_friendship__body__content">
                      <p class="hnn__home_friendship__body__content__title" v-text="friendshipData.one.title"></p>
                      <p class="hnn__home_friendship__body__content__description" v-text="friendshipData.one.description"></p>
                      <div class="hnn__home_friendship__body__content__cta">
                          <a class="btn-arrow" href="htto://google.com"><span>Find your people</span></a>
                      </div>
                    </div>
                  </div>
                  <div class="column-9 offset-6 column-md-6 column-xs-12 mobile-hide">
                      <div class="hnn__home_friendship__body__image">
                        <img :src="friendshipData.one.image" :alt="friendshipData.one.title"/>
                      </div>
                  </div>
                </div>

                <div class="row">
                  <div class="column-9 offset-1 column-md-6 column-xs-12 image margin-bottom-xs">
                      <div class="hnn__home_friendship__body__image">
                        <img :src="friendshipData.two.image" :alt="friendshipData.two.title"/>
                      </div>
                  </div>
                    <div class="column-4  offset-11 column-md-6 column-xs-12">
                      <div class="hnn__home_friendship__body__content">
                        <p class="hnn__home_friendship__body__content__title" v-text="friendshipData.two.title"></p>
                        <p class="hnn__home_friendship__body__content__description" v-text="friendshipData.two.description"></p>
                        <div class="hnn__home_friendship__body__content__cta">
                            <a class="btn-arrow" href="htto://google.com" ref="hustleGrind" id="hustleGrind"><span>Get to know us</span></a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="hnn__home_hero last" v-fadescroll>
            <div class="hnn__home_hero__content active" style="max-width: 620px">
                <h4 class="h2" style="font-size:33px;line-height:30px" v-text="lastBlock.title"></h4>
                <p v-if="lastBlock.description != '-'" v-text="lastBlock.description"></p>
                <a href="/apply" class="btn yellow">Apply Now</a>
            </div>
            <div class="hnn__home_hero__background" :class="{'active': homeShowing}" :style="{'background-image': 'url('+ lastBlock.image +')'}"></div>
        </div>
      </div>
  </section>
</template>

<script>
let Slick = null;
if (process.browser) {
    let $ = require("jquery")(window);
    Slick = require('vue-slick').default;
}



import Prismic from 'prismic-javascript'
import Promocard from '~/components/PromoCard'

export default {
  data: function () {
    return {
      heroData: {
        image: null,
        title: null,
        description: null,
      },
      whiteBlock: {
        title: null,
        description: null,
        description_html: null,
      },
      recommendation: {
        title: null,
        description: null,
      },
      friendshipData:{
        one:{
          title: null,
          description: null,
          image: null,
        },
        two:{
          title: null,
          description: null,
          image: null,
        }
      },
      lastBlock: {
        title: null,
        description: null,
        image: null,
      },
      homeShowing: false,
      windowVerticalScroll: 0,
      isMobile: false,
      slickOptions: {
         slidesToShow: 1,
         arrows: false,
         dots: true,
     },

     placesData: [],
     onlyOnePlace: false,
    }
  },
  components: {
    Promocard,
    Slick
  },
  mounted(){

      if(document.referrer !== ''){
          document.cookie = "refferer_domain=" + document.referrer;
      }

    Prismic.getApi(process.env.apiPrismicUrl + '/api/v2').then(function(api) {
      return api.query(
        Prismic.Predicates.any('document.type', ['home_page', 'places'])
      );
    }).then(function(response) {

      let counter = 1;
      response.results.forEach(function(element) {
        if(element.type === 'home_page'){
          this.heroData.image = element.data.hero_image.url;
          this.heroData.description = element.data.hero_description[0].text;
          this.heroData.title = element.data.hero_title[0].text;

          this.whiteBlock.title = element.data.white_block_title[0].text;
          this.whiteBlock.description = element.data.white_block_description[0].text;
          // this.whiteBlock.description_html = element.data.white_block_description_html;

          // console.log(this.whiteBlock.description);
          this.whiteBlock.description_html = this.whiteBlock.description.split("amenities");
          this.whiteBlock.description_html = this.whiteBlock.description_html[0] + '<a href="membership#aminities">amenities</a>' + this.whiteBlock.description_html[1]
          // console.log(this.whiteBlock.description_html);

          this.recommendation.title = element.data.home_recommendation_title[0].text;
          this.recommendation.description = element.data.home_recommendation_description[0].text;


          this.friendshipData.one.title = element.data.friendship_title_1[0].text;
          this.friendshipData.one.description = element.data.friendship_description_1[0].text;
          this.friendshipData.one.image = element.data.friendship_image_1.url;

          this.friendshipData.two.title = element.data.friendship_title_2[0].text;
          this.friendshipData.two.description = element.data.friendship_description_2[0].text;
          this.friendshipData.two.image = element.data.friendship_image_2.url;

          this.lastBlock.title = element.data.last_block_title[0].text;
          this.lastBlock.description = element.data.last_block_description[0].text;
          this.lastBlock.image = element.data.last_block_image.url;
        }else if(element.type === 'places'){
          if(counter <= 2){
            if(element.data.place_active === 'Active'){
              let single = {}
              single.name = element.data.name[0].text;
              single.title = element.data.title[0].text;
              single.description = element.data.description[0].text;
              single.image = element.data.gallery[0].single_image.url;
              single.value = counter;
              this.placesData.push(single);
              counter ++;
            }
          }
        }
      }.bind(this))
      this.homeShowing = true;
      this.membershipLoaded = true;
      if(this.placesData.length === 1){
        this.onlyOnePlace = true;
      }


      if(this.$route.hash){
        let target = this.$route.hash.replace('#', '')
        window.scroll({
          top: document.getElementById(target).getBoundingClientRect().top,
          left: 0,
          behavior: 'smooth'
        });
      }

    }.bind(this), function(err) {
      console.log("Something went wrong: ", err);
    }.bind(this));

    if(document.body.clientWidth <= 600){
      this.isMobile = true;
    }else{
      this.isMobile = false;
    }
  },
  methods: {
    goDown() {
      window.scroll({
        top: this.$refs.homeDownSection.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    },
    animateTo(target) {
      console.log(target);
      console.log(document.getElementById(target));
      console.log(document.getElementById(target).getBoundingClientRect());
      window.scroll({
        top: document.getElementById(target).getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'
      });
    },
    sendTo(url){
      window.location.href = url;
    }
  }
}
</script>
