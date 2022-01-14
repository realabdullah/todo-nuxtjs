<template>
  <li class="completed-animation">
    <p>{{ DoneTask.content }}</p>
    <img @click="deleteTask"
         src="https://raw.githubusercontent.com/realabdullah/todo-raw-vuefolder/main/assets/complete.png"
         alt="complete">
  </li>
</template>

<script>
export default {
  props: ['DoneTask'],
  methods: {
    deleteTask() {
      this.$store.commit('DELETE_TASK', this.DoneTask)
    }
  }
}
</script>

<style>

</style>
