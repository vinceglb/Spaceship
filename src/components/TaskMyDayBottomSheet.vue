<template>
  <bottom-sheet ref="bs" titre="Organisation">
    <v-container>
      <v-row v-if="overdueTasks.length > 0">
        <v-col>
          <h2>Tâches en retard</h2>
          <task-item
            v-for="task in overdueTasks"
            :key="task.id"
            :task="task"
            add-my-day
          />
        </v-col>
      </v-row>

      <v-row v-if="todayTasks.length > 0">
        <v-col>
          <!-- Liste de tâche -->
          <h2>Tâches à finir pour aujourd'hui</h2>
          <task-item
            v-for="task in todayTasks"
            :key="task.id"
            :task="task"
            add-my-day
          />
        </v-col>
      </v-row>

      <v-row v-if="onGoingTasks.length > 0">
        <v-col>
          <!-- Liste de tâche -->
          <h2>Tâches en cours</h2>
          <task-item
            v-for="task in onGoingTasks"
            :key="task.id"
            :task="task"
            add-my-day
          />
        </v-col>
      </v-row>
    </v-container>
  </bottom-sheet>
</template>

<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import BottomSheet from '~/components/BottomSheet.vue'
import TaskItem from '~/components/TaskItem.vue'
import TaskStore from '~/store/task'
import Task from '~/model/Task'

export default Vue.extend({
  components: {
    BottomSheet,
    TaskItem
  },

  data() {
    return {
      taskStore: getModule(TaskStore, this.$store)
    }
  },

  computed: {
    todayTasks(): Task[] {
      return this.taskStore.getTasksForToday
    },

    overdueTasks(): Task[] {
      return this.taskStore.getOverdueTasks
    },

    onGoingTasks(): Task[] {
      return this.taskStore.getTasksOnGoing
    }
  },

  methods: {
    open(): void {
      ;(this.$refs.bs as any).open()
    }
  }
})
</script>
