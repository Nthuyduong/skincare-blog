import { fetchCategoriesAction, fetchCategoryDetailAction } from "@store/categories/categories.action";
import { fetchCategoriesApi, getCategoryByIdApi } from "@services/categories";
import { useDispatch, useSelector } from "react-redux";

export const useCategory = () => {
    const { categories, paginate, category } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    async function fetchCategories(page = 1) {
        const res = await fetchCategoriesApi(page);
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

    return {
        categories,
        paginate,
        category,
        fetchCategories,
        fetchCategoryById,
    };
}
