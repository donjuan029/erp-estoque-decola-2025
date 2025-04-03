export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  minStock: number;
}

export interface Category {
  id: string;
  name: string;
}