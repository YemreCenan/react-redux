
import {combineReducers} from "redux";


import { configureStore} from '@reduxjs/toolkit'
import { cartReducer } from "../reducers/cartReducers";

/*export const rootReducer = combineReducers({
	cart: cartReducer,
});
*/

export const store = configureStore({
	reducer:{
		cart: cartReducer.reducer
	},
	
})

//Bana bu kod satırını detaylı bir şekilde yorumlar mısın lütfen ?