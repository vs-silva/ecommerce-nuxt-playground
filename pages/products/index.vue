<template>
  <div>
    <div  v-if="products" class="grid grid-cols-4 gap-5">
      <div v-for="(product, index) in products" :key="index">
        <NuxtLink :to="`/products/${product.id}`">{{product.title}}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Stores from "~/stores";
  import {storeToRefs} from "pinia";

  definePageMeta({
    layout: 'layout-products'
  });

  const productStore = Stores.useProductStore();
  const { products } = storeToRefs(productStore);
  await productStore.getProducts();


</script>

<style scoped>

</style>
