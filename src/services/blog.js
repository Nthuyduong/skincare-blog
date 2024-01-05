import { fetchApi } from "../utils/apiUtils";

export const fetchBlogPostsApi = async (page = 1) => {
    try{
        const response = await fetchApi.get("/blogs",{
            params: {
                page,
                limit: 10,
            }
        });
        return response.data.data;
    }
    catch (error) {
        // console.log(error);
        return null;
    }
}