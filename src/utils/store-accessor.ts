import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import TaskStore from '~/store/task'

// eslint-disable-next-line import/no-mutable-exports
let taskStore: TaskStore

function initialiseStores(store: Store<any>): void {
  taskStore = getModule(TaskStore, store)
}

export { initialiseStores, taskStore }
