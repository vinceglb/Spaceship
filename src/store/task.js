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
    const generateId = ID()
    state.tasks.push({
      id: generateId,
      done: false,

      titre: data.titre,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      priorite: data.priorite
    })
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
  getAllTasks: (state) => {
    return state.tasks
  },

  getTaskById: (state) => (id) => {
    console.log('getTaskById ok')
    return state.tasks.find((task) => task.id === id)
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

const ID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random()
    .toString(36)
    .substr(2, 9)
}
