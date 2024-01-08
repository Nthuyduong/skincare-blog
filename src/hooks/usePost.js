import { fetchBlogPostsAction, fetchBlogPostsDetailAction } from "@store/post/post.action";
import { fetchBlogPostsApi, createBlogPostApi, getBlogByIdApi } from "@services/blog";
import { useDispatch, useSelector } from "react-redux";
import { useToastContext } from "@components/common/toast/toastContext";
import { showModal, hideModal } from "@store/modal/modal.action";

export const usePost = () => {

    const { addToast } = useToastContext();

    const { posts, paginate, post } = useSelector((state) => state.post);

    const dispatch = useDispatch();

    async function fetchBlogPosts(page = 1) {
        const res = await fetchBlogPostsApi(page);
        if (res) {
            dispatch(fetchBlogPostsAction(res));
        }
    }

    async function getBlogById(id) {
        const res = await getBlogByIdApi(id);
        if (res) {
            dispatch(fetchBlogPostsDetailAction(res.data));
        }
    }

    async function createBlogPost(data) {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('slug', data.slug);
        formData.append('summary', data.summary);
        formData.append('content', data.content);
        formData.append('content_draft', data.content_draft);
        formData.append('status', 0);
        dispatch(showModal({ name: 'loading', enableClickOutside: false }));
        const res = await createBlogPostApi(formData);
        dispatch(hideModal());
        if (res?.status == 1) {
            addToast('New post created!', 'success');
        } else {
            addToast(res.msg, 'error');
        }

    }


    return {
        paginate,
        posts,
        post,
        fetchBlogPosts,
        createBlogPost,
        getBlogById,
    };
};
