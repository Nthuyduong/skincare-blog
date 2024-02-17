import { fetchApi, getApi } from "@utils/apiUtils";

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

export const getCategoriesByParentIdApi = async (id) => {
    return await getApi(`/categories/${id}/childrens`);
}

export const updateSubcategoryApi = async (id, data) => {
    try {
        const response = await fetchApi.post(
            `/categories/${id}`,
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );
        return response.data;
    } catch (error) {
        if (error.response?.data) {
            return error.response?.data;
        } else {
            return {
                status: 0,
                msg: error.response?.statusText,
            };
        }
    }
}

export const createSubcategoryApi = async (data) => {
    try {
        const response = await fetchApi.post(
            "/categories",
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );
        return response.data;
    } catch (error) {
        if (error.response?.data) {
            return error.response?.data;
        } else {
            return {
                status: 0,
                msg: error.response?.statusText,
            };
        }
    }
}