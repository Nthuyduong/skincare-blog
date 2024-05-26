import { getApi, postApi } from "@utils/apiUtils";

export const getSearchResults = async (search = '' ,limit = 10, page = 1) => {
    const response = await getApi("/search", {
        limit,
        search,
        page,
    });
    return response.data;
};

export const sendContactForm = async (data) => {
    return await postApi("/contact", data);
}

export const subscribeApi = async (email, name) => {
    return await postApi("/subscribes", {
        email,
        name
    });
}