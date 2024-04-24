<script setup lang="ts">
import PopupAllReviewThumbnail from "~/components/review/popup/popup-all-review-thumbnail.vue";

const { reviewThumbnail, isOpenThumbnailPopup } = defineProps({
  reviewThumbnail: {
    type: Object,
    required: true
  },
  isOpenThumbnailPopup: {
    type: Boolean,
    required: true,
    default: false
  },
})

const handleThumbnailCancel = <(() => void)>inject('handleCancelThumbnail')

const emits = defineEmits(['handleThumbnailCancel'])
</script>

<template>
  <div class="modal-wrap" v-show="isOpenThumbnailPopup">
    <div class="modal-container">
      <header>사진&동영상 모음 ( {{ reviewThumbnail.length}} )</header>
      <popup-all-review-thumbnail
          :reviewThumbnail="reviewThumbnail"
          @handleThumbnailCancel="handleThumbnailCancel"
      />
      <div class="modal-btn">
        <button @click="handleThumbnailCancel">닫기</button>
        <button @click="handleThumbnailCancel">확인</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
/* modal or popup */
.modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}

</style>