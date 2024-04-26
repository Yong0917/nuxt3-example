<script setup lang="ts">
import type {CornerProps} from "~/types/shop-data-model";
import {getCornerContent} from "~/composables/display/ShopCornerUtils";
import CornerSection from "~/components/fo/main/CornerSection.vue";
import SectionTitle from "~/components/ui/section-title.vue";

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
  <CornerSection>
<!--    <template>-->
      <SectionTitle v-if="data.mappTtl" className="font-bold">
        {{data.mappTtl}}
      </SectionTitle>
<!--      <div class="main-brand-slide default-type">-->
<!--        <template v-for="(item, index) in imageList" :key="`main_brand_banner_${index}`">-->
<!--          <nuxt-img :src="`https://img-stg.x2bee.com/${item.contPathNm}`" width="384"></nuxt-img>-->
<!--        </template>-->
<!--      </div>-->
<!--    </template>-->
  </CornerSection>
</template>

<style scoped>

</style>