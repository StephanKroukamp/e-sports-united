<template>
  <div class="page-root">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data: () => ({
      message: "Yellew Fweends"
    })
  }
</script>