<script setup lang="ts">
import {DisplayPlanListApi} from "~/api/planApi";
import {useIconStore} from "~/stores/useIconStore";

const pageParam = ref(1);
const plansInfo = ref();

const route = useRoute();
const router = useRouter();
// const plansInfo = useState('plansInfo')


const pageParams: any = ref({
  dispMediaCd: '99',
  sortOption: 'recent',
  tab: 'Y',
  brand: route.query.brand as string,
  group: '',
  pageNo: `${pageParam.value}`,
  pageSize: '9',
})

const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const store = useIconStore()


useSeoMeta({
  title: () => '플래티어 - 기획전',
  description: () => '기획전 리스트 페이지 입니다.'
});

const getPlansList = async () => {
  return await DisplayPlanListApi(
      {...pageParams.value, pageNo: `${pageParam.value}`}
  )
}

const plan = await getPlansList();
plansInfo.value = plan.planInfoList

// onMounted(async () => {
//   try {
//     // id.value가 아니라 id를 넣는다
//     const { plans } = await DisplayPlanListApi(params);
//     completed.value = plans;
//   } catch (error) {
//     console.log('2', error)
//   }
// })

const navHome = async () => {
  await navigateTo('/');
}

const clickMore = async () => {
  pageParam.value++
  const planListModel = await getPlansList();
  plansInfo.value = [...plansInfo.value, ...planListModel.planInfoList];
}

// const updateFilter = (key: string, value: string) => {
//   const queryString = new URLSearchParams(route.query.toString())
//   // 기획전 그룹, 브랜드 변경 시 페이저 번호 1로 세팅
//   if (key === 'brand' || key === 'group') {
//     queryString.set('pageNo', '1')
//   }
//   queryString.set(key, value)
//   router.push(`${pathname}?${queryString.toString()}`, {
//     scroll: false
//   })
// }

// key value 값으로 써서 하나의 공통 함수로 pageParams 값 처리
const updateParams = async (key: string, event : HTMLInputElement) => {
  pageParams.value[key] = event.value
  if(key === 'brand' || key === 'group') {
    pageParam.value = 1
  }
  const planListModel = await getPlansList();
  plansInfo.value = planListModel.planInfoList
}

// pageParams 가 바뀌면 값 초기화
// watch(pageParams.value, async () => {
//   const planListModel = await getPlansList();
//   plansInfo.value = planListModel.planInfoList
// })


</script>

<template>
  <h2> 기획전 </h2>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title> test Nuxt3 </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <q-page padding>
        <div class="q-my-xl text-center">
          <div class="text-bold q-mb-md text-subtitle1">
            Test Test
          </div>
          <PageTitle title="컴포턴트 props 테스트!!" />
          <PageDescription description="기획전 테스트!" />
          <PlanBrandSelect :brandNo="route.query.brand as string"
                           @update-value="(event) => updateParams('brand', event)"/>

          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-btn
                  label="홈"
                  unelevated
                  class="full-width"
                  color="primary"
                  target="_blank"
                  @click="navHome"
              />
            </div>
          </div>
        </div>
        <div class="row q-col-gutter-lg">
          <div
              v-for="{ mkdpNo, mkdpNm, introConts, imageList } in plansInfo"
              :key="mkdpNo"
              class="col-12 col-md-4 col-sm-6"
          >
            <NuxtLink custom v-slot="{ navigate }" :to="`/plan/${mkdpNo}`">
              <PlanItem
                  :title="mkdpNm"
                  :subtitle="introConts"
                  :thumbnail="imageList?.at(0)?.bnrImgPathNm"
                  :mkdpNo="mkdpNo"
                  @click="navigate()"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="row q-col-gutter-md content-md-end top q-mt-lg">
          <div class="col-12">
            <q-btn
                label="더보기"
                unelevated
                class="full-width"
                color="primary"
                target="_blank"
                @click="clickMore"
            />
          </div>
        </div>
      </q-page>

    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>