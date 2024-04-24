export const useReviewIndexStore = defineStore('reviewIndexStore', {
    state: () => ({
        reviewIndex: 0
    }),
    getters: {
        getReviewIndex: (state) => state.reviewIndex
    },
    actions: {
        setReviewIndex(idx: number){
            this.reviewIndex = idx
        }
    }
})

export const useReviewThumbnailStore = defineStore('reviewThumbnailStore',{
    state: () => ({
        thumbnailPopupCount: 0,
        detailPopupCount: 0,
    }),
    getters: {
        getThumbnailPopupCount: (state) => state.thumbnailPopupCount,
        getDetailPopupCount: (state) => state.detailPopupCount
    },
    actions: {
        setThumbnailPopupCount(idx: number){
            this.thumbnailPopupCount = idx
        },
        setDetailPopupCount(idx: number){
            this.detailPopupCount = idx
        }
    }
})
