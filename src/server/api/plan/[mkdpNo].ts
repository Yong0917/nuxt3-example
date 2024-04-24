import {DisplayPlanDetailApi} from "~/api/planApi";

export default defineEventHandler(async (event) => {
    const mkdpNo = getRouterParam(event, 'mkdpNo') as string;
    const query = getQuery(event);
    const previewDate = query.previewDate as string
    const dataLangCd = query.dataLangCd as string
    const plan = await DisplayPlanDetailApi({mkdpNo, previewDate, dataLangCd }) || {};

    if (!plan) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Server Error',
        });
    }

    console.log('plan route api : ' + plan)

    return plan;
});

// export default defineEventHandler((event) => {
//     const courseSlug = getRouterParam(event, 'courseSlug') as string;
//     const courseDetails = getCourseDetails(courseSlug);
//
//     if (!courseDetails.course) {
//         throw createError({
//             statusCode: 500,
//             statusMessage: 'Server Error',
//         });
//     }
//
//     return courseDetails;
// });
