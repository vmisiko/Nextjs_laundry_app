import { useEffect, useMemo, useState } from "react";
import Product from "@/domain/entities/new-order/product";
import TextInput from "@/presentation/components/TextInput";
import CartItem from "./CartItem";
import { Cart as CartEntity,CartItem as CartItemEntity, Icart } from "@/domain/entities/new-order/cart";


const Cart = () => {
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
	].map((product: Product) => new CartItemEntity(product))
	
		const [value, setValue] = useState<string>();
		const [products, setProducts] = useState<CartItemEntity[]>(productSet);
        const [carts, setCarts] = useState<CartEntity>();

		useEffect(() => {
			if (!carts) {
				setCarts(new CartEntity(products));
			}
		}, [carts]);

    return (
      <div className="relative h-screen">
				<section className="flex mt-5 w-full justify-between">
				<TextInput
						name="Search Customer" 
						label="search Product" 
						onChange={(e) => setValue(e.target.value)} 
						value={value}
						placeholder="Search"
						type="text"
				/>

				<button className="rounded-lg h-12 border border-accent px-4 mt-3"> + </button>
				</section>
				
				<section className="grid grid-cols-4 mt-10">
						<div className="col-span-2">
								<span> item</span>
						</div>
						<div className="text-end">
								<span >Qty</span>
						</div>
						<div className="text-end">
								<span>Price</span>
						</div>
				</section>

				<section>
				{	
					carts?.cartItems && carts?.cartItems.map((cartItem, index: number) => (
						<CartItem 
						cartItem={cartItem}
						key={index}
						removeItem={ () => setCarts(carts.remove(cartItem.product.id))}
						addItem={(amount: number) =>setCarts(carts.add(cartItem.product, amount))}
						setComment={(comment: string) => setCarts(carts.setItemComment(cartItem.product.id, comment))}
						/>
					))
				}
				</section>

				<footer className="absolute w-full bottom-0 offset-y-0">
					<section className="flex justify-between mt-10">
						<span className="text-sm text-light-text">Sub Total</span>
						<span> Ksh {carts?.totalPrice}</span>
					</section>

					<section className="mt-5">
						<button className="bg-accent text-center w-full rounded-lg shadow py-3"> Continue to Payment</button>
					</section>
				</footer>
      </div>		
    )
}
export default Cart;