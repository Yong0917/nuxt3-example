<script setup lang="ts">
import type {ShopProps} from "~/types/shop-data-model";
import EmptyTemplate from "~/components/display/template/EmptyTemplate.vue";
import Loading from "~/components/Loading.vue";
import {camelCase, kebabCase, pascalCase} from "scule";
import CategoryDefaultTemplate from "~/components/display/template/CategoryDefaultTemplate.vue";

const {inflowInfo, template, conrList, brandInfo, categoryInfo} = defineProps<ShopProps>()

const tmplFileNm = template?.tmplFileNm || ''

// category 쪽에서 넘어오는 template?.tmplFileNm 이 CategoryDefaultTemplate로 넘어옴
console.log(tmplFileNm)
// const Template = computed(() => {
//   return defineAsyncComponent({
//     loader: () => import((`~/components/display/template/${pascalCase(tmplFileNm)}.vue`)),
//     loadingComponent: Loading,  // 컴포넌트가 로드되는 동한 사용될 로딩 컴포넌트
//     delay: 200, // 로딩 컴포넌트 표시하기 전 지연시간 : 기본값 200ms
//     errorComponent: EmptyTemplate, // 로드 실패 시 에러 컴포넌트
//     timeout: 3000, // 시간 초과 : 기본값 무한대
//   })
// })

const Template = defineAsyncComponent({
    loader: () => import((`~/components/display/template/${pascalCase(tmplFileNm)}.vue`)).catch(
        () => {
          if(categoryInfo?.dispCtgNo){
            return CategoryDefaultTemplate
            // return import((`~/components/display/template/CategoryDefaultTemplate.vue`))
          }
          return EmptyTemplate
        }
    )
    // loadingComponent: Loading  // 컴포넌트가 로드되는 동한 사용될 로딩 컴포넌트
    // delay: 200, // 로딩 컴포넌트 표시하기 전 지연시간 : 기본값 200ms
    // errorComponent: EmptyTemplate, // 로드 실패 시 에러 컴포넌트
    // timeout: 3000, // 시간 초과 : 기본값 무한대
  })

const hasTmplFileNm = computed(() => {
  return tmplFileNm.length < 1 || !tmplFileNm
})

// const Template = computed(() => {
//   return defineAsyncComponent(() => {
//     return import((`~/components/display/template/${tmplFileNm}.vue`))
//   })
// })


</script>

<template>
  <empty-template v-if="hasTmplFileNm"/>
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