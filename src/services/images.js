import { getApiAdmin, postApiAdmin } from "@utils/apiUtils";

export const fetchImagesApi = async (page = 1) => {
    const response = await getApiAdmin("/images", {
        page,
        limit: 30,
    });
    return response?.data;
};

export const uploadImageApi = async (data) => {
    const response = await postApiAdmin("/images", data, {
        "Content-Type": "multipart/form-data"
    });
    return response;
}

export const updateImageApi = async (data) => {
    const response = await postApiAdmin(`/images/update`, data);
    return response;
}

export const deleteImageApi = async (data) => {
    const response = await postApiAdmin(`/images/delete`, data);
    return response;
}
