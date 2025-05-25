import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Contact Column */}
          <div className="footer__column">
            <h4 className="footer__title">LIÊN HỆ VỚI CHÚNG TÔI</h4>
            <div className="footer__contact-item">
              <FaPhone />
              <span>Hotline: 1800 8123</span>
            </div>
            <div className="footer__contact-item">
              <FaEnvelope />
              <span>Email: info@bmw.com.vn</span>
            </div>
            <div className="footer__contact-item">
              <FaMapMarkerAlt />
              <span>Trụ sở chính: Tầng 15, Tòa nhà Capital Place, 29 Liễu Giai, Ba Đình, Hà Nội</span>
            </div>
            <div className="footer__social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <FaFacebook />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* About Column */}
          <div className="footer__column">
            <h4 className="footer__title">TÌM HIỂU VỀ BMW</h4>
            <div className="footer__list">
              <Link to="/bmw-xtra" className="footer__link">BMW Xtra</Link>
              <Link to="/bmw-m" className="footer__link">BMW M</Link>
              <Link to="/bmw-i" className="footer__link">BMW i</Link>
              <Link to="/bmw-motorrad" className="footer__link">BMW Motorrad</Link>
              <Link to="/bmw-m-performance" className="footer__link">BMW M Performance</Link>
            </div>
          </div>

          {/* Products Column */}
          <div className="footer__column">
            <h4 className="footer__title">SẢN PHẨM</h4>
            <div className="footer__list">
              <Link to="/san-pham/sedan" className="footer__link">Sedan</Link>
              <Link to="/san-pham/suv" className="footer__link">SUV</Link>
              <Link to="/san-pham/coupe" className="footer__link">Coupe</Link>
              <Link to="/san-pham/gran-coupe" className="footer__link">Gran Coupe</Link>
              <Link to="/san-pham/gran-turismo" className="footer__link">Gran Turismo</Link>
            </div>
          </div>

          {/* Utilities Column */}
          <div className="footer__column">
            <h4 className="footer__title">TIỆN ÍCH</h4>
            <div className="footer__list">
              <Link to="/so-sach-xe" className="footer__link">Sổ sách xe</Link>
              <Link to="/bang-gia" className="footer__link">Bảng giá chi tiết</Link>
              <Link to="/dat-lich-hen" className="footer__link">Đặt lịch hẹn</Link>
              <Link to="/dat-lich-lai-thu" className="footer__link">Đặt lịch lái thử</Link>
              <Link to="/tinh-toan-tra-gop" className="footer__link">Tính toán trả góp</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          © {new Date().getFullYear()} BMW Vietnam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 