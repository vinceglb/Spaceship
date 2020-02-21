import createPersistedState from 'vuex-persistedstate'
import Task from '~/model/Task'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      arrayMerger(_, saved) {
        return saved.map(
          (task) =>
            new Task(
              task.titre,
              task.description,
              task.startDate,
              task.endDate,
              task.myDay
            )
        )
      }
    })(store)
  })
}
