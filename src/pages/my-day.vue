<template>
  <v-row column justify-center align-center>
    <v-col xs12 sm8 md6>
      <v-container>
        <!-- Section de titre -->
        <v-row>
          <v-col>
            <h1 class="mb-2">My day</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <h2>Tâches en retard</h2>
            <task-item
              v-for="task in overdueTasks"
              :key="task.id"
              :task="task"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <!-- Liste de tâche -->
            <h2>Tâches à finir pour aujourd'hui</h2>
            <task-item v-for="task in tasks" :key="task.id" :task="task" />
          </v-col>
        </v-row>
      </v-container>

      <!-- Bottom sheet with fab -->
      <task-bottom-sheet :my-day="true" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskItem from '~/components/TaskItem'
import TaskBottomSheet from '~/components/TaskCreateBottomSheetWithFab'

export default {
  components: {
    TaskItem,
    TaskBottomSheet
  },

  computed: {
    ...mapGetters({
      tasks: 'task/getTasksForToday',
      overdueTasks: 'task/getOverdueTasks'
    })
  }
}
</script>
