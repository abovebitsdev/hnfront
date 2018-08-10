<template>
  <section>
    <div class="hnn">
      <div class="hnn__yellow_hero">
          <!-- <h2 class="h1">Create your account</h2> -->
          <h2 class="h1">Apply Now</h2>
          <p>Join the family</p>
      </div>

      <div class="white-section">
        <div class="global-section">
          <div class="global-section__body">
              <div class="container">
                <div class="row">
                  <div class="column-12 offset-2 column-md-12 column-xs-12">
                    <transition name="component-fade" mode="out-in">
                      <form v-if="!form.sended" class="hnn__form register_style" @submit.prevent="validateRegisterForm">
                        <div class="row">
                          <!-- <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                            <checkbox name="terms" value="1">
                            I agree to the <a href="#">terms of service</a>
                            </checkbox>
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                            <radio name="robot" value="1">
                              I'm a robot
                            </radio>
                            <radio name="robot" value="0">
                              I'm not a robot
                            </radio>
                          </div> -->
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>First Name *</span>
                              <input type="text" :class="{'error': singleErros.first_name, 'empty':!form.first_name }"  v-model="form.first_name" placeholder="" required="required">
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>Last Name *</span>
                              <input type="text" :class="{'error': singleErros.last_name, 'empty':!form.last_name }"  v-model="form.last_name" placeholder=""  required="required">
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>Email *</span>
                              <input type="email" :class="{'error': singleErros.email, 'empty':!form.email }"  v-model="form.email" placeholder="" required="required">
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>Email Confirmed *</span>
                              <input type="email" :class="{'error': singleErros.email_confirmed, 'empty':!form.email_confirmed }"  v-model="form.email_confirmed" placeholder="" required="required">
                          </div>

                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>Password *</span>
                              <input type="password" :class="{'error': singleErros.password, 'empty':!form.password }"  v-model="form.password" @keyup="scorePassword" placeholder="" required="required" autocomplete="new-password">
                              <div class="form_password_helper">
                                <span>Password Strength: <strong v-text="form.passwordScoreText"></strong></span>
                                <div class="password_strength">
                                  <div class="password_strength__bar" :style="{width: form.passwordScore+'%'}"></div>
                                </div>
                              </div>
                          </div>

                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>Date of Birth *</span>
                              <!-- <datepicker v-model="form.dob" name="uniquename" required="required"></datepicker> -->
                              <input type="date" :class="{'error': singleErros.dob, 'empty':!form.dob }"  v-model="form.dob" placeholder="01/27/1985" required="required">
                              <!-- <b-input-modal v-model="form.dob"
                                  type="text"
                                  placeholder="01/27/1985"
                                  required="required"
                                  :class="{'error': singleErros.dob, 'empty':!form.dob }"
                                  ></b-input-modal> -->
                              <!-- <input type="text" :class="{'error': singleErros.dob, 'empty':!form.dob }"  v-model="form.dob" placeholder="01/27/1985" required="required"> -->
                          </div>
                          <p>
                            <br>
                          </p>
                          <div class="column-16 column-xs-12 margin-bottom-xs text-left">
                              <p>Current Address</p>
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>Street</span>
                              <input type="text" :class="{'error': singleErros.street, 'empty':!form.street }"  v-model="form.street" placeholder="">
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>City</span>
                              <input type="text" :class="{'error': singleErros.city, 'empty':!form.city }"  v-model="form.city" placeholder="">
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>State</span>
                              <input type="text" :class="{'error': singleErros.state, 'empty':!form.state }"  v-model="form.state" placeholder="">
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>Zipcode</span>
                              <input type="text" :class="{'error': singleErros.zipcode, 'empty':!form.zipcode }"  v-model="form.zipcode" placeholder="">
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>Country</span>
                              <input type="text" :class="{'error': singleErros.country, 'empty':!form.country }"  v-model="form.country" placeholder="">
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <span>Phone number *</span>
                              <input type="text" :class="{'error': singleErros.phone, 'empty':!form.phone }"  v-model="form.phone" placeholder=""  required="required">
                          </div>

                          <p>
                            <br>
                          </p>
                          <div class="column-16 column-xs-12 margin-bottom-xs text-left">
                              <p>Social Media</p>
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left relative">
                              <span class="icon">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              	 width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xml:space="preserve">
                                 <path id="instagram" fill="#000000" d="M22.107,3.415H7.893c-2.469,0-4.479,2.007-4.479,4.477v4.73v9.486c0,2.469,2.01,4.479,4.479,4.479h14.215
                              	c2.469,0,4.479-2.01,4.479-4.479v-9.486v-4.73C26.586,5.421,24.576,3.415,22.107,3.415 M23.393,6.086l0.512-0.004v0.511v3.416
                              	l-3.916,0.014l-0.012-3.928L23.393,6.086z M11.693,12.622c0.742-1.028,1.945-1.7,3.307-1.7s2.564,0.672,3.307,1.7
                              	c0.484,0.67,0.771,1.49,0.771,2.379c0,2.248-1.828,4.078-4.078,4.078c-2.248,0-4.078-1.83-4.078-4.078
                              	C10.922,14.112,11.211,13.292,11.693,12.622 M24.328,22.107c0,1.225-0.994,2.219-2.221,2.219H7.893
                              	c-1.225,0-2.219-0.994-2.219-2.219v-9.486h3.459C8.832,13.356,8.664,14.159,8.664,15c0,3.494,2.842,6.335,6.336,6.335
                              	s6.336-2.842,6.336-6.335c0-0.842-0.17-1.645-0.467-2.379h3.459V22.107z"/>
                                </svg>
                                Instagram Handle *
                              </span>
                              <span class="none" v-if="!form.instagram" @click="noneSocial('instagram')">
                                None?
                              </span>
                              <input type="text" :class="{'error': singleErros.instagram, 'empty':!form.instagram }"  v-model="form.instagram" placeholder="@Username" required="required">
                          </div>
                          <div class="column-8 column-xs-12 margin-bottom-xs text-left relative">
                              <span class="icon">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              	 width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xml:space="preserve">
                                 <path id="facebook" fill="#000000" d="M17.252,11.106V8.65c0-0.922,0.611-1.138,1.041-1.138h2.643V3.459l-3.639-0.015
                              	c-4.041,0-4.961,3.023-4.961,4.961v2.701H10v4.178h2.336v11.823h4.916V15.284h3.316l0.428-4.178H17.252z"/>
                                </svg>
                                Facebook *
                              </span>
                              <span class="none" v-if="!form.facebook" @click="noneSocial('facebook')">
                                None?
                              </span>
                              <input type="text" :class="{'error': singleErros.facebook, 'empty':!form.facebook }"  v-model="form.facebook" placeholder="/Username"  required="required">
                          </div>
                          <p>
                            <br>
                          </p>

                          <div class="column-16 column-xs-12 margin-bottom-xs text-left">
                              <span>We are a members only community of entrepenuers, creatives and digital nomads focused on living with impact. We have one simple question: Why you? ( We want to know what makes you, you. Tell us the weird sh&%.)</span>
                              <input type="text" :class="{'error': singleErros.why_you, 'empty':!form.why_you }"  v-model="form.why_you" placeholder="Why you?"  required="required">
                          </div>

                        <div class="column-16 column-xs-12 margin-bottom-xs text-left">
                            <span>How did you hear about Here Now Living</span>
                            <div>
                                <label><input type="radio" :class="{'error': singleErros.hear_about, 'empty':!form.hear_about }" v-model="form.hear_about" v-bind:value="friend" required="required"/>Friend</label>
                                <label><input type="radio" :class="{'error': singleErros.hear_about, 'empty':!form.hear_about }" v-model="form.hear_about" v-bind:value="online" required="required"/>Online advertisement</label>
                                <label><input type="radio" :class="{'error': singleErros.hear_about, 'empty':!form.hear_about }" v-model="form.hear_about" v-bind:value="radio" required="required"/>Radio</label>
                            </div>
                        </div>

                          <div v-if="messageError.length > 0" class="column-16">
                            <div class="form_error">
                              <p class="title">Oh no! Something's wrong here</p>
                              <p v-for="(singleError, index) in messageError" :key="`singleError-${index}`">
                                {{singleError}}
                              </p>
                            </div>
                          </div>
                          <div class="mobile-hide" style="height: 100px;"></div>
                          <div class="column-16 margin-top">
                            <button type="submit" class="btn yellow">
                              <span v-if="!loadingForm">Apply Now</span>
                              <span v-else>
                                <div class="border-loading-indicator col-3 row-1"></div>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                      <div v-else class="">
                        <p class="h3">Thanks! We've got your application.</p>
                        <br>
                        <!-- <p style="margin: 10px 0 30px;">Wait for approval</p> -->
                        <a href="/" class="btn">Go to Home</a>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.2.0/zxcvbn.js"></script>
<script>
import {Checkbox, Radio} from 'vue-checkbox-radio';
import Datepicker from 'vuejs-datepicker';

import Prismic from 'prismic-javascript';

export default {
  data: function () {
    return {
      loadingForm: false,
      typeInputPassword: true,
      messageError: [],
      form: {
        sended: false,
        first_name: '',
        last_name: '',
        email: '',
        email_confirmed: '',
        password: '',
        passwordScore: 0,
        passwordScoreText: '',
        passwordScores: ['Min length 8', 'Weak', 'Good', 'Strong'],
        dob: '',
        street: null,
        city: null,
        state: null,
        zipcode: null,
        country: null,
        phone: '',
        instagram: '',
        facebook: '',
        why_you: '',
        hear_about: 'online',
      },
      singleErros: {
        first_name: false,
        last_name: false,
        email: false,
        email_confirmed: false,
        password: false,
        dob: false,
        street: false,
        city: false,
        state: false,
        zipcode: false,
        country: false,
        phone: false,
        instagram: false,
        facebook: false,
        why_you: false,
      },
      creditCardType: null
    }
  },
  components: {
    Checkbox,
    Radio,
    Datepicker,
  },
  methods: {
    validateRegisterForm(){
      this.messageError = [];
      if(this.form.first_name && this.form.last_name && this.form.dob && this.form.phone && this.form.password && this.form.email && this.form.email_confirmed){
        this.singleErros.first_name = false;
        this.singleErros.last_name = false;
        this.singleErros.dob = false;
        this.singleErros.phone = false;
        this.singleErros.password = false;
        this.singleErros.email = false;
        this.singleErros.email_confirmed = false;
        if(this.form.password.length < 8){
          this.singleErros.password = true;
          this.messageError.push('Password mush have at least 8 characters');
        }else{
          this.singleErros.password = false;
        }
        if(this.form.email === this.form.email_confirmed){
          this.singleErros.email = false;
          this.singleErros.email_confirmed = false;
        }else{
          this.singleErros.email = true;
          this.singleErros.email_confirmed = true;
          this.messageError.push('Your email need to be the same in both fields');
        }

        if(this.messageError.length === 0){
          this.loadingForm = true;
          this.$store.dispatch('auth/signup', this.form).then(result => {
            this.form.sended = true;
          }, (err) => {
            this.loadingForm = false;
            let errorMessage = err.response && err.response.data.errors[0].detail || String(err)
            console.log('aa', errorMessage)
            this.messageError.push(errorMessage);
          }).catch(error => {
            //
          })
        }
      }else{
        if(!this.form.first_name){
          this.singleErros.first_name = true;
        }
        if(!this.form.last_name){
          this.singleErros.last_name = true;
        }
        if(!this.form.dob){
          this.singleErros.dob = true;
        }
        if(!this.form.phone){
          this.singleErros.phone = true;
        }
        if(!this.form.password){
          this.singleErros.password = true;
        }
        if(!this.form.email){
          this.singleErros.email = true;
        }
        if(!this.form.email_confirmed){
          this.singleErros.email_confirmed = true;
        }
      }
    },
    noneSocial(element) {
      this.form[element] = 'None';
    },
    scorePassword() {
      let pass = this.form.password;
      let score = 0;
      if (!pass){
        this.form.passwordScore = 0;
      }else{
        if(pass.length < 8){
          this.form.passwordScore = 0;
        }else{
          let letters = new Object();
          for (let i=0; i<pass.length; i++) {
              letters[pass[i]] = (letters[pass[i]] || 0) + 1;
              score += 5.0 / letters[pass[i]];
          }
          let variations = {
              digits: /\d/.test(pass),
              lower: /[a-z]/.test(pass),
              upper: /[A-Z]/.test(pass),
              nonWords: /\W/.test(pass),
          }
          let variationCount = 0;
          for (let check in variations) {
            if( variations['digits'] || variations['upper'] ){
              variationCount = 5
            }else{
              variationCount += (variations[check] == true) ? 1 : 0;
            }
          }
          score += (variationCount - 1) * 10;
          this.form.passwordScore = parseInt(score);
          console.log( "Score: ", this.form.passwordScore)
          if(this.form.passwordScore < 31){
            this.form.passwordScore = 31;
          }
          if(this.form.passwordScore > 100){
            this.form.passwordScore = 100;
          }
        }
      }

      if (this.form.passwordScore > 80){
        this.form.passwordScoreText = this.form.passwordScores[3];
      }else if (this.form.passwordScore > 60){
        this.form.passwordScoreText = this.form.passwordScores[2];
      }else if (this.form.passwordScore > 30){
        this.form.passwordScoreText = this.form.passwordScores[1];
      }else{
        this.form.passwordScoreText = this.form.passwordScores[0];
      }
    }
  }
}
</script>
