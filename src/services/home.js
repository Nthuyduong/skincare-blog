import { fetchApi, getApi, getApiAdmin, postApiAdmin } from "@utils/apiUtils";

export const getBlogNewest = async (limit = 10) => {
    const response = await getApi("/blogs/newest", {
        limit
    });
    return response.data;
};

export const getBlogPopular = async (limit = 10, days = null) => {
    const response = await getApi("/blogs/popular", {
        limit,
        days
    });
    return response.data;
};

export const getBlogBanner = async (limit = 3) => {
    const response = await getApi("/blogs/tags/?tags=banner", {
        limit
    });
    return response.data;
};