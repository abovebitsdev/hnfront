<template>
  <div class="site" ref="website">
    <div v-if="loadingData" class="site__loading">
      <Loading />
    </div>
    <template v-else lang="html">
      <nuxt />
    </template>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import SideMenu from '~/components/MobileNav'
import Loading from '~/components/Loading'
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
      // console.log(this.windowVerticalScroll);
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
