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
      <div class='contact__last'>
        <input  class='contact__last__submit'
                type="submit"
                value="Stuur ons een bericht">
        <p class='contact__last__text'>
          <a  class='contact__last__text__link'
              href='tel:+31207370909'><i class="fas fa-phone-square"></i></a>
          <a  class='contact__last__text__link'
              href='https://wa.me/31612169637'><i class="fab fa-whatsapp"></i></a></p>
      </div>
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

  &__last {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__submit {
      padding: 2px 12px;
      font-family: $main;
      font-size: $font-size-s;
      line-height: $line-height-s * 2;
      border: none;
      border-radius: 2px;
      padding: 2px 12px;
      background-color: $theme-light;
      color: $theme-black;
      cursor: pointer;
  
      &:active,
      &:focus {
        outline: none;
      }
  
      &:hover {
        background-color: #ddd;
      }
    }

    &__text {
      padding: 0;
      font-size: 22px;
      line-height: 22px;

      &__link {
        padding-left: 12px;
      }
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

      &__last {
        &__submit {
          background-color: #fff;
          color: black;
        }

        &__text {
          &__link,
          a i {
            color: #777;

            &:hover {
              color: #444;
            }
          }
        }
      }
    }
  }
}
</style>

