
import { createSlice} from "@reduxjs/toolkit";


const initialState = {
	cartItems: [],
};

export const cartReducer = createSlice({
	name:"cart",
	initialState,
	reducers:{
		addToCart:(state:any,action)=>{

			const {id,title,description,price} = action.payload;
			const newCartItem={id,title,description,price}
			


			return{...state,
				cartItems:[...state.cartItems,newCartItem]};

		},

		removeFromCart: (state, action) => {
			return {
			  ...state,
			  cartItems: state.cartItems.filter(
				(item:any) => item.id !== action.payload.id)
			}
		  },

		  removeAllCart: (state) =>{

			return{
                 ...state,cartItems:[]
			}
		  }
	}

	
	

})
 export const{addToCart,removeFromCart,removeAllCart}=cartReducer.actions;