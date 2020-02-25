<template>
  <div>
    <!-- Bouton -->
    <v-btn id="btn" rounded color="primary" @click="openBottomSheet">
      <v-icon left>mdi-emoticon-outline</v-icon> Aujourd'hui
    </v-btn>

    <!-- Bottom sheet -->
    <task-my-day-bottom-sheet ref="bs" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TaskMyDayBottomSheet from '~/components/TaskMyDayBottomSheet.vue'

export default Vue.extend({
  components: {
    TaskMyDayBottomSheet
  },

  methods: {
    openBottomSheet() {
      ;(this.$refs.bs as any).open()
    }
  }
})
</script>

<style scoped>
#btn {
  text-transform: none;
  letter-spacing: normal;

  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
