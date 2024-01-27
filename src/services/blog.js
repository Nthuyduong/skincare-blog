import { fetchApi } from "@utils/apiUtils";

export const fetchBlogPostsApi = async (page = 1) => {
    try {
        const response = await fetchApi.get("/blogs", {
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

export const getBlogByIdApi = async (id) => {
    try {
        const response = await fetchApi.get(`/blogs/${id}`);
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

export const getBlogBySlugApi = async (slug) => {
    try {
        const response = await fetchApi.get(`/blogs/slug/${slug}`);
        return response.data;
    } catch (error) {
        if (error?.response?.data) {
            return error?.response?.data;
        } else {
            return {
                status: 0,
                msg: error?.response?.statusText,
            };
        }
    }
}

export const createBlogPostApi = async (data) => {
    try {
        const response = await fetchApi.post(
            "/blogs", 
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

export const updateBlogPostApi = async (id, data) => {
    try {
        const response = await fetchApi.post(
            `/blogs/${id}`, 
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
