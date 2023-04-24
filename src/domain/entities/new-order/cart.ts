import Product from "./product";

export interface ICartItem {
  product: Product;
  quantity: number;
  comment?: string;
  readonly totalPrice?: number;
}

export class CartItem implements ICartItem {
  product: Product;
  quantity: number = 1;
  comment: string = "";
  constructor({product, quantity}: {product:Product, quantity?: number},) {
    this.product = product;
    this.quantity = quantity || 1;
  }

  get totalPrice() {
    return this.product.price * this.quantity;
  }

}

export interface Icart {
  cartItems: ICartItem[];
  add?: (product: Product, quantity: number) => void;
  remove?: (itemId: number) => void;
  empty?: () => void;
  setItemComment: (itemId: number, comment: string) => void;
  readonly totalPrice?: number;
}

export class Cart implements Icart {
  cartItems: ICartItem[];
  constructor(cartItems?: ICartItem[]) {
    this.cartItems = cartItems || [];
  }

  get totalPrice(): number {
    const sum = (acc: number, cartItem: ICartItem) => {
      return acc + cartItem.product?.price * cartItem.quantity
    }
    return this.cartItems.reduce(sum, 0);
  }

  public add(product: Product, quantity: number) {
    const index = this.cartItems.findIndex((p) => p.product.id === product.id);
    if (index > -1) {
      const cartItem = new CartItem({product: this.cartItems[index].product, quantity: this.cartItems[index].quantity});
      cartItem.quantity = quantity || 1;
      const cartItems: ICartItem[] =  [
        ...this.cartItems.slice(0, index),
        cartItem,
        ...this.cartItems.slice(index + 1),
      ];
      
      this.cartItems = cartItems;
    } else {
      this.cartItems = [...this.cartItems, { product, quantity}];
    }
    return  new Cart(this.cartItems);

  }

  public addCart(product: Product) {
    const index = this.cartItems.findIndex((p) => p.product.id === product.id);
    if (index > -1) {
      (console.log('available'))
      const cartItem = new CartItem({product: this.cartItems[index].product, quantity:this.cartItems[index].quantity} );
      cartItem.quantity  = cartItem.quantity + 1

      const cartItems: ICartItem[] =  [
        ...this.cartItems.slice(0, index),
        cartItem,
        ...this.cartItems.slice(index + 1),
      ];
      
      this.cartItems = cartItems;
    } else {
      this.cartItems = [...this.cartItems, { product, quantity: 1}];
    }
    return  new Cart(this.cartItems);

  }

  public remove(itemId: number): Cart {

    const cartItems = this.cartItems.filter(
      (cartItem) => cartItem.product.id !== itemId
    );
    this.cartItems = cartItems;
    return  new Cart(this.cartItems);
  }

  public empty(): void {
    this.cartItems = [];
  } 

  public setItemComment(itemId: number, comment:string): Cart {
    const index = this.cartItems.findIndex((p) => p.product.id === itemId);

    if (index > -1) {
      const cartItem = new CartItem({product: this.cartItems[index].product, quantity: this.cartItems[index].quantity });
      cartItem.comment = comment;
      this.cartItems[index] = cartItem;
    }

    return new Cart(this.cartItems);
  }

  // public setComment(comment: string): Cart {

    
  // }
}
