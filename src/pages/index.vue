<script setup lang="ts">
import { useIconStore } from '#imports';
import UnstructuredShop from "~/components/display/shop/unstructured-shop.vue";


const navPlan = async (url : string) => {
  await navigateTo(url);
}

const {setIcons} = useIconStore();
setIcons()



// const { shopInfo, template, conrList } = await ShopApi({ shopNo })
//
// if (!template || !template.tmplFileNm) {
//   return <EmptyTemplate />
// }
//
// return (
//     <DynamicTemplate
//         template={template}
// conrList={conrList}
// inflowInfo={{
//   infDispCtgNoGb: 'display',
//       infDispCtgNo: shopInfo?.shopNo
// }}
// />
// )


</script>

<template>
  <h2> 안녕하세요. 메인페이지 입니다. </h2>
  <div class="row q-col-gutter-md">
    <div class="col-6">
      <q-btn
          label="기획전"
          unelevated
          class="full-width"
          color="primary"
          target="_blank"
          @click="navPlan('/plan')"
      />
    </div>
    <div class="col-6">
      <q-btn
          label="리뷰상품 10001921"
          unelevated
          class="full-width"
          color="primary"
          target="_blank"
          @click="navPlan('reviews/10002042')"
      />
    </div>
  </div>
<!--  <test222/>-->
  <unstructured-shop shopNo="1"></unstructured-shop>
</template>

<style scoped>

</style>