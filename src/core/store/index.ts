import { Middleware, configureStore } from "@reduxjs/toolkit";
import CartReducer from "@/presentation/bloc/new-order/cart/CartSlice";
import productReducer from "@/presentation/bloc/new-order/product-list.ts/ProductListSlice";

// const middleware: Middleware = (store) => (next) => (action) => {
//   console.log('Dispatching:', action);
//   return next(action);
// };

const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: productReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;


