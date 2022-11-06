<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
console.log(count);
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>hello</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
