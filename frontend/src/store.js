import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk";
// import data from "./data";
import {composeWithDevTools } from "@redux-devtools/extension"
import { productDetailsReducer, productListReducer } from "./Redux/reducer/productListReducer";
import { cartReducer } from "./Redux/reducer/cartReducer";
import { userDetailsReducer, userRegisterReducer, userSignReducer, userUpdateProfileReducer } from "./Redux/reducer/userSigninReducer";
import { orderCreateReducer, orderDetailsReducer, orderMineListReducer } from "./Redux/reducer/orderReducers";

const initialState ={
   
    cart:{
        cartItems:localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],

        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        :{},

        paymentMethod:"PayPal",
    },

    userSignin:{
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        :null,

    },
};
const reducer= combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSignReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
});

const middleware=[thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;