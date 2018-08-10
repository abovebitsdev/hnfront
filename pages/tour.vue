<template>
  <section>
    <div class="hnn">
        <div class="hnn_tour">
          <transition name="component-fade" mode="out-in">
            <div v-if="!form.sended">
              <div class="hnn_tour__step" :class="{ 'active': (stepActive === 1), opacity: stepsOpacity  }">
                <div class="hnn_tour__step__compact" :class="{white: showingStep1Background}" @click="goBackToStep(1)">
                  <div class="hnn_tour__step__compact__number">
                      <span>1</span>
                  </div>
                  <div class="hnn_tour__step__compact__title">
                      <span>Location</span>
                  </div>
                  <div v-if="step1Background" class="special_background" :class="{active: showingStep1Background}" :style="{ 'background-image': 'url('+step1Background+')'}"></div>
                </div>
                <div class="hnn_tour__step__expanded">
                    <div class="hnn_tour__step__expanded__head">
                      <div class="hnn_tour__step__expanded__head__number">
                        <span>1</span>
                      </div>
                      <div :class="{'opacity': !tourShowing}" class="hnn_tour__step__expanded__head__title" v-text="(onlyOnePlace)? 'Your home is a few steps away':'Select your location'"></div>
                    </div>
                    <div v-if="tourShowing" class="hnn_tour__step__expanded__body">
                      <div class="hnn_tour__step__expanded__body__grid">
                        <div v-for="singlePlace in placesData"  v-bind:key="singlePlace.image" @click="selectLocation(singlePlace.id, singlePlace.image, singlePlace.name)" :class="{ active: (activePlace == singlePlace.id) }" class="hnn_tour__step__expanded__body__grid__element">
                            <div class="hnn_tour__step__expanded__body__grid__element__name">
                              <span v-text="singlePlace.name"></span>
                            </div>
                            <div class="hnn_tour__step__expanded__body__grid__element__background" :style="{ 'background-image': 'url('+singlePlace.image+')' }"></div>
                        </div>
                      </div>
                    </div>
                    <div class="hnn_tour__loading"  v-else>
                      <Loading/>
                    </div>
                </div>
              </div>


              <div class="hnn_tour__step" :class="{ 'active': (stepActive === 2)  }" ref="tourBookSecondStep">
                <div class="hnn_tour__step__compact" @click="goBackToStep(2)">
                  <div class="hnn_tour__step__compact__number">
                      <span>2</span>
                  </div>
                  <div class="hnn_tour__step__compact__title">
                      <span>Schedule a Tour</span>
                  </div>
                </div>
                <div class="hnn_tour__step__expanded">
                  <div v-if="tourShowing" class="hnn_tour__step__expanded__body">
                    <div class="hnn_tour__step__expanded__head">
                      <div class="hnn_tour__step__expanded__head__number">
                        <span>2</span>
                      </div>
                      <div class="hnn_tour__step__expanded__head__title">
                        Select your location
                      </div>
                    </div>

                    <div v-if="tourShowing" class="hnn_tour__step__expanded__body block">
                      <div class="hnn_tour__step__expanded__body__modal">
                        <div class="hnn_tour__step__expanded__body__modal__title">
                          <p>Select the time that you want it</p>
                        </div>
                        <div class="hnn_tour__step__expanded__body__modal__body">

                        </div>
                      </div>
                      <div class="hnn_tour__step__expanded__body__modal__calendar">
                        <datepicker :inline="true" v-model="userPicked.date" :disabledDates="calendar.disabledDates" @selected="confirmDateTourHour()" :format="customFormatter"></datepicker>
                        <p v-if="userPicked.date" class="text-center" style="margin-top: 50px;">
                            <button type="button" class="btn" name="button" @click="goToConfirm()">Select <strong>{{userPicked.date}}</strong> </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="hnn_tour__step" :class="{ 'active': (stepActive === 3)  }" ref="tourBookThirdStep">
                <div class="hnn_tour__step__compact">
                  <div class="hnn_tour__step__compact__number">
                      <span>3</span>
                  </div>
                  <div class="hnn_tour__step__compact__title">
                      <span>Confirmation</span>
                  </div>
                </div>
                <div class="hnn_tour__step__expanded">
                    <div class="hnn_tour__step__expanded__head">
                      <div class="hnn_tour__step__expanded__head__number">
                        <span>3</span>
                      </div>
                      <div class="hnn_tour__step__expanded__head__title">
                        Ready, set, go.
                      </div>
                    </div>
                    <div v-if="tourShowing" class="hnn_tour__step__expanded__body">
                      <div class="hnn_tour__step__expanded__body__last_step">
                        <p class="hnn_tour__step__expanded__body__last_step__head">You're just about ready. Review the tour details below to complete your tour booking</p>
                        <div class="hnn_tour__step__expanded__body__last_step__plate">
                          <div class="hnn_tour__step__expanded__body__last_step__plate__title">
                              here&now Membershiip Tour
                          </div>
                          <div class="hnn_tour__step__expanded__body__last_step__plate__sub_title">
                              You'll recive a calendar invite with all the details for your tour
                          </div>
                          <div class="hnn_tour__step__expanded__body__last_step__plate__grid">
                              <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element">
                                <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element__icon">
                                  <img src="~/static/images/icons/place.svg" alt="Show Password">
                                </div>
                                <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element__title">
                                    Date
                                </div>
                                <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element__value" v-text="userPicked.date"></div>
                              </div>
                              <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element">
                                <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element__icon">
                                  <img src="~/static/images/icons/place.svg" alt="Show Password">
                                </div>
                                <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element__title">
                                    Location
                                </div>
                                <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element__value" v-text="(userPicked.name)? userPicked.name : 'Not Selected'"></div>
                              </div>
                              <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element">
                                <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element__icon">
                                  <img src="~/static/images/icons/place.svg" alt="Show Password">
                                </div>
                                <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element__title">
                                    Email Invite
                                </div>
                                <div class="hnn_tour__step__expanded__body__last_step__plate__grid__element__value">

                                </div>
                              </div>
                          </div>
                          <div class="hnn_tour__step__expanded__body__last_step__plate__cta" @click="confirmReservation">
                              <span v-if="!loadingForm">Confirm</span>
                              <span v-else>
                                <div class="border-loading-indicator col-3 row-1"></div>
                              </span>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div v-else class="white-section">
              <p class="h3 text-center">Your reservation has been created successfully</p>
              <p class="text-center" style="margin: 10px 0 30px; font-size: 18px;">Please, check your email to validate it</p>
              <a href="/" class="btn">Go to Home</a>
            </div>
          </transition>
        </div>
    </div>
  </section>
</template>


<script>
import Prismic from 'prismic-javascript'
import Loading from '~/components/Loading'
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'
// import firebase from 'firebase'

import $ from "jquery";

export default {
  data: function () {
    return {
        loadingForm: false,
        stepActive: 1,

        stepsOpacity: false,
        canReturn1: false,
        canReturn2: false,
        showingStep1Background: false,
        form: {
          sended: false,
        },
        step1Background: null,
        activePlace: 0,
        tourShowing: false,
        isMobile: false,
        placesData: [],
        calendar: {
          disabledDates: {},
        },
        userPicked: {
          date: null,
          placeName: '',
        },
        onlyOnePlace: false,
    }
  },
  components: {
    Loading,
    Datepicker,
  },
  mounted(){
    this.$root.$emit('headerWhiteFix', true);

    Prismic.getApi(process.env.apiPrismicUrl + '/api/v2').then(function(api) {
      return api.query(
        Prismic.Predicates.at('document.type', 'places')
      );
    }).then(function(response) {
      let counter = 1;
      response.results.forEach(function(element) {
        if(element.data.place_active === 'Active'){
          let single = {};
          single.id = element.uid;
          single.name = element.data.name[0].text;
          single.image = element.data.gallery[0].single_image.url;
          single.value = counter;
          single.active = false;
          this.placesData.push(single);
          counter ++;
        }
      }.bind(this));

      if(this.placesData.length === 1){
        this.onlyOnePlace = true;
      }

      // this.userPicked.date = Date.now();
      let today = new Date();
      let month = new Date();
      today.setDate(today.getDate() - 1);
      month.setMonth(month.getMonth() + 3);
      this.calendar.disabledDates = {
          to: today,
          from: month,
      }

      this.calendarConfig();

      this.tourShowing = true;
    }.bind(this), function(err) {
      console.log("Something went wrong: ", err);
    }.bind(this));

    if(document.body.clientWidth <= 600){
      this.isMobile = true;
    }else{
      this.isMobile = false;
    }
  },
  beforeDestroy() {
    this.$root.$emit('headerWhiteFix', false);
  },
  methods: {
    customFormatter(date){

      this.userPicked.date = moment(date).format('dd, MMMM D, YYYY');
      return this.userPicked.date;
      // Monday, April 9, 2018
    },
    confirmDateTourHour(){
      console.log("Confirm Hour");
    },
    confirmReservation(){
      if(!this.loadingForm){
        this.loadingForm = true;
        let self = this;
        $.ajax({
          type: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            'key': '4CkYpe9n1FCKqNh2V9OilA',
            'message': {
              'from_email': 'noreply@herenowliving.com',
              'to': [{
                  'email': 'latiosaxe@gmail.com',
                  'name': 'Axel',
                  'type': 'to'
                }
              ],
              'merge_vars': [{
                'rcpt': 'latiosaxe@gmail.com',
                'vars': [
                {
                  'name': 'EMAIL',
                  "content": 'axel@halfhelix.com'
                }, {
                  'name': 'DATE',
                  "content": self.userPicked.date
                }, {
                  'name': 'PLACE',
                  'content': self.userPicked.name
                }]
              }],
              'autotext': 'true',
              'subject': 'New Reservation Here and Now',
              'html': "This is a message from herenowliving.com, *|EMAIL|*, has just made a reservation for *|PLACE|* the day *|DATE|* .", // example of how to use the merge tags
              'track_opens': true,
              'track_clicks': true,
            }
          }
        }).done(function(response) {
          self.form.sended = true;
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          console.log(response);
        });

        // this.loadingForm = true;
        // let self = this;
        // let async = false;
        // let ip_pool = "Main Pool";
        // let send_at = Date.now();
        // var message = {
        //   "html": "<p>Example HTML content</p>",
        //   "text": "Example text content",
        //   "subject": "New Reservation",
        //   "from_email": "noreply@herenowliving.com",
        //   "from_name": "Here And Now",
        //   "to": [{
        //           "email": "latiosaxel@gmail.com",
        //           "name": "Axel",
        //           "type": "to"
        //       }],
        //   "headers": {
        //       "Reply-To": "info@herenowliving.com"
        //   },
        // }
        // mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function(result) {
        //     console.log(result);
        //     self.form.sended = true;
        //     window.scroll({
        //       top: 0,
        //       left: 0,
        //       behavior: 'smooth'
        //     });
        // }, function(e) {
        //   // if(alert('Something went Wrong, try later')){}
        //   // else    window.location.reload();
        //     self.loadingForm = false;
        //     console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // });
      }
    },
    goToConfirm(){
      this.canReturn2 = true;
      this.changeStep(3);
      if(this.isMobile){
        setTimeout(function(){
          window.scroll({
            top: this.$refs.tourBookThirdStep.offsetTop - 60,
            left: 0,
            behavior: 'smooth'
          });
        }.bind(this), 500)
      }
    },
    selectLocation(id, image, name) {
      this.activePlace = id;
      this.step1Background = image;
      this.userPicked.name = name;
      this.canReturn1 = true;


      // var ref = firebase.database().ref("tours");
      // var places = ref.child('Kt6TjdAZ7UfPMdPvJfYW');
      //
      // console.log( places.toString() );
      // places.orderByKey().endAt("pterodactyl").on("child_added", function(snapshot) {
      //   console.log(snapshot);
      // });



      setTimeout(function(){
        this.changeStepAnimation(2);
        if(this.isMobile){
          setTimeout(function(){
            window.scroll({
              top: this.$refs.tourBookSecondStep.offsetTop - 60,
              left: 0,
              behavior: 'smooth'
            });
          }.bind(this), 500)
        }
        this.showingStep1Background = true;
      }.bind(this), 500);
    },
    goBackToStep(number){
      if(number === 1){
        if(this.canReturn1){
          this.changeStepAnimation(1)
        }
      }
      if(number === 2){
        if(this.canReturn2){
          this.changeStepAnimation(2)
        }
      }
    },
    changeStep(number){
      this.changeStepAnimation(number);
    },
    changeStepAnimation(number){
      this.stepsOpacity = true;
      setTimeout(function(){
        this.stepActive = number;
      }.bind(this), 500);
      setTimeout(function(){
        this.stepsOpacity = false;
      }.bind(this), 1000);
    },
    calendarConfig(){
      this.canReturn2 = true;
      // this.fireBase = {
      //     apiKey: "AIzaSyA8HYWV7kBsMDZSZI66Uy4AAVhigsBj2bE",
      //     authDomain: "here-and-now-64eba.firebaseapp.com",
      //     databaseURL: "https://here-and-now-64eba.firebaseio.com",
      //     projectId: "here-and-now-64eba",
      //     storageBucket: "here-and-now-64eba.appspot.com",
      //     messagingSenderId: "619689727607"
      //   };
      // firebase.initializeApp(this.fireBase);

    }
  }
}
</script>
