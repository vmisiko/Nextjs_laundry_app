import { Cart } from "@/domain/entities/new-order/cart";
import { ICartRepository } from "@/domain/repository/new-order/ICartRepository";

export class GetCartUseCase {
  private iCartRepository: ICartRepository;

  constructor(iCartRepository: ICartRepository) {
    this.iCartRepository = iCartRepository;
  }

  execute(): Promise<Cart> {
    return this.iCartRepository.get();
  }
}
