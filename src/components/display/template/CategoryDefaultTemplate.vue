<script setup lang="ts">
import type {ShopProps} from "~/types/shop-data-model";

const {categoryInfo} = defineProps<ShopProps>()

const dispCtgNo = categoryInfo?.dispCtgNo

</script>

<template>
  <div>
    CategoryDefaultTemplate
    {{categoryInfo}}
  </div>

</template>

<style scoped>

</style>