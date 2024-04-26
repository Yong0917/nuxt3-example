// import { getCategoryNavigation } from '@/lib/display/utils/category-utils'
// import { useMemo } from 'react'
// import { useFlatCategories } from '@/store/display/useCategoryStore'
import { isEmptyObject } from '@/utils/common'
import {useCategoryStore} from "~/stores/display/UseCategoryStore";

interface searchCategoryNavProps {
  dispCtgNo: string
}
export default function useSearchCategoryNav({
  dispCtgNo
}: searchCategoryNavProps) {
    // const categoryInfo = ref({
    //     dispCtgNo,
    //     flatCategories : useFlatCategories()
    // })

    // const flatCategoriesRef = ref(useFlatCategories())

    // watch(categoryInfo, (newValue, oldValue) => {
    //     const {} = getCategoryNavigation({
    //         flatCategories: categoryInfo.value.flatCategories ,
    //         searchDispCtgNo: categoryInfo.value.dispCtgNo
    //     })
    // })
  //   const {flatCategories} = useCategoryStore()
  //
  //   const { }
  //
  // const { targetCategory, targetCategoryNav } = useMemo(
  //   () =>
  //     getCategoryNavigation({
  //       flatCategories,
  //       searchDispCtgNo: dispCtgNo
  //     }),
  //   [flatCategories, dispCtgNo]
  // )

  const isSearched =
    !isEmptyObject(targetCategory) && !isEmptyObject(targetCategoryNav)

  return { isSearched, targetCategory, targetCategoryNav }
}
