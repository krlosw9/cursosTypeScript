import { producst, addProduct, calcStock } from "./product.service";

addProduct({title: 'Pro1', createdAt: new Date(1993, 1, 1), stock: 20});
addProduct({title: 'Pro2', createdAt: new Date(1994, 1, 1), stock: 22, size: "L"});

console.log(producst);
console.log(calcStock());
