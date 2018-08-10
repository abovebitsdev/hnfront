<template>
  <section>
      <div class="hnn">
        <div class="hnn__yellow_hero">
            <h2 class="h1">Frequently<br class="desktop-show"/>Asked Questions</h2>
        </div>

        <div class="yellow-section padding_vertical-0 mobille-no-padding">
            <div class="container">
              <div class="hnn__faq_module">
                  <div class="row">
                    <div class="column-4 offset-1 text-left tablet-hide">
                      <ul class="hnn__faq_module__left_menu" ref="fixedNavigation" :class="{'fixed': navigationFixed}" :style="{ 'left': fixedNavigationLeftPosition + 'px' }">
                        <li><a href="#" class="link" :class="{'active': (sectionActive === 0)}" @click.prevent="goTo('membership')">Membership</a></li>
                        <li><a href="#" class="link" :class="{'active': (sectionActive === 1)}" @click.prevent="goTo('amenities')">Amenities</a></li>
                        <li><a href="#" class="link" :class="{'active': (sectionActive === 2)}" @click.prevent="goTo('community')">Community</a></li>
                        <li><a href="#" class="link" :class="{'active': (sectionActive === 3)}" @click.prevent="goTo('financial')">Financial</a></li>
                      </ul>
                    </div>
                    <div class="column-10 offset-5 text-left column-md-12 column-xs-12">
                      <div class="hnn__faq_module__right_content">
                        <div class="hnn__faq_module__right_content__element" id="membership">
                            <h3>Membership</h3>
                            <Accordion  :data="[
                              { 'title': 'What is membership?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'What does “membership” mean?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'After I interview, what happens?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'How long can I stay?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'}
                            ]" />
                        </div>
                        <div class="hnn__faq_module__right_content__element" id="amenities">
                            <h3>Amenities</h3>
                            <Accordion  :data="[
                              { 'title': 'What are the rooms like?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'So you guys are an apartment?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'Laundry?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'Animals?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'}
                            ]" />
                        </div>
                        <div class="hnn__faq_module__right_content__element" id="community">
                            <h3>Community</h3>
                            <Accordion  :data="[
                              { 'title': 'Are couples allowed?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'How do you create a sense of community?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'Who are the type of people who usually live in your spaces?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'How many people to a house?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'}
                            ]" />
                        </div>
                        <div class="hnn__faq_module__right_content__element" id="financial">
                            <h3>Financial</h3>
                            <Accordion  :data="[
                              { 'title': 'When will I receive an offer?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'What’s included in my rent?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'How do I pay for membership?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'},
                              { 'title': 'Are utilities included?', 'description': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.'}
                            ]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
import Accordion from '~/components/Accordion'

export default {
  data: function () {
    return {
      positions: [],
      sectionActive: 0,
      navigationFixed: false,
      windowVerticalScroll: 0,
      fixedNavigationTopPosition: 0,
      fixedNavigationLeftPosition: 0,
    }
  },
  components:{
    Accordion
  },
  mounted(){
      this.fixedNavigationTopPosition = this.$refs.fixedNavigation.offsetTop - 90;
      this.fixedNavigationLeftPosition = this.$refs.fixedNavigation.offsetLeft;
      this.calculatePositions();
      window.addEventListener('scroll', this.handleScroll);
      window.scroll();
  },
  methods: {
    calculatePositions(){
      this.positions = [];
      let elements = document.getElementsByClassName('hnn__faq_module__right_content__element');
      let i;
      for (i = 0; i < elements.length; i++) {
        this.positions.push(elements[i].offsetTop - 60 - 30);
      }
    },
    closest (num, arr) {
        let curr = 0;
        let diff = Math.abs (num - curr);
        for (let val = 0; val < arr.length; val++) {
            let newdiff = Math.abs (num - arr[val]);
            if (newdiff < diff) {
                diff = newdiff;
                curr = val;
            }
        }
        return curr;
    },
    handleScroll (event) {
      this.windowVerticalScroll = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
      (this.windowVerticalScroll >= this.fixedNavigationTopPosition ) ? this.navigationFixed = true : this.navigationFixed = false;
      this.sectionActive = this.closest (this.windowVerticalScroll, this.positions);
    },
    goTo(id){
      const position = document.getElementById(id).offsetTop - 90;
      if( (position + 30 < window.pageYOffset) || (position - 30 > window.pageYOffset)){
        window.scroll({
          top: position,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
