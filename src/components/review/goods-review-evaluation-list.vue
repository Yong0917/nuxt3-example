<script setup lang="ts">
const { topRankEvaluationList } = defineProps({
  topRankEvaluationList: {
    type: Object
  }
})

const showDetail = ref(false);


</script>

<template>
  <div>
    <q-btn @click="showDetail = !showDetail">
      평가항목 전체보기
    </q-btn>
  </div>

  <template v-for="(item, index) in topRankEvaluationList" :key="index">
    <div>
      <review-goods-review-avg-evaluation :top-rank-evaluation-list="item" :show-detail="showDetail" />
    </div>
  </template>

</template>

<style scoped>

</style>