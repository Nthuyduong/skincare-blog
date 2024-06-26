import { fetchIngredientsAction, fetchIngredientDetailAction } from "@store/ingredients/ingredients.action";
import { fetchIngredientsApi, getIngredientByIdApi, updateIngredientApi, createIngredientApi } from "@services/ingredients";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "@hooks/modal";

export const useIngredient = () => {
    const { addToast, showLoading, hide } = useModal();
    const { ingredients, paginate, ingredient } = useSelector((state) => state.ingredients);

    const dispatch = useDispatch();

    async function fetchIngredients(page = 1, filter = null) {
        const res = await fetchIngredientsApi(page, 10, filter);
        if (res) {
            dispatch(fetchIngredientsAction(res));
        }
    }

    async function fetchIngredientById(id) {
        const res = await getIngredientByIdApi(id);
        if (res.status) {
            dispatch(fetchIngredientDetailAction(res.data));
        }
    }

    async function createIngredient(data) {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('content', data.content);
        formData.append('slug', data.slug);
        formData.append('meta_title', data.meta_title);
        formData.append('meta_description', data.meta_description);
        formData.append('status', 0);
        if (data.featured_img){
            formData.append('featured_img', data.featured_img);
        }
        if (data.featured_img2){
            formData.append('featured_img2', data.featured_img2);
        }
        formData.append('details', JSON.stringify(data.details));

        showLoading()
        const res = await createIngredientApi(formData);
        hide();
        if (res?.status == 1) {
            addToast('New ingredient created!', 'success');
        }
        else {
            addToast(res.msg, 'error');
        }
    }

    async function updateIngredient(data) {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('content', data.content);
        formData.append('status', 0);
        formData.append('meta_title', data.meta_title);
        formData.append('slug', data.slug);
        formData.append('meta_description', data.meta_description);
        if (data.featured_img){
            formData.append('featured_img', data.featured_img);
        }
        if (data.featured_img2){
            formData.append('featured_img2', data.featured_img2);
        }
        formData.append('details', JSON.stringify(data.details));
        showLoading();
        const res = await updateIngredientApi(data.id, formData);
        hide();
        if (res?.status == 1) {
            addToast('Ingredient updated!', 'success');
        } else {
            addToast(res.msg, 'error');
        }
    }

    return {
        ingredients,
        paginate,
        ingredient,
        fetchIngredients,
        fetchIngredientById,
        updateIngredient,
        createIngredient,
    };
}
