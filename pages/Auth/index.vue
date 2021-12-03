<template>
  <div class="page-root">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :counter="10"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>
      
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="submit"
      >
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  
  export default {
    middleware: 'noauth',
    data: () => ({
      valid: true,
      email: 'admin@esportsunited.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: 'xTest1234$',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length > 5) || 'Password must be more than 6 characters'
      ]
    }),
    
    methods: {
      submit () {
        this.$fire.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            this.$router.push('/organizations/create');

            this.$notifier.showMessage({ content: 'Signed in', color: 'success', 'timeout': 1000 })
          }).catch((error) => {
            this.$notifier.showMessage({ content: error.message, color: 'error', 'timeout': 1000 })
          });
      }
    }
  }
</script>