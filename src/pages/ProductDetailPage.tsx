import React from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../api/types'; // Assuming Product type is available
import { formatCurrency } from '../utils/format';
import { Link } from 'react-router-dom';

// Hardcoded product data for demonstration
const hardcodedProducts: Product[] = [
  {
    _id: '1',
    Product_Name: 'BMW X7',
    CategoryID: 'suv',
    Main_Image: '/images/x7_1_.webp',
    List_Image: ['/images/x7_1_.webp', '/images/x7_interior.jpg', '/images/x7_rear.jpg'],
    Specifications: { 'Engine': '3.0L TwinPower Turbo', 'Horsepower': '335 hp', 'Transmission': '8-speed Automatic' },
    Status: 'available',
    Stock: 10,
    Price: 5999000000,
    Description: 'Khám phá sự sang trọng đẳng cấp với BMW X7 - SUV hạng sang 7 chỗ ngồi. Nội thất rộng rãi, tiện nghi hiện đại và hiệu suất mạnh mẽ mang đến trải nghiệm lái vượt trội.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: '2',
    Product_Name: 'BMW M4',
    CategoryID: 'coupe',
    Main_Image: '/images/Screenshot 2025-03-31 100737.png',
    List_Image: ['/images/Screenshot 2025-03-31 100737.png', '/images/m4_interior.jpg'],
    Specifications: { 'Engine': '3.0L M TwinPower Turbo', 'Horsepower': '473 hp', 'Transmission': '6-speed Manual or 8-speed Automatic' },
    Status: 'available',
    Stock: 5,
    Price: 4999000000,
    Description: 'Trải nghiệm sức mạnh và hiệu suất vượt trội với BMW M4. Thiết kế thể thao, động cơ mạnh mẽ và khả năng xử lý linh hoạt mang đến cảm giác lái đầy phấn khích.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
   {
    _id: '3',
    Product_Name: 'BMW iX',
    CategoryID: 'electric',
    Main_Image: '/images/new_bmw_ix3_series.webp',
    List_Image: ['/images/new_bmw_ix3_series.webp', '/images/ix_interior.jpg'],
    Specifications: { 'Motor': 'Electric', 'Horsepower': '516 hp', 'Range': 'Up to 324 miles' },
    Status: 'available',
    Stock: 8,
    Price: 3999000000,
    Description: 'Tương lai của di chuyển điện với BMW iX - SUV điện thông minh. Thiết kế tiên phong, công nghệ hiện đại và hiệu suất ấn tượng cho trải nghiệm lái xe điện đỉnh cao.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the product based on the ID from the URL
  const product = hardcodedProducts.find(p => p._id === id);

  if (!product) {
    return <div className="product-detail-page"><div className="product-detail-page__container"><div className="not-found-message">Không tìm thấy sản phẩm</div></div></div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-page__container">
        {/* Product Images */}
        <div className="product-detail-page__image-section">
          <img
            src={product.Main_Image}
            alt={product.Product_Name}
            className="main-image"
          />
          {product.List_Image && product.List_Image.length > 0 && (
            <div className="thumbnail-images">
              {product.List_Image.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.Product_Name} - Image ${index + 1}`}
                  className="thumbnail"
                  // Add logic here later to change the main image on click
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="product-detail-page__info-section">
          <h1 className="product-name">{product.Product_Name}</h1>
          <p className="product-price">{formatCurrency(product.Price)}</p>

          <div className="product-description">
            <h2>Mô tả</h2>
            <p>{product.Description}</p>
          </div>

          <div className="specifications">
             <h2 className="text-lg font-semibold text-gray-900 mb-2">Thông số kỹ thuật</h2>
             <ul className="list-disc list-inside text-gray-700">
               {product.Specifications && Object.entries(product.Specifications).map(([key, value]) => (
                 <li key={key}><strong>{key}:</strong> {value}</li>
               ))}
             </ul>
          </div>

          <div className="status">
             <h2 className="text-lg font-semibold text-gray-900 mb-2">Trạng thái</h2>
             <p className={product.Status === 'available' ? 'available' : 'unavailable'}>
               {product.Status === 'available' ? 'Còn hàng' : 'Hết hàng'}
             </p>
          </div>

          <div className="product-actions">
            {/* Add to Cart Button */}
            {product.Status === 'available' && (
              <button className="add-to-cart-button">
                Thêm vào giỏ hàng
              </button>
            )}
            {/* Test Drive Button */}
            <Link to="/dat-hen-lai-thu" className="test-drive-button">
              Đăng ký lái thử
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 