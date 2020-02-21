<template>
  <v-card ripple class="mb-2">
    <v-list-item>
      <v-list-item-action>
        <v-checkbox v-model="check" color="primary" class="ml-2"></v-checkbox>
      </v-list-item-action>
      <v-list-item-content @click="onCardClicked">
        <v-list-item-title>{{ task.titre }}</v-list-item-title>
        <v-list-item-subtitle v-if="afficheDescr" class="mt-2">
          <v-icon small>mdi-calendar</v-icon>
          {{ task.formatDate() }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { mapMutations } from 'vuex'
import Task from '~/model/Task'

export default Vue.extend({
  props: {
    task: {
      type: Object,
      required: true
    } as PropOptions<Task>
  },

  computed: {
    afficheDescr(): boolean {
      return this.task.startDate != null || this.task.endDate != null
    },

    check: {
      get(): boolean {
        return this.task.done
      },
      set() {
        this.checkAction()
      }
    }
  },

  methods: {
    checkAction() {
      this.setDoneInverse(this.task.id)
    },

    onCardClicked() {
      this.$router.push({
        path: '/task/' + this.task.id
      })
    },

    ...mapMutations({
      setDoneInverse: 'task/setDoneInverse'
    })
  }
})
</script>
