<template>
  <div>
    <!-- Bouton Fab -->
    <v-btn id="fab" fab dark color="primary" @click="openBottomSheet">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>

    <!-- Bottom sheet -->
    <task-create-bottom-sheet ref="bottomSheet" :my-day="myDay" />
  </div>
</template>

<script>
import TaskCreateBottomSheet from '~/components/TaskCreateBottomSheet'

export default {
  components: {
    TaskCreateBottomSheet
  },

  props: {
    myDay: {
      type: Boolean,
      required: true
    }
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
