import { fetchApi } from "@utils/apiUtils";

export const fetchIngredientsApi = async (page = 1, has_parent = null) => {
    try {
        const response = await fetchApi.get("/ingredients", {
            params: {
                page,
                limit: 10,
                has_parent,
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

export const getIngredientByIdApi = async (id) => {
    try {
        const response = await fetchApi.get(`/ingredients/${id}`);

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

export const updateIngredientApi = async (id, data) => {
    try {
        const response = await fetchApi.post(
            `/ingredients/${id}`,
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

export const createIngredientApi = async (data) => {
    try {
        const response = await fetchApi.post(
            "/ingredients",
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