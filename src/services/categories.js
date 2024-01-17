import { fetchApi } from "@utils/apiUtils";

export const fetchCategoriesApi = async (page = 1) => {
    try {
        const response = await fetchApi.get("/categories", {
            params: {
                page,
                limit: 10,
            }
        });

        return response.data.data;
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
};

export const getCategoryByIdApi = async (id) => {
    try {
        const response = await fetchApi.get(`/categories/${id}`);
        
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