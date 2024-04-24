import type {ShopResponse} from "~/types/shop-data-model";

interface ShopProps {
    shopNo?: string
    dispCtgNo?: string
    brandNo?: string
}

export const ShopApi = async ({ shopNo }: ShopProps): Promise<ShopResponse> => {
    const {data, error} = await useAsyncData<any>(
        'shopApi',
        () => $fetch(`https://gw-dev.x2bee.com/api/display/v1/shop/${shopNo}`)
    )

    if (error.value) {
        throw createError({
            ...error.value,
        });
    }

    return (data?.value || {}) as ShopResponse
}

export const CategoryShopApi = async ({
                                   dispCtgNo
                               }: ShopProps): Promise<ShopResponse> => {
    const {data, error} = await useAsyncData<any>(
        'categoryApi',
        () => $fetch(`https://gw-dev.x2bee.com/api/display/v1/shop/category/${dispCtgNo}`)
    )

    return (data.value || {}) as ShopResponse
}

export const BrandShopApi = async ({
                                brandNo
                            }: {
    brandNo: string
}): Promise<ShopResponse> => {
    const {data, error} = await useAsyncData<any>(
        'categoryApi',
        () => $fetch(`https://gw-dev.x2bee.com//api/display/v1/shop/brand/${brandNo}`)
    )

    return (data.value || {}) as ShopResponse
}