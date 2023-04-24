import Product from "@/domain/entities/new-order/product";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductsState {
  loading: boolean,
  products: Array<Product>,
  error: string,
};

export const productsInitialState = {
  loading: false,
  products: [],
  error: "",
};

const cartReducer = createSlice({
  name: "product",
  initialState: productsInitialState,
  reducers: {
    loadingProducts: (state, action) => {
      state.loading = action.payload;
    },
    loadProducts: (state, action) => {
      state.products = action.payload
    },
    errorNotif: (state, action) =>{
      return {
        ...state,
        error: action.payload
      }
    }

  }
});

export default cartReducer.reducer;
export const { loadProducts, errorNotif, loadingProducts } = cartReducer.actions
export const selectProductState = (state: any) => state.product; 
export const selectError = (state: any) => state.error;
export const selectLoading = (state: any) => state.loading;