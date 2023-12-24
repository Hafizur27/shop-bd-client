import { combineReducers } from "redux";
import { cartReducer, userReducer } from "../reducer/reducer";

export const rootReducer = combineReducers({
    userReducer: userReducer,
    cartReducer: cartReducer
})