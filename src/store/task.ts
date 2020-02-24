import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
// import createPersistedState from 'vuex-persistedstate'
import Task from '~/model/Task'
// import VuexPersistence from 'vuex-persist'

@Module({
  name: 'task',
  stateFactory: true,
  namespaced: true,
  preserveState: true
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
  setMyDayInverse(id: string) {
    const task = this.tasks.find((task) => task.id === id)
    if (task) {
      task.myDay = !task.myDay
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

  @Mutation
  setStartDate({ id, startDate }: { id: string; startDate: string }) {
    const task = this.tasks.find((task) => task.id === id)
    if (task) {
      task.startDate = startDate
    } else {
      console.warn(`La tâche avec l'id #${id} n'existe pas`)
    }
  }

  @Mutation
  setEndDate({ id, endDate }: { id: string; endDate: string }) {
    const task = this.tasks.find((task) => task.id === id)
    if (task) {
      task.endDate = endDate
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

  get getTasksOnGoing(): Task[] {
    return this.tasks.filter((task) => task.isOnGoing() === true)
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

// export default getModule(TaskStore)

/* function salut() {
  if (process.client) {
    return [createPersistedState()]
  } else {
    return []
  }
}

export const plugins = salut() */
