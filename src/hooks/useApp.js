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
import { getApiUserInfo } from "../services/auth";
import { setUserAction } from "../store/app/app.action";
import { USER_ROUTERS } from "../utils/constants";
import { useRouter } from "next/router";

export const useApp = () => {
    const { addToast, showLoading, hide } = useModal();
    const { keyword, results, paginate, loadingSearch } = useSelector((state) => state.app);
    const { user } = useSelector((state) => state.app);
    const router = useRouter();

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

    async function subscribeWithName(name, email) {
        showLoading();
        const res = await subscribeApi(name, email);
        if (res.status) {
            addToast('Thanks you for join our newsletter! Welcome to Radiance Aura Home.', 'success');
        } else {
            addToast(res.msg, 'error');
        }
    }

    const getUserInfo = async () => {
        if (localStorage.getItem("access_token")) {
            if(USER_ROUTERS.includes(router.route)){
                let res = null;
                if(!user?.id){
                    res = await getApiUserInfo();
                } else {
                    res = user
                }
                if (res) {
                    dispatch(setUserAction(res));
                }
            }
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
        getUserInfo,
        user,
    }
}