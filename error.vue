<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7lx font-bold">{{error.statusCode}}</p>
    <p class="mt-7 text-6lx">Ooops...</p>
    <p class="mt-7 text-6lx">{{error.message}}</p>
    <button class="btn my-7" @click="clearErrorHandler">Go home...</button>
  </div>
</template>

<script setup lang="ts">
import {clearError} from "#app";

defineProps({
  error: {
    type: Object,
    required: false,
    default: () => {}
  }
});

function clearErrorHandler(): Promise<void> {
  return clearError({redirect: '/'});
}

</script>

<style scoped>

</style>
