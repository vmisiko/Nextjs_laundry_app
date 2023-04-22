import Ploc from "@/core/presentation/ploc";
import { cartLoaded,addToCart, loadingCart } from "./CartSlice";
import Product from "@/domain/entities/new-order/product";
import { Cart } from "@/domain/entities/new-order/cart";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { GetCartUseCase } from "@/domain/use-cases/new-order/GetCartUseCase";

class CartCubit extends Ploc {
  private getCartUseCase: GetCartUseCase;
  constructor({
    store,
    getCartUseCase,
  }: {
    store:ToolkitStore,
    getCartUseCase: GetCartUseCase,
  }) {
    super(store);
    this.getCartUseCase = getCartUseCase;
  } 
  get state(): any {
    return super.state;
  }
  setCart(cart: Cart):void {
    this.store.dispatch(cartLoaded(cart));
  }
  async getCart() {
    const response = await this.getCartUseCase.execute();
    this.setCart(response);
    console.log(this.state);
  }
  setLoading(val: boolean): void {
    this.store.dispatch(loadingCart(val));
  }
  addToCart(product: Product): void {
    this.store.dispatch(addToCart(product));
  }
}

export default CartCubit;