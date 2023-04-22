import Product from "@/domain/entities/new-order/product";
import { IProductRepository } from "@/domain/repository/new-order/IProductRepository";
const products = [
    {
        id: 1,
        name: 'Shirt',
        image: "shirt.png",
        price: 100,
        expressPrice: 150,
        categoryId: 1,
    },
    {
        id: 2,
        name: 'T-Shirt',
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
    {
        id: 4,
        name: 'Skirt',
        image: "shirt.png",
        price: 100,
        expressPrice: 150,
        categoryId: 3,
    },
    {
        id: 5,
        name: 'Trouser',
        image: "shirt.png",
        price: 100,
        expressPrice: 150,
        categoryId: 3,
    },
    {
        id: 6,
        name: 'Duvet Large',
        image: "shirt.png",
        price: 800,
        expressPrice: 1000,
        categoryId: 3,
    },
    {
        id: 7,
        name: 'Duvet small',
        image: "shirt.png",
        price: 500,
        expressPrice: 300,
        categoryId: 3,
    },
    {
        id: 8,
        name: 'Duvet Medium',
        image: "shirt.png",
        price: 600,
        expressPrice: 300,
        categoryId: 3,
    },
];
export class ProductRepository implements IProductRepository {
  async get(category: string): Promise<Array<Product>> {
    return new Promise((resolve, reject) => {
      try {
        if (category) {
          const filteredProducts = products.filter((product) => product.id === parseInt(category));
          resolve(filteredProducts);
        } else {
          resolve(products);
        }
      } catch(error) {
        reject(error);
      }
    });
  
  }
}