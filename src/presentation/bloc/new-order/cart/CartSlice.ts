import { Cart } from "@/domain/entities/new-order/cart";
import { createSlice } from "@reduxjs/toolkit";
export interface InitialState {
  cart: Cart,
  loading: boolean,
  error: String,
}

export const initialState: InitialState =  {
  cart: new Cart(),
  loading: false,
  error: "",
};
const productReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartLoaded: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.add(action.payload, 1);
    },
    loadingCart: (state, action) =>{
      return {
        ...state,
        loading: true,
      }
    },
    errorNotif: (state, action) =>{
      return {
        ...state,
        error: action.payload
      }
    }

  }
});

export default productReducer.reducer;

export const { cartLoaded,loadingCart, errorNotif, addToCart } =  productReducer.actions;
export const selectCart = (state: any) => state.cart; 
export const selectError = (state: any) => state.error;
export const selectLoading = (state: any) => state.loading;