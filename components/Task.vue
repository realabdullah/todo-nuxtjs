<template>
  <li>
    <p>{{ task.content }}</p>
    <img @click="toggleDone" src="../assets/uncomplete.png" alt="uncomplete">
  </li>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    toggleDone() {
      this.$store.commit('TOGGLE_TASK', this.task)
    }
  }
}
</script>

<style>

</style>
