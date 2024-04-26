import type {DisplayCategory} from "~/types/CategoryDataModel";

export const DisplayCategoryApi = async (params?: { brandNo: string }) => {
    const {data, error} = await useAsyncData<any>(
        'shopApi',
        () => $fetch(`https://gw-dev.x2bee.com/api/display/v1/displayCategory`, {
            params
        })
    )

    if (error.value) {
        throw createError({
            ...error.value,
        });
    }

    return (data.value || []) as DisplayCategory[]
}
