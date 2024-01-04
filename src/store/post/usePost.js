import { fetchBlogPostsAction } from "./post.action";
import { fetchBlogPostsApi } from "../../services/blog";
import { useDispatch, useSelector } from "react-redux";

export const usePost = () => {

    const { posts, paginate } = useSelector((state) => state.post);

    const dispatch = useDispatch();

    async function fetchBlogPosts(page = 1) {
        const res = await fetchBlogPostsApi(page);
        if (res) {
            dispatch(fetchBlogPostsAction(res));
        }
    }

    return {
        paginate,
        posts,
        fetchBlogPosts
    };
};
