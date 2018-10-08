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
  async fetch ({ store }) {
    await store.dispatch('pages/GET_PAGES')
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('home')
        .then((document) => {
          this.fields.hero = document.data.hero
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
@import '~/assets/variables.scss';
@import '~/assets/global.scss';
@import '~/assets/helpers/_mixins.scss';
@import '~/assets/helpers/_responsive.scss';

.index {
  &__inleiding {
    max-width: 80ch;
  }
}
</style>

