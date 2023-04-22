import Product from "@/domain/entities/new-order/product";

export interface IProductRepository {
  get(category: String): Promise<Array<Product>>; 
}