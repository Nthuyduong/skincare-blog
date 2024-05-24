import { fetchApi, getApi, getApiAdmin, postApiAdmin } from "@utils/apiUtils";

export const fetchCategoriesApi = async (page = 1, has_parent = null) => {
    const response = await getApi("/categories", {
        page,
        limit: 10,
        has_parent,
    });
    return response.data;
};

export const getCategoryByIdApi = async (id) => {
    return await getApi(`/categories/${id}`);
}

export const getCategoryBySlugApi = async (slug) => {
    return await getApi(`/categories/slug/${slug}`);
}

export const getCategoriesByParentIdApi = async (id) => {
    return await getApi(`/categories/${id}/childrens`);
}

export const getCategoriesByParentSlugApi = async (slug) => {
    return await getApi(`/categories/slug/${slug}/childrens`);
}

export const getCategoriesBySlugApi = async (slug) => {
    return await getApi(`/categories/slug/${slug}`);
}

export const updateSubcategoryApi = async (id, data) => {
    return await postApiAdmin(`/categories/${id}`, data, {
        "Content-Type": "multipart/form-data"
    });
}

export const createSubcategoryApi = async (data) => {
    return await postApiAdmin("/categories", data, {
        "Content-Type": "multipart/form-data"
    });
}