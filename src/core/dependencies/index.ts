import CartCubit from "@/presentation/bloc/new-order/cart/cartCubit";
import ProductCubit from "@/presentation/bloc/new-order/product-list.ts/productCubit";
import store from "../store";
import { GetProductsUseCase } from "@/domain/use-cases/new-order/GetProductsUseCase";
import { ProductRepository } from "@/data/repository/new-order/ProductRepository";
const   provideCartPloc = (): CartCubit => {
  return new CartCubit({store});
}

const provideProductsPloc = (): ProductCubit => {
  const productRepository = new ProductRepository();
  const getProductsUseCase = new GetProductsUseCase(productRepository);
  return new ProductCubit({store, getProductsUseCase});
}

export const dependenciesLocator = {
  provideProductsPloc,
  provideCartPloc,
};
