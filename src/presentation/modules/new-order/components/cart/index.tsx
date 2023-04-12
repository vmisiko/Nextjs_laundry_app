import { useState } from "react";
import ProductCard from "@/presentation/modules/new-order/components/ProductCard";
import Product from "@/domain/entities/new-order/product";
import TextInput from "@/presentation/components/TextInput";
import CartItem from "./CartItem";

const Cart = () => {
		const [value, setValue] = useState<string>();

    return (
      <div className="">
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
					<CartItem />
				</section>
      </div>
    )
}
export default Cart;