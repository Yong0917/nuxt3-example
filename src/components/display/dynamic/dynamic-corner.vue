<script setup lang="ts">

import type {CornerProps} from "~/types/shop-data-model";
import Loading from "~/components/Loading.vue";
import EmptyTemplate from "~/components/display/template/EmptyTemplate.vue";
import {camelCase, kebabCase, pascalCase} from "scule";

const {data, inflowInfo} = defineProps<CornerProps>()
console.log('kebabcase : ' + kebabCase(data.vueCmptId))
console.log('camelCase : ' + camelCase(data.vueCmptId))
console.log('pascalCase : ' + pascalCase(data.vueCmptId))
const hasVueCmptId = computed(() => {
  return data.vueCmptId.length < 1
})

const Corner = computed(() => {
  return defineAsyncComponent({
    loader: () => import((`~/components/display/corner/${pascalCase(data.vueCmptId)}.vue`)).catch(
        () => {
          return null
        }
    ),
    loadingComponent: Loading,  // 컴포넌트가 로드되는 동한 사용될 로딩 컴포넌트
    delay: 200, // 로딩 컴포넌트 표시하기 전 지연시간 : 기본값 200ms
    errorComponent: EmptyTemplate, // 로드 실패 시 에러 컴포넌트
    timeout: 3000, // 시간 초과 : 기본값 무한대
  })
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