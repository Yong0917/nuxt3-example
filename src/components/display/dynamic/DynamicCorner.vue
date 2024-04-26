<script setup lang="ts">

import type {CornerProps} from "~/types/shop-data-model";
import {pascalCase} from "scule";

const {data, inflowInfo} = defineProps<CornerProps>()

const Corner = defineAsyncComponent({
    loader: () => import((`~/components/display/corner/${pascalCase(data.vueCmptId)}.vue`)).catch(
        () => {
          return null
        }
    )
})

const hasVueCmptId = computed(() => {
  return data.vueCmptId.length < 1
})

</script>

<template>
  <Corner v-if="!hasVueCmptId"
             :key="`corner_${data.vueCmptId}`"
             :data="data"
             :inflowInfo="inflowInfo"
  />

</template>

<style scoped>
</style>

