import { Api } from "../../config/Api";
import {  CREATE_MENU_ITEMS_FAILURE, CREATE_MENU_ITEMS_REQUEST, CREATE_MENU_ITEMS_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType";

export const createMenuItem = ({menu,jwt}) =>{
    return async (dispatch) => {
        dispatch({type: CREATE_MENU_ITEMS_REQUEST});
        try {
            const {data} = await Api.post("/api/admin/food", menu,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({type: CREATE_MENU_ITEMS_SUCCESS, payload: data});
        console.log("created menu",data);
    } catch (error) {
        console.log("catch error",error)
        dispatch({type: CREATE_MENU_ITEMS_FAILURE,payload:error});
    }
    }
};




// export const getMenuItemsByRestaurant= (reqData) =>{
//     return async (dispatch) => {
//         dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST})
//         try {
//             const {data} = await Api.get(`/api/food/restaurant/${reqData.restaurantId}?
//                 vegetarian?=${reqData.vegetarian}
//                 &seasonal=${reqData.seasonal}
//                 &nonveg=${reqData.noneg}
//                 &food_category=${reqData.foodCategory}`,
//                 {
//                 headers: {
//                     Authorization: `Bearer ${reqData.jwt}`,
//             },
//         });
//         dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data});
//         console.log(" menu item by restaurant ",data);
//     } catch (error) {
//         console.log("catch error",error)
//         dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,payload:error});
//     }
//     }
// };
export const getMenuItemsByRestaurant = (reqData) => async (dispatch) => {
    try {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });

        if (!reqData.restaurantId) {
            throw new Error("restaurantId is missing in reqData");
        }

        // ✅ Fix: Ensure all required parameters are included
        const queryParams = new URLSearchParams({
            vegetarian: reqData.vegetarian ?? false, // Default to false if undefined
            seasonal: reqData.seasonal ?? false,
            nonVeg: reqData.nonVeg ?? false, // ✅ Fix: Ensure nonVeg is correctly sent
            foodcategory: reqData.foodCategory || "",
        });

        const apiUrl = `/api/food/restaurant/${reqData.restaurantId}?${queryParams.toString()}`;
        console.log("🟢 Sending request to:", apiUrl); // ✅ Debugging log

        const { data } = await Api.get(apiUrl, {
            headers: { Authorization: `Bearer ${reqData.jwt}` },
        });

        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
        console.log("✅ Menu items fetched:", data);
    } catch (error) {
        console.error("❌ Error fetching menu items:", error.response?.data || error.message);
        dispatch({
            type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
            payload: error.response?.data || error.message, // ✅ Fix: Dispatch only serializable errors
        });
    }
};




export const searchMenuItems= ({keyword,jwt}) =>{
    return async (dispatch) => {
        dispatch({type: SEARCH_MENU_ITEM_REQUEST});
        try {
            const {data} = await Api.get(`/api/food/search?name=${keyword}`,
          {
                headers: {
                    Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({type: SEARCH_MENU_ITEM_SUCCESS, payload: data});
        console.log(" data ---------- ",data);
    } catch (error) {
        console.log("catch error",error)
        dispatch({type: SEARCH_MENU_ITEM_FAILURE,payload:error});
    }
    }
};
export const updateMenuItemsAvailability= ({foodId, jwt}) =>{
    return async (dispatch) => {
        dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
        try {
            const {data} = await Api.put(`/api/admin/food/${foodId}`,
                {},
                {
                headers: {
                    Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data});
        console.log(" update MenuItems Availability ",data);
    } catch (error) {
        console.log("catch error",error)
        dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,payload:error});
    }
    }
};
export const deleteFoodAction= ({foodId, jwt}) =>
    async (dispatch) => {
        dispatch({type: DELETE_MENU_ITEM_REQUEST});
        try {
            const {data} = await Api.delete(`/api/admin/food/${foodId}`,
                {},
                {
                headers: {
                    Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({type: DELETE_MENU_ITEM_SUCCESS, payload:foodId});
        console.log(" delete food ",data);
    } catch (error) {
        console.log("catch error",error)
        dispatch({type: DELETE_MENU_ITEM_FAILURE,payload:error});
    }
    
};