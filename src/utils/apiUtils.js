import axios from "axios";

const BASE_URL = "https://app.radiance-aura.blog";

export const fetchApi = axios.create({
    baseURL: BASE_URL + "/api",
    headers: {
        "Content-Type": "application/json"
    },
});