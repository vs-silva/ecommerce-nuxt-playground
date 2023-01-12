<template>
  <div>
    <p>The details page is here with the id: {{ id }}</p>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'layout-products'
  });

  const { id } = useRoute().params;


</script>

<style scoped>

</style>
