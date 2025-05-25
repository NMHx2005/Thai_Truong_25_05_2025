import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setCredentials } from '../store/slices/authSlice';
import { authService } from '../api/services/auth';
import { toast } from 'react-toastify';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    UserName: '',
    Password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await authService.login(formData);
      dispatch(setCredentials({ user, token: localStorage.getItem('token') || '' }));
      toast.success('Đăng nhập thành công!');
      navigate('/');
    } catch (error) {
      toast.error('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__container">
        <div className="login-page__logo">
          <img src="/images/BMW_logo_(gray).svg.png" alt="BMW Logo" width="80" height="80" />
          <h2 className="login-page__logo-text">BAVARIAN</h2>
        </div>

        <div className="login-page__card">
          <h4 className="login-page__card-title">Đăng nhập quản trị</h4>

          <form className="login-page__form" onSubmit={handleSubmit}>
            <div className="login-page__form-group">
              <div className="login-page__input-group">
                <span className="login-page__input-group-text">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  className="login-page__input"
                  id="UserName"
                  name="UserName"
                  value={formData.UserName}
                  onChange={handleInputChange}
                  placeholder="Tên đăng nhập"
                  required
                />
              </div>
            </div>

            <div className="login-page__form-group">
              <div className="login-page__input-group">
                <span className="login-page__input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="login-page__input"
                  id="Password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleInputChange}
                  placeholder="Mật khẩu"
                  required
                />
              </div>
            </div>

            <div className="login-page__options">
              <div className="login-page__form-check">
                <input className="login-page__form-check-input" type="checkbox" id="rememberMe" />
                <label className="login-page__form-check-label" htmlFor="rememberMe">
                  Ghi nhớ đăng nhập
                </label>
              </div>
              <a href="#" className="login-page__forgot-password-link">Quên mật khẩu?</a>
            </div>

            <button type="submit" className="login-page__btn-login" disabled={loading}>
              {loading ? 'Đang xử lý...' : 'Đăng nhập'}
            </button>
          </form>
        </div>

        <div className="login-page__footer-text">
          <small>&copy; 2023 BMW Bavarian. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 