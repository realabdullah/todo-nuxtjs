<template>
  <li class="completed-animation">
    <p>{{ DoneTask.content }}</p>
<!--    <img @click="deleteTask(index)" src="../assets/complete.png" alt="uncomplete">-->
  </li>
</template>

<script>
export default {
  props: ['DoneTask']
}
</script>

<style>

</style>
