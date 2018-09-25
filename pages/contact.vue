<template>
  <div class='contact'>
    <form action="https://formspree.io/manusnijhoff@gmail.com"
          method="POST">
        <input  type="text" 
                name="name"
                placeholder="Naam">
        <input  type="email" 
                name="_replyto"
                placeholder="Mail">
        <textarea name='message'
                  placeholder='message'></textarea>
        <input type="submit" value="Send">
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
@import 'assets/helpers/_mixins.scss';
@import 'assets/helpers/_responsive.scss';

.contact {
  color: black;

  &__form {
    &__field {
      display: block;
      width: 100%;
    }

    &__hidden {
      display: none;
    }
  }
}
</style>
