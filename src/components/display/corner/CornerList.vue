<script setup lang="ts">
import type {ShopProps} from "~/types/shop-data-model";
import DynamicCorner from "~/components/display/dynamic/DynamicCorner.vue";

const { conrList = [], inflowInfo} = defineProps<ShopProps>()

const hasConner = computed(() => {
  return conrList.length < 1
})

</script>

<template>
  <template v-if="!hasConner" v-for="(corner, index) in conrList" :key="`dynamic_corner_${corner.vueCmptId}_${index}`">
    <DynamicCorner :data="corner" :inflowInfo="inflowInfo" />
  </template>
</template>

<style scoped>

</style>