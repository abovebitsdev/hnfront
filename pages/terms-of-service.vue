<template>
  <section>
      <div v-if="loadingData" class="site__loading">
        <Loading />
      </div>
      <template v-else lang="html">
        <div class="hnn">
          <div class="hnn__yellow_hero">
              <h2 class="h1" v-if="pageData.title" v-text="pageData.title"></h2>
          </div>

          <div class="white-section">
              <div class="wyswyg">
                <div class="container">
                    <div class="row">
                        <div class="column-8 offset-4 column-md-12 column-xs-12">
                            <div class="wyswyg__target" ref="wyswyg__target">
                                <Wyswyg v-if="helperLoaded" :data="pageData.content" :title="pageData.title" />
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </template>
  </section>
</template>

<script>
import Loading from '~/components/Loading'
import Wyswyg from '~/components/WYSWYG'
import Prismic from 'prismic-javascript'


export default {
  data: function () {
    return {
      loadingData: true,
      helperLoaded: false,
      pageData: {
        title: null,
        content: null
      }
    }
  },
  components: {
    Loading,
    Wyswyg
  },
  created(){
    Prismic.getApi(process.env.apiPrismicUrl + '/api/v2').then(function(api) {
      return api.query(
        Prismic.Predicates.at('document.id', 'Wt-aMygAAHXoDm8x')
      );
    }).then(function(response) {
      console.log( response.results[0].data );
      this.pageData.title = response.results[0].data.title[0].text;
      this.pageData.content = response.results[0].data.content;
      setTimeout(function(){
        this.loadingData = false;
        this.helperLoaded = true;
      }.bind(this), 200);
    }.bind(this), function(err) {
      console.log("Something went wrong: ", err);
    }.bind(this));

    // console.log(this.$refs.wyswyg__target.firstChild);
    // this.$refs.wyswyg__target.firstChild.style.marginTop = 0;
  },
  methods: {

  }
}
</script>
