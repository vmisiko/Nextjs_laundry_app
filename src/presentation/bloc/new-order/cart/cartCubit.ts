import Ploc from "@/core/presentation/ploc";
import { cartLoaded,addToCart, loadingCart } from "./CartSlice";
import Product from "@/domain/entities/new-order/product";
import { Cart } from "@/domain/entities/new-order/cart";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

class CartCubit extends Ploc {
  constructor({
    store,
  }: {
    store:ToolkitStore
  }) {
    super(store);
  } 
  get state(): any {
    return super.state.cart;
  }
  setCart(cart: Cart):void {
    this.store.dispatch(cartLoaded(cart));
  }
  setLoading(val: boolean): void {
    this.store.dispatch(loadingCart, val);
  }
  addToCart(product: Product): void {
    this.store.dispatch(addToCart(product));
  }
}

export default CartCubit;