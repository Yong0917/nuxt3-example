<script setup lang="ts">
const { reviewThumbnail, revNo } = defineProps({
  reviewThumbnail: {
    type: Object,
    required: true
  },
  revNo:{
    type: String,
    required: true
  }
})

const reviewInfo = computed(() => {
  return reviewThumbnail.filter((item : any) => item.revNo === revNo)[0]
})

</script>

<template>
  <nuxt-img v-if="reviewInfo.revGbCd !== '30'" :src="`https://img-stg.x2bee.com${reviewInfo.contFilePathNm}`" alt="/test" height="200"/>
  <video v-else :src="`https://img-stg.x2bee.com${reviewInfo.contFilePathNm}`" height="200"></video>
</template>

<style scoped>

</style>