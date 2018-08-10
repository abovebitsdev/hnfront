<template>
  <header class="header" :class="{ 'white': ( headerWhiteActive || headerWhiteFixActive ), 'byebye': headerBye, 'active': mobileMenuOpened, 'yellow': headerYellowFixActive }">
    <div class="header__logo">
      <h1>Here & Now</h1>
      <nuxt-link to='/'>
        <img v-if="headerYellowFixActive" src="~/static/images/icons/Here-and-Now.svg" alt="">
        <template v-else lang="html">
              <img v-if="!showWhite" src="~/static/images/icons/Here-and-Now_White.svg" alt="">
              <img v-else src="~/static/images/icons/Here-and-Now.svg" alt="">
</template>
        </nuxt-link>
    </div>
    <div class="header__navigation">
      <nav v-if="hnn_data">
        <!-- <a href="/membership" class="link white"></a> -->
        <nuxt-link v-for="navigation in this.desktopNavigation" :key="navigation.slice_type" :to='"/" + navigation.page.uid' class="link white">{{navigation.name[0].text}}</nuxt-link>
        <!-- <nuxt-link to='/membership' class="link white">Membership</nuxt-link>
        <nuxt-link to='/community' class="link white">Community</nuxt-link>
        <nuxt-link to='/about-us' class="link white">About Us</nuxt-link> -->
      </nav>
    </div>
    <div class="header__user">
      <ul>

        <li v-if="!isAuthenticated"><nuxt-link :to="'/login'">Log In</nuxt-link></li>
        <li v-else><nuxt-link :to="'/user/account'">Profile</nuxt-link></li>

        <li><a href="/apply" class="btn white">Apply Now</a></li>
      </ul>
      <div class="header__user__mobile_menu" :class="{'on': mobileMenuOpened}" @click.prevent="openMobileMenu">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
      </div>
    </div>
  </header>
</template>

<script>
  import Global from '~/layouts/default.vue'
  import {
    mapGetters
  } from 'vuex'
  
  export default {
    data() {
      return {
        headerWhiteActive: false,
        headerWhiteFixActive: false,
        headerYellowFixActive: false,
        headerBye: false,
        mobileMenuOpened: false,
        desktopNavigation: null,
      }
    },
    props: ['white_style', 'mobile_menu_status', 'hnn_data'],
    computed: {
      ...mapGetters('auth', ['isAuthenticated']),
  
      showWhite: function() {
        this.headerWhiteActive;
        this.headerWhiteFixActive;
        return this.headerWhiteActive || this.headerWhiteFixActive;
      }
    },
    methods: {
      openMobileMenu() {
        this.mobileMenuOpened = !this.mobileMenuOpened;
        this.mobileMenuOpened ? Global.methods.openMenuMobile() : Global.methods.closeMenuMobile();
  
        // let site = document.getElementsByClassName('hnn');
        // let siteHeader = document.getElementsByClassName('header');
        // let siteFooter = document.getElementsByClassName('footer');
        // let sideMobileMenu = document.getElementById('side_mobile_menu');
        // let membershipMenu = document.getElementsByClassName('hnn__membership__menu__position');
        //
        // setTimeout(function(){
        //   if(this.mobileMenuOpened){
        //     site[0].classList.add('active');
        //     siteHeader[0].classList.add('active');
        //     siteFooter[0].classList.add('active');
        //     sideMobileMenu.classList.add('active');
        //     if(membershipMenu){
        //         membershipMenu[0].classList.add('active');
        //     }
        //   }else{
        //     site[0].classList.remove('active');
        //     siteHeader[0].classList.remove('active');
        //     siteFooter[0].classList.remove('active');
        //     sideMobileMenu.classList.remove('active');
        //     if(membershipMenu){
        //         membershipMenu[0].classList.remove('active');
        //     }
        //   }
        // }.bind(this), 100);
      },
      closeMobileMenu() {
        this.mobileMenuOpened = false;
      }
    },
    watch: {
      white_style: function(status) {
        this.headerWhiteActive = status;
      },
      mobile_menu_status: function() {
        this.mobileMenuOpened = status;
      }
    },
    mounted() {
      this.desktopNavigation = this.hnn_data[0].data.body[0].items;
      this.$root.$on('headerWhite', value => {
        (value) ? this.headerWhiteActive = true: this.headerWhiteActive = false;
      })
      this.$root.$on('headerWhiteFix', value => {
        console.log('headerWhiteFix', value);
        this.headerWhiteFixActive = value;
      })
      this.$root.$on('headerYellowFix', value => {
        console.log('headerYellowFix', value);
        this.headerYellowFixActive = value;
      })
      this.$root.$on('headerByebye', value => {
        (value) ? this.headerBye = true: this.headerBye = false;
      })
    }
  }
</script>
