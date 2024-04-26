<script setup lang="ts">
import type {ShopProps} from "~/types/shop-data-model";
import Container from "~/components/fo/common/Container.vue";
import ContentsWrap from "~/components/fo/common/ContentsWrap.vue";

const {categoryInfo} = defineProps<ShopProps>()

const dispCtgNo = categoryInfo?.dispCtgNo

</script>

<template>
  <div>
    <Container>
      <ContentsWrap>
        <>
        CategoryDefaultTemplate
        {{categoryInfo}}
<!--        카테고리 Nav -->
<!--        상품 레이아웃 -->
      </ContentsWrap>
    </Container>
  </div>

</template>

<style scoped>

</style>