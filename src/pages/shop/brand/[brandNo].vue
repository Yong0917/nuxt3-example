<script setup lang="ts">
import {BrandShopApi} from "~/api/display-shop";
import DynamicTemplate from "~/components/display/dynamic/dynamic-template.vue";

const { params } = useRoute()
const brandNo = params.brandNo as string
const { template, conrList, brandInfo } = await BrandShopApi({brandNo})

</script>

<template>
  <DynamicTemplate
      :template="template"
      :conrList="conrList"
      :brandInfo="brandInfo"
      :inflowInfo="{ infDispCtgNoGb: 'display', infDispCtgNo: brandInfo?.brandNo}"
  />

</template>

<style scoped>

</style>