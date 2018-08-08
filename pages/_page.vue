<template>
  <div class='page'>
    <prismic-rich-text :field='fields.title' />
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
      this.fields.titel = document.data.titel[0]
      this.fields.inhoud = document.data.inhoud
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

.page {
  a {
    color: $theme;
  }
}
</style>
