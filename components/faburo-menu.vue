<template>
  <header  class='menu'>
    <nuxt-link  :to='{ name: "index" }'
                tag='figure'
                class='menu__head'>
      <img class='menu__head__logo' src='~/static/logo.png' />
      <figcaption class='menu__head__subtitle'>Neemt werk uit handen</figcaption>
    </nuxt-link>
    <div class='menu__links'>
      <nuxt-link  class='menu__links__link'
                  v-for='page in pages'
                  :key='page.id'
                  :to='"/" + page.uid'>
        {{page.data.titel[0].text}}
      </nuxt-link>
      <nuxt-link  class='menu__links__link'
                  to='/contact'>Contact</nuxt-link>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'faburo-menu',
  computed: {
    pages() {
      return this.$store.state.pages.pages
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/variables.scss';

.menu {
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  float: left;
  clear: left;
  padding: $theme-padding $theme-padding * 2;
  background: $theme-light;
  position: fixed;

  &__head {
    cursor: pointer;

    &__logo {
      height: $logo-height;
    }

    &__subtitle {
      display: none;
      font-family: 'Times New Roman', $main;
      font-style: italic;
      width: 100%;
      text-align: center;
    }
  }

  &__links {
    background-color: $theme-light;
    color: #000;
    padding: 12px 0;
    border-radius: 2px;
    display: flex;
    flex-flow: row nowrap;

    &__link {
      padding: 6px 24px;
      border-radius: 4px;
      display: block;
      line-height: 34px;
      text-decoration: none;
      color: #444;
      font-weight: 600;
      transition: background 0.2s ease;

      &:hover {
        background-color: #fff;
      }

      &:active {
        color: $theme;
      }
    }
  }
}
</style>
