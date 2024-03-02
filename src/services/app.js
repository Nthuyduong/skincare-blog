import { fetchApi, getApi, getApiAdmin, postApiAdmin } from "@utils/apiUtils";

export const getSearchResults = async (search = '' ,limit = 10, page = 1) => {
    const response = await getApi("/search", {
        limit,
        search,
        page,
    });
    return response.data;
};