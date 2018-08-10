<template>
  <section>
      <div class="hnn">
        <div class="hnn__home_hero">
            <div class="hnn__home_hero__content" :class="{'active': homeShowing}">
                <h2 class="h1" v-text="communityHeroData.title"></h2>
                <p v-text="communityHeroData.description"></p>
            </div>
            <div class="hnn__home_hero__background" :class="{'active': homeShowing}" :style="{'background-image': 'url('+communityHeroData.image+')'}"></div>
        </div>

          <div class="white-section">
            <div class="hnn__home_friendship" v-fadescroll>
              <div class="global-section">
                <div class="global-section__head only-head">
                  <h3 class="h2" v-text="communityHeadlineData.title"></h3>
                  <p v-text="communityHeadlineData.description"></p>
                </div>
              </div>
            </div>
          </div>


          <div class="white-section">
            <div class="hnn__home_friendship" v-fadescroll>
              <div class="global-section">
                <div class="global-section__head">
                  <h3 class="h2" v-text="communitywhiteBlock.title"></h3>
                </div>
              </div>

              <div class="hnn__home_friendship__body">
                <div class="container col-vertical">
                  <div class="" v-for="(element, index) in communitywhiteBlock.blocks" :key="element">
                    <div v-if="index % 2 === 0" class="row hnn__home_friendship__margin_bottom">
                      <div class="column-xs-12 image margin-bottom-xs mobile-show">
                          <div class="hnn__home_friendship__body__image">
                            <img :src="element.gallery_image.url" :alt="element.community_white_blocks_title[0].text"/>
                          </div>
                      </div>
                      <div class="column-4 offset-1 column-md-6 column-xs-12">
                        <div class="hnn__home_friendship__body__content">
                          <p class="hnn__home_friendship__body__content__title" v-text="element.community_white_blocks_title[0].text"></p>
                          <p class="hnn__home_friendship__body__content__description" v-text="element.community_white_blocks_description[0].text"></p>
                        </div>
                      </div>
                      <div class="column-9 offset-6 column-md-6 column-xs-12 mobile-hide">
                          <div class="hnn__home_friendship__body__image">
                            <img :src="element.gallery_image.url" :alt="element.community_white_blocks_title[0].text"/>
                          </div>
                      </div>
                    </div>
                    <div  v-else  class="row hnn__home_friendship__margin_bottom">
                      <div class="column-9 offset-1 column-md-6 column-xs-12 image margin-bottom-xs">
                          <div class="hnn__home_friendship__body__image">
                            <img :src="element.gallery_image.url" :alt="element.community_white_blocks_title[0].text"/>
                          </div>
                      </div>
                        <div class="column-4  offset-11 column-md-6 column-xs-12">
                          <div class="hnn__home_friendship__body__content">
                            <p class="hnn__home_friendship__body__content__title" v-text="element.community_white_blocks_title[0].text"></p>
                            <p class="hnn__home_friendship__body__content__description" v-text="element.community_white_blocks_description[0].text"></p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container" style="display: none;">
              <div class="row">
                <div class="column-14 offset-1 column-md-12 column-xs-12 margin-bottom-xs image mobile-full-button">
                    <div class="hnn__home_hero small shadow">
                        <div class="hnn__home_hero__content active">
                            <h2 class="h2" v-text="communityHubData.title"></h2>
                            <div class="mobile-hide">
                              <p v-text="communityHubData.description"></p>
                              <ul class="horizontal">
                                <li>
                                  <img src="~/static/images/icons/home-benefit-white-4.svg" alt="Benefit 1">
                                  <p>Benefit 1</p>
                                </li>
                                <li>
                                  <img src="~/static/images/icons/home-benefit-white-3.svg" alt="Benefit 2">
                                  <p>Benefit 2</p>
                                </li>
                                <li>
                                  <img src="~/static/images/icons/home-benefit-white-2.svg" alt="Benefit 3">
                                  <p>Benefit 3</p>
                                </li>
                              </ul>
                            </div>
                            <a href="#" class="btn white mobile-hide">Visit: 49 Wyckoff Ave</a>
                        </div>
                        <div class="hnn__home_hero__background" :class="{'active': homeShowing}" :style="{'background-image': 'url('+communityHubData.image+')'}"></div>
                    </div>
                    <a href="#" class="btn white mobile-show mobile-full-button__cta">Visit: 49 Wyckoff Ave</a>
                </div>
                <div class="column-xs-12 mobile-show">
                  <p class="margin-bottom-xs"  v-text="communityHubData.description"></p>
                  <ul class="row horizontal">
                    <li class="column-xs-12 margin-bottom-xs">
                      <img src="~/static/images/icons/home-benefit-4.svg" alt="Benefit 1">
                      <p>Benefit 1</p>
                    </li>
                    <li class="column-xs-12 margin-bottom-xs">
                      <img src="~/static/images/icons/home-benefit-3.svg" alt="Benefit 2">
                      <p>Benefit 2</p>
                    </li>
                    <li class="column-xs-12 margin-bottom-xs">
                      <img src="~/static/images/icons/home-benefit-2.svg" alt="Benefit 3">
                      <p>Benefit 3</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="yellow-section table-special-padding" v-fadescroll>
            <div class="hnn__community_featured">
              <div class="container col-vertical">
                <div class="row">
                  <div class="column-14 offset-1 column-md-12 hnn__community_featured__backgroung column-xs-12">
                    <div class="row">
                      <div class="column-8 column-md-12">
                          <div class="hnn__community_featured__profile margin-bottom-xs">
                              <div class="hnn__community_featured__profile__image" :class="{'active': homeShowing}" :style="{'background-image': 'url('+communityProfileoData.image+')'}"></div>
                              <div class="hnn__community_featured__profile__text">
                                <p v-text="communityProfileoData.quote"></p>
                              </div>
                          </div>
                      </div>
                      <div class="column-6 offset-9 column-md-12">
                          <div class="hnn__community_featured__info">
                                <div class="hnn__community_featured__info__featured">Featured maker</div>
                                <div class="hnn__community_featured__info__name" v-text="communityProfileoData.name"></div>
                                <div class="hnn__community_featured__info__description" v-text="communityProfileoData.description"></div>
                                <div class="hnn__community_featured__info__details">
                                    <div class="hnn__community_featured__info__details__detail">
                                      <div class="hnn__community_featured__info__details__detail__title">
                                        Hometown:
                                      </div>
                                      <div class="hnn__community_featured__info__details__detail__description" v-text="communityProfileoData.resident"></div>
                                    </div>

                                    <div class="hnn__community_featured__info__details__detail">
                                      <div class="hnn__community_featured__info__details__detail__title">
                                        How he did it:
                                      </div>
                                      <div class="hnn__community_featured__info__details__detail__description" v-text="communityProfileoData.favorite"></div>
                                    </div>
                                    <div v-if="communityProfileoData.perfect !== '-'" class="hnn__community_featured__info__details__detail full">
                                      <div class="hnn__community_featured__info__details__detail__title">
                                        Her Perfect Day:
                                      </div>
                                      <div class="hnn__community_featured__info__details__detail__description" v-text="communityProfileoData.perfect"></div>
                                    </div>
                                </div>
                          </div>
                      </div>
                    </div>
                  </div>
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
      communityHeroData: {
        image: null,
        title: null,
        description: null,
      },
      communityHubData: {
        image: null,
        title: null,
        description: null,
      },
      communityProfileoData: {
        image: null,
        name: null,
        description: null,
        quote: null,
        resident: null,
        favorite: null,
        perfect: null,
      },
      communityHeadlineData: {
        title: null,
        description: null,
      },
      communitywhiteBlock: {
        title: null,
        blocks: null
      },
      globalLastBlockData: {
        image: null,
        title: null,
        description: null,
      },
      homeShowing: false
    }
  },
  components: {
    Dropdown,
    Gallery,
    HorizontalCarousel
  },
  mounted(){


    Prismic.getApi(process.env.apiPrismicUrl + '/api/v2').then(function(api) {
      return api.query(
        Prismic.Predicates.any('document.type', ['community_page', 'last_block'])
      );
    }).then(function(response) {
      console.log( response.results );
      let element = response.results[0];

      response.results.forEach(function(element) {
        console.log(element.type);
        if(element.type === 'community_page'){
          this.communityHeroData.title = element.data.hero_title[0].text;
          this.communityHeroData.description = element.data.hero_description[0].text;
          this.communityHeroData.image = element.data.hero_image.url;

          this.communityHubData.title = element.data.community_hub_title[0].text;
          this.communityHubData.description = element.data.community_hub_description[0].text;
          this.communityHubData.image = element.data.community_hub_image.url;

          this.communityHeadlineData.title = element.data.community_headline_title[0].text;
          this.communityHeadlineData.description = element.data.community_headline_description[0].text;

          this.communityProfileoData.name = element.data.community_picked_profile_job[0].text;
          this.communityProfileoData.description = element.data.community_picked_profile_description[0].text;
          this.communityProfileoData.quote = element.data.community_picked_profile_quote[0].text;
          this.communityProfileoData.resident = element.data.community_picked_profile_resident[0].text;
          this.communityProfileoData.favorite = element.data.community_picked_profile_favorite[0].text;
          this.communityProfileoData.perfect = element.data.community_picked_profile_perfect_day[0].text;
          this.communityProfileoData.image = element.data.community_picked_profile_image.url;

          this.communitywhiteBlock.title = element.data.community_white_block_title[0].text;
          this.communitywhiteBlock.blocks = element.data.body[0].items;
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
