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
import { getModule } from 'vuex-module-decorators'
import Task from '~/model/Task'
import TaskStore from '~/store/task'
import TaskItem from '~/components/TaskItem.vue'
import TaskBottomSheet from '~/components/TaskCreateBottomSheetWithFab.vue'

export default Vue.extend({
  components: {
    TaskItem,
    TaskBottomSheet
  },

  data() {
    return {
      salut: getModule(TaskStore, this.$store)
    }
  },

  computed: {
    tasks(): Task[] {
      return this.salut.getAllTasks
    }
  }
})
</script>
