<script setup lang="ts">
import type {CornerProps} from "~/types/shop-data-model";
import {getCornerContent} from "~/composables/display/ShopCornerUtils";

const {data} = defineProps<CornerProps>()
const contentList = getCornerContent({
  setList: data.setList,
  props: {
    image: {
      isRequired: true,
      minCnt: 3,
      maxCnt: 20
    }
  }
})

const imageList = computed(() => {
  return contentList?.at(0)?.imageList ?? []
})


</script>

<template>
  <div>
    ImageBanner11
  </div>
  <template v-for="(item, index) in imageList" :key="index">
    <span>{{item.contPathNm}}</span>
  </template>
</template>

<style scoped>

</style>