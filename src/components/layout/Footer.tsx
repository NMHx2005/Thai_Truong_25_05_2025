import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Car Rental</h3>
            <p className="text-gray-300">
              Dịch vụ cho thuê xe chất lượng cao với giá cả phải chăng.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white">
                  Giỏ hàng
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-300 hover:text-white">
                  Đơn hàng
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@carrental.com</li>
              <li>Điện thoại: (84) 123-456-789</li>
              <li>Địa chỉ: 123 Đường ABC, Quận XYZ, TP. HCM</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 Car Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 