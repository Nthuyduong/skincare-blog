import axios from "axios";

export const BASE_URL = "https://app.radiance-aura.blog";
// export const BASE_URL = "http://localhost:8000";

export const fetchApi = axios.create({
    baseURL: BASE_URL + "/api",
    headers: {
        "Content-Type": "application/json"
    },
});