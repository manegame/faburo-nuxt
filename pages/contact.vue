<template>
  <div class='contact'>
    <h1>Contact</h1>
    <contact-form />
  </div>
</template>

<script>
import contactForm from '~/components/contact-form'

export default {
  name: 'contact',
  components: {
    contactForm
  }
}
</script>
