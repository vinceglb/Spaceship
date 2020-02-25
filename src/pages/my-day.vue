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

        <v-row v-if="myDayTasks.length > 0">
          <v-col>
            <h2>Tâches du jour</h2>
            <task-item v-for="task in myDayTasks" :key="task.id" :task="task" />
          </v-col>
        </v-row>

        <!--<v-row v-if="overdueTasks.length > 0">
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
            <h2>Tâches en cours</h2>
            <task-item
              v-for="task in onGoingTasks"
              :key="task.id"
              :task="task"
              add-my-day
            />
          </v-col>
        </v-row>-->

        <v-btn @click="$refs.bs.open()">
          Salut
        </v-btn>

        <v-row>
          <v-col>
            <task-search />
          </v-col>
        </v-row>
      </v-container>

      <!-- Bottom sheet with fab -->
      <task-bottom-sheet my-day />
      <task-bottom-sheet-my-day />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import TaskItem from '~/components/TaskItem.vue'
import TaskBottomSheet from '~/components/TaskCreateBottomSheetWithFab.vue'
import TaskBottomSheetMyDay from '~/components/TaskMyDayBottomSheetWithButton.vue'
import TaskSearch from '~/components/TaskSearch.vue'
import TaskStore from '~/store/task'
import Task from '~/model/Task'

export default Vue.extend({
  components: {
    TaskItem,
    TaskBottomSheet,
    TaskSearch,
    TaskBottomSheetMyDay
  },

  data() {
    return {
      taskStore: getModule(TaskStore, this.$store)
    }
  },

  computed: {
    myDayTasks(): Task[] {
      return this.taskStore.getMyDayTasks
    },

    todayTasks(): Task[] {
      return this.taskStore.getTasksForToday
    },

    overdueTasks(): Task[] {
      return this.taskStore.getOverdueTasks
    },

    onGoingTasks(): Task[] {
      return this.taskStore.getTasksOnGoing
    }
  }
})
</script>
