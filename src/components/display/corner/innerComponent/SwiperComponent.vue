<script setup lang="ts">
import type {SetInfo} from "~/types/shop-data-model";
import {getSwiperModelBySetInfo} from "~/lib/display/utils/shop-swiper-corner-utils";
import {SwipeComponent, SwiperType} from "~/types/swiper-data";

interface Props {
  setInfo: SetInfo
  index: number
}

const { setInfo, index } = defineProps<Props>()

const swipeContent: any = getSwiperModelBySetInfo(setInfo)
const validModel = SwiperType[setInfo.swipeTyp || '']

const validSetInfo = computed(() => {
  return setInfo.swipeTyp && (setInfo.contentInfoList || []).length >= 1
})

const validContent = computed(() => {
  return Object.keys(validModel).every(
      (key) => (swipeContent[key] || []).length >= validModel[key]
  )
})

const SwiperComponent = computed(() => {
  return SwipeComponent[swipeContent.swipeTyp]
})


</script>

<template>
  <div>mainBanner</div>
  <SwiperComponent v-if="validSetInfo && validContent" :swipeContent="swipeContent" />
</template>

<style scoped>

</style>