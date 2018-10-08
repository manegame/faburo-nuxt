<template>
  <div class='faburo'>
    <faburo-menu />
    <div class='faburo__page'>
        <nuxt class='faburo__page__content' />
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
  }
}
</script>


<style lang='scss'>
@import '~/assets/variables.scss';
@import '~/assets/helpers/_responsive.scss';

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
    padding: $menu-height + $theme-padding * 2 $theme-padding * 2;
    position: relative;

    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#d8ffe0+83,ffffff+99 */
    background: #d8ffe0; /* Old browsers */
    background: -moz-linear-gradient(bottom, #d8ffe0 20px, #ffffff 120px); /* FF3.6-15 */
    background: -webkit-linear-gradient(bottom, #d8ffe0 20px,#ffffff 120px); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to top, #d8ffe0 20px,#ffffff 120px); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d8ffe0', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */

    &:before {
      display: block;
      content: '';
      position: absolute;
      bottom: $theme-padding * 2;
      right: $theme-padding * 3;
      width: 180px;
      height: 120px;
      background-image: url('/bg-logo.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom left;

      @include screen-size('small') {
        width: 80px;
        height: 40px;
      }
    }

    &__content {
      width: 760px;
      margin: 0 auto;

      @include screen-size('medium') {
        width: 100%;
      }
    }

  }
}
</style>

