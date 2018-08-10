<template>
  <div :class="['side_mobile_menu', {'active': mobileMenuSideOpened }]" id="side_mobile_menu">
    <ul class="side_mobile_menu__top">
      <li v-if="!isAuthenticated" @click="closeMenu($event)" class="small"><a href="/login">Log In</a></li>
      <li v-else class="small" style="cursor: pointer;" @click.stop.prevent='logout'>Log Out</li>
      <!-- <li @click="closeMenu($event)"><a href="/tour">Book a Tour</a></li> -->
      <li @click="closeMenu($event)"><a href="/apply">Apply Now</a></li>
      <li @click="closeMenu($event)"><nuxt-link to='/membership'>Membership</nuxt-link></li>
      <li @click="closeMenu($event)"><nuxt-link to='/community'>Community</nuxt-link></li>
      <li @click="closeMenu($event)"><nuxt-link to='/about-us'>About Us</nuxt-link></li>
      <li @click="closeMenu($event)"><nuxt-link to='/contact'>Contact</nuxt-link></li>
    </ul>
    <div class="side_mobile_menu__bottom">
      <ul>
        <!-- <li @click="closeMenu($event)"><a href="#">Privacy Policy</a></li>
        <li @click="closeMenu($event)"><a href="#">Terms of Service</a></li> -->
        <!-- <li @click="closeMenu($event)"><nuxt-link to='/faq'>FAQ</nuxt-link></li> -->
      </ul>
      <p>© 2018 here&now. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import Global from '~/layouts/default.vue'
import Header from '~/components/Header.vue'
import {
  mapGetters
} from 'vuex'

export default {
  data () {
    return {
        mobileMenuSideOpened: false,
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    closeMenu(event){
      Global.methods.closeMenuMobile();
      this.$root.$children[1].$refs.Header.mobileMenuOpened = false;
    },
    mobileMenuOpened(){
      this.mobileMenuSideOpened = true;
      document.getElementById('side_mobile_menu').classList.add('active');
    },
    mobileMenuClosed(){
      this.mobileMenuSideOpened = false;
      document.getElementById('side_mobile_menu').classList.remove('active');
    },
    logout() {
      this.$router.push('/')
      this.$store.dispatch('auth/reset')
    },
  }
}
</script>
