import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';

const HomePage: React.FC = () => {
  const [activeProductTab, setActiveProductTab] = useState('BMW');
  const [activeNumberTab, setActiveNumberTab] = useState('X');

  return (
    <div className="homepage">
      <HeroSlider />

      {/* Product Categories */}
      <section className="product-section">
        <h2 className="product-section-title">DÒNG SẢN PHẨM</h2>
        {/* Product Tabs */}
        <div className="product-tabs">
          {['BMW', 'BMW M', 'BMW i'].map((tab) => (
            <button
              key={tab}
              className={`product-tab${activeProductTab === tab ? ' product-tab--active' : ''}`}
              onClick={() => setActiveProductTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Number Tabs */}
        <div className="product-number-tabs">
          {['3', '4', '5', '7', '8', 'X', 'Z'].map((number) => (
            <button
              key={number}
              className={`product-number-tab${activeNumberTab === number ? ' product-number-tab--active' : ''}`}
              onClick={() => setActiveNumberTab(number)}
            >
              {number}
            </button>
          ))}
        </div>
        {/* Car Grid */}
        <div className="product-container">
          <div className="product-row">
            {/* X5 */}
            <div className="product-card">
              <img src="/images/x5_resize.webp" alt="BMW X5" className="product-image" />
              <div className="product-title">BMW X5</div>
              <div className="product-fuel">Xăng</div>
              <div className="product-price">3.469.000.000 VND</div>
            </div>
            {/* X6 */}
            <div className="product-card">
              <img src="/images/x6.avif" alt="BMW X6" className="product-image" />
              <div className="product-title">BMW X6</div>
              <div className="product-fuel">Xăng</div>
              <div className="product-price">4.459.000.000 VND</div>
            </div>
            {/* X7 */}
            <div className="product-card">
              <img src="/images/x7_1_.webp" alt="BMW X7" className="product-image" />
              <div className="product-title">BMW X7</div>
              <div className="product-fuel">Xăng</div>
              <div className="product-price">5.549.000.000 VND</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="feature-section">
        <h2 className="product-section-title">TIỆN ÍCH</h2>
        <div className="feature-row">
          {/* Feature 1 */}
          <div className="feature-card">
            <img src="/images/feature-1.jpg" alt="Sổ sách xe" />
            <div className="feature-overlay">
              <div className="feature-title">Sổ sách xe</div>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="feature-card">
            <img src="/images/feature-2.jpg" alt="Bảng giá chi tiết" />
            <div className="feature-overlay">
              <div className="feature-title">Bảng giá chi tiết</div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="feature-card">
            <img src="/images/feature-3.jpg" alt="Đặt lịch hẹn" />
            <div className="feature-overlay">
              <div className="feature-title">Đặt lịch hẹn</div>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="feature-card">
            <img src="/images/feature-4.jpg" alt="Đặt lịch lái thử" />
            <div className="feature-overlay">
              <div className="feature-title">Đặt lịch lái thử</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <h2 className="product-section-title">TIN TỨC</h2>
        <div className="news-item">
          <img src="/images/bmw-connect.jpg" alt="BMW Connect Drive" className="news-image" />
          <div className="news-content">
            <h3>BMW CONNECT DRIVE</h3>
            <p>
              Các tính năng và dịch vụ có trên BMW Connect Drive đều là các tính năng hiện đại hỗ trợ người dùng.
              Những tính năng thông minh và tiện ích sẽ giúp đỡ cho cuộc sống của bạn trở nên dễ dàng hơn.
            </p>
            <button className="news-btn-more">Tìm hiểu thêm</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 