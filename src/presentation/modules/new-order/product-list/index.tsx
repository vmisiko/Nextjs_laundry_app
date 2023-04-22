import { useState, useEffect } from "react";
import Category from "@/domain/entities/new-order/category";
import ProductCard from "@/presentation/modules/new-order/components/ProductCard";
import Product from "@/domain/entities/new-order/product";
import TextInput from "@/presentation/components/TextInput";
import { dependenciesLocator } from "@/core/dependencies";
import { useBlocState } from "@/core/useBlocState";
import { useSelector } from "react-redux";

const ProductList = () => {
	const [time, setTime] = useState<string>();
	const [value, setValue] = useState<string>();
	const [categories, setCategories] = useState<Category[]>();
	const [activeTabID, setActivetTabId] = useState<number>();
    const ploc = dependenciesLocator.provideProductsPloc();
    const state = useBlocState(ploc);

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
	}, [activeTabID]);

    useEffect(()=> {
        ploc.getProducts(``);
    },[activeTabID, state]);

	const handleTabChange = (tabId: number) => {
	    setActivetTabId(tabId);
	};

  return (
    	<>
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
							<div key={category.id} onClick={() => handleTabChange(category.id)} className={`inline-block p-4  rounded-t-lg active dark:text-accent dark:border-accent hover:text-accent hover:border-accent cursor-pointer ${ activeTabID === category.id && 'border-accent border-b-2 text-accent'}`}>
									<span className=""> {category.name}</span>
							</div>
						)}
					</div>
				</div>
				{/* category  */}

				{/* {products} */}
				<div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-3">
					{
						state.products && state.products.map((product: Product) => (                         
							<ProductCard product={product} key={product.id}/>
						))
					}
				</div>
					{/* products */}
      </>
    )
}

export default ProductList;