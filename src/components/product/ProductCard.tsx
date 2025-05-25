import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../api/types';
import { formatCurrency } from '../../utils/format';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/products/${product._id}`}>
        <div className="relative h-48">
          <img
            src={product.Main_Image}
            alt={product.Product_Name}
            className="w-full h-full object-cover"
          />
          {product.Status === 'unavailable' && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Hết hàng</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link
          to={`/products/${product._id}`}
          className="text-lg font-semibold text-gray-800 hover:text-primary-600"
        >
          {product.Product_Name}
        </Link>

        <p className="text-gray-600 mt-2 line-clamp-2">{product.Description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-primary-600">
            {formatCurrency(product.Price)}
          </span>
          <Link
            to={`/products/${product._id}`}
            className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            Chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 