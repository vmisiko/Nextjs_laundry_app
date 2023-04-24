import { Cart, CartItem } from "@/domain/entities/new-order/cart";
import Product from "@/domain/entities/new-order/product";
import { ICartRepository } from "@/domain/repository/new-order/ICartRepository";
const productSet = [
  {
    id: 1,
    name: 'duvet',
    image: "shirt.png",
    price: 100,
    expressPrice: 150,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'carpet',
    image: "shirt.png",
    price: 100,
    expressPrice: 150,
    categoryId: 2,
  },
  {
    id: 3,
    name: 'Blouse',
    image: "shirt.png",
    price: 100,
    expressPrice: 150,
    categoryId: 3,
  },
].map((product: Product) => new CartItem({product: product}));

export class CartRepository implements ICartRepository {
  async get(): Promise<Cart> {
    return new Promise((resolve, reject) => {
      try {
        resolve( new Cart(productSet))
      } catch(error) {
        reject(error);
      }
    });
  
  }
}