<script setup lang="ts">

import GoodsReviewDetailModal from "~/components/review/goods-review-detail-modal.vue";

const { reviewThumbnail } = defineProps({
  reviewThumbnail: {
    type: Object,
    required: true
  }
})

const isOpenReviewDetail = ref(false)
const { reviewIndex, setReviewIndex } = useReviewIndexStore()
const { getDetailPopupCount, setDetailPopupCount } = useReviewThumbnailStore()

const handleThumbnailCancel = <(() => void)>inject('handleCancelThumbnail')

const showReviewDetailModal = (revNo: string, index: number) => {
  if (getDetailPopupCount < 1) {
    setDetailPopupCount(getDetailPopupCount + 1)
    setReviewIndex(index)
    isOpenReviewDetail.value = true
  } else {
    handleThumbnailCancel()
    setReviewIndex(index)
  }
}

// 상품 리뷰 상세 모달
const handleCancel = () => {
  isOpenReviewDetail.value = false
  setDetailPopupCount(getDetailPopupCount - 1)
}

const emits = defineEmits(['handleThumbnailCancel'])
</script>

<template>
  <GoodsReviewDetailModal
      v-if="isOpenReviewDetail"
      :reviewThumbnail="reviewThumbnail"
      :isOpenReviewDetail="isOpenReviewDetail"
      @handleDetailCancel="handleCancel"
  />

  <div>
    <span v-for="(item, index) in reviewThumbnail">
      <button type="button" @click="showReviewDetailModal(item.revNo, Number(index))" :key="index">
        <nuxt-img v-if="item.revGbCd !== '30'" :src="`https://img-stg.x2bee.com${item.contFilePathNm}`" alt="/test" height="100"/>
        <video v-else :src="`https://img-stg.x2bee.com${item.contFilePathNm}`" height="100"></video>
      </button>
    </span>
  </div>

</template>

<style scoped>

</style>