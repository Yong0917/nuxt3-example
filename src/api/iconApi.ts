interface IconResponse {
    siteNo: string
    dispIconNo: string
    iconNm: string
    iconTypCd: string
    pcIconFileNm: string
    pcIconPathNm: string
    moIconFileNm: string
    moIconPathNm: string
}

export const IconApi = async (): Promise<IconResponse[]> => {
    const { data, error } = await useFetch<any>(
        `https://gw-dev.x2bee.com/api/display/v1/icon`,
        {
            params: {
                dispMediaCd: 99
            }
        },
    );
    if (error.value) {
        throw createError({
            ...error.value,
        });
    }

    return data?.value || [] as IconResponse[]
}