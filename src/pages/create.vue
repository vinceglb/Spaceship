<template>
  <v-row column justify-center align-center>
    <v-col xs12 sm8 md6>
      <task-item
        v-for="element in tasks2"
        :key="element.titre"
        v-bind="element"
      />

      <v-btn id="fab" large fab dark color="primary" @click="openBottomSheet">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>

      <task-create-bottom-sheet ref="bottomSheet" />
    </v-col>
  </v-row>
</template>

<script>
import TaskItem from '~/components/TaskItem'
import TaskCreateBottomSheet from '~/components/TaskCreateBottomSheet'
import { mapGetters } from 'vuex'

export default {
  components: {
    TaskItem,
    TaskCreateBottomSheet
  },

  computed: {
    ...mapGetters({
      tasks2: 'task/getAllTasks'
    })
  },

  methods: {
    openBottomSheet() {
      this.$refs.bottomSheet.open()
    }
  }
}
</script>

<style scoped>
#fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
