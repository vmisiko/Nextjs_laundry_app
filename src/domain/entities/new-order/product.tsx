
export default interface Product {
    name: string,
    image: string,
    price: number,
    expressPrice: number,
    categoryId: number,
    quantity?: number,
    readonly totalAmount?:  number,
    addProduct?: () => void,
    subtractProduct?:() => void,
		setQuantity?: (val: string) => void,
}

export class ProductImp  implements Product{
    name: string = '';
    image: string = '';
    price: number = 0;
    expressPrice: number = 0;
    categoryId: number = 0;
    quantity: number = 0;

		constructor(product:Product) {
			this.name = product.name;
			this.image = product.image;
			this.price = product.price;
			this.expressPrice = product.expressPrice;
			this.categoryId = product.categoryId;
			this.quantity = product.quantity ?? 0;
		}	

    get totalAmount() {
      return this.quantity * this.price || this.price;
    }

		addProduct() {
			this.quantity++;
		}

		subtractProduct () {
			this.quantity--;
		}

		setQuantity(val: string) {
			this.quantity = parseInt(val);
		}
}
