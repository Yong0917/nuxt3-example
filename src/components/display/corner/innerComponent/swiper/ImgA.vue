<script setup lang="ts">
import type {SwiperModelProps} from "~/types/swiper-data";
import {cn} from "~/lib/common/ui/utils";
import { fullStyles } from '~/lib/common/ui/banner-variables'
import Loading from "~/components/Loading.vue";

const { swipeContent, priority = false } = defineProps<SwiperModelProps>()

const image = swipeContent.image?.at(0) ?? {}
const title = swipeContent.text?.at(0)?.contTitleNm
const subTitle = swipeContent.text?.at(1)?.contTitleNm
console.log(swipeContent)

</script>

<template>
  <div>IMGA</div>
  <Link
      :href="image.linkUrlAddr ?? ''"
      :class="cn(
          fullStyles.linkBox,
          'mo:h-0 mo:pb-[calc((250/375)*100%)] pc:h-[372px]'
          )">
    <nuxt-img src=""/>
    <div :class="`${fullStyles.textBox} text-white`">
      <div v-if="title" :class="fullStyles.title">{title}</div>
      <div v-if="subTitle" :class="fullStyles.description">{subTitle}</div>
    </div>
  </Link>

</template>

<style scoped>

</style>