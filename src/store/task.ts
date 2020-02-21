import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
// import createPersistedState from 'vuex-persistedstate'
import Task from '~/model/Task'
// import VuexPersistence from 'vuex-persist'

@Module({
  name: 'task',
  stateFactory: true,
  namespaced: true
})
export default class TaskStore extends VuexModule {
  tasks: Task[] = []

  @Mutation
  createTask(data: any) {
    const task = new Task(
      data.titre,
      data.description,
      data.startDate,
      data.endDate,
      data.myDay
    )
    this.tasks.push(task)
  }

  @Mutation
  setDoneInverse(id: string) {
    const task = this.tasks.find((task) => task.id === id)
    if (task) {
      task.done = !task.done
    } else {
      console.warn(`La tâche avec l'id #${id} n'existe pas`)
    }
  }

  @Mutation
  setTitre({ id, titre }: { id: string; titre: string }) {
    const task = this.tasks.find((task) => task.id === id)
    if (task) {
      task.titre = titre
    } else {
      console.warn(`La tâche avec l'id #${id} n'existe pas`)
    }
  }

  get getAllTasks(): Task[] {
    return this.tasks
  }

  get getMyDayTasks(): Task[] {
    return this.tasks.filter((task) => task.myDay === true)
  }

  get getOverdueTasks(): Task[] {
    return this.tasks.filter((task) => task.isOverdue() === true)
  }

  get getTasksForToday(): Task[] {
    return this.tasks.filter((task) => task.isEndDateToday() === true)
  }

  /**
   * TODO à voir le type de retour
   */
  get getTaskById() {
    const tasks = this.tasks
    return function(id: string): Task | undefined {
      return tasks.find((task) => task.id === id)
    }
  }
}

/* function salut() {
  if (process.client) {
    return [createPersistedState()]
  } else {
    return []
  }
}

export const plugins = salut() */
