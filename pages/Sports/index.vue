<template>
  <div class="page-root">
    <p v-if="loading">Loading...</p>

    <div v-else>
      <ul>
        <li v-for="sport in sports" :key="sport.id">
          {{ sport.name }}
          <!-- {{ sport.organizationRef }} -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      ...mapActions({
        fetchSports: 'sport/fetchSports'
      })
    },
    computed: {
      ...mapGetters({ sports: 'sport/getSports' })
    },
    mounted() {
      this.fetchSports();
    }
  }
</script>