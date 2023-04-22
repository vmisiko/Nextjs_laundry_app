import { useEffect, useMemo, useState } from "react";
import Product from "@/domain/entities/new-order/product";
import TextInput from "@/presentation/components/TextInput";
import CartItem from "./CartItem";
import { Cart as CartEntity, CartItem as CartItemEntity } from "@/domain/entities/new-order/cart";
import { useCartBloc } from "@/pages/_app";
import { useBlocState } from "@/core/useBlocState";
import { useSelector } from "react-redux";
import { selectCart } from "@/presentation/bloc/new-order/cart/CartSlice";


const Cart = () => {
    const ploc = useCartBloc();
    const state = useBlocState(ploc);
    const [value, setValue] = useState<string>();
    const counter = useSelector(selectCart);
    useEffect(() => {
        ploc.getCart();
        console.log(counter, "Counter");
    }, [ploc, state, counter]);

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
					state.carts?.cartItems && state.carts?.cartItems.map((cartItem: CartItemEntity, index: number) => (
						<CartItem 
						cartItem={cartItem}
						key={index}
						removeItem={ () => ploc.setCart(state.carts?.remove(cartItem.product.id))}
						addItem={(amount: number) =>ploc.setCart(state.carts?.add(cartItem.product, amount))}
						setComment={(comment: string) => ploc.setCart(state.carts?.setItemComment(cartItem.product.id, comment))}
						/>
					))
				}
				</section>

				<footer className="absolute w-full bottom-0 offset-y-0">
					<section className="flex justify-between mt-10">
						<span className="text-sm text-light-text">Sub Total</span>
						<span> Ksh {state.carts?.totalPrice}</span>
					</section>

					<section className="mt-5">
						<button className="bg-accent text-center w-full rounded-lg shadow py-3"> Continue to Payment</button>
					</section>
				</footer>
      </div>		
    )
}
export default Cart;