<script setup lang="ts">
import type {DisplayCategory} from "~/types/category-data-model";
import useSearchCategoryNav from "~/composables/display/UseSearchCategoryNav";

interface CategoryNavProps {
  dispCtgNo: string
}
const {dispCtgNo} = defineProps<CategoryNavProps>()

const { isSearched, targetCategory, targetCategoryNav } =
    useSearchCategoryNav({
      dispCtgNo
    })
const router = useRouter()

// 최상위가 아닌 리프 카테고리면 상위 카테고리 기준 네이게이션 노출 -> 네비게이션에서 하위 카테고리 영역 포커스만 변경
const isLeafCategory = (category: DisplayCategory) =>
    Number(category.depth) > 1 && category.leafYn === 'Y'

const breadCrumbFilter = (depthCategory : any) => {
  const category = depthCategory ?? ({} as DisplayCategory)
  if (isLeafCategory(targetCategory)) {
    return (
        !IsEmpty(category.dispCtgNo) && category.depth < targetCategory.depth
    )
  }
  return !IsEmpty(category.dispCtgNo)
}

const categoryBreadCrumb = computed(() => {
  if (isSearched) {
    return Object.values(targetCategoryNav)
        .filter((navCategory) => breadCrumbFilter(navCategory))
        .map((category : any) => {
          return {
            onClick: () => onClickNav(category),
            title: category.dispCtgNm,
            className: 'cursor-pointer'
          }
        })
  }
})

if (!isSearched) return null

const navBaseCategory = isLeafCategory(targetCategory)
    ? targetCategoryNav[`depth${Number(targetCategory.depth) - 1}`]
    : targetCategory
const onClickNav = (category: DisplayCategory) =>
    router.push(`/display/shop/category/${category.dispCtgNo}`)


</script>

<template>

</template>

<style scoped>

</style>