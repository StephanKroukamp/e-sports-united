<template>
  <div class="page-root">
    <div>
      <form>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          label="Password"
          required
          type="password"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-btn
          class="mr-4"
          @click="submit"
        >
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </div>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { required, email } from 'vuelidate/lib/validators';

  export default {
    middleware: 'noauth',

    mixins: [validationMixin],

    validations: {
      email: { required, email },
      password: { required }
    },

    data: () => ({
      email: 'admin@esportsunited.com',
      password: 'xTest1234$'
    }),
    
    computed: {
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()

        if (this.emailErrors.length > 0)
        {
        } else if (this.passwordErrors.length > 0)
        {
        } else {
          this.$fire.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            console.log(1);
            this.$router.push('/organizations/create');
            console.log(2);
          }).catch((error) => {
            alert(error.message);
          });
        }
      },
      clear () {
        this.$v.$reset()
        this.email = '';
        this.password = '';
      }
    }
  }
</script>