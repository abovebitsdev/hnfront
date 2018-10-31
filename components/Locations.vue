<template>
    <div class="promo_card" :class="{'shadow': data.size}" @click.prevent="redirectToURL" @mouseover="fakeHover" @mouseout="fakeHoverOut" :style="[widthStyle]">
        <div class="promo_card__head" v-bind:style="{ 'background-image': 'url( ' + data.image + ')' }"></div>
        <div class="promo_card__body">
            <div class="promo_card__body__title h3" v-text="data.title"></div>
            <div class="promo_card__body__description" style="margin:10px auto 0"><span v-text="data.address"></span><br /><span v-text="data.location"></span></div>
            <div class="promo_card__body__description" v-text="data.description"></div>
            <div class="promo_card__body__cta">
                <span v-text="data.cta.text"></span>
                <!--<a class="btn-arrow" :class="{'hover': fake_over}" :href="data.cta.url"></a>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                fake_over: false,
                widthStyle: {}
            }
        },
        props: ['data'],
        mounted() {

            if(this.data.size){
                this.widthStyle= {
                    width: this.data.size+'px'
                }
            }
        },
        methods: {
            redirectToURL(){
                window.location = this.data.cta.url;
            },
            fakeHover(){
                this.fake_over = true;
            },
            fakeHoverOut(){
                this.fake_over = false;
            }
        }
    }
</script>
