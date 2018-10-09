<template>
  <footer>
    <div class='col l'>
      Faburo
      <br>
      Diemerparklaan 28
      <br>
      1087 GE Amsterdam
      <br>
      <br>
      <a href='tel:+31207370909'>020 – 737 09 09</a><br>
      <a href='mailto:info@faburo.nl'>info@faburo.nl</a>
      <br>
      <br>
      <nuxt-link to='/privacy'>
        Privacy en cookies
      </nuxt-link>
      <br>
      <br>
      Faburo is gevestigd te Amsterdam en is ingeschreven bij de Kamer van Koophandel onder nummer 34232030
      <br>
      <br>
    </div>
    <div class='col r'>
      <contact-form :palet='"bw"' />
    </div>
  </footer>
</template>

<script>
import contactForm from '~/components/contact-form.vue'

export default {
  name: 'faburo-footer',
  components: {
    contactForm
  }
}
</script>

<style lang='scss'>
@import '~/assets/variables.scss';
@import '~/assets/helpers/_responsive.scss';

footer {
  display: flex;
  flex-flow: row nowrap;
  background: #eee;
  min-height: 20vh;

  @include screen-size('small') {
    flex-flow: row wrap;
  }

  a {
    color: black;

    &:hover {
      color: #777;
    }
  }

  .col {
    padding-top: $theme-padding * 2;
    padding-right: $theme-padding;
    padding-bottom: $theme-padding * 3;
    padding-left: $theme-padding * 2;
    display: inline-block;
    width: 50%;
    flex-grow: 1;

    @include screen-size('small') {
      width: 100%;
    }

    &.r {
      padding-right: $theme-padding * 3;
    }

    .contact {
      i {
        color: #777;
        padding: 0 2px;
        transition: color 0.3s ease-out;
        cursor: pointer;

        &:hover {
          color: $theme;
        }
      }
    }
  }
}
</style>
