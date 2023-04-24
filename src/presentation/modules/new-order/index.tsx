
import { useCartBloc } from "@/pages/_app";
import Cart from "./cart";
import ProductList from "./product-list";
import { useEffect } from "react";

const NewOrder = () => {
    const ploc = useCartBloc();
    useEffect(() => {
        ploc.getCart();
    }, []);
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-3 h-screen m-4">
                <ProductList />
            </div>
            {/* cart component  */}
            <div className="col-span-1 bg-secondaryBg w-full p-4  pb-14">
              <Cart ploc={ploc} />
            </div>
            {/* cart component  */}
        </div>
    )
}

export default NewOrder;
