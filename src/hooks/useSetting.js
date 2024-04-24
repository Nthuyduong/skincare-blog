import { fetchSettingAction, updateSettingAction } from "@store/setting/setting.action";
import { getSettingMail, updateSettingMail, testSettingMail } from "@services/setting";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "@hooks/modal";

export const useSetting = () => {
    const { addToast, showLoading, hide } = useModal();
    const { setting } = useSelector((state) => state.setting);

    const dispatch = useDispatch();

    async function fetchSetting(type) {
        const res = await getSettingMail(type);
        if (res) {
            dispatch(fetchSettingAction(res.data));
        }
    }

    async function updateSetting(type, data) {
        showLoading();
        const res = await updateSettingMail(type, data);
        hide();
        if (res?.status == 'success') {
            addToast("Update setting success", "success");
            return true;
        } else {
            addToast("Update setting failed", "error");
            return false;
        }
    }

    async function testSetting(type, email) {
        showLoading();
        const res = await testSettingMail(type, email);
        hide();
        if (res?.status == 'success') {
            addToast("Test email success", "success");
            return true;
        } else {
            addToast("Test email failed", "error");
            return false;
        }
    }

    return {
        setting,
        fetchSetting,
        updateSetting,
        testSetting,
    };
}
