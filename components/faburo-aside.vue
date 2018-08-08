<template>
  <aside  class='menu'
          role='sidebar'>
    <nuxt-link  :to='{ name: "index" }'
                tag='figure'
                class='menu__head'>
      <img class='menu__head__logo' src='~/static/logo.png' />
      <figcaption class='menu__head__subtitle'>Neemt werk uit handen</figcaption>
    </nuxt-link>
    <div class='menu__pages'>
      <nuxt-link  class='menu__pages__link'
                  v-for='page in pages'
                  :key='page.id'
                  :to='"/" + page.uid'>
        {{page.data.titel[0].text}}
      </nuxt-link>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'faburo-aside',
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
  width: 320px;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  float: left;
  clear: left;
  padding: 20px 32px;
  background: $theme-light;

  &__head {
    width: 100%;
    max-height: 100%;
    cursor: pointer;

    &__logo {
      width: 100%;
      padding: 10px 0;
    }

    &__subtitle {
      font-family: 'Times New Roman', $main;
      font-style: italic;
      padding: 10px 0 30px;
      width: 100%;
      text-align: center;
    }
  }

  &__pages {
    position: absolute;
    bottom: 0;
    background-color: $theme-light;
    color: #000;
    padding: 12px 0;
    border-radius: 2px;

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

@media only screen and (max-width: 900px) {
  .menu {
    width: 100vw;
    height: 20vh;
    flex-flow: row nowrap;
    justify-content: center;

    &__head {
      width: 50%;
    }
  }
}
</style>
