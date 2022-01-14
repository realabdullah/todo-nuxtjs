<template>
  <li>
    <p>{{ task.content }}</p>
    <img
      @click="toggleDone"
       src="https://raw.githubusercontent.com/realabdullah/todo-raw-vuefolder/main/assets/uncomplete.png"
       alt="uncompleted" />
  </li>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    toggleDone() {
      this.$store.commit('TOGGLE_TASK', this.task)
    },
  }
}
</script>

<style>

</style>
