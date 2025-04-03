import { Link } from 'react-router-dom';
import { HomeIcon, CubeIcon, ChartBarIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gray-800 h-screen">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-white text-xl font-semibold">Sistema ERP</h1>
      </div>
      <nav className="flex-1 px-2 py-4">
        <Link to="/" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-lg">
          <HomeIcon className="w-6 h-6 mr-3" />
          Dashboard
        </Link>
        <Link to="/produtos" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 rounded-lg">
          <CubeIcon className="w-6 h-6 mr-3" />
          Produtos
        </Link>
        <Link to="/estoque" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 rounded-lg">
          <ChartBarIcon className="w-6 h-6 mr-3" />
          Estoque
        </Link>
        <Link to="/configuracoes" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 rounded-lg">
          <Cog6ToothIcon className="w-6 h-6 mr-3" />
          Configurações
        </Link>
      </nav>
    </div>
  );
}