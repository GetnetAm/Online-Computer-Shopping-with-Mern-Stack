import axios from "axios";
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SIGNOUT, USER_SIGNIN_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants"



export const register =(name, email, password)=> async(dispatch)=>{
    dispatch({type: USER_REGISTER_REQUEST, payload: {name, email: password}})
    try {
        const {data}= await axios.post('http://localhost:5000/api/users/register', {name, email, password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data})
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
             error.response && error.response.data.message
                ? error.response.data.message
                :error.message,
        });
    }
};




export const signin =(email, password)=> async(dispatch)=>{
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email: password}})
    try {
        const {data}= await axios.post('http://localhost:5000/api/users/signin', {email, password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
             error.response && error.response.data.message
                ? error.response.data.message
                :error.message,
        });
    }
};


export const detailsUser=(id)=>async (dispatch, getState)=>{
    dispatch({type: USER_DETAILS_REQUEST, payload: id});

    const {
        userSignin: {userInfo},
    }=getState();

    try {
        const { data } = await axios.get(`http://localhost:5000/api/users/${id}`, {
            headers: {Authorization: `Bearer ${userInfo.token}`}
        });
        dispatch({type: USER_DETAILS_SUCCESS, payload: data})
        
    } catch (error) {
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        :error.message
        dispatch({type:USER_DETAILS_FAIL, payload:message})
        
    }
}


export const updateUserProfile=(user)=>async (dispatch, getState)=>{
    dispatch({type: USER_UPDATE_PROFILE_REQUEST, payload: user});

    const {
        userSignin: {userInfo},
    }=getState();

    try {
        const { data } = await axios.put(`http://localhost:5000/api/users/profile`,user, {
            headers: {Authorization: `Bearer ${userInfo.token}`}
        });
        dispatch({type: USER_UPDATE_PROFILE_SUCCESS, payload: data});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));

        
    } catch (error) {
        const message=
        error.response && error.response.data.message
        ? error.response.data.message
        :error.message
        dispatch({type:USER_UPDATE_PROFILE_FAIL, payload:message})
        
    }
}







export const signout =()=>(dispatch)=>{
    localStorage.removeItem('userInfo');
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    dispatch({type: USER_SIGNIN_SIGNOUT});
}