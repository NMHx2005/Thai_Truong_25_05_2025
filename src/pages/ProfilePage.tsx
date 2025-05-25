import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setCredentials } from '../store/slices/authSlice';
import { authService } from '../api/services/auth';
import { toast } from 'react-toastify';
import { formatPhoneNumber } from '../utils/format';

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Email: '',
    Phone: '',
    FullName: '',
    Address: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        Email: user.Email || '',
        Phone: user.Phone || '',
        FullName: user.FullName || '',
        Address: user.Address || '',
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      const updatedUser = await authService.updateProfile(user._id, formData);
      dispatch(setCredentials({ user: updatedUser, token: token || '' }));
      toast.success('Cập nhật thông tin thành công!');
    } catch (error) {
      toast.error('Cập nhật thông tin thất bại. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Vui lòng đăng nhập để xem thông tin cá nhân</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Thông tin cá nhân
        </h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="UserName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  id="UserName"
                  value={user.UserName}
                  disabled
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm text-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="Phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="Phone"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="FullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="FullName"
                  name="FullName"
                  value={formData.FullName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Đang xử lý...' : 'Cập nhật thông tin'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 