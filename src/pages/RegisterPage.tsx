import { RegisterData } from '../api/types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setCredentials } from '../store/slices/authSlice';
import { authService } from '../api/services/auth';
import { toast } from 'react-toastify';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    UserName: '',
    Email: '',
    Phone: '',
    FullName: '',
    Address: '',
    Password: '',
    ConfirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.Password !== formData.ConfirmPassword) {
      toast.error('Mật khẩu xác nhận không khớp');
      return;
    }

    setLoading(true);
    try {
      const { ConfirmPassword, ...formDataWithoutConfirm } = formData;
      const registerData: RegisterData = {
        ...formDataWithoutConfirm,
        Role: 'user',
        Status: 'active',
      };
      const user = await authService.register(registerData);
      dispatch(setCredentials({ user, token: localStorage.getItem('token') || '' }));
      toast.success('Đăng ký thành công!');
      navigate('/');
    } catch (error) {
      toast.error('Đăng ký thất bại. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-page__container">
        <h2 className="registration-page__card-title">
          Đăng ký tài khoản
        </h2>
        <p className="registration-page__login-text">
          Hoặc{' '}
          <Link
            to="/login"
            // className="font-medium text-primary-600 hover:text-primary-500"
          >
            đăng nhập nếu đã có tài khoản
          </Link>
        </p>
      </div>

      <div className="registration-page__card">
        <form className="registration-page__form" onSubmit={handleSubmit}>
          <div className="registration-page__form-group">
            <label
              htmlFor="UserName"
              className="registration-page__label"
            >
              Tên đăng nhập
            </label>
            <div className="registration-page__input-group">
              <input
                id="UserName"
                name="UserName"
                type="text"
                required
                value={formData.UserName}
                onChange={handleInputChange}
                className="registration-page__input"
              />
            </div>
          </div>

          <div className="registration-page__form-group">
            <label
              htmlFor="Email"
              className="registration-page__label"
            >
              Email
            </label>
            <div className="registration-page__input-group">
              <input
                id="Email"
                name="Email"
                type="email"
                required
                value={formData.Email}
                onChange={handleInputChange}
                className="registration-page__input"
              />
            </div>
          </div>

          <div className="registration-page__form-group">
            <label
              htmlFor="Phone"
              className="registration-page__label"
            >
              Số điện thoại
            </label>
            <div className="registration-page__input-group">
              <input
                id="Phone"
                name="Phone"
                type="tel"
                required
                value={formData.Phone}
                onChange={handleInputChange}
                className="registration-page__input"
              />
            </div>
          </div>

          <div className="registration-page__form-group">
            <label
              htmlFor="FullName"
              className="registration-page__label"
            >
              Họ và tên
            </label>
            <div className="registration-page__input-group">
              <input
                id="FullName"
                name="FullName"
                type="text"
                required
                value={formData.FullName}
                onChange={handleInputChange}
                className="registration-page__input"
              />
            </div>
          </div>

          <div className="registration-page__form-group">
            <label
              htmlFor="Address"
              className="registration-page__label"
            >
              Địa chỉ
            </label>
            <div className="registration-page__input-group">
              <input
                id="Address"
                name="Address"
                type="text"
                required
                value={formData.Address}
                onChange={handleInputChange}
                className="registration-page__input"
              />
            </div>
          </div>

          <div className="registration-page__form-group">
            <label
              htmlFor="Password"
              className="registration-page__label"
            >
              Mật khẩu
            </label>
            <div className="registration-page__input-group">
              <input
                id="Password"
                name="Password"
                type="password"
                required
                value={formData.Password}
                onChange={handleInputChange}
                className="registration-page__input"
              />
            </div>
          </div>

          <div className="registration-page__form-group">
            <label
              htmlFor="ConfirmPassword"
              className="registration-page__label"
            >
              Xác nhận mật khẩu
            </label>
            <div className="registration-page__input-group">
              <input
                id="ConfirmPassword"
                name="ConfirmPassword"
                type="password"
                required
                value={formData.ConfirmPassword}
                onChange={handleInputChange}
                className="registration-page__input"
              />
            </div>
          </div>

          <div className="registration-page__actions">
            <button
              type="submit"
              disabled={loading}
              className={`registration-page__btn-submit ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Đang xử lý...' : 'Đăng ký'}
            </button>
          </div>
        </form>
        {/* <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Sign In
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default RegisterPage; 