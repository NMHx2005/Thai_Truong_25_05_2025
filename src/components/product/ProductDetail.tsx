import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { addCartItem } from '../../store/slices/cartSlice';
import { formatCurrency } from '../../utils/format';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedProduct: product } = useSelector(
    (state: RootState) => state.product
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center text-gray-600 py-8">
        <p>Không tìm thấy thông tin sản phẩm</p>
      </div>
    );
  }

  const allImages = [product.Main_Image, ...product.List_Image];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    dispatch(addCartItem({ product, quantity }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="relative">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src={allImages[currentImageIndex]}
              alt={product.Product_Name}
              className="w-full h-full object-cover"
            />
            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>
          {allImages.length > 1 && (
            <div className="flex space-x-2 mt-4 overflow-x-auto">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 ${
                    currentImageIndex === index
                      ? 'ring-2 ring-primary-600'
                      : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.Product_Name} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {product.Product_Name}
          </h1>
          <p className="text-2xl font-bold text-primary-600 mt-4">
            {formatCurrency(product.Price)}
          </p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">Mô tả</h2>
            <p className="mt-2 text-gray-600">{product.Description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Thông số kỹ thuật
            </h2>
            <div className="mt-2 grid grid-cols-2 gap-4">
              {Object.entries(product.Specifications).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-sm text-gray-500">{key}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-2 text-gray-600 hover:text-primary-600"
                >
                  -
                </button>
                <span className="px-3 py-2">{quantity}</span>
                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.min(product.Stock, prev + 1)
                    )
                  }
                  className="px-3 py-2 text-gray-600 hover:text-primary-600"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={product.Status === 'unavailable'}
                className={`flex-1 bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors ${
                  product.Status === 'unavailable'
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
              >
                {product.Status === 'unavailable'
                  ? 'Hết hàng'
                  : 'Thêm vào giỏ hàng'}
              </button>
            </div>
            {product.Stock > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                Còn {product.Stock} sản phẩm
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 