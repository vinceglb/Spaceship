<template>
  <v-app dark>
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" fixed app>
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

    <!-- Éléments de l'AppBar -->
    <v-app-bar fixed app>
      <!-- Icone Drawer -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <!-- Titre -->
      <v-toolbar-title v-text="title" />

      <v-spacer />
    </v-app-bar>

    <!-- Content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- Footer -->
    <v-footer :fixed="fixed" app hidden>
      <span>EBfStudio ✨</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      // Titre
      title: 'DoIt 💪',

      // Permet de gérer le drawer
      drawer: false,

      // Items du drawer
      items: [
        {
          icon: 'mdi-apps',
          title: 'Accueil',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Ma journée',
          to: '/my-day'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '7 prochains jours',
          to: '/7-days'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Create',
          to: '/create'
        }
      ],

      // Permet de fixer le footer
      fixed: false
    }
  }
}
</script>
