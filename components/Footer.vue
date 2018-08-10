<template>
  <footer :class="['footer', { 'active': mobileFooterMenuOpened }]">
      <div class="footer__head">
        <div class="container">
          <div class="row third">
            <div class="column-2 offset-2 column-md-5 column-xs-6">
                <p class="title"><strong>here&now</strong></p>
                <ul>
                  <!-- <li><a href="/tour">Book a Tour</a></li> -->
                  <li><nuxt-link to='/membership'>Membership</nuxt-link></li>
                  <li><nuxt-link to='/community'>Community</nuxt-link></li>
                  <li><nuxt-link to='/about-us'>About Us</nuxt-link></li>
                  <li><nuxt-link to='/contact'>Contact</nuxt-link></li>
                  <!-- <li><nuxt-link to='/wyswyg'>WYSWYG (Temp)</nuxt-link></li> -->
                </ul>
            </div>
            <div class="column-3 offset-5 column-md-5 column-xs-6">
                <!-- <p class="title"><strong>Support</strong></p>
                <p><a href="tel:(844) 612-6697">(844) 612-6697</a></p>
                <p><a href="mailto:info@herenowliving.com">info@herenowliving.com</a></p> -->
            </div>
            <div class="column-5 offset-10 column-md-5 column-xs-12 margin-top-xs">
                <p class="title"><strong>Email Newsletter</strong></p>
                <p>Sign up to receive updates on availability, events, and everything going on with here&now.</p>
                <div v-if="formSended">
                  <p style="margin-top: 20px;">Thank you for subscribing!</p>
                </div>
                <div v-else>
                  <form @submit.prevent="validateEmail" class="basic_form">
                    <button type="submit">
                      <img src="~/static/images/icons/arrow-right.svg" style="margin-top: 7px;" alt="Subscribe Newsletter">
                    </button>
                    <input type="email" required="required" v-model="emailUser" placeholder="Email Address">
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__body">
        <div class="container">
          <div class="row third">
            <div class="column-5 offset-2 footer__body__first mobile-hide">
              <ul>
                <!-- <li><nuxt-link to='/privacy-policy'>Privacy Policy</nuxt-link></li>
                <li><nuxt-link to='/terms-of-service'>Terms of Service</nuxt-link></li> -->
                <!-- <li><nuxt-link to='/faq'>FAQ</nuxt-link></li> -->
              </ul>
            </div>
            <div class="column-3 offset-7 text-center footer__body__second mobile-hide">
              <img src="~/static/images/icons/hnmark.svg" alt="Here & Now">
            </div>
            <div class="column-5 offset-10 text-right footer__body__third column-xs-12">
              <p>© 2018 here&now. All rights reserved.</p>
            </div>
            <div class="text-center mobile-show column-xs-12 margin-top-xs">
              <img src="~/static/images/icons/hnmark.svg" alt="Here & Now">
            </div>
        </div>
      </div>
      </div>
  </footer>
</template>

<script>
import $ from "jquery";

export default {
  data () {
    return {
      emailUser: null,
      mobileFooterMenuOpened: false,

      formSended: false,
      actionNewsletter: 'http://hereandnow.us18.list-manage.com/subscribe/post-json?u=3e7c7d6d3bdfb253dce47a894&amp;id=da6f9d5d60'
    }
  },
  methods: {
    mobileMenuOpened(){
      // this.mobileFooterMenuOpened = true;
      document.getElementsByClassName('footer')[0].classList.add('active');
    },
    mobileMenuClosed(){
      // this.mobileFooterMenuOpened = false;
      document.getElementsByClassName('footer')[0].classList.remove('active');
    },
    validateEmail(){
      if(this.emailUser){
        let self = this;
        $.ajax({
            type: "GET",
            url: self.actionNewsletter,
            data: {'EMAIL': self.emailUser},
            cache: false,
            dataType: "jsonp",
            jsonp: "c",
            contentType: "application/json; charset=utf-8",
            error: function(error){

            },
            success: function(data){
              console.log(data.result);
              self.formSended = true;
            }
          });
      }
    }
  }
}
</script>
