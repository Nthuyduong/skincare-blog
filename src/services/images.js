import { getApiAdmin } from "@utils/apiUtils";

export const fetchImagesApi = async (page = 1) => {
    const response = await getApiAdmin("/images", {
        page,
        limit: 10,
    });
    return response.data;
};