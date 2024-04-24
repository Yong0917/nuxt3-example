<script setup lang="ts">
const {topRankEvaluationList, showDetail } = defineProps({
  topRankEvaluationList: {
    type: Object,
    required: true
  },
  showDetail: {
    type: Boolean,
    required: true
  }
})

</script>

<template>
  <div v-for="(item, index) in topRankEvaluationList.evaluations" :key="index">
    <div v-if="item.repValueYn === 'Y' || showDetail">
      {{item.evltItemNm}}
      {{item.evltVal}}
      {{item.evltValPrcnt}}
      <div class="q-pa-md">
        <q-linear-progress size="25px" :value="item.evltValPrcnt / 100" color="accent">
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="item.evltValPrcnt" />
        </div>
        </q-linear-progress>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>