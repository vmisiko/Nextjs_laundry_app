import TextInput from "@/presentation/components/TextInput";
import { useEffect, useState } from "react";
import Category from "@/domain/entities/new-order/category";
import ProductCard from "@/presentation/modules/new-order/components/ProductCard";
import Product from "@/domain/entities/new-order/product";

const NewOrder = () => {

    const [time, setTime] = useState<string>();
        const [value, setValue] = useState<string>();
        const [categories, setCategories] = useState<Category[]>();
        const [activeTabID, setActivetTabId] = useState<number>();
        const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        setTime(new Date().toDateString());
        setCategories([
            {	id: 1,
                name: "Wash $ fold",
            },
            {	id: 2,
                name: "Beddings",
            },
            {	id: 3,
                name: "Dry Cleaning",
            },
            {	id: 4,
                name: "Ironing",
            },
            {	id: 5,
                name: "Others",
            }
        ]);
        if (!activeTabID)  {
            setActivetTabId(categories && categories[0]?.id);
        }
        setProducts([
          {
            name: 'Shirt',
            image: "shirt.png",
            price: 100,
            expressPrice: 150,
            categoryId: 1,
          },
          {
            name: 'T-Shirt',
            image: "shirt.png",
            price: 100,
            expressPrice: 150,
            categoryId: 2,
          },
          {
            name: 'Blouse',
            image: "shirt.png",
            price: 100,
            expressPrice: 150,
            categoryId: 3,
          },
          {
            name: 'Skirt',
            image: "shirt.png",
            price: 100,
            expressPrice: 150,
            categoryId: 3,
          },
          {
            name: 'Trouser',
            image: "shirt.png",
            price: 100,
            expressPrice: 150,
            categoryId: 3,
          },
          {
            name: 'Duvet Large',
            image: "shirt.png",
            price: 800,
            expressPrice: 1000,
            categoryId: 3,
          },
          {
            name: 'Duvet small',
            image: "shirt.png",
            price: 500,
            expressPrice: 300,
            categoryId: 3,
          },
          {
            name: 'Duvet Medium',
            image: "shirt.png",
            price: 600,
            expressPrice: 300,
            categoryId: 3,
          },

        ]);
    }, [categories]);

    const handleTabChange = (tabId: number) => {
        setActivetTabId(tabId);
    };
    
    return (
        <div className="grid grid-cols-4">

            <div className="col-span-3 h-screen m-4">
                <header className="flex justify-between">
                  <div>
                      <h1 className="text-xl">Laundry App</h1>
                      <span className="text-sm text-lighter">{time}</span>
                  </div>
                  <div className="">
                      <TextInput 
                          name="search" 
                          label="search Product" 
                          onChange={(e) => setValue(e.target.value)} 
                          value={value}
                          placeholder="Search"
                          type="text"
                          />
                  </div>
                </header>

                {/* category */}
                <div className="mt-10">
                    <div className="flex justify-between border-b border-gray-600 -mb-px">
                      {
                        categories && categories.map((category: Category) => 
                        <div onClick={() => handleTabChange(category.id)} className={`inline-block p-4  rounded-t-lg active dark:text-accent dark:border-accent hover:text-accent hover:border-accent cursor-pointer ${ activeTabID === category.id && 'border-accent border-b-2 text-accent'}`}>
                            <span className=""> {category.name}</span>
                        </div>
                      )}
                    </div>
                </div>
                {/* category  */}

                {/* {products} */}
                <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-3">
                  {
                    products && products.map((product: Product, index: number) => (                         
                      <ProductCard product={product} key={index}/>
                    ))
                  }
                </div>
                  {/* products */}
            </div>
            {/* cart component  */}
            <div className="col-span-1 bg-secondaryBg h-screen w-full p-4">
              <section className="flex space-x-2 mt-5 w-full justify-between">
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
             

            </div>
            {/* cart component  */}
        </div>
    )
}

export default NewOrder;
