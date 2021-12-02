<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
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
export default
{
  data ()
  {
    return {
      title: 'Esports United',
      drawer: false,
      items: 
      [
        {
          icon: 'mdi-account-group',
          title: 'Organizations',
          to: '/Organizations'
        },
        {
          icon: 'mdi-controller-classic-outline',
          title: 'Sports',
          to: '/Sports'
        },
        {
          icon: 'mdi-account',
          title: 'Players',
          to: '/Players'
        },
        {
          icon: 'mdi-trophy',
          title: 'Leagues',
          to: '/Leagues'
        },
        {
          icon: 'mdi-calendar-clock',
          title: 'Events',
          to: '/Events'
        }
      ]
    }
  }
}
</script>