import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/slices/authSlice';
import { LoginCredentials } from '../api/types';
import { toast } from 'react-toastify';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginCredentials>({
    UserName: '',
    Password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Assuming login action handles API call and sets user in state
      await dispatch(login(formData) as any); // Dispatching async action
      toast.success('Đăng nhập thành công!');
      navigate('/'); // Redirect to home or dashboard
    } catch (error: any) {
      toast.error(error.message || 'Đăng nhập thất bại. Vui lòng kiểm tra tên đăng nhập và mật khẩu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Đăng nhập</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Tên đăng nhập</label>
            <input
              type="text"
              id="username"
              name="UserName"
              value={formData.UserName}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="Password"
              value={formData.Password}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              disabled={loading}
              className={`form-button ${loading ? 'disabled' : ''}`}
            >
              {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
          </div>
        </form>
        {/* Assuming there's a registration page to link to */}
        {/* <p className="mt-6 text-center text-gray-600">
          Chưa có tài khoản? <Link to="/register" className="text-primary-600 hover:underline">Đăng ký ngay</Link>
        </p> */}
      </div>
    </div>
  );
};

export default LoginPage; 