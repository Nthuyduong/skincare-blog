import { getApi, postApiAdmin } from "@utils/apiUtils";

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