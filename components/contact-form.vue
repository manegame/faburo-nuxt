<template>  
  <form class='contact'
        :class='{"contact--bw": palet === "bw"}'
        action="https://formspree.io/info@faburo.nl"
        method="POST">
      <input  class='contact__field'
              type="text" 
              name="name"
              placeholder="Uw naam">
      <input  class='contact__field'
              type="email" 
              name="_replyto"
              placeholder="Uw mailadres">
      <textarea class='contact__field contact__field--message'
                name='message'
                placeholder='Uw bericht'></textarea>
      <input  class='contact__submit'
              type="submit"
              value="Stuur ons een bericht">
  </form>
</template>

<script>
export default {
  name: 'contact',
  props: {
    palet: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/variables.scss';
@import 'assets/helpers/_mixins.scss';
@import 'assets/helpers/_responsive.scss';

.contact {
  &__field {
    padding: 2px 12px;
    font-family: $main;
    font-size: $font-size-s;
    line-height: $line-height-s * 2;
    display: block;
    width: 100%;
    margin: 0 0 $line-height-s;
    border-radius: 2px;
    border: 1px solid $theme-light;
    background-color: $theme-light;

    &--message {
      min-height: $line-height-s * 8;
      resize: vertical;
    }

    &:focus {
      outline: 1px solid $theme;
      border-radius: 2px;
    }
  }

  &__submit {
    padding: 2px 12px;
    font-family: $main;
    font-size: $font-size-s;
    line-height: $line-height-s * 2;
    border: none;
    border-radius: 2px;
    padding: 2px 12px;
    background-color: $theme-light;
    cursor: pointer;

    &:active,
    &:focus {
      outline: none;
    }

    &:hover {
      background-color: #ddd;
    }
  }

  &__hidden {
    display: none;
  }

  &--bw {
    .contact {
      &__field {
        border: 1px solid #eee;
        background-color: #ddd;


        &:focus {
          outline: 1px solid #aaa;
          border-radius: 2px;
        }
      }

      &__submit {
        background-color: #fff;
      }
    }
  }
}
</style>

