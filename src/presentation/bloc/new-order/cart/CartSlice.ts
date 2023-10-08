import { Cart } from "@/domain/entities/new-order/cart";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  carts: Cart,
  loading: boolean,
  error: String,
}

export const initialState: InitialState =  {
  carts: new Cart(),
  loading: false,
  error: "",
};
const productReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartLoaded: (state, action) => {
      state.carts = action.payload;
    },
    addToCart: (state, action) => {
      const cart = state.carts.addCart(action.payload);
      state.carts = cart;
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
export const selectCartState = (state: any) => state.cart; 
export const selectError = (state: any) => state.error;
export const selectLoading = (state: any) => state.loading;