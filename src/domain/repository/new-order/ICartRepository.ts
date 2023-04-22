import { Cart } from "@/domain/entities/new-order/cart";

export interface ICartRepository {
  get(): Promise<Cart>; 
}