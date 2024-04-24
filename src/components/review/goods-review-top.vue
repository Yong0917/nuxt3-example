<script setup lang="ts">
import {getReviewSummary} from "~/api/goodsReview";

const { goodsNo } = defineProps({
  goodsNo: {
    type: String,
    required: true
  }
})

const { goodsReviewSummary } = await getReviewSummary(goodsNo);

const isNotEmptyArray = (array: any) => {
  return Array.isArray(array) && array.length > 0;
}

const reviewComponent = resolveComponent('review-goods-review-evaluation-list')

</script>

<template>
  <div>
    <review-goods-review-avg-score
        :avgScr="(goodsReviewSummary && goodsReviewSummary.avgScr) || 0"
    />
<!--    <review-goods-review-evaluation-list v-if="isNotEmptyArray(goodsReviewSummary && goodsReviewSummary.topRankEvaluationList)"-->
<!--                                         :top-rank-evaluation-list="goodsReviewSummary.topRankEvaluationList"/>-->
    <component v-if="isNotEmptyArray(goodsReviewSummary && goodsReviewSummary.topRankEvaluationList)"
               :is="reviewComponent"
               :top-rank-evaluation-list="goodsReviewSummary.topRankEvaluationList"
    />
  </div>
</template>

<style scoped>

</style>