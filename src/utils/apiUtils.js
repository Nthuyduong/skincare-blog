import axios from "axios";

export const BASE_URL = "https://app.radiance-aura.blog";
// export const BASE_URL = "http://localhost:8000";

export const fetchApi = axios.create({
    baseURL: BASE_URL + "/api",
    headers: {
        "Content-Type": "application/json"
    },
});

export const getApi = async (url, params, config) => {
    try {
        const response = await fetchApi.get(url, {
            params,
            headers: {
                "Content-Type": "application/json",
                ...config,
            }
        });

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
};

export const postApi = async (url, data, config) => {
    try {
        const response = await fetchApi.post(url, data, {
            headers: {
                "Content-Type": "application/json",
                ...config.headers,
            }
        });

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

export const deleteApi = async (url, config) => {
    try {
        const response = await fetchApi.delete(url, {
            headers: {
                "Content-Type": "application/json",
                ...config,
            }
        });
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

export const adminApi = axios.create({
    baseURL: BASE_URL + "/api/admin",
    headers: {
        "Content-Type": "application/json"
    },
});

export const getApiAdmin = async (url, params, config) => {
    try {
        const response = await adminApi.get(url, {
            params,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
                ...config,
            }
        });

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
};

export const postApiAdmin = async (url, data, config) => {
    try {
        const response = await adminApi.post(url, data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
                ...config,
            }
        });

        return response.data;
    } catch (error) {
        console.log(error)
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

export const deleteApiAdmin = async (url, config) => {
    try {
        const response = await adminApi.delete(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
                ...config,
            }
        });

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
};
