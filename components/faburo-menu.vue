<template>
  <header  class='menu'>
    <nuxt-link  :to='{ name: "index" }'
                tag='figure'
                class='menu__head'>
      <img class='menu__head__logo' src='~/static/logo.png' />
      <figcaption class='menu__head__subtitle'>Neemt werk uit handen</figcaption>
    </nuxt-link>
    <a  class='menu__toggle'
        @click='menuOpen = !menuOpen'
        v-html='menuOpen ? "sluit" : "menu"'></a>
    <div  class='menu__links'
          :class='{ 
            "menu__links--mobile": windowWidth < 425,
            "menu__links--open": menuOpen
          }'>
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
  data () {
    return {
      menuOpen: false,
      windowWidth: null
    }
  },
  computed: {
    pages() {
      return this.$store.state.pages.pages
    }
  },
  methods: {
    setSize () {
      this.windowWidth = window.innerWidth
    }
  },
  mounted () {
    window.addEventListener('resize', this.setSize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setSize)
  }
}
</script>

<style lang='scss'>
@import '~/assets/variables.scss';
@import '~/assets/helpers/_responsive.scss';

.menu {
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: $theme-padding $theme-padding * 2;
  background: $theme-light;
  position: fixed;
  z-index: 10;

  @include screen-size('small') {
    flex-flow: row wrap;
    padding: $theme-padding $theme-padding;
  }

  &__head {
    cursor: pointer;

    &__logo {
      display: block;
      height: $logo-height;

      @include screen-size('small') {
        height: $logo-height * 0.75;
      }
    }

    &__subtitle {
      display: none;
      font-family: 'Times New Roman', $main;
      font-style: italic;
      width: 100%;
      text-align: center;
    }
  }

  &__toggle {
    display: none;
    cursor: pointer;

    @include screen-size('small') {
      display: block;
    }
  }

  &__links {
    background-color: $theme-light;
    color: #000;
    padding: 12px 0;
    border-radius: 2px;
    display: flex;
    flex-flow: row nowrap;

    @include screen-size('small') {
      background-color: transparent;
      width: 100%;
      padding-left: 0;
      padding-bottom: 0;
      padding-right: 0;
      padding-top: $theme-padding;

      &--mobile {
        display: none;

        &.menu__links--open {
          display: block;
        }
      }
    }

    &__link {
      padding: 6px 24px;
      border-radius: 4px;
      display: block;
      line-height: 34px;
      text-decoration: none;
      color: #444;
      font-weight: 600;
      transition: background 0.2s ease;

      @include screen-size('small') {
        padding-top: 0;
        padding-left: 0;
        padding-bottom: 0;
        padding-right: 12px;
      }

      &:hover {
        background-color: #fff;

        @include screen-size('small') {
          background-color: transparent;
        }
      }

      &:active {
        color: $theme;
      }
    }
  }
}
</style>
