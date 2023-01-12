<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/products">Ecommerce Nuxt3 Playground Merchandise</NuxtLink>
      </nav>
    </header>

    <!-- out the page content -->
    <div>
      <slot />
    </div>

    <footer>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
