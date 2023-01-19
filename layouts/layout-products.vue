<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/products" class="font-bold">Ecommerce Nuxt3 Playground Merchandise</NuxtLink>
      </nav>
    </header>

    <!-- out the page content -->
    <div  class="container mx-auto p-4">
      <loader />
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <nav>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">

import Loader from "~/components/loader.vue";
</script>

<style scoped>

</style>
