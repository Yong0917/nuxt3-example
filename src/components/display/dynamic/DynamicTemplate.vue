<script setup lang="ts">
import type {ShopProps} from "~/types/shop-data-model";
import EmptyTemplate from "~/components/display/template/EmptyTemplate.vue";
import {pascalCase} from "scule";
import CategoryDefaultTemplate from "~/components/display/template/CategoryDefaultTemplate.vue";

const {inflowInfo, template, conrList, brandInfo, categoryInfo} = defineProps<ShopProps>()

const tmplFileNm = template?.tmplFileNm || ''

const Template = defineAsyncComponent({
    loader: () => import((`~/components/display/template/${pascalCase(tmplFileNm)}.vue`)).catch(
        () => {
          if(categoryInfo?.dispCtgNo){
            return CategoryDefaultTemplate
          }
          return EmptyTemplate
        }
    ),
})

const hasTmplFileNm = computed(() => {
  return tmplFileNm.length >= 1 && tmplFileNm
})


</script>

<template>
  <EmptyTemplate v-if="!hasTmplFileNm"/>
  <Template v-else
             :key="tmplFileNm"
             :inflowInfo="inflowInfo"
             :conrList="conrList"
             :template="template"
             :brandInfo="brandInfo"
             :categoryInfo="categoryInfo"
  />
</template>

<style scoped>

</style>