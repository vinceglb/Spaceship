import Task from '~/model/Task'
import VuexPersistence from 'vuex-persist'

function initialState() {
  return {
    tasks: []
  }
}

export const state = initialState

export const mutations = {
  /**
   * @param {{ tasks: { titre: string; description: string; startDate: Date; endDate: Date; priorite: any; }[]; }} state
   * @param {{ titre: string; description: string; startDate: Date; endDate: Date; priorite: any; }} data
   */
  createTask(state, data) {
    const task = new Task(
      data.titre,
      data.description,
      data.startDate,
      data.endDate,
      data.priorite,
      data.myDay
    )
    state.tasks.push(task)
  },

  setDoneInverse(state, id) {
    const task = state.tasks.find((task) => task.id === id)
    task.done = !task.done
  },

  setTitre(state, { id, titre }) {
    const task = state.tasks.find((task) => task.id === id)
    task.titre = titre
  }
}

export const getters = {
  /**
   * @returns {Task}
   */
  getAllTasks: (state) => {
    return state.tasks
  },

  getTaskById: (state) => (id) => {
    return state.tasks.find((task) => task.id === id)
  },

  getMyDayTasks: (state) => {
    return state.tasks.filter((task) => task.myDay === true)
  },

  /* getTasksForToday: (state) => {
    const now = getNow()

    return state.tasks.filter((task) => {
      if (task.startDate == null && task.endDate != null) {
        const end = new Date(task.endDate)
        return now <= end
      } else if (task.startDate != null && task.endDate == null) {
        const start = new Date(task.startDate)
        return now >= start
      } else if (task.startDate != null && task.endDate != null) {
        const start = new Date(task.startDate)
        const end = new Date(task.endDate)
        return now >= start && now <= end
      } else {
        return false
      }
    })
  }, */

  getOverdueTasks: (state) => {
    return state.tasks.filter((task) => task.isOverdue() === true)
  },

  getTasksForToday: (state) => {
    return state.tasks.filter((task) => task.isEndDateToday() === true)
  }
}

export const actions = {
  /* boby({ getters, commit }, { id, isDone }) {
    console.log('boby ok', isDone)
    const task = getters.getTaskById(id)
    commit('setDone', { task, isDone })
  } */
}

function salut() {
  if (process.client) {
    return new VuexPersistence().plugin
  } else {
    return []
  }
}

export const plugins = salut()
