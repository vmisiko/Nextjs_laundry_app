import Product from "@/domain/entities/new-order/product";
import { IProductRepository } from "@/domain/repository/new-order/IProductRepository";

export class GetProductsUseCase {
  private iproductRepository: IProductRepository;

  constructor(iproductRepository: IProductRepository) {
    this.iproductRepository = iproductRepository;
  }

  execute(category: string): Promise<Product[]> {
    return this.iproductRepository.get(category);
  }
}
