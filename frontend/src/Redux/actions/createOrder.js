import { CART_EMPTY } from "../constants/cartConstants";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_MINE_LIST_FAIL, ORDER_MINE_LIST_REQUEST, ORDER_MINE_LIST_SUCCESS } from "../constants/orderConstants"
import Axios from 'axios';

export const createOrder=(order)=> async( dispatch, getState)=>{
    dispatch({type: ORDER_CREATE_REQUEST, payload: order});
    try {
        const {userSignin: {userInfo}}=getState();
        const {data }= await Axios.post("http://localhost:5000/api/orders/", order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        });
        dispatch({type: ORDER_CREATE_SUCCESS, payload:data.order});
        dispatch({type: CART_EMPTY});
        localStorage.removeItem('cartItems');
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            :error.message,
        });
        
    }
}



export const detailsOrder= (id)=>async(dispatch, getState)=>{
    dispatch({type: ORDER_DETAILS_REQUEST, payload: id});

    const {
        userSignin: {userInfo},
    }=getState();

    try {

        const { data } = await Axios.get(`http://localhost:5000/api/orders/${id}`, {
            headers: {Authorization: `Bearer ${userInfo.token}`}
        });
        dispatch({type: ORDER_DETAILS_SUCCESS, payload: data})
        
        
       } catch (error) {
        const message= error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    
        dispatch({type: ORDER_DETAILS_FAIL, payload: message});
    }
}


export const listOrderMine=()=> async( dispatch, getState)=>{
    dispatch({type: ORDER_MINE_LIST_REQUEST});
    const { userSignin: {userInfo}}= getState();

    try {
        
        const {data }= await Axios.get('http://localhost:5000/api/orders/mine', {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        });
        dispatch({type: ORDER_MINE_LIST_SUCCESS, payload: data})

    } catch (error) {
        const message= error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

        dispatch({type: ORDER_MINE_LIST_FAIL, payload:message});
        
    }
}
