import { useState, useEffect } from 'react';
import { Product } from '../types';

export default function Dashboard() {
  const [lowStockItems, setLowStockItems] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // Simulando dados do estoque
    const mockProducts: Product[] = [
      { id: '1', name: 'Produto 1', description: 'Descrição 1', price: 100, quantity: 5, category: 'Categoria 1', minStock: 10 },
      { id: '2', name: 'Produto 2', description: 'Descrição 2', price: 200, quantity: 15, category: 'Categoria 2', minStock: 20 },
    ];

    const lowStock = mockProducts.filter(product => product.quantity < product.minStock);
    setLowStockItems(lowStock);
    setTotalProducts(mockProducts.length);
    setTotalValue(mockProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Total de Produtos</h2>
          <p className="text-3xl font-bold">{totalProducts}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Valor Total em Estoque</h2>
          <p className="text-3xl font-bold">R$ {totalValue.toFixed(2)}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Produtos com Estoque Baixo</h2>
          <p className="text-3xl font-bold text-red-500">{lowStockItems.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <h2 className="text-lg font-medium p-6 border-b">Alertas de Estoque Baixo</h2>
        <div className="p-6">
          {lowStockItems.map(item => (
            <div key={item.id} className="mb-4 p-4 bg-red-50 rounded-lg">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">Quantidade atual: {item.quantity}</p>
              <p className="text-sm text-gray-600">Estoque mínimo: {item.minStock}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}