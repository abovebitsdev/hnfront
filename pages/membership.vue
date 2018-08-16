<template>
  <section>
      <div class="hnn">
        <div class="hnn__home_hero" ref="membershipHero">
            <div class="hnn__home_hero__content" :class="{'active': homeShowing}">
                <h2 class="h1" v-text="heroMembershipData.title"></h2>
                <p v-text="heroMembershipData.description"></p>
            </div>
            <div class="hnn__home_hero__background" :class="{'active': homeShowing}" :style="{'background-image': 'url('+heroMembershipData.image+')'  }"></div>
        </div>


        <div class="white-section" ref="auxHeightSection">
          <div class="hnn__home_friendship__last" style="margin-top: 0">
              <div class="hnn__home_friendship__last__title">
                The Value of Friendship.
              </div>
              <div class="hnn__home_friendship__last__description">
                See how a Here&Now membership compares to other ways of living in the city.
              </div>
          </div>
          <div class="hnn__membership__table" id="aminities">
            <div class="container">
              <div class="row">
                <div class="column-14 offset-1 column-md-12 column-xs-12 image">
                  <div class="hnn__membership__table__wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>&nbsp;</th>
                          <th>Traditional<br class="desktop-show"/>Lease</th>
                          <th class="mobile-hide">Craiglist<br class="desktop-show"/>Room</th>
                          <th><img src="~/static/images/icons/hnmark.svg" alt="Here & Now"></th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Rent</td>
                          <td>$2,100</td>
                          <td class="mobile-hide">$1,300</td>
                          <td>$1,400</td>
                        </tr>
                        <tr>
                          <td>Utilities</td>
                          <td>$110</td>
                          <td class="mobile-hide">$60</td>
                          <td>Included</td>
                        </tr>
                        <tr>
                          <td>Cable</td>
                          <td>$100</td>
                          <td class="mobile-hide">$50</td>
                          <td>Included</td>
                        </tr>
                        <tr>
                          <td>Washer/Dryer</td>
                          <td>$50</td>
                          <td class="mobile-hide">$50</td>
                          <td>Included</td>
                        </tr>
                        <tr>
                          <td>Cleaning</td>
                          <td>$240</td>
                          <td class="mobile-hide">$120</td>
                          <td>Included</td>
                        </tr>
                        <tr>
                          <td>Supplies</td>
                          <td>$40</td>
                          <td class="mobile-hide">$40</td>
                          <td>Included</td>
                        </tr>
                        <tr>
                          <td>Wifi</td>
                          <td>$70</td>
                          <td class="mobile-hide">$40</td>
                          <td>Included</td>
                        </tr>
                        <tr>
                          <td>Total Cost</td>
                          <td>$2,740</td>
                          <td class="mobile-hide">$1,690</td>
                          <td><strong>$1,400</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hnn__membership">
          <div class="hnn__membership__menu">
            <div class="hnn__membership__menu__position" :class="{'fixed': subMenuFixed, 'scrollingUp': scrollingUp}">
              <div class="hnn__membership__menu__position__left">
                <ul class="hnn__membership__menu__position__left__subnav horizontal">
                  <li class="mobile-hide"><span>Explore:</span> </li>
                  <li @click="goTo('theExperienceSection')" :class="{ 'active': (actualSubSection === 1) }"><p>The Experience</p></li>
                  <li @click="goTo('theSpaceSection')" :class="{ 'active': (actualSubSection === 2) }"><p>The Space</p></li>
                  <!-- <li @click="goTo('theHubSection')" :class="{ 'active': (actualSubSection === 3) }"><p>The Hub</p></li> -->
                </ul>
              </div>
              <div class="hnn__membership__menu__position__right mobile-hide">
                <!-- <a class="btn" href="/tour">Book a Tour</a> -->
              </div>
            </div>
            <div class="hnn__membership__menu__spacing"></div>
          </div>


          <div class="white-section" id="the-experience" ref="theExperienceSection">
            <div class="hnn__home_friendship" v-fadescroll>
              <div class="global-section">
                <div class="global-section__head">
                  <h3 class="h2" v-text="experienceData.title"></h3>
                  <p v-if="experienceData.description != '-'" v-text="experienceData.description"></p>
                </div>
              </div>

              <div class="hnn__home_friendship__body">
                <div class="container col-vertical">
                  <div class="row hnn__home_friendship__margin_bottom">
                    <div class="column-xs-12 mobile-show image margin-bottom-xs">
                        <div class="hnn__home_friendship__body__image">
                          <img :src="experienceBlockData.one.image" :alt="experienceBlockData.one.title"/>
                        </div>
                    </div>
                    <div class="column-4 offset-1 column-md-6 column-xs-12">
                      <div class="hnn__home_friendship__body__content">
                        <p class="hnn__home_friendship__body__content__title" v-text="experienceBlockData.one.title"></p>
                        <p class="hnn__home_friendship__body__content__description" v-text="experienceBlockData.one.description"></p>
                      </div>
                    </div>
                    <div class="column-9 offset-6 column-md-6 mobile-hide">
                        <div class="hnn__home_friendship__body__image">
                          <img :src="experienceBlockData.one.image" :alt="experienceBlockData.one.title"/>
                        </div>
                    </div>
                  </div>

                  <div class="row hnn__home_friendship__margin_bottom">
                    <div class="column-9 offset-1 column-md-6 column-xs-12 image margin-bottom-xs">
                        <div class="hnn__home_friendship__body__image">
                          <img :src="experienceBlockData.two.image" :alt="experienceBlockData.two.title"/>
                        </div>
                    </div>
                      <div class="column-4 offset-11 column-md-6 column-xs-12">
                        <div class="hnn__home_friendship__body__content">
                          <p class="hnn__home_friendship__body__content__title" v-text="experienceBlockData.two.title"></p>
                          <p class="hnn__home_friendship__body__content__description" v-text="experienceBlockData.two.description"></p>
                        </div>
                      </div>
                  </div>

                  <div class="row">
                    <div class="column-xs-12 mobile-show image margin-bottom-xs">
                        <div class="hnn__home_friendship__body__image">
                          <img :src="experienceBlockData.tree.image" :alt="experienceBlockData.tree.title"/>
                        </div>
                    </div>
                    <div class="column-4 offset-1 column-md-6 column-xs-12">
                      <div class="hnn__home_friendship__body__content">
                        <p class="hnn__home_friendship__body__content__title" v-text="experienceBlockData.tree.title"></p>
                        <p class="hnn__home_friendship__body__content__description" v-text="experienceBlockData.tree.description"></p>
                      </div>
                    </div>
                    <div class="column-9 offset-6 column-md-6 mobile-hide">
                        <div class="hnn__home_friendship__body__image">
                          <img :src="experienceBlockData.tree.image" :alt="experienceBlockData.tree.title"/>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hnn__membership__come_on_in"  :style="{'background-image': 'url('+ membershipExperienceData.image +')'}" v-fadescroll @click="redirectTo('/#noString')" style="cursor: pointer;">
              <div class="hnn__membership__come_on_in__text"  :class="{ centered: membershipExperienceData.description == '-' }">
                <div class="hnn__membership__come_on_in__text__title" :class="{ 'margin-bottom-0': membershipExperienceData.description == '-' }">
                  <p v-text="membershipExperienceData.title"></p>
                </div>
                <p class="hnn__membership__come_on_in__text__description" v-if="membershipExperienceData.description != '-'" v-text="membershipExperienceData.description"></p>
              </div>
          </div>

          <div class="white-section" ref="theSpaceSection" id="the-space">
            <div class="hnn__home_friendship" v-fadescroll v-if="membershipLoaded">
              <div class="global-section">
                <div class="global-section__head big">
                  <div v-if="onlyOnePlace" class="">
                    <h3 class="h2 mobile-hide">Explore <span >{{activeData.name}}</span> </h3>
                  </div>
                  <div v-else>
                    <p class="mobile-show margin-bottom-xs">Select your location</p>
                    <h3 class="h2 mobile-hide">Explore</h3>
                    <Dropdown @changingDropdown="changindData" :data="membershipData" />
                  </div>
                </div>
              </div>
              <div class="hnn__home_friendship__body">
                <div v-if="!showingGallery" class="loading">
                    <Loading />
                </div>
                <div v-else class="container col-vertical">
                  <div class="row">
                    <div class="column-9 offset-1 column-md-12 column-xs-12 image margin-bottom-xs">
                        <div class="hnn__home_friendship__body__image">
                          <Gallery :data="activeData.gallery" />
                        </div>
                    </div>
                    <div class="column-4 offset-11 column-md-12  column-xs-12">
                      <div class="hnn__home_friendship__body__content">
                        <p class="hnn__home_friendship__body__content__title" v-text="activeData.title"></p>
                        <p class="hnn__home_friendship__body__content__description" v-text="activeData.description"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div class="hnn__home_hero shadow last" v-fadescroll>
              <div class="hnn__home_hero__content active">
                  <h2 class="h2" v-text="membershipLastData.title"></h2>
                  <p v-if="membershipLastData.description != '-'" v-text="membershipLastData.description">The only thing you need to do is get here.</p>
                  <div class="btn-inline">
                      <a href="/apply" class="btn yellow-transparent">Apply Now</a>
                  </div>
              </div>
              <div class="hnn__home_hero__background" :class="{'active': homeShowing}" :style="{'background-image': 'url('+ membershipLastData.image +')'}"></div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
if (process.browser) {
    let $ = require("jquery")(window);
}

import Dropdown from '~/components/Dropdown'
import Gallery from '~/components/Gallery'
import Loading from '~/components/Loading'
import HorizontalCarousel from '~/components/HorizontalCarousel'
import Prismic from 'prismic-javascript'

export default {
  data: function () {
    return {

      heroMembershipData: {
        image: null,
        title: null,
        description: null,
      },
      experienceData: {
        title: null,
        description: null,
      },
      experienceBlockData: {
        one: {
          title: null,
          description: null,
          image: null,
        },
        two: {
          title: null,
          description: null,
          image: null,
        },
        tree: {
          title: null,
          description: null,
          image: null,
        }
      },
      membershipHubData: {
        image: null,
        title: null,
        description: null,
      },
      membershipExperienceData: {
        image: null,
        title: null,
        description: null,
      },
      membershipLastData: {
        image: null,
        title: null,
        description: null,
      },

      lastScrollTop: 0,
      scrollingUp: false,
      homeShowing: false,
      windowVerticalScroll: 0,

      heroHeight: 0,
      subMenuFixed: false,
      showingGallery: false,

      subSectionPositions: [],
      actualSubSection: 0,

      activeData: {},
      onlyOnePlace: false,
      membershipData: [],
      membershipLoaded: false,
    }
  },
  components: {
    Dropdown,
    Gallery,
    HorizontalCarousel,
    Loading
  },
  mounted(){

    this.homeShowing = true;
    this.heroHeight = this.$refs.membershipHero.clientHeight + this.$refs.auxHeightSection.clientHeight;
    this.showingGallery = true;

    this.subSectionPositions.push(this.getPosition(this.$refs.theSpaceSection).y);
    // this.subSectionPositions.push(this.getPosition(this.$refs.theHubSection).y);

    console.log(this.subSectionPositions);

    window.addEventListener('scroll', this.handleScroll);
    window.scroll();

    Prismic.getApi(process.env.apiPrismicUrl + '/api/v2').then(function(api) {
      return api.query(
        Prismic.Predicates.any('document.type', ['membership_page', 'places'])

      );
    }).then(function(response) {
      // console.log( response.results );
      let counter = 1;
      response.results.forEach(function(element) {
        // console.log(element.type);
        if(element.type === 'membership_page'){
          this.heroMembershipData.title = element.data.hero_title[0].text;
          this.heroMembershipData.description = element.data.hero_description[0].text;
          this.heroMembershipData.image = element.data.hero_image.url;

          this.experienceData.title = element.data.experience_title[0].text;
          this.experienceData.description = element.data.experience_description[0].text;

          this.experienceBlockData.one.title = element.data.experience_block_1_title[0].text;
          this.experienceBlockData.one.description = element.data.experience_block_1_description[0].text;
          this.experienceBlockData.one.image = element.data.experience_block_1_image.url;

          this.experienceBlockData.two.title = element.data.experience_block_2_title[0].text;
          this.experienceBlockData.two.description = element.data.experience_block_2_description[0].text;
          this.experienceBlockData.two.image = element.data.experience_block_2_image.url;

          this.experienceBlockData.tree.title = element.data.experience_block_3_title[0].text;
          this.experienceBlockData.tree.description = element.data.experience_block_3_description[0].text;
          this.experienceBlockData.tree.image = element.data.experience_block_3_image.url;

          this.membershipExperienceData.title = element.data.experience_come_on_in_title[0].text;
          this.membershipExperienceData.description = element.data.experience_come_on_in_description[0].text;
          this.membershipExperienceData.image = element.data.experience_come_on_in_image.url;

          this.membershipHubData.title = element.data.hub_title[0].text;
          this.membershipHubData.description = element.data.hub_description[0].text;
          this.membershipHubData.image = element.data.hub_image.url;

          this.membershipLastData.title = element.data.membership_last_block_title[0].text;
          this.membershipLastData.description = element.data.membership_last_block_description[0].text;
          this.membershipLastData.image = element.data.membership_last_block_image.url;
        }else if(element.type === 'places'){
          if(element.data.place_active === 'Active'){
            let single = {}
            single.name = element.data.name[0].text;
            single.title = element.data.title[0].text;
            single.description = element.data.description[0].text;
            single.gallery = element.data.gallery;
            single.value = counter;
            this.membershipData.push(single);
            counter ++;
          }
        }
      }.bind(this))

      if(this.membershipData.length === 1){
        this.onlyOnePlace = true;
      }
      this.activeData = this.membershipData[0];
      this.membershipLoaded = true;

      setTimeout(function(){
        if(window.location.hash){
          let target = window.location.hash.replace('#','');
          console.log(document.getElementById(target).offsetTop);
          window.scroll({
            top: document.getElementById(target).offsetTop + screen.height - 100,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, 400);


    }.bind(this), function(err) {
      console.log("Something went wrong: ", err);
    }.bind(this));
  },
  methods: {
    handleScroll (event) {
      // console.log(this.windowVerticalScroll);
      this.windowVerticalScroll = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
       if (this.windowVerticalScroll > this.lastScrollTop){
         this.scrollingUp = false;
         if(this.windowVerticalScroll > (this.heroHeight)){
           this.subMenuFixed = true;
           this.$root.$emit('headerWhite', false);
           this.$root.$emit('headerByebye', true);
         }else{
           this.subMenuFixed = false;
           this.$root.$emit('headerByebye', false);
         }
       } else {
         this.$root.$emit('headerWhite', true);
         this.$root.$emit('headerByebye', false);
         if(this.windowVerticalScroll > (this.heroHeight)){
           this.subMenuFixed = true;
           this.scrollingUp = true;
         }else{
           this.subMenuFixed = false;
           this.scrollingUp = false;
         }
       }

       if(this.windowVerticalScroll > (this.heroHeight)){
         this.actualSubSection = 1;
         let self = this;
         this.subSectionPositions.forEach(function(element, index){
           if(self.windowVerticalScroll > self.subSectionPositions[self.subSectionPositions.length - 1]){
             self.actualSubSection = self.subSectionPositions.length + 1;
           }else{
             if(self.windowVerticalScroll >= self.subSectionPositions[index] && self.windowVerticalScroll < self.subSectionPositions[index + 1]){
               self.actualSubSection = index + 2;
             }
           }

         })
       }else{
         this.actualSubSection = 0;
       }
       this.lastScrollTop = this.windowVerticalScroll;
       if(this.windowVerticalScroll > 50){
         this.$root.$emit('headerWhite', true);
       }else{
         this.$root.$emit('headerWhite', false);
       }
    },
    goTo(id){
      window.scroll({
        top: this.getPosition(this.$refs[id]).y,
        left: 0,
        behavior: 'smooth'
      });
    },
    redirectTo(url){
      console.log(url);
      window.location.href = url;
    },
    changindData(value){
      this.showingGallery = false;
      this.activeData = this.membershipData[value - 1];
      setTimeout(function(){
        this.showingGallery = true;
      }.bind(this), 500);
    },

    getPosition(el) {
      let _x = 0;
      let _y = 0;
      while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
          _x += el.offsetLeft - el.scrollLeft;
          _y += el.offsetTop - el.scrollTop;
          el = el.offsetParent;
      }
      return { y: _y, x: _x };
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
