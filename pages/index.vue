<template>
  <div class="doit">
    <div class="header">
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
<!--        <div class="completed-tasks">-->
<!--          <div class="uncompleted-header">-->
<!--            <p>Fresh Tasks</p>-->
<!--          </div>-->
<!--          <div class="search search-animation">-->
<!--            <input type="text" placeholder="Search tasks here...">-->
<!--            <img src="../assets/search.png" alt="search">-->
<!--          </div>-->
<!--          <ul id="tasks" class="tasks">-->
<!--            <li class="element-animation" v-for="(todo, index) in todos" :key="todo.id">-->
<!--              <p>{{ todo.content }}</p>-->
<!--              <img @click="taskCompleted(index)" src="../assets/uncomplete.png" alt="uncomplete">-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->

<!--        <div class="completed-tasks">-->
<!--          <div class="completed-header">-->
<!--            <p>Completed Tasks</p>-->
<!--          </div>-->
<!--          <ul id="tasks" class="tasks">-->
<!--            <li class="completed-animation" v-for="(completedTodo, index) in completedTodos" :key="completedTodo.id">-->
<!--              <p>{{ completedTodo.content }}</p>-->
<!--              <img @click="deleteTask(index)" src="../assets/complete.png" alt="uncomplete">-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
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
