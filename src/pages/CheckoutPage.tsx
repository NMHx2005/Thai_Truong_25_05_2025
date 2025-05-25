import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { clearCart } from '../store/slices/cartSlice';
import { addOrder } from '../store/slices/orderSlice';
import { orderService } from '../api/services/order';
import { formatCurrency } from '../utils/format';
import { toast } from 'react-toastify';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const { cart, items } = useSelector((state: RootState) => state.cart);

  const [formData, setFormData] = useState({
    Order_Date: new Date().toISOString().split('T')[0],
    Test_Drive_Date: '',
    Address: '',
    Notes: '',
    ImageUrl: null as File | null,
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, ImageUrl: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !cart) return;

    setLoading(true);
    try {
      const order = await orderService.createOrder(user._id, cart._id, formData);
      dispatch(addOrder(order));
      dispatch(clearCart());
      toast.success('Đặt lịch lái thử thành công!');
      navigate('/orders');
    } catch (error) {
      toast.error('Có lỗi xảy ra khi đặt lịch lái thử');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Vui lòng đăng nhập để đặt lịch lái thử</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Giỏ hàng của bạn đang trống</p>
      </div>
    );
  }

  const subtotal = items.reduce(
    (total, item) => total + item.Price * item.Quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Đặt lịch lái thử</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="Test_Drive_Date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ngày lái thử
                </label>
                <input
                  type="date"
                  id="Test_Drive_Date"
                  name="Test_Drive_Date"
                  value={formData.Test_Drive_Date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="Address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Địa chỉ
                </label>
                <input
                  type="text"
                  id="Address"
                  name="Address"
                  value={formData.Address}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="Notes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ghi chú
                </label>
                <textarea
                  id="Notes"
                  name="Notes"
                  value={formData.Notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="ImageUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hình ảnh (nếu có)
                </label>
                <input
                  type="file"
                  id="ImageUrl"
                  name="ImageUrl"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="mt-1 block w-full"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-primary-600 text-white py-3 rounded-md hover:bg-primary-700 transition-colors ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Đang xử lý...' : 'Xác nhận đặt lịch'}
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Thông tin đơn hàng
            </h2>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item._id} className="flex justify-between">
                  <span className="text-gray-600">
                    {item.ProductID.Product_Name} x {item.Quantity}
                  </span>
                  <span className="text-gray-900">
                    {formatCurrency(item.Price * item.Quantity)}
                  </span>
                </div>
              ))}

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-semibold text-gray-900">
                  <span>Tổng cộng</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 