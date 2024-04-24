<script setup lang="ts">
import {getReviewList, getReviewThumbnail} from "~/api/goodsReview";

const { goodsNo, isPackageDetail } = defineProps({
  goodsNo: {
    type: String,
    required: true
  },
  isPackageDetail: {
    type: Boolean,
    default: () => {
      return false
    }
  }
})

const sortTypeCd = 'latest'
// const reviewListData = useState('initReviewListData', () => {})
// const reviewThumbnail = useState('initReviewThumbnail', () => {})

const { reviewList } = (await getReviewList({
  goodsNo,
  pageNo: 1,
  pageSize: 5,
  typeCountYn: 'Y',
  sortTypeCd,
  revGbCdList: ''
}));

const reviewThumbnail = await getReviewThumbnail(goodsNo)

</script>

<template v-if="reviewList">
  {{reviewList.goods.goodsNo}}
  <review-goods-review-top :goods-no="goodsNo"/>
  <review-goods-review-thumbnail v-if="reviewThumbnail && reviewThumbnail?.length > 0" :reviewThumbnail="reviewThumbnail" />
</template>

<style scoped>

</style>