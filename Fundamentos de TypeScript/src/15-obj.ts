(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Size;
  }

  const producst: Product[] = [];

  const addProduct = (data: Product) => {
    producst.push(data)
  }

  addProduct({title: 'Pro1', createdAt: new Date(1993, 1, 1), stock: 20});
  addProduct({title: 'Pro2', createdAt: new Date(1994, 1, 1), stock: 22, size: "L"});

  console.log(producst);

})()
