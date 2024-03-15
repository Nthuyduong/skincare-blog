import { fetchBlogPostsAction, fetchBlogPostsDetailAction } from "@store/post/post.action";
import { 
    fetchBlogPostsApi, 
    createBlogPostApi, 
    getBlogByIdApi,
    updateBlogPostApi,
    publishedBlogPostApi 
} from "@services/blog";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "@hooks/modal";
import { showModal, hideModal } from "@store/modal/modal.action";

export const usePost = () => {

    const { addToast, showLoading, hide } = useModal();

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
        formData.append('featured_img', data.featured_img);
        formData.append('banner_img', data.banner_img)
        formData.append('status', data.status);
        if (data.tag && data.tag.length > 0) {
            formData.append('tag', data.tag.join(',') || '');
        }
        formData.append('meta_title', data.meta_title);
        formData.append('meta_description', data.meta_description);
        formData.append('author', data.author);
        formData.append('excerpt', data.excerpt);
        data.categories.map((item) => {
            formData.append('categories[]', item);
        });
        showLoading()
        const res = await createBlogPostApi(formData);
        hide();
        if (res?.status == 1) {
            addToast('New post created!', 'success');
        } else {
            addToast(res.msg, 'error');
        }
    }

    async function updateBlogPost(data) {
        const formData = new FormData();
        console.log(data);
        formData.append('title', data.title);
        formData.append('slug', data.slug);
        formData.append('summary', data.summary);
        formData.append('content', data.content);
        formData.append('content_draft', data.content_draft);
        formData.append('status', 0);
        formData.append('featured_img', data.featured_img);
        formData.append('banner_img', data.banner_img);
        formData.append('status', data.status);
        if (data.tag && data.tag.length > 0) {
            formData.append('tag', data.tag.join(',') || '');
        }
        formData.append('meta_title', data.meta_title);
        formData.append('meta_description', data.meta_description);
        formData.append('author', data.author);
        formData.append('excerpt', data.excerpt);
        data.categories.map((item) => {
            formData.append('categories[]', item);
        });
        showLoading();
        const res = await updateBlogPostApi(data.id, formData);
        hide();
        console.log(res);
        if (res?.status == 1) {
            dispatch(fetchBlogPostsDetailAction(res.data));
            addToast('Post updated!', 'success');
        } else {
            addToast(res?.msg, 'error');
        }
    }

    async function publishedBlogPost(id) {
        showLoading();
        const res = await publishedBlogPostApi(id);
        hide();
        if (res?.status == 1) {
            addToast('Post published!', 'success');
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
        updateBlogPost,
        publishedBlogPost,
    };
};
