import CartCubit from "@/presentation/bloc/new-order/cart/cartCubit";
import ProductCubit from "@/presentation/bloc/new-order/product-list.ts/productCubit";
import store from "../store";
import { GetProductsUseCase } from "@/domain/use-cases/new-order/GetProductsUseCase";
import { ProductRepository } from "@/data/repository/new-order/ProductRepository";
import { GetCartUseCase } from "@/domain/use-cases/new-order/GetCartUseCase";
import { CartRepository } from "@/data/repository/new-order/CartRepository";
const   provideCartPloc = (): CartCubit => {
  const cartRepository = new CartRepository();
  const getCartUseCase = new GetCartUseCase(cartRepository);
  return new CartCubit({store, getCartUseCase});
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
