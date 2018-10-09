<template>
  <div class='page'>
    <h1 v-if='fields.titel !== null' v-html='fields.titel.text' />
    <prismic-rich-text :field='fields.inhoud' />
  </div>
</template>

<script>
export default {
  name: 'faburo-page',
  data () {
    return {
      fields: {
        titel: null,
        inhoud: null
      }
    }
  },
  created () {
    console.log(this.$route)
    this.$prismic.client.getByUID('page', this.$route.params.page).then(document => {
      if (document.data.titel.length) {
        this.fields.titel = document.data.titel[0]
      }
      this.fields.inhoud = document.data.inhoud
    })
  }
}
</script>
