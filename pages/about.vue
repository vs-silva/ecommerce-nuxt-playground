<template>
  <div>
    <p>{{about}}</p>
  </div>
</template>

<script setup lang="ts">
import Stores from "~/stores";
import {storeToRefs} from "pinia";

const aboutStore = Stores.useAboutStore();
const { about } = storeToRefs(aboutStore);
await aboutStore.getAboutInfo();

</script>

<style scoped>

</style>
