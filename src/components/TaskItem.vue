<template>
  <v-card ripple class="mb-2">
    <v-list-item>
      <v-list-item-action>
        <v-checkbox color="primary" class="ml-2"></v-checkbox>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ titre }}</v-list-item-title>
        <v-list-item-subtitle v-if="afficheDescr" class="mt-2">
          <v-icon small>mdi-calendar</v-icon>
          {{ formatDate(startDate, endDate) }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import dateformat from 'dateformat'

export default {
  props: {
    titre: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      default: null
    },
    endDate: {
      type: String,
      default: null
    }
  },

  computed: {
    afficheDescr() {
      return this.startDate || this.endDate
    }
  },

  methods: {
    formatDate(startDate, endDate) {
      // const d = new Date(date)
      if (startDate && endDate) {
        return (
          dateformat(startDate, 'd mmm.') +
          ' - ' +
          dateformat(endDate, 'd mmm.')
        )
      } else if (startDate) {
        return 'Débute le ' + dateformat(startDate, 'd mmm.')
      } else if (endDate) {
        return 'Pour le ' + dateformat(endDate, 'd mmm.')
      } else {
        return ''
      }
    }
  }
}
</script>
