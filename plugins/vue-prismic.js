import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './link-resolver'
 
// Add this before the new Vue instance
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
})
