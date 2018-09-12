<template>
  <div class='faburo'>
    <faburo-menu />
    <div class='faburo__page'>
        <nuxt />
    </div>
    <faburo-footer />
  </div>
</template>

<script>
import FaburoMenu from '~/components/faburo-menu'
import FaburoFooter from '~/components/faburo-footer'

export default {
  components: {
    FaburoMenu,
    FaburoFooter
  },
  beforeUpdate() {
    console.log('updated sidebar')
  }
}
</script>


<style lang='scss'>
@import '~/assets/variables.scss';

$menu-height: $logo-height + $theme-padding * 2;

html {
  font-family: $main;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.faburo {
  &__page {
    min-height: 100vh;
    padding: $menu-height + $theme-padding $theme-padding * 2 60px;
  }
}
</style>

