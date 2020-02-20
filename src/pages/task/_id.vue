<template>
  <task-edit :id-task="idTask" />
</template>

<script>
import TaskEdit from '~/components/TaskEdit'

export default {
  components: {
    TaskEdit
  },

  computed: {
    /**
     * Permet de simplifier l'accès à l'id de la tâche
     */
    idTask() {
      return this.$route.params.id
    }
  }
}
</script>
