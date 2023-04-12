import Product from "@/domain/entities/new-order/product";
import Image from "next/image";


const ProductCard = ({product}:{product: Product}) => {

  return (
    <div className="bg-secondaryBg rounded-lg shadow-lg h-68 w-48 p-5">
      <Image height="180" src={require('../../../../assets/shirt.png')} alt='shirt'></Image>

      <div className="text-center mt-1">
        <span className="text-xl font-bold">{product.name}</span><br />
        <span className="text-sm font-medium text-light-text"> KSH {product.price} /=</span>
      </div>
    </div>  
  )
}

export default ProductCard;