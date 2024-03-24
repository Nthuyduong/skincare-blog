import { getSearchResults } from "@services/app";
import { 
    fetchKeywordAction,
    fetchResultsAction,
    fetchLoadMoreAction,
    setLoadingAction,
} from "@store/app/app.action";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "@hooks/modal";
import { showModal, hideModal } from "@store/modal/modal.action";

export const useApp = () => {
    const { addToast, showLoading, hide } = useModal();
    const { keyword, results, paginate, loadingSearch } = useSelector((state) => state.app);

    const dispatch = useDispatch();

    async function setKeyword(keywordinput) {
        dispatch((fetchKeywordAction(keywordinput)));
    }

    async function handleSearch(search = '', limit = 10) {
        showLoading()
        dispatch(setLoadingAction(true));
        const res = await getSearchResults(search, limit);
        dispatch(setLoadingAction(false));
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
        loadingSearch,
        handleSearch,
        setKeyword,
        loadMore,
    }
}