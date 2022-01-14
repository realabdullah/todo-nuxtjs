<template>
  <div class="doit">
    <div class="header">
      <img
        src="https://raw.githubusercontent.com/realabdullah/todo-raw-vuefolder/main/assets/todo.png"
        alt="check" />
      <h2>CHECK-IT</h2>
    </div>

    <div class="todo-body">
      <form @submit.prevent="addTask">
        <div class="addtask-header">
          <p>Add A New Task!</p>
        </div>

        <input
          v-model="newTask"
          class="task-input"
          type="text"
          placeholder="Add Task" />

        <button class="add">
          Add New Task
        </button>
      </form>
      <div class="taskss">
        <div class="completed-tasks">
          <div class="uncompleted-header">
            <p>Fresh Tasks</p>
          </div>
          <ul id="tasks" class="tasks">
            <Task
              v-for="(task, i) in $store.state.tasks"
              :key="i"
              :task="task"/>
          </ul>
        </div>

        <div class="completed-tasks">
          <div class="completed-header">
            <p>Completed Tasks</p>
          </div>
          <ul id="tasks" class="tasks">
            <Complete
              v-for="(DoneTask, i) in $store.state.completedTasks"
              :key="i"
              :DoneTask="DoneTask"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask)
        this.newTask = ''
      }
    }
  }
}
</script>
