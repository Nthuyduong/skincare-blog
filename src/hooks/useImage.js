import { fetchImagesApi, uploadImageApi, updateImageApi, deleteImageApi } from "@services/images";
import { fetchImagesAction, setLoadingAction, loadMoreAction } from "@store/images/images.action";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "@hooks/modal";
import { showModal, hideModal } from "@store/modal/modal.action";

export const useImage = () => {
    const { addToast, showLoading, hide } = useModal();
    const { images, paginate, loading } = useSelector((state) => state.images);

    const dispatch = useDispatch();

    const setLoading = (status) => {
        dispatch(setLoadingAction(status));
    }
    async function fetchImages(page = 1) {
        setLoading(true);
        const res = await fetchImagesApi(page);
        if (res) {
            dispatch(fetchImagesAction(res));
        }
        setLoading(false);
    }

    async function loadMoreImages() {
        setLoading(true);
        const res = await fetchImagesApi(parseInt(paginate.current) + 1);
        if (res) {
            dispatch(loadMoreAction(res));
        }
        setLoading(false);
    }

    async function uploadImage(data) {
        const formData = new FormData();
        for(let i = 0; i < data.files.length; i++) {
            formData.append('files[]', data.files[i]);
        }
        // formData.append('files', data.files);
        formData.append('alt', data.alt);
        formData.append('suggest', data.suggest);
        setLoading(true);
        const res = await uploadImageApi(formData);
        setLoading(false);
        if (res) {
            addToast('New image uploaded!', 'success');
            fetchImages();
        } else {
            addToast('Upload image fail!', 'error');
        }
    }

    async function updateImages(data) {
        setLoading(true);
        const res = await updateImageApi(data);
        setLoading(false);
        if (res) {
            addToast('Image updated!', 'success');
        } else {
            addToast('Update image fail!', 'error');
        }
    }

    async function deleteImages(id) {
        setLoading(true);
        const res = await deleteImageApi(id);
        setLoading(false);
        if (res) {
            addToast('Image deleted!', 'success');
            fetchImages();
        } else {
            addToast('Delete image fail!', 'error');
        }
    }

    return {
        images,
        paginate,
        loading,
        fetchImages,
        loadMoreImages,
        uploadImage,
        updateImages,
        deleteImages,
    }
}