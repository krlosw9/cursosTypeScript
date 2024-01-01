import { Product } from "./product.model";

export const producst: Product[] = [];

export const addProduct = (data: Product) => {
  producst.push(data)
}

export const calcStock = (): number => (
  producst.reduce((accumulator, currentProduct) => accumulator + currentProduct.stock, 0)
)
