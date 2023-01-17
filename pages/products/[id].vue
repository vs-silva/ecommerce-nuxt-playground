<template>
  <div>
    <p>{{product.id}}</p>
    <p>{{product.image}}</p>
    <p>{{product.title}}</p>
    <p>{{product.description}}</p>
    <p>{{product.price}}</p>
    <p>{{product.category}}</p>
  </div>
</template>

<script setup lang="ts">
  import Stores from "~/stores";
  import {storeToRefs} from "pinia";

  definePageMeta({
    layout: 'layout-products'
  });

  const { id } = useRoute().params;
  const productStore = Stores.useProductStore();
  const { product } = storeToRefs(productStore);
  await productStore.getProductDetails(parseInt(id.toString()));


</script>

<style scoped>

</style>
