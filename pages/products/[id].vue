<template>
  <div>
    <ProductDetails :product="product"/>
  </div>
</template>

<script setup lang="ts">
  import Stores from "~/stores";
  import {storeToRefs} from "pinia";
  import ProductDetails from "~/components/product-details.vue";

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
