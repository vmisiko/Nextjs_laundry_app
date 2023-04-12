import { useEffect, useMemo, useState } from "react";
import Product, { ProductImp } from "@/domain/entities/new-order/product";
import TextInput from "@/presentation/components/TextInput";
import CartItem from "./CartItem";

const Cart = () => {
		const [value, setValue] = useState<string>();
		const [products, setProducts] = useState<Product[]>();

		useEffect(() => {
			setProducts([
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
			].map((product: Product) => new ProductImp(product)));
		}, []);

		const totalAmount: number = useMemo(() =>  products?.reduce((accumulator, currentValue) => accumulator + (currentValue.totalAmount || 0), 0) || 0, [products]);

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
					products && products.map((product:Product, index) => (					
						<CartItem product={product} key={index}  removeItem={ () =>products?.splice(index, 1)} />
					))
				}
				</section>

				<footer className="absolute w-full bottom-0 offset-y-0">
					<section className="flex justify-between mt-10">
						<span className="text-sm text-light-text">Sub Total</span>
						<span> Ksh {totalAmount}</span>
					</section>

					<section className="mt-5">
						<button className="bg-accent text-center w-full rounded-lg shadow py-3"> Continue to Payment</button>
					</section>
				</footer>
      </div>
			
    )
}
export default Cart;