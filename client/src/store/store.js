import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsSlice from "./admin/products-slice";
import shopProductsSlice from "./shop/products-slice";
import shopCartSlice from "./shop/cart-slice";
import shopOrderSlice from "./shop/order-slice";
import commonFeatureSlice from "./common-slice";
import shopReviewSlice from "./shop/review-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    shopOrder: shopOrderSlice,
    shopReview: shopReviewSlice,

    commonFeature: commonFeatureSlice,
  },
});

export default store;
