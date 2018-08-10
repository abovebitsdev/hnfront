<template>
  <button v-bind:class="className" v-on:click="pay">
    <slot name="purchasing" v-if="purchasing"></slot>
    <slot v-else></slot>
  </button>
</template>

<script>
import stripeApi from '~/api/stripe'

export default {
  props: ['className'],

  data () {
    return {
      purchasing: false,
      stripeKey: process.env.stripe.key
    }
  },

  methods: {
    checkout (token, args) {
      this.purchasing = true
      if (!token) {
        return
      }
      stripeApi.customer.create(token).then(({ data: subscription }) => {
        this.purchasing = false
        this.$emit('onSuccess', subscription)
      }, (e) => {
        this.purchasing = false
        this.$emit('onError', e)
      })
    },

    pay () {
      var handler = StripeCheckout.configure({
        key: this.stripeKey,
        image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        locale: 'auto',
        token: this.checkout
      });

      handler.open({
        name: 'here&now',
        description: 'Monthly subscription',
        amount: 140000
      });

    }
  }
}
</script>

