import { Api } from "../../config/Api";
import { GET_RESTAURANT_ORDER_FAILURE, GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";



export const updateOrderStatus= ({orderId,OrderStatus,jwt}) =>{
     return async (dispatch) => {
         dispatch({type: UPDATE_ORDER_STATUS_REQUEST});
         try {
             const response = await Api.put(`/api/admin/orders/${orderId}/${OrderStatus}`,
                {},
                 {
                 headers: {
                     Authorization: `Bearer ${jwt}`,
             },
         });
         const updateOrder = response.data; 
         
         console.log("update order",updateOrder)
         dispatch({type: UPDATE_ORDER_STATUS_SUCCESS, payload:updateOrder});
     } catch (error) {
         console.log("catch error",error)
         dispatch({type: UPDATE_ORDER_STATUS_FAILURE,payload:error});
     }
 }   
 };
export const fetchRestaurantsOrder= ({restaurantId,OrderStatus,jwt}) =>{
     return async (dispatch) => {
         dispatch({type: GET_RESTAURANT_ORDER_REQUEST});
         try {
             const {data}= await Api.get(`/api/admin/orders/restaurant/${restaurantId}`,{
                params: {order_status:OrderStatus},
             
                 
                 headers: {
                     Authorization: `Bearer ${jwt}`,
             },
         });
         const orders = data; 

         console.log(" restaurant order ------",orders)
         dispatch({type: GET_RESTAURANT_ORDER_SUCCESS, payload:orders});
     } catch (error) {
         console.log("catch error",error)
         dispatch({type: GET_RESTAURANT_ORDER_FAILURE,payload:error});
     }
 }   
 };