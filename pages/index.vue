<template>
  <div class='index'>
    <prismic-rich-text  v-if='!!fields.richContent'
                        :field='fields.richContent'
                        class='index__inleiding' />
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      fields: {
        title: null,
        logo: null,
        richContent: null
      },
      documentId: ''
    }
  },
  methods: {
    getContent () {
      console.log(this.$prismic.client)
      this.$prismic.client.getSingle('home')
        .then((document) => {
          this.fields.title = document.data.title
          this.fields.logo = document.data.logo
          this.fields.richContent = document.data.rich_content
          this.documentId = document.id
        })
    }
  },
  created () {
    // console.log('created')
    this.getContent();
  }
}
</script>

<style lang='scss'>
.index {
  &__inleiding {
    max-width: 80ch;
  }
}
</style>

