
import Cart from "./cart";
import ProductList from "./product-list";

const NewOrder = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-3 h-screen m-4">
                <ProductList />
            </div>
            {/* cart component  */}
            <div className="col-span-1 bg-secondaryBg w-full p-4  pb-14">
              <Cart />
            </div>
            {/* cart component  */}
        </div>
    )
}

export default NewOrder;
