<template>
  <v-row column justify-center align-center>
    <v-col xs12 sm8 md6>
      <!-- Liste de tâche -->
      <task-item v-for="task in tasks" :key="task.id" :task="task" />

      <!-- Bottom sheet with fab -->
      <task-bottom-sheet :my-day="false" />

      <chip-date icone="mdi-firebase" closable :date.sync="yo" />
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
import ChipDate from '~/components/ChipDate.vue'

export default Vue.extend({
  components: {
    TaskItem,
    TaskBottomSheet,
    ChipDate
  },

  data() {
    return {
      salut: getModule(TaskStore, this.$store),
      yo: '2020-02-26'
    }
  },

  computed: {
    tasks(): Task[] {
      return this.salut.getAllTasks
    }
  },

  watch: {
    yo(value) {
      console.log('vince', value)
    }
  }
})
</script>
