<template lang="html">
  <div class="hnn__fancy_newsletter" :class="{ active: showingNewsletter}">


    <!-- Begin MailChimp Signup Form -->
    <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
    <style type="text/css">
    	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
    	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
    	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style>
    <div id="mc_embed_signup">
      <form v-on:submit.prevent="submitNewsletter" method="get" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL">Subscribe to our mailing list</label>
            <div class="hnn__fancy_newsletter__close" @click="showingNewsletter = false">X</div>
            <input type="email" value="" name="EMAIL" class="email" :class="{ error: validateInput }" v-model="emailNewsletter" placeholder="Your email address" required>

            <div v-if="formSended">
              <p>Thank you for subscribing!</p>
            </div>
            <div v-else>
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_3e7c7d6d3bdfb253dce47a894_da6f9d5d60" tabindex="-1" value=""></div>
              <div class="clear">
                <a v-on:click.prevent="submitNewsletter" id="mc-embedded-subscribe" class="btn yellow">Subscribe</a>
              </div>
            </div>
          </div>
      </form>
    </div>

    <!--End mc_embed_signup-->

  </div>
</template>

<script>


import $ from "jquery";
import VueCookie from 'vue-cookie'


export default {
  data () {
    return {
      showingNewsletter: false,
      emailNewsletter: null,
      validateInput: false,
      formSended: false,
      actionNewsletter: 'http://hereandnow.us18.list-manage.com/subscribe/post-json?u=3e7c7d6d3bdfb253dce47a894&amp;id=da6f9d5d60'
    }
  },
  mounted() {
    if( !this.$cookie.get('newVisitor') ){
      this.showingNewsletter = true;
      this.$cookie.set('newVisitor', true);
    }
  },
  methods: {
    submitNewsletter() {
      if(this.emailNewsletter){
        this.validateInput = false;
        let self = this;
        $.ajax({
            type: "GET",
            url: self.actionNewsletter,
            data: {'EMAIL': self.emailNewsletter},
            cache: false,
            dataType: "jsonp",
            jsonp: "c",
            contentType: "application/json; charset=utf-8",
            error: function(error){

            },
            success: function(data){
              console.log(data.result);
              self.formSended = true;
              setTimeout(function () {
                self.showingNewsletter = false
              }, 2000);
            }
          });

      }else{
        this.validateInput = true;
      }
    }
  }
}
</script>

<style lang="css">
</style>
