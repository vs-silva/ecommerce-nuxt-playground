<template>
  <div>
    <p>{{products}}</p>
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
