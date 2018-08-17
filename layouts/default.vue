<template>
  <div class="site" ref="website">
    <div v-if="loadingData" class="site__loading">
      <Loading />
    </div>
    <template v-else lang="html">
      <Header v-if="hnnData" :white_style="headerWhite" :hnn_data="hnnData" ref="Header"/>
      <SideMenu />
      <nuxt />
      <!-- <Newsletter /> -->
      <Footer />
    </template>
  </div>
</template>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLLZPQF <https://www.googletagmanager.com/ns.html?id=GTM-KLLZPQF>"
  height=“0" width=“0” style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/3e7c7d6d3bdfb253dce47a894/c11505a05141b98bf5aed1624.js");</script>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import SideMenu from '~/components/MobileNav'
import Loading from '~/components/Loading'
import Newsletter from '~/components/Newsletter'
import Prismic from 'prismic-javascript'




export default {

  data () {

    return {
      loadingData: true,
      loadingDataError: false,

      windowVerticalScroll: 0,
      headerWhite: false,
      disabledGlobalScroll: false,
      hnnData: null,
      // hnnData: Prismic.getApi(process.env.apiPrismicUrl + '/api/v2', {
      // }).then(function(res){
      //   console.log(res);
      //   this.showWebiste();
      //   return res.data.refs;
      // }.bind(this))
    }
  },
  components: {
    Header,
    Footer,
    Newsletter,
    SideMenu,
    Loading,
  },
  mounted(){
    Prismic.getApi(process.env.apiPrismicUrl + '/api/v2').then(function(api) {
      return api.query(
        Prismic.Predicates.at('document.type', "navigation")
      );
    }).then(function(response) {
      console.log(response.results);
      this.hnnData = response.results;
      setTimeout(function(){
        this.showWebiste();
      }.bind(this), 200)
    }.bind(this), function(err) {
      this.loadingDataError = true;
      console.log("Something went wrong: ", err);
    }.bind(this))

    if($nuxt.$route.path === '/membership'){
      this.disabledGlobalScroll = true;
    }
    if(!this.disabledGlobalScroll){
      window.addEventListener('scroll', this.handleScroll);
      window.scroll();
    }
  },
  methods: {
    showWebiste(){
      this.loadingData = false;

    },
    handleScroll (event) {
      this.windowVerticalScroll = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
      if(this.windowVerticalScroll > 50){
        this.headerWhite = true;
      }else{
        this.headerWhite = false;
      }
    },
    openMenuMobile(){
        document.getElementsByClassName('hnn')[0].classList.add('active');
        Header.data.mobileMenuOpened = true;
        Footer.methods.mobileMenuOpened();
        SideMenu.methods.mobileMenuOpened();
    },
    closeMenuMobile(){
      document.getElementsByClassName('hnn')[0].classList.remove('active');
        Header.data.mobileMenuOpened = false;
        Footer.methods.mobileMenuClosed();
        SideMenu.methods.mobileMenuClosed();
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
