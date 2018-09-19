<template>
  <section>
      <div class="hnn">
        <div class="hnn__home_hero">
            <div class="hnn__home_hero__content long" :class="{'active': homeShowing}">
                <h2 class="h1" v-text="aboutHeroData.title"></h2>
                <p v-text="aboutHeroData.description"></p>
            </div>
            <div class="hnn__home_hero__background" :class="{'active': homeShowing}" :style="{'background-image': 'url('+ aboutHeroData.image +')'}"></div>
        </div>

          <div class="white-section">
            <div class="hnn__home_friendship" v-fadescroll>
              <div class="global-section">
                <div class="global-section__head">
                    <h3 class="h2" v-text="aboutHeadlineData.title"></h3>
                    <p v-html="aboutHeadlineData.description"></p>
                </div>
              </div>

              <div class="hnn__home_friendship__body">
                <div class="container col-vertical">

                  <div class="" v-for="(element, index) in aboutHeadlineData.blocks" :key="element.block_title">
                    <div v-if="index % 2 === 0" class="row hnn__home_friendship__margin_bottom">
                      <div class="column-xs-12 image margin-bottom-xs mobile-show">
                          <div class="hnn__home_friendship__body__image">
                            <img :src="element.gallery_image.url" :alt="element.block_title[0].text"/>
                          </div>
                      </div>
                      <div class="column-4 offset-1 column-md-6 column-xs-12">
                        <div class="hnn__home_friendship__body__content">
                          <p class="hnn__home_friendship__body__content__title" v-text="element.block_title[0].text"></p>
                          <p class="hnn__home_friendship__body__content__description" v-text="element.block_description[0].text"></p>
                        </div>
                      </div>
                      <div class="column-9 offset-6 column-md-6 column-xs-12 mobile-hide">
                          <div class="hnn__home_friendship__body__image">
                            <img :src="element.gallery_image.url" :alt="element.block_title[0].text"/>
                          </div>
                      </div>
                    </div>
                    <div  v-else  class="row hnn__home_friendship__margin_bottom">
                      <div class="column-9 offset-1 column-md-6 column-xs-12 image margin-bottom-xs">
                          <div class="hnn__home_friendship__body__image">
                            <img :src="element.gallery_image.url" :alt="element.block_title[0].text"/>
                          </div>
                      </div>
                        <div class="column-4  offset-11 column-md-6 column-xs-12">
                          <div class="hnn__home_friendship__body__content">
                            <p class="hnn__home_friendship__body__content__title" v-text="element.block_title[0].text"></p>
                            <p class="hnn__home_friendship__body__content__description" v-text="element.block_description[0].text"></p>
                          </div>
                        </div>
                    </div>
                  </div>

                </div>
              </div>

                <div class="global-section" v-fadescroll>
                  <div class="global-section__head special-margin"  v-if="aboutHeadlineData.title_2 !== '-'">
                      <h3 class="h2" v-text="aboutHeadlineData.title_2"></h3>
                      <p  v-if="aboutHeadlineData.description_2 !== '-'" v-text="aboutHeadlineData.description_2"></p>

                      <a href="/membership" class="btn-arrow"><span>Explore Membership</span></a>
                      <!-- <nuxt-link to='/contact'>Explore Membership</nuxt-link> -->
                  </div>
                </div>
            </div>
          </div>

          <div class="hnn__home_hero small shadow" v-fadescroll>
              <div class="hnn__home_hero__content active">
                  <h2 class="h2" v-text="globalLastBlockData.title"></h2>
                  <p v-if="globalLastBlockData.description !== '-'" v-text="globalLastBlockData.description">.</p>
                  <a href="/apply" class="btn yellow-transparent">Apply Now</a>
              </div>
              <div class="hnn__home_hero__background" :class="{'active': homeShowing}" :style="{'background-image': 'url('+globalLastBlockData.image+')'}"></div>
          </div>
      </div>
  </section>
</template>

<script>
import Prismic from 'prismic-javascript'
import Dropdown from '~/components/Dropdown'
import Gallery from '~/components/Gallery'
import HorizontalCarousel from '~/components/HorizontalCarousel'

export default {
  data: function () {
    return {
      homeShowing: false,
      aboutHeroData: {
        image: null,
        title: null,
        description: null,
      },
      aboutHeadlineData: {
        title: null,
        description: null,
        title_2: null,
        description_2: null,
        blocks: {},
      },
      globalLastBlockData: {
        image: null,
        title: null,
        description: null,
      },
    }
  },
  components: {
    Dropdown,
    Gallery,
    HorizontalCarousel
  },
  mounted(){
    this.homeShowing = true;

    Prismic.getApi(process.env.apiPrismicUrl + '/api/v2').then(function(api) {
      return api.query(
        Prismic.Predicates.any('document.type', ['about_us_page', 'last_block'])
      );
    }).then(function(response) {
      console.log( response.results );
      let element = response.results[0];


      response.results.forEach(function(element) {
        console.log(element.type);
        if(element.type === 'about_us_page'){
          this.aboutHeroData.title = element.data.hero_title[0].text;
          this.aboutHeroData.description = element.data.hero_description[0].text;
          this.aboutHeroData.image = element.data.hero_image.url;

          this.aboutHeadlineData.title = element.data.about_us__headline_title[0].text;
          this.aboutHeadlineData.description = element.data.about_us__headline_description[0].text;
          this.aboutHeadlineData.title_2 = element.data.about_us__headline_bottom_title[0].text;
          this.aboutHeadlineData.description_2 = element.data.about_us__headline_bottom_description[0].text;

          this.aboutHeadlineData.blocks = element.data.body[0].items;

        }else if(element.type === 'last_block'){
          this.globalLastBlockData.title = element.data.last_block_title[0].text;
          this.globalLastBlockData.description = element.data.last_block_description[0].text;
          this.globalLastBlockData.image = element.data.last_block_image.url;

        }
      }.bind(this));

      this.homeShowing = true;
    }.bind(this), function(err) {
      console.log("Something went wrong: ", err);
    }.bind(this));

  }
}
</script>