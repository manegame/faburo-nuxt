<template>
  <div class='page'>
    <prismic-rich-text :field='fields.title' />
    <prismic-rich-text :field='fields.text' />
  </div>
</template>

<script>
export default {
  name: 'privacy',
  data () {
    return {
      fields: {
        titel: 'Privacy en Cookies',
        text: null
      }
    }
  },
  created () {
    console.log(this.$route)
    this.$prismic.client.getSingle('privacy').then(document => {
      this.fields.title = document.data.title
      this.fields.text = document.data.text
    })
  }
}
</script>
