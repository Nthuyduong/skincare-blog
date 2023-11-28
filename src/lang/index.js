import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguage, setLanguage } from '../utils/local-store';

// Tiếng anh
import translationEN from './en';
// Tiếng việt
import translationVN from './vn';

// Khởi tạo biến resources để chứa các ngôn ngữ
const resources = {
    en: {
        translation: translationEN
    },
    vn: {
        translation: translationVN
    },
}

// Khởi tạo middleware i18n để thay đổi ngoại ngữ
i18n.use(initReactI18next)
    .init({
        resources,
        // giá trị mặc định là lấy từ local storage
        fallbackLng: getLanguage(),
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    })

// Thay đổi ngoại ngữ
export const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
}

export default i18n;