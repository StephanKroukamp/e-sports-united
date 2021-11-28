<template>
  <div class="page-root">
    <p v-if="loading">Loading...</p>

    <div v-else>
      <ul>
        <li v-for="organization in organizations" :key="organization.id">
          {{ organization.name }}
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
        fetchOrganizations: 'organization/fetchOrganizations'
      })
    },
    computed: {
      ...mapGetters({ organizations: 'organization/getOrganizations' })
    },
    mounted() {
      this.fetchOrganizations();
    }
  }
</script>