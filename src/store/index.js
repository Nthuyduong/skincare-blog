import { configureStore  } from '@reduxjs/toolkit';

import modalReducer from './modal';
import categoryReducer from './newcategory';
import subcateReducer from './newsubcate';
import deleteReducer from './deletepopup';
import postReducer from "./post";
import categoriesReducer from "./categories";
import ingredientReducer from "./ingredients";
import adminReducer from "./admin";

// khai báo các reducer trong store
// Những cái data chung như modal, alert, , ... thì nên tạo reducer riêng
// Những cái lấy dữ liệu từ backend về thì nên phải có reducer user, product, category, ...
const reducer = {
    modal: modalReducer,
    category: categoryReducer,
    subcate: subcateReducer,
    deletepopup: deleteReducer,
    post: postReducer,
    categories: categoriesReducer,
    ingredients: ingredientReducer,
    admin: adminReducer
    // user: userReducer,
};

// khởi tạo store, để xử dụng cho middleware redux
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;