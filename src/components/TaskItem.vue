<template>
  <v-card ripple class="mb-2" @click="onCardClicked">
    <v-list-item>
      <v-list-item-action>
        <v-checkbox v-model="check" color="primary" class="ml-2"></v-checkbox>
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
import { mapMutations } from 'vuex'
import dateformat from 'dateformat'

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    },
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
    },

    check: {
      get() {
        return this.done
      },
      set() {
        this.checkAction()
      }
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
    },

    checkAction() {
      this.setDoneInverse(this.id)
    },

    onCardClicked() {
      this.$router.push({
        path: '/task/' + this.id
      })
    },

    ...mapMutations({
      setDoneInverse: 'task/setDoneInverse'
    })
  }
}
</script>
