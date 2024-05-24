import { getApi, postApiAdmin, postApi } from "@utils/apiUtils";

export const fetchBlogPostsApi = async (page = 1) => {
    const response = await getApi("/blogs", {
        page,
        limit: 10,
    });
    return response.data;
};

export const getBlogByIdApi = async (id) => {
    return await getApi(`/blogs/${id}`);
}

export const getBlogBySlugApi = async (slug) => {
    return await getApi(`/blogs/slug/${slug}`);
}

export const createBlogPostApi = async (data) => {
    return await postApiAdmin("/blogs", data, {
        "Content-Type": "multipart/form-data"
    });
}

export const updateBlogPostApi = async (id, data) => {
    return await postApiAdmin(`/blogs/${id}`, data, {
        "Content-Type": "multipart/form-data"
    });
}

export const publishedBlogPostApi = async (id) => {
    return await postApiAdmin(`/blogs/publish/${id}`);
}

export const updateBlogViewCountApi = async (id) => {
    return await postApi(`/blogs/update/view-count/${id}`);
}

export const fetchRelatedBlogPostsApi = async (id) => {
    return await getApi(`/blogs/related/${id}`);
}

export const fetchBlogPostsByCategoryApi = async (id, page = 1, limit = 10, sort = '') => {
    const res = await getApi(`/blogs/category/${id}`, {
        page,
        limit,
        sort
    });
    return res.data;
}

export const fetchBlogPostsByCategorySlugApi = async (id, page = 1, limit = 10, sort = '') => {
    const res = await getApi(`/blogs/category/slug/${id}`, {
        page,
        limit,
        sort
    });
    return res.data;
}

export const fetchPopularBlogPostsApi = async () => {
    const res = await getApi("/blogs/popular?limit=5");
    return res.data;
}