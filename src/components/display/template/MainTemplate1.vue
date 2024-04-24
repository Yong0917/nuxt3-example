<script setup lang="ts">

import type {ShopProps} from "~/types/shop-data-model";
import CornerList from "~/components/display/corner/corner-list.vue";

const { inflowInfo, conrList } = defineProps<ShopProps>()
</script>

<template>
  <div>
    {{inflowInfo}}
  </div>
  <corner-list :conrList="conrList" :inflowInfo="inflowInfo" />
</template>

<style scoped>

</style>