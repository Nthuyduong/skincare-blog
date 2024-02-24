import { fetchCategoriesAction, fetchCategoryDetailAction } from "@store/categories/categories.action";
import { fetchCategoriesApi, getCategoryByIdApi, updateSubcategoryApi, createSubcategoryApi } from "@services/categories";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "@hooks/modal";

export const useCategory = () => {
    const { addToast, showLoading, hide } = useModal();
    const { categories, paginate, category } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    async function fetchCategories(page = 1, has_parent = null) {
        const res = await fetchCategoriesApi(page, has_parent);
        if (res) {
            dispatch(fetchCategoriesAction(res));
        }
    }
    
    async function fetchCategoryById(id) {
        const res = await getCategoryByIdApi(id);
        if (res.status) {
            dispatch(fetchCategoryDetailAction(res.data));
        }
    }

    async function createSubcategory(data) {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('slug', data.slug);
        formData.append('description', data.description);
        formData.append('status', 0);
        if (data.featured_img){
            formData.append('featured_img', data.featured_img);
        }
        if (data.banner_img){
            formData.append('banner_img', data.banner_img);
        }
        if (data.parent_id){
            formData.append('parent_id', data.parent_id)
        }
        showLoading()
        const res = await createSubcategoryApi(formData);
        hide();
        if (res?.status == 1) {
            if (data.parent_id)
            {
                addToast('New Subcategory created!', 'success');
            }
            else
            {
                addToast('New category created!', 'success');
            }
        } else {
            addToast(res.msg, 'error');
        }
    }

    async function updateSubcategory(data) {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('slug', data.slug);
        formData.append('description', data.description);
        formData.append('status', 0);
        if (data.featured_img){
            formData.append('featured_img', data.featured_img);
        }
        if (data.banner_img){
            formData.append('banner_img', data.banner_img);
        }
        if (data.parent_id){
            formData.append('parent_id', data.parent_id)
        }
        // data?.categories?.map((item) => {
        //     formData.append('categories[]', item);
        // });
        showLoading();
        const res = await updateSubcategoryApi(data.id, formData);
        hide();
        if (res?.status == 1) {
            addToast('Category updated!', 'success');
        } else {
            addToast(res.msg, 'error');
        }
    }

    return {
        categories,
        paginate,
        category,
        fetchCategories,
        fetchCategoryById,
        updateSubcategory,
        createSubcategory,
    };
}
