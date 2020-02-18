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
    state.tasks.push({
      titre: data.titre,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      priorite: data.priorite
    })
  }
}

export const getters = {
  getAllTasks: (state) => {
    return state.tasks
  }
}
