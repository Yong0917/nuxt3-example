<script setup lang="ts">
import {ShopApi} from "~/api/display-shop";
import DynamicTemplate from "~/components/display/dynamic/DynamicTemplate.vue";
import EmptyTemplate from "~/components/display/template/EmptyTemplate.vue";

const { shopNo } = defineProps({
  shopNo: {
    type: String,
    require: true
  }
})

const { shopInfo, template, conrList } = await ShopApi({ shopNo })

const hasTemplate = computed(() => {
  return template && template.tmplFileNm
})

</script>

<template>
  <EmptyTemplate v-if="!hasTemplate"/>
  <DynamicTemplate v-else
      :template="template"
      :conrList="conrList"
      :inflowInfo="{ infDispCtgNoGb: 'display', infDispCtgNo: shopInfo?.shopNo }"
  />

</template>

<style scoped>

</style>