import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modal';
import categoryReducer from './newcategory';

// khai báo các reducer trong store
// Những cái data chung như modal, alert, , ... thì nên tạo reducer riêng
// Những cái lấy dữ liệu từ backend về thì nên phải có reducer user, product, category, ...
const reducer = {
    modal: modalReducer,
    category: categoryReducer,
    // user: userReducer,
};

// khởi tạo store, để xử dụng cho middleware redux
const store = configureStore({
    reducer,
});

export default store;