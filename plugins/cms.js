import Vue from 'vue'


// export default {
//   async asyncData (context) {
//     var Prismic = require('prismic-javascript')
//     var apiEndpoint = process.env.apiPrismicUrl + '/api/v2'
//     console.log( apiEndpoint );
//     // var apiToken = '1234567890'
//     return Prismic.getApi(apiEndpoint /*, {accessToken: apiToken} */).then(function (api) {
//       var myquery = api.query(
//       )
//       console.log(myquery)
//       return myquery
//     }).then(function (response) {
//       console.log(response.results)
//       return { products: response.results, title: 'Products' }
//     }.bind(this), function (err) {
//       console.log('Something went wrong: ', err)
//       return { title: err }
//     })
//   },
//   fetch () {
//     console.log("Hola");
//     // The fetch method is used to fill the store before rendering the page
//   },
//   /*,
//   head () {
//     // Set Meta Tags for this Page
//   }
//   */
//
// }

// Vue.mixin({
//     data: () => {
//       return {
//         alreadyCheck: false,
//         loadingData: true,
//         loadingDataError: false,
//         hnnData: [],
//       }
//     },
//     created: function () {
//       if(!this.alreadyCheck){
//         this.alreadyCheck = true;
//         let Prismic = require('prismic-javascript');
//         let apiEndpoint = "https://here-and-now.cdn.prismic.io/api/v2";
//
//         console.log("Helo Liz ;)");
//
//         Prismic.getApi(apiEndpoint).then(function(api) {
//           return api.query("");
//         }).then(function(response) {
//           this.loadingData = false;
//           this.hnnData = response.results;
//           console.log( this.hnnData );
//         }.bind(this), function(err) {
//           this.loadingDataError = true;
//           console.log("Something went wrong: ", err);
//         }.bind(this));
//       }
//     }
// })
