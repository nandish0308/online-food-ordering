
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer";
import menuItemReducer from "./Menu/Reducer";
import cartReducer from "./Cart/Reducer";
import orderReducer from "./Order/Reducer";
import restaurantsOrderReducer from "./Restaurantorder/Reducer";
import ingredientReducer from "./Ingredients/Reducer";
import { configureStore } from "@reduxjs/toolkit";




const rootReducer={
    auth:authReducer,
    restaurant:restaurantReducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer,
    restaurantsOrder:restaurantsOrderReducer,
    ingredient:ingredientReducer,
    
};



export const store= configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});