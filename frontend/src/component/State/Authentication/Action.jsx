import axios from "axios"
import { ADD_TO_FAVOURITE_FAILURE, ADD_TO_FAVOURITE_REQUEST, ADD_TO_FAVOURITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGOUT,  REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { Api, API_URL } from "../../config/Api"

export const registeruser=(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const {data}=await axios.post(`${API_URL}/auth/register`,reqData.userData)
        if(data.jwt)localStorage.setItem("jwt",data.jwt);
        
        dispatch(getUser(data.jwt));
        if(data.role==="ROLE_RESTAURANT-OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
        console.log("register success",data)

    }catch(error){
        dispatch({type:REGISTER_FAILURE,payload:error})
        console.log("error",error)
    }
}
export const loginuser=(reqData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const {data}=await axios.post(`${API_URL}/auth/login`,reqData.userData)
        if(data.jwt)localStorage.setItem("jwt",data.jwt);

        dispatch(getUser(data.jwt));
        if(data.role==="ROLE_RESTAURANT-OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
        console.log("login success",data)

    }catch(error){
        dispatch({type:LOGIN_FAILURE,payload:error})
        console.log("error",error)
    }
}
export const getUser=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try{
        const {data}=await axios.get(`${API_URL}/api/users/profile`,{
             headers:{
                Authorization:`Bearer ${jwt}`
             }
        })
       
        dispatch({type:GET_USER_SUCCESS,payload:data})
        console.log("user profile",data)

    }catch(error){
        dispatch({type:GET_USER_FAILURE,payload: error.message });
        console.log("error",error)
    }
}
// export const addToFavorite=(jwt,restaurantId)=>async(dispatch)=>{
//     dispatch({type:ADD_TO_FAVOURITE_REQUEST})
//     try{
//         const {data}=await Api.put(`/api/restaurants/${restaurantId}/addToFavorites`,
//             {
//              headers:{
//                 Authorization:`Bearer ${jwt}`
//              }
//         })
       
//         dispatch({type:ADD_TO_FAVOURITE_SUCCESS,payload:data})
//         console.log("added to favorite",data)

//     }catch(error){
//         dispatch({type:ADD_TO_FAVOURITE_FAILURE,payload:error})
//         console.log("error",error)
//     }
// }
export const addToFavorite = (restaurantId, jwt) => async (dispatch) => {
  dispatch({ type: ADD_TO_FAVOURITE_REQUEST });
  try {
    const { data } = await Api.put(`/api/restaurants/${restaurantId}/addToFavorites`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({ type: ADD_TO_FAVOURITE_SUCCESS, payload: data });
    console.log("added to favorite", data);
  } catch (error) {
    dispatch({ type: ADD_TO_FAVOURITE_FAILURE, payload: error });
    console.log("error", error);
  }
};
export const logout = () => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch({ type: LOGOUT }); // Use the correct string constant
    console.log("Logout success");
  } catch (error) {
    console.log("Error:", error);
  }
};

