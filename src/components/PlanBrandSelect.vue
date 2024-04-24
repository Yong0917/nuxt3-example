<script setup lang="ts">
import {DisplayPlanBrandApi} from "~/api/planApi";

const { brandNo } = defineProps({
  brandNo: {
    type: String,
    required: true,
    default: 'ALL'
  }
})

const brandModel = ref(brandNo)

const brandData = await DisplayPlanBrandApi();

// const brandOptions = computed(() => {
//   const brandOptions = brandData?.slice(0, 5).map(({ brandNo, brandNm }) => {
//     return { value: brandNo, label: brandNm }
//   })
//   const allOption = { value: 'ALL', label: '전체' }
//   return [allOption, ...brandOptions]
// })

const changeOption = () => {

  // console.log('123' , groupModel)
}

// emit 정의
const emits = defineEmits(['update-value'])
</script>

<template>
<!--  <select-->
<!--      :id="selectId"-->
<!--      ref="selectEl"-->
<!--      v-model="selectValue"-->
<!--      :title="selectTitle"-->
<!--      :disabled="disabled"-->
<!--      @change="$emit('change', $event)"-->
<!--      @input=";[$emit('submit', $event.target.value), placeholderSet()]"-->
<!--  >-->
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <select v-model="brandModel" @change="(event) => emits('update-value', event.target)">
        <option value="ALL">전체</option>
        <option
            v-for="(brand, index) in brandData"
            :key="index"
            :value="brand.brandNo"
            :selected="brandModel === brand.brandNo"
        >{{ brand.brandNm }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>

</style>