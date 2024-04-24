<script setup lang="ts">
import PopupReviewDetail from "~/components/review/popup/popup-review-detail.vue";

const { reviewThumbnail, isOpenReviewDetail } = defineProps({
  reviewThumbnail: {
    type: Object,
    required: true
  },
  isOpenReviewDetail: {
    type: Boolean,
    required: true,
    default: false
  },
  revNo:{
    type: String,
    required: false
  }
})
// const loading = ref(true);
//
// const nuxtApp = useNuxtApp();
// onMounted(() => {
//   loading.value = false
// });

const { getReviewIndex } = useReviewIndexStore()
const revNo = reviewThumbnail?.[getReviewIndex]?.revNo
const emits = defineEmits(['handleDetailCancel'])
</script>

<template>
  <div class="modal-wrap" v-show="isOpenReviewDetail">
    <div class="modal-container">
      <header>사진&동영상 ({{ getReviewIndex + 1}}/{{reviewThumbnail?.length}})</header>
      <popup-review-detail
          :revNo="revNo"
          :reviewThumbnail="reviewThumbnail"
          @handleDetailCancel="() => emits('handleDetailCancel')"
      />
      <div class="modal-btn">
        <button @click="() => emits('handleDetailCancel')">닫기</button>
        <button @click="() => emits('handleDetailCancel')">확인</button>
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