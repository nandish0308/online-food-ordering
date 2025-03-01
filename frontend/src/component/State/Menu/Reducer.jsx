import * as actionType from "./ActionType";

const initialState={
    menuItems: [],
    loading:false,
    error:null,
    search:[],
    message:null, 
   };

   const menuItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CREATE_MENU_ITEMS_REQUEST:
        case actionType.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
        case actionType.DELETE_MENU_ITEM_REQUEST:
        case actionType.SEARCH_MENU_ITEM_REQUEST:
        case actionType.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
        
                    return{
                        ...state,
                        loading:true,
                        error:null,
                        message:null
                    };
        case actionType.CREATE_MENU_ITEMS_SUCCESS:
            return{
                ...state,
                loading:false,
                menuItems:[...state.menuItems,action.payload],
                message:"food created successfully"

            };
        case actionType.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
            return{
                ...state,
                loading:false,
                menuItems: action.payload

            };
        case actionType.DELETE_MENU_ITEM_SUCCESS:
            return{
                ...state,
                loading:false,
                menuItems:state.menuItems.filter(
                    (menuItem) => menuItem._id !== action.payload
                ),

            };
        case actionType.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
        console.log("update items id",action.payload.id)    
        return{
                ...state,
                loading:false,
                menuItems:state.menuItems.map(
                    (menuItem) => menuItem._id === action.payload.id?action.payload:menuItem
                ),

            };
                      
        case actionType.SEARCH_MENU_ITEM_SUCCESS:
        return{
                ...state,
                loading:false,
                search:action.payload

            };
        case actionType.CREATE_MENU_ITEMS_FAILURE:
      
        case actionType.DELETE_MENU_ITEM_FAILURE:
        case actionType.SEARCH_MENU_ITEM_FAILURE:
        case actionType.UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload,
                message:null
            };
            case actionType.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
                    return {
                        ...state,
                        loading: false,
                        error: action.payload || "❌ Error fetching menu items", // ✅ Use fallback message
                    };
            default:
                return state;
               
           
                     
                    
}    
   } ;
   export default menuItemReducer;     