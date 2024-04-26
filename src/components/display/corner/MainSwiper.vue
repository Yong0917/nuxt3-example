<script setup lang="ts">
import type {CornerProps, SetInfo} from "~/types/shop-data-model";
import {IsEmptyArrayCheck} from "~/utils/common";
import CornerSection from "~/components/fo/main/CornerSection.vue";
import SwiperComponent from "~/components/display/corner/innerComponent/SwiperComponent.vue";

const {data} = defineProps<CornerProps>()

const isEmptyArray = computed(() => {
  return IsEmptyArrayCheck(data.setList)
})

// const bannerType = 'full'

// if (IsEmptyArrayCheck(data.setList)) {
//   return null
// }

// const SwiperComponent = (swipeTyp : string) => {
//   return SwipeComponent[swipeTyp]
// }
// const SwiperComponent = SwipeComponent[swipeContent.swipeTyp]


</script>

<template>
  <CornerSection size="full">
    <template v-for="(setInfo, index) in data.setList">
      <SwiperComponent :setInfo="setInfo" :index="index" />
    </template>

  </CornerSection>
</template>

<style scoped>

</style>