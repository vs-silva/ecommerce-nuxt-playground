<template>
<div>
  <header>
    <nav>
      <NuxtLink to="/">Ecommerce Nuxt3 Playground</NuxtLink>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <!-- out the page content -->
  <div>
    <slot />
  </div>

</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
 .router-link-exact-active {
   color: #12b488;
 }
</style>
