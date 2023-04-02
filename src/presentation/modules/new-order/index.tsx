import TextInput from "@/presentation/components/TextInput";
import { useEffect, useState } from "react";

const NewOrder = () => {

    const [time, setTime] = useState<string>();
		const [value, setValue] = useState<string>();
    useEffect(() => {
        setTime(new Date().toDateString());
    },[])

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
									<div className="inline-block p-4 text-accent border-b-2 border-accent rounded-t-lg active dark:text-accent dark:border-accent">
										<span className=""> Wash $ fold</span>
									</div>

									<div className="inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
										<span className="text-white"> Beddings</span>
									</div>

									<div className="inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
										<span className="text-white"> Ironing</span>
									</div>

									<div className=" inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ">
										<span className="text-white"> Dry Cleaning</span>
									</div>

									<div className="inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
										<span className="text-white"> Shoes</span>
									</div>
									
									<div className="inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ">
										<span className="text-white"> others</span>
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
