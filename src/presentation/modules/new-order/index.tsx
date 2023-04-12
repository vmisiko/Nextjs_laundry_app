import TextInput from "@/presentation/components/TextInput";
import { useEffect, useState } from "react";
import Category from "@/domain/entities/new-order/category";

const NewOrder = () => {

    const [time, setTime] = useState<string>();
		const [value, setValue] = useState<string>();
		const [categories, setCategories] = useState<Category[]>();
		const [activeTabID, setActivetTabId] = useState<number>();

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
		setActivetTabId(categories && categories[0]?.id);
    },[]);

	const handleTabChange = (tabId: number) => {
		setActivetTabId(tabId);
	};
	


    return (
        <div className="grid grid-cols-4">
            <div className="col-span-3 h-full m-4">
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
										<div onClick={() => handleTabChange(category.id)} className={`inline-block p-4  rounded-t-lg active dark:text-accent dark:border-accent hover:text-accent hover:border-accent ${ activeTabID === category.id && 'border-accent border-b-2 text-accent'}`}>
											<span className=""> {category.name}</span>
										</div>
									)}
									<div className="">

									</div>
								</div>
							</div>
            </div>
            <div className="bg-secondaryBg h-screen w-full">

            </div>
        </div>
    )
}

export default NewOrder;
