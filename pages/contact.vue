<template>
  <div class='contact'>
    <form class='contact__form'
          name="contact"
          action="/thanks"
          method="post"
          netlify-honeypot="bot-field"
          netlify>
      <input    class='contact__form__hidden'
                type="hidden"
                name="form-name"
                value="contact" />
      <label    class='contact__form__label'
                for="name">
        Name:
      </label>
      <input    class='contact__form__field'
                name="name"
                id="name" />
      <!-- Watch out for bots -->
      <p class="contact__form__hidden">     
        <label>Don’t fill this out: <input name="bot-field"></label>
      </p>
      <label    class="contact__form__label" 
                for="email">
        Email:
      </label>
      <input    class="contact__form__field"
                name="email"
                id="email" />
      <label    class="contact__form__label"
                for="message">
        Message:
      </label>
      <textarea class="contact__form__field"
                name="message"
                id="message"></textarea>
      <input    class="contact__form__button"
                type="submit"
                value="Send message" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style scoped lang='scss'>
@import 'assets/variables.scss';

.contact {
  color: black;

  &__form {
    width: 100%;

    &__hidden {
      display: none;
    }
  }
}
</style>
