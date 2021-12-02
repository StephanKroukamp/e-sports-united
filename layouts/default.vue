<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(drawerItem, i) in drawerItems"
          :key="i"
          :to="drawerItem.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ drawerItem.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="drawerItem.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="!isLoggedIn"
          to="/auth"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Login
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="isLoggedIn"
          @click="logout"
        >
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Logout
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn
        v-if="!isLoggedIn"
        to="/auth"
        icon
        router
        exact
      >
        <v-icon>mdi-login</v-icon>
      </v-btn>

      <v-btn 
        v-if="isLoggedIn"
        @click="logout"
        icon
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default
{
  data ()
  {
    return {
      title: 'Esports United',
      drawer: false,
      drawerItems: 
      [
        {
          icon: 'mdi-account-group',
          title: 'Organizations',
          to: '/organizations'
        },
        {
          icon: 'mdi-controller-classic-outline',
          title: 'Sports',
          to: '/sports'
        },
        {
          icon: 'mdi-account',
          title: 'Players',
          to: '/players'
        },
        {
          icon: 'mdi-trophy',
          title: 'Leagues',
          to: '/Leagues'
        },
        {
          icon: 'mdi-calendar-clock',
          title: 'Events',
          to: '/events'
        }
      ]
    }
  },

  computed: {
    ...mapGetters({ isLoggedIn: 'isLoggedIn' }),
  },

  methods: {
    async logout() {
      await this.$fire.auth.signOut();

      this.$router.push('/auth');
    }
  }
}
</script>