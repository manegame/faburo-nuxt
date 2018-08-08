<template>
  <div class='page'>
    <h1>Titel</h1>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'

export default {
  name: 'faburo-page',
  data() {
    return {
      myRoutes: []
    }
  },
  methods: {
    logRoutes() {
      console.log(this.getRoutes())
    },
    getRoutes() {
      return Prismic.getApi('https://faburo.prismic.io/api/v2')
        .then(api => {
          return api.query(
            Prismic.Predicates.at('document.type', 'page'),
            { orderings: '[my.page.date desc]' }
          )
        })
        .then((res) => {
          console.log(res)
          return res.results.map((page) => {
            return page.uid
          })
        })
    }
  },
  created() {
    // this.getRoutes()
    this.logRoutes()
  }
}
</script>

<style>

</style>
