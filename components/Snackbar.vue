<template>
  <v-snackbar 
    v-model="show" 
    :color="color" 
    right
  >
    {{ message }}
    <v-btn text @click="show = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: '',
      color: '',
      timeout: 0
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.message = state.snackbar.content;

        this.color = state.snackbar.color;

        this.timeout = state.snackbar.timeout;

        this.show = true;
      }
    })
  }
}
</script>