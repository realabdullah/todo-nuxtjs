export const state = () => ({
  tasks: [],
  completedTasks: []
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks]
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  TOGGLE_TASK(state, task) {
    // task.done = !task.done
    state.completedTasks.push(state.tasks[state.tasks.indexOf(task)])
    state.tasks.splice(state.tasks.indexOf(task), 1)
    // state.completedTasks = state.tasks.slice(task)
    console.log(this.state.completedTasks)
  }
}
