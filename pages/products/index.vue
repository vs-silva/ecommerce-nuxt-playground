<template>
  <div>
    <div  v-if="products" class="grid grid-cols-4 gap-5">
      <div v-for="(product, index) in products" :key="index">
        <ProductCard :product="product"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Stores from "~/stores";
  import {storeToRefs} from "pinia";
  import ProductCard from "~/components/product-card.vue";

  definePageMeta({
    layout: 'layout-products'
  });

  useHead({
    title: 'Ecommerce Nuxt3 Playground Merchandise'
  });

  const productStore = Stores.useProductStore();
  const { products } = storeToRefs(productStore);
  await productStore.getProducts();

</script>

<style scoped>

</style>
