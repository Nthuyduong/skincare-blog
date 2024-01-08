import { useDispatch } from "react-redux";
import { showModal, hideModal } from "../store/modal/modal.action";

export const useModal = () => {
    const dispatch = useDispatch();

    const show = (modalConfig) => {
        dispatch(showModal(modalConfig));
    };

    const hide = () => {
        dispatch(hideModal());
    };

    const showLoading = (message) => {
        dispatch(showModal({
            name: "loading",
            data: {
                message,
            },
            invisibleBackground: true,
            enableClickOutside: false,
        }));
    };

    return {
        show,
        hide,
        showLoading,
    };
}