
import * as actionType from "./ActionType";

const initialState={
    restaurants: [],
    usersRestaurant:null,
    restaurant:{},
    loading:false,
    error:null,
    jwt:localStorage.getItem("jwt") || null,
    events:[],
    restaurantEvents: [],
    category:[],
   };

   const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CREATE_RESTAURANT_REQUEST:
        case actionType.GET_ALL_RESTAURANT_REQUEST:
        case actionType.DELETE_RESTAURANT_REQUEST:
        case actionType.UPDATE_RESTAURANT_REQUEST:
        case actionType.GET_RESTAURANT_BY_ID_REQUEST:
        case actionType.CREATE_CATEGORY_REQUEST:
        case actionType.GET_RESTAURANTS_CATEGORY_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
            };
            case actionType.CREATE_RESTAURANT_SUCCESS:
                return{
                    ...state,
                loading:true,
                usersRestaurant:action.payload

                };
            case actionType.GET_ALL_RESTAURANT_SUCCESS:
                return{
                    ...state,
                loading:true,
                restaurants:action.payload

                };
                case actionType.GET_RESTAURANT_BY_ID_SUCCESS:
                    return{
                        ...state,
                    loading:true,
                    restaurant:action.payload
    
                    };
           
            case actionType.GET_RESTAURANT_BY_USER_ID_SUCCESS:
            case actionType.UPDATE_RESTAURANT_STATUS_SUCCESS:
            case actionType.UPDATE_RESTAURANT_SUCCESS:
                return{
                    ...state,
                loading:true,
                usersRestaurant:action.payload

                };
                case actionType.DELETE_RESTAURANT_SUCCESS:
                    return{
                        ...state,
                    loading:true,
                    restaurants:state.restaurants.filter(
                        (item) => item.id !==action.payload
                    ),
                    usersRestaurant:state.usersRestaurant.filter(
                        (item) => item.id !==action.payload
                    )
    
                    };
                    case actionType.CREATE_EVENTS_SUCCESS:
                        return{
                            ...state,
                        loading:false,
                        events:[...state.events, action.payload],
                        restaurantEvents: [...state.restaurantEvents, action.payload],
        
                        };
          
            case actionType.GET_ALL_EVENTS_SUCCESS:
                return{
                    ...state,
                loading:false,
                events:action.payload

                };
           
            case actionType.GET_RESTAURANTS_EVENTS_SUCCESS:
                return{
                    ...state,
                loading:false,
                restaurantEvents:action.payload

                };

                case actionType.DELETE_EVENTS_SUCCESS:
                    return{
                        ...state,
                    loading:false,
                    events: state.events.filter((item) => item.id !== action.payload),
                    restaurantEvents: state.restaurantEvents.filter(
                        (item) => item.id !== action.payload),
    
                    };
                    
                case actionType.CREATE_CATEGORY_SUCCESS:
                
                    return{
                        ...state,
                    loading:false,
                    category: [...state.category,action.payload],
    
                    };
                    case actionType.GET_RESTAURANTS_CATEGORY_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            category: action.payload, 
                        };
                    

                    case actionType.CREATE_RESTAURANT_FAILURE:
                        case actionType.GET_ALL_RESTAURANT_FAILURE:
                        case actionType.DELETE_RESTAURANT_FAILURE:
                        case actionType.UPDATE_RESTAURANT_FAILURE:
                        case actionType.GET_RESTAURANT_BY_ID_FAILURE:
                       case actionType.CREATE_EVENTS_FAILURE:
                        case actionType.CREATE_CATEGORY_FAILURE:
                        case actionType.GET_RESTAURANTS_CATEGORY_FAILURE:
                            return{
                                ...state,
                                loading:true,
                                error:action.payload,
                            };
                            default:
                                return state;
    }
    
   };
   export default restaurantReducer; 