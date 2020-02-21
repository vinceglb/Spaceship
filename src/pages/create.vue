<template>
  <v-row column justify-center align-center>
    <v-col xs12 sm8 md6>
      <!-- Liste de tâche -->
      <task-item v-for="task in tasks" :key="task.id" :task="task" />

      <!-- Bottom sheet with fab -->
      <task-bottom-sheet :my-day="false" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import TaskItem from '~/components/TaskItem.vue'
import TaskBottomSheet from '~/components/TaskCreateBottomSheetWithFab.vue'

export default Vue.extend({
  components: {
    TaskItem,
    TaskBottomSheet
  },

  computed: {
    ...mapGetters({
      tasks: 'task/getAllTasks'
    })
  }
})
</script>
