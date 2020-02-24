<template>
  <v-autocomplete
    v-model="model"
    :items="items"
    :search-input.sync="search"
    color="white"
    hide-no-data
    hide-selected
    item-text="Description"
    item-value="API"
    label="Public APIs"
    placeholder="Start typing to Search"
    prepend-icon="mdi-database-search"
    return-object
  ></v-autocomplete>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    model: null,
    search: null
  }),

  computed: {
    items() {
      return this.getAllTasks.map((task) => task.titre)
    },

    ...mapGetters({
      getAllTasks: 'task/getAllTasks'
    })
  },

  watch: {
    model(nv) {
      console.log('model = ' + nv)
    },
    search(nv) {
      console.log('search = ' + nv)
    }
  }
}
</script>
