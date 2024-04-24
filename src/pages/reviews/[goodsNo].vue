<script setup lang="ts">

const { params } = useRoute();
const goodsNo = params.goodsNo as string;

const handleClick = () => {
  navigateTo('/')
}

const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container :style="pageContainerStyle">
      <q-page padding>
        <div>
          <div class="row q-col-gutter-md">
            <div class="col-6">
              <q-btn
                  label="메인페이지"
                  unelevated
                  class="full-width"
                  color="primary"
                  target="_blank"
                  @click="handleClick"
              />
            </div>
          </div>
          <review-goods-review-list-fetch :goods-no="goodsNo"/>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>>
</template>

<style scoped>

</style>