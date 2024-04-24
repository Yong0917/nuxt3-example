import type {PlanDetailModel} from "~/types/planType";
import type {ReviewSummary} from "~/types/goodsReviewType";

interface ReviewListRequest {
    goodsNo: string
    pageNo: number
    pageSize: number
    typeCountYn: string
    sortTypeCd: string
    revGbCdList: string
}

// 상품별 상품평 정보 조회
export async function getReviewList({
                                        goodsNo,
                                        pageNo,
                                        pageSize,
                                        typeCountYn,
                                        sortTypeCd,
                                        revGbCdList
                                    }: ReviewListRequest) : Promise<{reviewList: any}> {
    const { data, error } = await useFetch<any>(
        `https://gw-dev.x2bee.com/api/goods/v1/review/adv/goods/${goodsNo}`,
        {
            params: { pageNo, pageSize, typeCountYn, sortTypeCd, revGbCdList }
        },
    );
    if (error.value) {
        throw createError({
            ...error.value,
        });
    }

    return {
        reviewList: data?.value.payload || {},
    };
}

// 상품평 사진/동영상 썸네일 조회
export async function getReviewThumbnail(goodsNo: string) : Promise<any> {
    const { data, error } = await useFetch<any>(
        `https://gw-dev.x2bee.com/api/goods/v1/review/adv/goods/${goodsNo}/represent/thumbnails`
    );
    if (error.value) {
        throw createError({
            ...error.value,
        });
    }

    return data?.value.payload.data || {};
}

// 상품별 상품평 요약정보 조회
export async function getReviewSummary(goodsNo: string): Promise<{goodsReviewSummary: ReviewSummary}> {
    const { data, error } = await useFetch<any>(
        `https://gw-dev.x2bee.com/api/goods/v1/review/adv/goods/${goodsNo}/summary`
    );
    if (error.value) {
        throw createError({
            ...error.value,
        });
    }

    return {
        goodsReviewSummary: data?.value.payload || {},
    };
}