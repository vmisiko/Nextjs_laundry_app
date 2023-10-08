import Ploc from "@/core/presentation/ploc";
import { loadProducts, loadingProducts } from "./ProductListSlice";
import Product from "@/domain/entities/new-order/product";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { GetProductsUseCase } from "@/domain/use-cases/new-order/GetProductsUseCase";

class ProductCubit extends Ploc {
  private getProductsUseCase: GetProductsUseCase;
  constructor({
    store,
    getProductsUseCase,
  }: {
    store:ToolkitStore
    getProductsUseCase: GetProductsUseCase,
  }) {
    super(store);
    this.getProductsUseCase = getProductsUseCase;
  } 

  public get state(): any {
    return this.store.getState().product;
  }

  setProducts(products: Array<Product>):void {
    this.store.dispatch(loadProducts(products));
  }

  async getProducts(categoryId: string) {
    const products: Array<Product> = await this.getProductsUseCase.execute(categoryId);
    this.setProducts(products);
  }
  
  setLoading(val: boolean): void {
    this.store.dispatch(loadingProducts(val));
  }
}

export default ProductCubit;
