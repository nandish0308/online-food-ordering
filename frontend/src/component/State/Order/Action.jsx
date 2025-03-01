import { Api } from "../../config/Api";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDER_FAILURE, GET_USERS_ORDER_REQUEST, GET_USERS_ORDER_SUCCESS } from "./ActionType";

export const createOrder = (reqData) =>{
    return async (dispatch) => {
        dispatch({type: CREATE_ORDER_REQUEST});
        try {
            const {data}= await Api.post(`/api/order` , reqData.order,{
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
            },
        });
        // if(data.payment_url){
        //     window.location.href=data.payment_url;
        // }
        dispatch({type: CREATE_ORDER_SUCCESS, payload:res.data});
       console.log("created order data",data)
    } catch (error) {
        console.log("error",error);
        dispatch({type: CREATE_ORDER_FAILURE,payload:error});
    }
    };
};
export const getUserOrders = (jwt) =>{
    return async (dispatch) => {
        dispatch({type: GET_USERS_ORDER_REQUEST});
        try {
            const {data}= await Api.get(`/api/order/user` ,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
            },
        });
        
        dispatch({type: GET_USERS_ORDER_SUCCESS, payload:res.data});
       console.log("users order ",data)
    } catch (error) {
        console.log("error",error);
        dispatch({type: GET_USERS_ORDER_FAILURE,payload:error});
    }
    };
};