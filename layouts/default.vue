<template>
  <div class='faburo'>
    <div class='faburo__content'>
      <faburo-aside role='sidebar' />
      <div  role="main"
            class='faburo__content__page'>
        <nuxt />
      </div>
    </div>
    <faburo-footer />
  </div>
</template>

<script>
import FaburoFooter from '~/components/faburo-footer'
import FaburoAside from '~/components/faburo-aside'

export default {
  components: {
    FaburoFooter,
    FaburoAside
  },
  beforeUpdate() {
    console.log('updated sidebar')
  }
}
</script>


<style lang='scss'>
@import '~/assets/variables.scss';

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
  min-height: 100vh;

  &__content {
    display: flex;
    flex-direction: column nowrap;

    &__page {
      float: left;
      clear: right;
      overflow:hidden;
      flex: 1;
      background: #fff;
      padding: 40px 60px;
    }
  }
}
</style>

