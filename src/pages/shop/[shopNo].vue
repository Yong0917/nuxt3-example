<script setup lang="ts">
import UnstructuredShop from "~/components/display/shop/unstructured-shop.vue";

const { params } = useRoute()
const shopNo = params.shopNo as string

</script>

<template>
  <unstructured-shop :shopNo="shopNo" />
</template>

<style scoped>

</style>