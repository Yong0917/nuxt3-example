<script setup lang="ts">
import type {ShopProps} from "~/types/shop-data-model";
import CornerList from "~/components/display/corner/CornerList.vue";

const { inflowInfo, conrList } = defineProps<ShopProps>()

</script>

<template>
  <CornerList :conrList="conrList" :inflowInfo="inflowInfo" />
</template>

<style scoped>

</style>