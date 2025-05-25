import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';
import { authService } from '../api/services/auth';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  return (
    <header className="header">
      {/* Top Authentication Bar */}
      <div className="header__auth-bar">
        <div className="header__container header__auth-container">
          <div className="header__auth-links">
            {user ? (
              <>
                <Link to="/cart" className="header__auth-link">
                  Giỏ hàng
                </Link>
                <Link to="/orders" className="header__auth-link">
                  Đơn hàng
                </Link>
                <Link to="/profile" className="header__auth-link">
                  {user.FullName}
                </Link>
                <button onClick={handleLogout} className="header__auth-button">
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="header__auth-link">
                  Đăng nhập
                </Link>
                <Link to="/register" className="header__auth-link">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="header__main-bar">
        <div className="header__container header__main-container">
          <div className="header__row">
            {/* Logo */}
            <div className="header__logo-link">
              <Link to="/">
                <img src="/images/BMW_logo_(gray).svg.png" alt="BMW Logo" className="header__logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="header__nav">
              <Link to="/" className="header__nav-link">
                Trang chủ
              </Link>
              <Link to="/san-pham" className="header__nav-link">
                Sản phẩm
              </Link>
              <Link to="/dich-vu" className="header__nav-link">
                Dịch vụ
              </Link>
              <Link to="/bang-gia" className="header__nav-link">
                Bảng giá
              </Link>
              <Link to="/dat-hen-lai-thu" className="header__nav-link">
                Đặt Hẹn Lái Thử
              </Link>
              <Link to="/tin-tuc" className="header__nav-link">
                Tin tức - Sự kiện
              </Link>
            </nav>

            {/* Search Box */}
            <div className="header__search-container">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="header__search-box"
              />
              <FaSearch className="header__search-button" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="header__mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="header__mobile-menu">
           <div className="header__mobile-menu-header">
              <Link to="/" className="header__logo-link" onClick={toggleMobileMenu}>
                 <img src="/images/BMW_logo_(gray).svg.png" alt="BMW Logo" className="header__logo" />
              </Link>
              <button
                className="header__mobile-menu-close"
                onClick={toggleMobileMenu}
              >
                <FaTimes />
              </button>
            </div>
            <nav className="header__mobile-menu-nav">
              <Link
                to="/"
                className="header__nav-link"
                onClick={toggleMobileMenu}
              >
                Trang chủ
              </Link>
              <Link
                to="/san-pham"
                className="header__nav-link"
                onClick={toggleMobileMenu}
              >
                Sản phẩm
              </Link>
              <Link
                to="/dich-vu"
                className="header__nav-link"
                onClick={toggleMobileMenu}
              >
                Dịch vụ
              </Link>
              <Link
                to="/bang-gia"
                className="header__nav-link"
                onClick={toggleMobileMenu}
              >
                Bảng giá
              </Link>
              <Link
                to="/dat-hen-lai-thu"
                className="header__nav-link"
                onClick={toggleMobileMenu}
              >
                Đặt Hẹn Lái Thử
              </Link>
              <Link
                to="/tin-tuc"
                className="header__nav-link"
                onClick={toggleMobileMenu}
              >
                Tin tức - Sự kiện
              </Link>
            </nav>
             {/* Mobile Auth Links */}
             <div className="header__mobile-menu-auth">
                {user ? (
                  <>
                     <Link to="/cart" className="header__auth-link" onClick={toggleMobileMenu}>Giỏ hàng</Link>
                     <Link to="/orders" className="header__auth-link" onClick={toggleMobileMenu}>Đơn hàng</Link>
                     <Link to="/profile" className="header__auth-link" onClick={toggleMobileMenu}>{user.FullName}</Link>
                     <button onClick={() => { handleLogout(); toggleMobileMenu(); }} className="header__auth-button">Đăng xuất</button>
                  </>
                ) : (
                  <>
                     <Link to="/login" className="header__auth-link" onClick={toggleMobileMenu}>Đăng nhập</Link>
                     <Link to="/register" className="header__auth-link" onClick={toggleMobileMenu}>Đăng ký</Link>
                  </>
                )}
            </div>
            {/* Mobile Search Box (Optional - could add if needed) */}
            {/*
            <div>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="header__search-box"
              />
            </div>
            */}
          </div>
      )}
    </header>
  );
};

export default Header; 