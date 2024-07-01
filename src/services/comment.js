import { getApi, postApiAdmin, postApi } from "@utils/apiUtils";

export const fetchCommentByBlogIdApi = async (id, page) => {
    return await getApi(`/blogs/comments/${id}`);
}

export const createCommentApi = async (data) => {
    return await postApi("/blogs/comments", data);
}

export const createCommentGuestApi = async (data) => {
    return await postApi("/blogs/comments-guest", data);
}