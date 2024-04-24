<script setup lang="ts">
import type {CornerProps} from "~/types/shop-data-model";
import {getCornerContent} from "~/composables/display/ShopCornerUtils";

const {data} = defineProps<CornerProps>()

console.log('data.setList : ' + JSON.stringify(data.setList))

const contentList = getCornerContent({
  setList: data.setList,
  props: {
    plan: {
      isRequired: true
    }
  }
})

const planList = computed(() => {
  return contentList?.at(0)?.planShopList ?? []
})

</script>

<template>
  <div>planshop01</div>
<!--  <template v-if="planList?.length < 1" />-->
  <template v-if="planList?.length >= 1" v-for="(plan, index) in planList" :key="index">
    <span>{{plan.mkdpNm}}</span>
  </template>
</template>

<style scoped>

</style>