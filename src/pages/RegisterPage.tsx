import { RegisterData } from '../api/types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setUser } from '../store/slices/authSlice';
import { authService } from '../api/services/auth';
import { toast } from 'react-toastify';
// Import Font Awesome CSS if you are using it for icons
// import '@fortawesome/fontawesome-free/css/all.min.css';

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      const registerData: RegisterData = {
        UserName: formData.UserName,
        Email: formData.Email,
        Phone: formData.Phone,
        FullName: formData.FullName,
        Address: formData.Address,
        Password: formData.Password,
        Role: 'user',
        Status: 'active',
      };
      const user = await authService.register(registerData);
      dispatch(setUser(user));
      toast.success('Đăng ký thành công!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Có lỗi xảy ra khi đăng ký');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-page">

      <div className="registration-card">
        <h2 className="registration-title">Đăng ký tài khoản</h2>
        <form className="registration-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="UserName" className="sr-only">Tên đăng nhập</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
              <input
                id="UserName"
                name="UserName"
                type="text"
                required
                value={formData.UserName}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Tên đăng nhập"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="Email" className="sr-only">Email</label>
            <div className="input-group">
             <span className="input-group-text"><i className="fas fa-envelope"></i></span>
              <input
                id="Email"
                name="Email"
                type="email"
                required
                value={formData.Email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="Phone" className="sr-only">Số điện thoại</label>
            <div className="input-group">
             <span className="input-group-text"><i className="fas fa-phone"></i></span>
              <input
                id="Phone"
                name="Phone"
                type="tel"
                required
                value={formData.Phone}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Số điện thoại"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="FullName" className="sr-only">Họ và tên</label>
            <div className="input-group">
             <span className="input-group-text"><i className="fas fa-user-circle"></i></span>
              <input
                id="FullName"
                name="FullName"
                type="text"
                required
                value={formData.FullName}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Họ và tên"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="Address" className="sr-only">Địa chỉ</label>
            <div className="input-group">
             <span className="input-group-text"><i className="fas fa-address-book"></i></span>
              <input
                id="Address"
                name="Address"
                type="text"
                required
                value={formData.Address}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Địa chỉ"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="Password" className="sr-only">Mật khẩu</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-lock"></i></span>
              <input
                id="Password"
                name="Password"
                type="password"
                required
                value={formData.Password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Mật khẩu"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="ConfirmPassword" className="sr-only">Xác nhận mật khẩu</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-lock"></i></span>
              <input
                id="ConfirmPassword"
                name="ConfirmPassword"
                type="password"
                required
                value={formData.ConfirmPassword}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Xác nhận mật khẩu"
              />
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              disabled={loading}
              className={`registration-button ${loading ? 'disabled' : ''}`}
            >
              {loading ? 'Đang xử lý...' : 'Đăng ký'}
            </button>
          </div>
        </form>
      </div>

      <p className="registration-login-text">
        Hoặc{' '}
        <Link to="/login" >
          đăng nhập nếu đã có tài khoản
        </Link>
      </p>
       {/* Add copyright text */}
       <div className="registration-footer-text">
          <small>&copy; 2023 BMW Bavarian. All rights reserved.</small>
       </div>
    </div>
  );
};

export default RegisterPage; 