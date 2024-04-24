import {IconApi} from "~/api/iconApi";


export function isEmptyObject(obj : any) {
    return obj === null || obj === undefined || Object.keys(obj).length === 0
}

// icon Store
export const useIconStore = defineStore('icon', {
    state: () => ({
        icons: {}
    }),
    getters: {
        getIcons: (state) => state.icons
    },
    actions: {
        async setIcons(){
            if (!isEmptyObject(this.icons)) {
                return
            }
            const iconList = await IconApi()
            this.icons = iconList?.reduce(
                (
                    iconMap: Record<string, string>,
                    icon: {
                        dispIconNo: string
                        moIconPathNm: string
                    }
                ) => {
                    iconMap[icon.dispIconNo] = icon.moIconPathNm
                    return iconMap
                }, {}
            )
        }
    }
})
