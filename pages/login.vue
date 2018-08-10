<template>
  <section>
    <div class="hnn">
      <div class="hnn__contact">

        <div class="white-section">
          <div class="global-section">
            <div class="global-section__head">
              <h3 class="h2">Log In</h3>
              <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p> -->
            </div>
            <div class="global-section__body">
                <div class="container">
                  <div class="row">
                    <div class="column-8 offset-4 column-md-12 column-xs-12">
                      <transition name="component-fade" mode="out-in">
                        <form v-if="!form.sended" class="hnn__form" @submit.prevent="validateForm">
                          <div class="row">
                            <div class="column-16 column-xs-12 margin-bottom-xs">
                              <input type="email" name="" :class="{'error': singleErros.email}"  v-model="form.email" placeholder="Your email address">
                            </div>
                            <div class="column-16 column-xs-12 margin-bottom-xs relative">
                              <div v-if="form.password" class="hnn__form__input_icon" @click="changePasswordInput()">
                                <img v-if="typeInputPassword" src="~/static/images/icons/eye.svg" alt="Show Password">
                                <img v-else src="~/static/images/icons/eye-off.svg" alt="Hide Password">
                              </div>
                              <input :type="(typeInputPassword)?'password':'text'" name="" :class="{'error': singleErros.password}"  v-model="form.password" placeholder="Your password">
                            </div>
                            <div class="column-8 column-xs-12 margin-bottom-xs text-left">
                              <a class="hnn__form__black_link" href="/apply">Create account</a>
                            </div>
                            <div class="column-8 column-xs-12 margin-bottom-xs text-right">
                              <nuxt-link class="hnn__form__black_link" :to="'/reset-password'">
                                Forgot your password?
                              </nuxt-link>
                            </div>

                            <div v-if="messageError.length > 0" class="column-16">
                              <div class="form_error">
                                <p class="title">Oh no! Something's wrong here</p>
                                <p v-for="(singleError, index) in messageError" :key="`singleError-${index}`">
                                  · {{singleError}}
                                </p>
                              </div>
                            </div>

                            <div class="column-16">
                              <button type="submit" class="btn yellow">
                                <span v-if="!loadingForm">Log In</span>
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


      </div>
    </div>
  </section>
</template>

<script>

export default {
  middleware: 'no-auth',

  data: function () {
    return {
        messageError: [],
        loadingForm: false,
        typeInputPassword: true,
        form: {
          email: '',
          password: '',
          sended: false,
        },
        singleErros: {
          email: false,
          password: false,
        }
    }
  },
  components: {

  },
  mounted(){
    this.$root.$emit('headerWhiteFix', true);
  },
  beforeDestroy() {
    this.$root.$emit('headerWhiteFix', false);
  },
  methods: {
    changePasswordInput(){
      this.typeInputPassword = !this.typeInputPassword;
    },
    validateForm() {
        if(this.form.email && this.form.password ){
            this.singleErros.email = false;
            this.singleErros.password = false;
            this.loadingForm = true;
            this.messageError = []

            this.$store.dispatch('auth/login', {
              auth: {
                email: this.form.email,
                password: this.form.password
              }
            }).then(result => {
              this.loadingForm = false
              this.$router.push('/user/account')
            }).catch(error => {
              console.log('error login', error)
              this.loadingForm = false
              if (error.response.status === 423) {
                this.alert = {type: 'error', message: 'Your account has not been approved'}
              } else {
                this.alert = {type: 'error', message: 'The email and password you entered don\'t match'}
              }
              this.messageError.push(this.alert.message);
            })
        }else{
            if(!this.form.email){
              this.singleErros.email = true;
            }
            if(!this.form.password){
              this.singleErros.password = true;
            }
        }
    }
  }
}
</script>
