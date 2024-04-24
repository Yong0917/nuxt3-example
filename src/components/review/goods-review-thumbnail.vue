<script setup lang="ts">
import GoodsReviewThumbnailModal from "~/components/review/goods-review-thumbnail-modal.vue";
import GoodsReviewDetailModal from "~/components/review/goods-review-detail-modal.vue";

const { reviewThumbnail } = defineProps({
  reviewThumbnail: {
    type: Object,
    required: true
  }
})

const isOpenThumbnailPopup = ref(false)
const isOpenReviewDetail = ref(false)
const { reviewIndex, setReviewIndex } = useReviewIndexStore()
const { getDetailPopupCount, getThumbnailPopupCount, setThumbnailPopupCount, setDetailPopupCount } = useReviewThumbnailStore()
const mapLength = 4

const reviewThumbnailList = computed(() => {
  return reviewThumbnail?.slice(0, mapLength)
})

const showReviewDetailModal = (revNo: string, index: number) => {
  setReviewIndex(index)
  isOpenReviewDetail.value = true
  setThumbnailPopupCount(getThumbnailPopupCount + 1)
}

const handleReviewDetailCancel = () => {
  isOpenReviewDetail.value = false
  setDetailPopupCount(getDetailPopupCount - 1)
}

const showModal = () => {
  isOpenThumbnailPopup.value = true
  setThumbnailPopupCount(getThumbnailPopupCount + 1)
}

const handleThumbnailCancel = () => {
  isOpenThumbnailPopup.value = false
  setThumbnailPopupCount(getThumbnailPopupCount - 1)
}

// Composable API
provide('handleCancelThumbnail', handleThumbnailCancel)

</script>

<template>
  <GoodsReviewThumbnailModal
      :reviewThumbnail="reviewThumbnail"
      :isOpenThumbnailPopup="isOpenThumbnailPopup"
  ></GoodsReviewThumbnailModal>
<!--  @handleThumbnailCancel="handleThumbnailCancel"-->
  <goods-review-detail-modal
      v-if="isOpenReviewDetail"
      :reviewThumbnail="reviewThumbnail"
      :isOpenReviewDetail="isOpenReviewDetail"
      @handleDetailCancel="handleReviewDetailCancel"
  />

  <template v-if="(reviewThumbnail && reviewThumbnail.length > 0) && (reviewThumbnail.length > mapLength)">
    <button @click="showModal">
      더보기
    </button>
  </template>

  <section>
    <span v-for="(item, index) in reviewThumbnailList">
      <button
          type="button"
          :key="index"
          @click="showReviewDetailModal(item.revNo, Number(index))">
        <nuxt-img v-if="item.revGbCd !== '30'" :src="`https://img-stg.x2bee.com${item.contFilePathNm}`" alt="/test" height="130"/>
        <video v-else :src="`https://img-stg.x2bee.com${item.contFilePathNm}`" height="130"></video>
      </button>
    </span>
  </section>

</template>

<style scoped>

</style>