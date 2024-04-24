<script setup lang="ts">
import {CategoryShopApi} from "~/api/display-shop";
import DynamicTemplate from "~/components/display/dynamic/dynamic-template.vue";

const { params } = useRoute()
const { template, conrList, categoryInfo } = await CategoryShopApi(params)
</script>

<template>
  <dynamic-template
      :template="template"
      :conrList="conrList"
      :categoryInfo="categoryInfo"
      :inflowInfo="{ infDispCtgNoGb: 'display', infDispCtgNo: categoryInfo?.dispCtgNo }"
  />

</template>

<style scoped>

</style>