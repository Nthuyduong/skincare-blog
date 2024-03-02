import { getSearchResults } from "@services/app";
import { fetchKeywordAction , fetchResultsAction , fetchLoadMoreAction } from "@store/app/app.action";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "@hooks/modal";
import { showModal, hideModal } from "@store/modal/modal.action";

export const useApp = () => {
    const { addToast, showLoading, hide } = useModal();
    const { keyword, results, paginate } = useSelector((state) => state.app);

    const dispatch = useDispatch();

    async function setKeyword(keywordinput) {
        dispatch((fetchKeywordAction(keywordinput)));
    }

    async function handleSearch(search = '') {
        showLoading()
        const res = await getSearchResults(search);
        hide();
        if (res) {
            dispatch(fetchResultsAction(res));
        }
    }

    async function loadMore() {
        showLoading()
        const res = await getSearchResults(keyword, (parseInt(paginate.current) + 1));
        hide();
        if (res) {
            dispatch(fetchLoadMoreAction(res));
        }
    }

    return {
        paginate,
        keyword,
        results,
        handleSearch,
        setKeyword,
        loadMore,
    }
}