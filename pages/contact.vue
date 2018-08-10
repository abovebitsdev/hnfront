<template>
  <section>
    <div class="hnn">
      <div class="hnn__contact">
        <div class="hnn__home_hero">
            <div class="hnn__home_hero__content" :class="{'active': homeShowing}">
              <div class="hnn__contact__vertical-align">
                <h2 style="cursor: pointer; font-size: 3rem;" @click="goToForm">Contact Us</h2>
                <!-- <div class="hnn__contact__vertical-align__head">
                  <p>Give us a call: <a href="tel:+1 417 773 2818">+1 417 773 2818</a></p>
                  <p>For inquiries: <a href="mailto:help@here&now.com">help@here&now.com</a></p>
                </div>
                <div class="hnn__contact__vertical-align__small"><p>Or, visit us IRL:</p></div>
                <div class="hnn__contact__vertical-align__address">
                  <p class="small">here&now HQ</p>
                  <p>486 Brooklyn Ave, Suite #E8</p>
                  <p>Brooklyn, NY 11225</p>
                </div> -->
              </div>

            </div>
            <div class="hnn__home_hero__background" :class="{'active': homeShowing}" :style="{'background-image': 'url(https://here-and-now.cdn.prismic.io/here-and-now/d8bec7112234a1d2ad8089313cfbcbba15db6ac1_gettyimages-592195415.jpg)'}"></div>
        </div>

        <div class="white-section" ref="contactForm">
          <div class="global-section" v-fadescroll>
            <div class="global-section__head">
              <h3 class="h2">Don’t Be Shy</h3>
              <p>What you need, when you need it.</p>
            </div>
            <div class="global-section__body">
                <div class="container">
                  <div class="row">
                    <div class="column-8 offset-4 column-md-12 column-xs-12">
                      <transition name="component-fade" mode="out-in">
                        <form v-if="!form.sended" class="hnn__form" @submit.prevent="validateForm">
                          <div class="row">
                            <div class="column-8 column-xs-12 margin-bottom-xs">
                              <input type="text" name="" :class="{'error': singleErros.name}" v-model="form.name" placeholder="Your first name">
                            </div>
                            <div class="column-8 column-xs-12 margin-bottom-xs">
                              <input type="text" name="" :class="{'error': singleErros.lastname}" v-model="form.lastname" placeholder="Your last name">
                            </div>
                            <div class="column-16 column-xs-12 margin-bottom-xs">
                              <input type="email" name="" :class="{'error': singleErros.email}"  v-model="form.email" placeholder="Your email address">
                            </div>
                            <div class="column-16 column-xs-12 margin-bottom-xs">
                              <textarea name="name" rows="8" :class="{'error': singleErros.message}" v-model="form.message" cols="80" placeholder="Your message..."></textarea>
                            </div>
                            <div class="column-16">
                              <button type="submit" class="btn yellow">
                                <span v-if="!loadingForm">Submit</span>
                                <span v-else>
                                  <div class="border-loading-indicator col-3 row-1"></div>
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                        <div v-else class="">
                          <p class="h3">your message was sent successfully!</p>
                          <p>We will communicate as soon as possible</p>
                        </div>
                      </transition>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <Map :id="'contact'" :lat="40.6629436" :long="-73.9481821"/>

      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import Map from '~/components/Map'

export default {
  data: function () {
    return {
      sendEmailTo: 'info@herenowliving.com',
        homeShowing: false,
        loadingForm: false,
        form: {
          name: null,
          lastname: null,
          email: null,
          message: null,
          sended: false,
        },
        singleErros: {
          name: false,
          lastname: false,
          email: false,
          message: false,
        }
    }
  },
  components: {
    Map
  },
  mounted(){
    this.homeShowing = true;
  },
  methods: {
    goToForm(){
      window.scroll({
        top: this.$refs.contactForm.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    },
    validateForm() {
        if(this.form.name && this.form.lastname && this.form.email && this.form.message ){
            this.singleErros.name = false;
            this.singleErros.lastname = false;
            this.singleErros.email = false;
            this.singleErros.message = false;
            this.loadingForm = true;

            let settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://here-and-now-api-staging.herokuapp.com/api/v1/contactus",
              "method": "POST",
              "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
                "postman-token": "ecd29626-59f6-3433-ca5f-45a9f66a9b0d"
              },
              "data": {
                "name": this.form.name,
                "last_name": this.form.lastname,
                "email": this.form.email,
                "message": this.form.message
              }
            }
            let self = this;
            $.ajax(settings).done(function (response) {
              if(response){
                self.form.sended = true;
              }else{
                self.loadingForm = false;
              }
            });

            // let self = this;
            // var htmlMessage = '<center> <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" id="bodyTable" style="height:100%;"> <tr> <td align="center" valign="top" id="bodyCell"> <!-- BEGIN TEMPLATE // --> <!--[if gte mso 9]> <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;"> <tr> <td align="center" valign="top" width="600" style="width:600px;"> <![endif]--> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer"> <!-- BEGIN HEADER // --> <tr> <td valign="top" id="templateHeader"> <!-- BEGIN MODULE: HEADER IMAGE // --> <div style="text-align:center;" mc:edit="header_image"> <img alt="" border="0" height="70" src="https://gallery.mailchimp.com/3e7c7d6d3bdfb253dce47a894/images/91cff99e-e1b9-4d61-87bd-27aba53f8fa1.jpg" style="height: 70px; width: 375px; margin: 0; padding: 0;" width="375"> </div> <hr style="width:100%;height:1px;border:0;background:#E0E0E0;"> <!-- // END MODULE: HEADER IMAGE --> </td> </tr> <!-- // END HEADER --> <!-- BEGIN BODY // --> <tr> <td valign="top" id="templateBody"> <!-- BEGIN MODULE: BODY CONTENT // --> <div mc:edit="body_content"> <h1 style="text-align:center;"> </h1> <h1 style="text-align:center;">New Contact</h1> <h2 style="text-align:center;"> </h2> <h2 style="text-align:center;"> <p>Name: <strong>"'+self.form.name+'"</strong></p> <p>Last name: <strong>"'+self.form.lastname+'"</strong></p> <p>Email: <strong>"'+self.form.email+'"</strong></p> <p>Message: <strong>"'+self.form.message+'"</strong></p> </h2> <div> </div> <br> </div> <!-- // END MODULE: BODY CONTENT --> </td> </tr> <!-- // END BODY --> <!-- BEGIN FOOTER // --><tr style="background: #f9cc52; text-align: center;"><td height="50"></td></tr> <tr style="background: #f9cc52; text-align: center;"> <td valign="top" id="templateFooter"> <!-- BEGIN MODULE: STANDARD FOOTER // --> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td valign="top" id="socialBar" style="text-align:center;"> <div mc:edit="social_bar"> <a class="utilityLink" href="http://herenowliving.com/" style="color: #000; font-size: 16px;" target="_blank">Privacy Policy</a><span class="mobileHide"> | </span><a class="utilityLink" href="http://herenowliving.com/" target="_blank" style="color: #000; font-size: 16px;">Terms of Service</a> <span class="mobileHide"> | <a href="http://herenowliving.com/faq/" target="_blank" style="color: #000; font-size: 16px;">FAQ</a></span> </div> </td> </tr> <tr style="background: #f9cc52; text-align: center;"><td height="50"></td></tr> </table> <!-- // BEGIN MODULE: STANDARD FOOTER --> </td> </tr> <!-- // END FOOTER --> </table> <!--[if gte mso 9]> </td> </tr> </table> <![endif]--> <!-- // END TEMPLATE --> </td> </tr> </table> </center>';
            //
            //
            // $.ajax({
            //   type: "POST",
            //   headers : {
            //       'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            //   },
            //   url: "https://mandrillapp.com/api/1.0/messages/send.json",
            //   data: {
            //     "key": '4CkYpe9n1FCKqNh2V9OilA',
            //     "message": {
            //       "from_email": 'noreply@herenowliving.com',
            //       "to": [
            //         {
            //           "email": 'axel@halfhelix.com',
            //           "name": 'Here and Now',
            //           "type": 'to'
            //         }
            //       ],
            //       "subject": 'Subject',
            //       "html": htmlMessage
            //     }
            //   },
            //   success: function(){
            //       self.form.sended = true;
            //   },
            //   error: function(XMLHttpRequest, textStatus, errorThrown) {
            //       self.loadingForm = false;
            //       console.log("Status: " + textStatus);
            //   }
            // });


            // let self = this;
            // let mandrill = require('mandrill-api/mandrill');
            // let mandrill_client = new mandrill.Mandrill('4CkYpe9n1FCKqNh2V9OilA');
            // let params = {
            //   "template_name": "contact",
            //   "template_content": [
            //       {
            //           "TITLE": 'New Contact',
            //           "name": self.form.name,
            //           "LAST": self.form.lastname,
            //           "EMAIL": self.form.email,
            //           "MESSAGE": self.form.message
            //       }
            //   ],
            //   "message": {
            //       "from_email":"noreply@herenowliving.com",
            //       // "to":[{"email":"info@herenowliving.com"}],
            //       "to":[
            //         {"email":"info@herenowliving.com"},
            //         {"email":"april@halfhelix.com"},
            //         {"email":"axel@halfhelix.com"}
            //       ],
            //       "async": true,
            //       "headers": {
            //           "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
            //       },
            //       "subject": "New contact from Here and Now",
            //       "merge": true,
            //       "global_merge_vars": [
            //           {
            //             "name": "TITLE",
            //             "content": 'New Contact'
            //           },{
            //             "name": "CONTENT",
            //             "content": "<p>Name: <strong>"+self.form.name+"</strong></p>"+
            //                         "<p>Last name: <strong>"+self.form.lastname+"</strong></p>"+
            //                         "<p>Email: <strong>"+self.form.email+"</strong></p>"+
            //                         "<p>Message: <strong>"+self.form.message+"</strong></p>"
            //           }
            //       ]
            //   }
            // };
            //
            // mandrill_client.messages.sendTemplate(params, function(res) {
            //     self.form.sended = true;
            // }, function(err) {
            //     self.loadingForm = false;
            // });

        }else{
            if(!this.form.name){
              this.singleErros.name = true;
            }
            if(!this.form.lastname){
              this.singleErros.lastname = true;
            }
            if(!this.form.email){
              this.singleErros.email = true;
            }
            if(!this.form.message){
              this.singleErros.message = true;
            }
        }
    }
  }
}
</script>
