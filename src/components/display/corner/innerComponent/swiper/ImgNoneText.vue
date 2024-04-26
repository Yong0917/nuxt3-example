<script setup lang="ts">
import type {SwiperModelProps} from "~/types/swiper-data";
import {cn} from "~/lib/common/ui/utils";
import { fullStyles } from '~/lib/common/ui/banner-variables'

const { swipeContent, priority = false, className = '' } = defineProps<SwiperModelProps>()

const image = swipeContent.image?.at(0) ?? {}

</script>

<template>
  <div>IMGNONETEXT</div>
  <Link
      :href="image.linkUrlAddr ?? ''"
      :class="cn(
          fullStyles.linkBox,className
          )">
    <nuxt-img src=""/>
  </Link>

</template>

<style scoped>

</style>