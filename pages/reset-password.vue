<template>
  <section>
    <div class="hnn">
      <div class="hnn__contact">

        <div class="white-section">
          <div class="global-section">
            <div class="global-section__head">
              <h3 class="h2">Reset password</h3>
              <!-- <p>Please, </p> -->
            </div>
            <div class="global-section__body">
                <div class="container">
                  <div class="row">
                    <div class="column-8 offset-4 column-md-12 column-xs-12">
                      <transition name="component-fade" mode="out-in">
                        <form v-if="!form.sended" class="hnn__form" @submit.prevent="validateForm">
                          <div class="row">
                            <template v-if="!ref">
                              <div class="column-16 column-xs-12 margin-bottom-xs">
                                <input type="email" name="" :class="{'error': singleErros.email}"  v-model="form.email" placeholder="Your email address">
                              </div>
                            </template>
                            <template v-else>
                              <div class="column-16 column-xs-12 margin-bottom-xs">
                                <input type="password" name="" :class="{'error': singleErros.password}"  v-model="form.password" placeholder="New password">
                              </div>

                              <div class="column-16 column-xs-12 margin-bottom-xs">
                                <input type="password" name="" :class="{'error': singleErros.passwordConfirmation}"  v-model="form.passwordConfirmation" placeholder="Confirm password">
                              </div>
                            </template>

                            <div v-if="messageError.length > 0" class="column-16">
                              <div class="form_error">
                                <p class="title">Oh no! Something's weong here</p>
                                <p v-for="(singleError, index) in messageError" :key="`singleError-${index}`">
                                  · {{singleError}}
                                </p>
                              </div>
                            </div>

                            <div class="column-16">
                              <button type="submit" class="btn yellow">
                                <span v-if="!loadingForm">
                                  <template v-if="ref">
                                    Reset password
                                  </template>
                                  <template v-else>
                                    Send reset password instructions
                                  </template>
                                </span>
                                <span v-else>
                                  <div class="border-loading-indicator col-3 row-1"></div>
                                </span>
                              </button>
                            </div>

                          </div>
                        </form>

                        <div v-else class="">
                          <p class="h3">Please check your email</p>
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
  data: function () {
    return {
      ref: this.$route.query.ref,
      messageError: [],
      loadingForm: false,
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
  mounted(){
    this.$root.$emit('headerWhiteFix', true);
  },
  beforeDestroy() {
    this.$root.$emit('headerWhiteFix', false);
  },
  methods: {
    validateForm() {
      if(this.form.email || this.ref){
        this.singleErros.email = false;
        this.loadingForm = true;
        this.messageError = []

        if (this.ref) {
          this.$store.dispatch('auth/RESET_PWD', {
            ref: this.ref,
            password: this.form.password,
            passwordConfirmation: this.form.passwordConfirmation,
          }).then(result => {
            this.loadingForm = false
            this.form.sended = true
          }).catch(error => {
            this.loadingForm = false
            let err = error.response.data.errors[0].detail || 'Reset password error!'
            this.alert = {type: 'error', message: err}
            this.messageError.push(this.alert.message);
          })

        } else {
          this.$store.dispatch('auth/SEND_RESET_PWD', {
            email: this.form.email,
          }).then(result => {
            this.loadingForm = false
            this.form.sended = true
          }).catch(error => {
            this.loadingForm = false
            let err = error.response.data.errors[0].detail || 'Reset password error!'
            this.alert = {type: 'error', message: err}
            this.messageError.push(this.alert.message);
          })
        }
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
