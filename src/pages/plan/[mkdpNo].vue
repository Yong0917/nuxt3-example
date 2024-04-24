<script setup lang="ts">

import {DisplayPlanDetailApi} from "~/api/planApi";

const route = useRoute();
const mkdpNo = route.params.mkdpNo as string;
const previewDate = route.query.preveiwDate as string;
const dataLangCd = route.query.dataLangCd as string;

const plan = await DisplayPlanDetailApi({mkdpNo, previewDate, dataLangCd}) || {};

useSeoMeta({
  title: () => plan?.mkdpNm || '',
  description: () => plan?.introCont || '',
});


definePageMeta({
  key: (route) => route.fullPath,
  // title: title.value,
  // title: 'My home page',
  // pageType: '',
  // keepalive: true,
  // alias: ['/plan/:mkdpNo'],
  // layout: 'same-layout',
  // validate: (route) => {
  middleware: async (route) => {
    const mkdpNo = route.params.mkdpNo as string;
    const previewDate = route.params.previewDate as string;
    const dataLangCd = route.params.dataLangCd as string;
    const plan = await DisplayPlanDetailApi({mkdpNo, previewDate, dataLangCd}) || {};
    if (!plan) {
      return abortNavigation(
          createError({
            statusCode: 404,
            statusMessage: '데이터가 존재하지 않습니다.',
            fatal: true,
          }),
      );
    } else if(plan?.resultCd === '7010' || plan?.resultCd === '7020'){
      return abortNavigation(
          createError({
            statusCode: 404,
            statusMessage: '등급이 맞지 않습니다.',
            fatal: true,
          })
      );
    }
  }
});

const clickList = async () => {
  await navigateTo('/plan');
}


</script>

<template>
  <div>
    <q-card>
      <div class="text-h5 text-weight-medium">{{ plan?.mkdpNm }}</div>
      <div class="q-mb-md">
        <NuxtImg :src="`https://img-stg.x2bee.com/${plan?.titleImgMovList[0]?.bnrImgPathNm}`" alt="/test"/>
      </div>
      <p class="q-mt-lg text-grey-8">{{ plan?.introCont }}</p>
      <q-separator class="q-mb-lg" />
    </q-card>
  </div>
  <div class="row q-col-gutter-md">
    <div class="col-6">
      <q-btn
          label="목록"
          unelevated
          class="full-width"
          color="primary"
          target="_blank"
          @click="clickList"
      />
    </div>
  </div>
</template>

<style scoped>


</style>