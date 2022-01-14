export const state = () => ({
  tasks: [],
  completedTasks: []
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks]
  },
  TOGGLE_TASK(state, task) {
    state.completedTasks.push(state.tasks[state.tasks.indexOf(task)])
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  DELETE_TASK(state, DoneTask) {
    state.completedTasks.splice(state.completedTasks.indexOf(DoneTask), 1)
  }
}
