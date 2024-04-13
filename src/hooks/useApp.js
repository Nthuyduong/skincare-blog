import { 
    getSearchResults, 
    sendContactForm, 
    subscribeApi 
} from "@services/app";
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
        if (search) {
            dispatch(setLoadingAction(true));
            const res = await getSearchResults(search, limit);
            dispatch(setLoadingAction(false));
            
            if (res) {
                dispatch(fetchResultsAction(res));
            }
        } else {
            dispatch(fetchResultsAction({
                results: [],
                paginate: {
                    limit: 10,
                    last: 0,
                    current: 1,
                    count: 0
                }
            }));
        }
        hide();
    }

    async function loadMore() {
        showLoading()
        const res = await getSearchResults(keyword, (parseInt(paginate.current) + 1));
        hide();
        if (res) {
            dispatch(fetchLoadMoreAction(res));
        }
    }

    async function sendContact(data) {
        showLoading();
        const res = await sendContactForm(data);
        hide();
        if (res) {
            addToast('Message sent successfully!', 'success');
        }
    }

    async function subscribe(email) {
        showLoading();
        const res = await subscribeApi(email);
        hide();
        if (res.status) {
            addToast('Subscribed successfully!', 'success');
        } else {
            addToast(res.msg, 'error');
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
        sendContact,
        subscribe,
    }
}