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
import axios from 'axios'
// import sgMail from '@sendgrid/mail'
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default {
  name: 'contact',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendMail () {
      const msg = {
        to: 'manusnijhoff@gmail.com',
        from: this.email,
        subject: this.name + ' zoekt contact met Faburo',
        text: this.message,
        html: '<strong>' + this.message + '</strong>'
      }
      // axios.post('https://api.sendgrid.com/v3/mail/send', msg)
      axios({
        method: 'post',
        url: 'https://api.sendgrid.com/v3/mail/send',
        data: msg
      }).then(result => {
        console.log(result)
      })
    }
  }
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
