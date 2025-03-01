import { Api } from "../../config/Api";
import { CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS } from "./ActionType";

export const getIngredientsofRestaurant= ({id,jwt}) =>{
     return async (dispatch) => {
        
         try {
             const response= await Api.get(`/api/admin/ingredients/restaurant/${id}`,{
                
             
                 
                 headers: {
                     Authorization: `Bearer ${jwt}`,
             },
         });

         console.log("get all ingredients",response.data)
         dispatch({type: GET_INGREDIENTS, payload:response.data});
     } catch (error) {
         console.log("catch error",error)
         
     }
 }   
 };
 export const createIngredient= ({data,jwt}) =>{
    return async (dispatch) => {
        dispatch({type: CREATE_INGREDIENT_REQUEST});
        try {
            const response= await Api.post(`/api/admin/ingredients`, data,{
             
            
                
                headers: {
                    Authorization: `Bearer ${jwt}`,
            },
        });
       

        console.log("create ingredients",response.data)
        dispatch({type: CREATE_INGREDIENT_SUCCESS, payload:response.data});
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:CREATE_INGREDIENT_FAILURE,payload:error});
    }
}   
};
 export const createIngredientCategory= ({data,jwt}) =>{
   console.log("data",data,"jwt",jwt)
    return async (dispatch) => {
        dispatch({type: CREATE_INGREDIENT_CATEGORY_REQUEST});
        try {
            const response= await Api.post(`/api/admin/ingredients/category`, data,{
             
            
                
                headers: {
                    Authorization: `Bearer ${jwt}`,
            },
        });
       

        console.log("create ingredients category",response.data)
        dispatch({type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload:response.data});
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:CREATE_INGREDIENT_CATEGORY_FAILURE,payload:error});
    }
}   
};
export const getIngredientCategory= ({id,jwt}) =>{
    return async (dispatch) => {
        dispatch({type: GET_INGREDIENT_CATEGORY_REQUEST});
        
        try {
            const response= await Api.get(`/api/admin/ingredients/restaurant/${id}/category`,
                 
                 {
             
            
                
                headers: {
                    Authorization: `Bearer ${jwt}`,
            },
        });
       

        console.log("get ingredients category",response.data)
        dispatch({type: GET_INGREDIENT_CATEGORY_SUCCESS, payload:response.data});
    } catch (error) {
        dispatch({type:GET_INGREDIENT_CATEGORY_FAILURE, payload:error});
        console.log("catch error",error)
        
    }
}   
};
 export const updateStockOfIngredient= ({id,jwt}) =>{
    return async (dispatch) => {
        
        try {
            const {data}= await Api.put(`/api/admin/ingredients/${id}/stoke`,
                 {},
                 {
             
            
                
                headers: {
                    Authorization: `Bearer ${jwt}`,
            },
        });
       

        console.log("Update ingredients stock",data)
        dispatch({type: UPDATE_STOCK, payload:data});
    } catch (error) {
        console.log("catch error",error)
        
    }
}   
};