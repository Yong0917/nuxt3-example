import type {PlanBrandModel, PlanDetailModel, PlanDetailPageType, PlanListModel} from "~/types/planType";

export const DisplayPlanBrandApi = async (): Promise<PlanBrandModel[]> => {
    const { data, error } = await useFetch<any>(
        `https://gw-dev.x2bee.com/api/display/v1/plan/brand`,
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

    return data?.value || [] as PlanBrandModel[]
}

export const DisplayPlanListApi = async ({
  dispMediaCd = '99',
  sortOption = 'recent',
  tab = 'Y',
  brand = 'ALL',
  group = '',
  pageNo = '1',
  pageSize = '9',
}): Promise<PlanListModel> => {
  const { data, error } = await useAsyncData<any>(
    `getPlansList`,
      () => $fetch('https://gw-dev.x2bee.com/api/display/v1/plan/planList', {
        params: {
          dispMediaCd,
          sortType: sortOption,
          pageNo,
          pageSize,
          progressYn: tab,
          brandNo: brand === 'ALL' ? '' : brand,
          dispGrpNo: group,
        }
      })
  );
  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return data?.value?.payload || {} as PlanListModel

};

export const DisplayPlanDetailApi = async ({
                                             mkdpNo,
                                             previewDate,
                                             dataLangCd
                                           }: PlanDetailPageType): Promise<PlanDetailModel> => {

  const { data, error } = await useFetch<any>(
      `https://gw-dev.x2bee.com/api/display/v1/plan/planDetail/${mkdpNo}`,
      {
        params: {
          dispMediaCd: 99,
          dispYn: 'Y',
          previewDate: previewDate || '',
          dataLangCd: dataLangCd || '',
          progressYn: 'Y',
          sort: 10
        }
      },
  );
  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return data?.value || {} as PlanDetailModel;
};


