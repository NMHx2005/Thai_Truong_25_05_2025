import React, { useState } from 'react';
import { FaCar, FaUserTie, FaRoute, FaEdit, FaPhone, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TestDrivePage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    model: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    privacyPolicy: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Test Drive Booking Data:', formData);
    alert('Cảm ơn bạn đã đăng ký lái thử! Chúng tôi sẽ liên hệ với bạn sớm.');
    // Optionally reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      model: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
      privacyPolicy: false,
    });
  };

  return (
    <div className="test-drive-page">
      {/* Page Banner */}
      <section className="page-banner">
        <div className="page-banner__container">
          <h1 className="page-banner__title">ĐẶT HẸN LÁI THỬ</h1>
          {/* Breadcrumb can be implemented later if needed */}
          {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">Đặt Hẹn Lái Thử</li>
            </ol>
          </nav> */}
        </div>
      </section>

      {/* Test Drive Form Section */}
      <section className="test-drive-section">
        <div className="test-drive-section__container">
          <div className="test-drive-section__row">
            <div className="test-drive-section__col">
              <div className="test-drive-info">
                <h2 className="test-drive-info__heading">TRẢI NGHIỆM CẢM GIÁC LÁI BMW</h2>
                <p className="test-drive-info__description">
                  Đăng ký lái thử xe BMW ngay hôm nay để trải nghiệm cảm giác lái đỉnh cao cùng công nghệ tiên tiến và thiết kế sang trọng của BMW.
                </p>
                <p className="test-drive-info__description">
                  Đội ngũ tư vấn viên chuyên nghiệp sẽ hướng dẫn bạn chi tiết về các tính năng và ưu điểm của mẫu xe bạn quan tâm, đồng thời giải đáp mọi thắc mắc.
                </p>

                <div className="test-drive-info__benefits">
                  <div className="test-drive-info__benefit-item">
                    <div className="test-drive-info__benefit-icon">
                      <FaCar />
                    </div>
                    <div className="test-drive-info__benefit-content">
                      <h3 className="test-drive-info__benefit-title">Trải nghiệm thực tế</h3>
                      <p className="test-drive-info__benefit-description">Cảm nhận trực tiếp hiệu suất và công nghệ của BMW trong điều kiện thực tế trên đường.</p>
                    </div>
                  </div>

                  <div className="test-drive-info__benefit-item">
                    <div className="test-drive-info__benefit-icon">
                      <FaUserTie />
                    </div>
                    <div className="test-drive-info__benefit-content">
                      <h3 className="test-drive-info__benefit-title">Tư vấn chuyên nghiệp</h3>
                      <p className="test-drive-info__benefit-description">Đội ngũ chuyên gia BMW sẵn sàng cung cấp thông tin chi tiết và hỗ trợ bạn lựa chọn xe phù hợp.</p>
                    </div>
                  </div>

                  <div className="test-drive-info__benefit-item">
                    <div className="test-drive-info__benefit-icon">
                      <FaRoute />
                    </div>
                    <div className="test-drive-info__benefit-content">
                      <h3 className="test-drive-info__benefit-title">Lộ trình linh hoạt</h3>
                      <p className="test-drive-info__benefit-description">Tùy chỉnh lộ trình lái thử để trải nghiệm xe trong các điều kiện đường xá khác nhau.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="test-drive-section__col">
              <div className="test-drive-form">
                <h3 className="test-drive-form__title">ĐĂNG KÝ LÁI THỬ</h3>
                <form className="test-drive-form__form" onSubmit={handleSubmit}>
                  <div className="test-drive-form__group">
                    <label htmlFor="fullName" className="test-drive-form__label">Họ và tên *</label>
                    <input type="text" className="test-drive-form__input" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                  </div>

                  <div className="test-drive-form__group">
                    <label htmlFor="email" className="test-drive-form__label">Email *</label>
                    <input type="email" className="test-drive-form__input" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                  </div>

                  <div className="test-drive-form__group">
                    <label htmlFor="phone" className="test-drive-form__label">Số điện thoại *</label>
                    <input type="tel" className="test-drive-form__input" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                  </div>

                  <div className="test-drive-form__group">
                    <label htmlFor="city" className="test-drive-form__label">Tỉnh/Thành phố *</label>
                    <select className="test-drive-form__select" id="city" name="city" value={formData.city} onChange={handleInputChange} required>
                      <option value="" disabled>Chọn tỉnh/thành phố</option>
                      <option value="hanoi">Hà Nội</option>
                      <option value="hochiminh">TP. Hồ Chí Minh</option>
                      <option value="danang">Đà Nẵng</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>

                  <div className="test-drive-form__group">
                    <label htmlFor="model" className="test-drive-form__label">Mẫu xe quan tâm *</label>
                    <select className="test-drive-form__select" id="model" name="model" value={formData.model} onChange={handleInputChange} required>
                      <option value="" disabled>Chọn mẫu xe</option>
                      <option value="3-series">BMW 3 Series</option>
                      <option value="5-series">BMW 5 Series</option>
                      <option value="7-series">BMW 7 Series</option>
                      <option value="x3">BMW X3</option>
                      <option value="x5">BMW X5</option>
                      <option value="x7">BMW X7</option>
                      <option value="i4">BMW i4</option>
                      <option value="i7">BMW i7</option>
                      <option value="ix">BMW iX</option>
                    </select>
                  </div>

                  <div className="test-drive-form__group">
                    <label htmlFor="preferredDate" className="test-drive-form__label">Ngày lái thử mong muốn *</label>
                    <input type="date" className="test-drive-form__input" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} required />
                  </div>

                  <div className="test-drive-form__group">
                    <label htmlFor="preferredTime" className="test-drive-form__label">Thời gian lái thử mong muốn *</label>
                    <select className="test-drive-form__select" id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} required>
                      <option value="" disabled>Chọn thời gian</option>
                      <option value="morning">Sáng (9:00 - 12:00)</option>
                      <option value="afternoon">Chiều (13:00 - 17:00)</option>
                      <option value="evening">Tối (18:00 - 20:00)</option>
                    </select>
                  </div>

                  <div className="test-drive-form__group">
                    <label htmlFor="message" className="test-drive-form__label">Ghi chú</label>
                    <textarea className="test-drive-form__textarea" id="message" name="message" rows={3} value={formData.message} onChange={handleInputChange}></textarea>
                  </div>

                  <div className="test-drive-form__group test-drive-form__check-group">
                    <input type="checkbox" className="test-drive-form__check-input" id="privacyPolicy" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleInputChange} required />
                    <label className="test-drive-form__check-label" htmlFor="privacyPolicy">
                      Tôi đồng ý với <Link to="/privacy" className="test-drive-form__privacy-link">chính sách bảo mật</Link> của BMW Vietnam
                    </label>
                  </div>

                  <button type="submit" className="test-drive-form__btn-submit">Đăng ký lái thử</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Drive Process */}
      <section className="test-drive-process">
        <div className="test-drive-process__container">
          <h2 className="test-drive-process__title">QUY TRÌNH LÁI THỬ</h2>

          <div className="test-drive-process__steps">
            <div className="test-drive-process__step">
              <div className="test-drive-process__step-number">1</div>
              <div className="test-drive-process__step-icon">
                <FaEdit />
              </div>
              <h3 className="test-drive-process__step-title">Đăng ký</h3>
              <p className="test-drive-process__step-description">Điền thông tin vào form đăng ký lái thử trên website.</p>
            </div>

            <div className="test-drive-process__step">
              <div className="test-drive-process__step-number">2</div>
              <div className="test-drive-process__step-icon">
                <FaPhone />
              </div>
              <h3 className="test-drive-process__step-title">Xác nhận</h3>
              <p className="test-drive-process__step-description">Nhân viên BMW sẽ liên hệ để xác nhận lịch lái thử.</p>
            </div>

            <div className="test-drive-process__step">
              <div className="test-drive-process__step-number">3</div>
              <div className="test-drive-process__step-icon">
                <FaCar />
              </div>
              <h3 className="test-drive-process__step-title">Lái thử</h3>
              <p className="test-drive-process__step-description">Đến showroom theo lịch hẹn và trải nghiệm lái thử xe.</p>
            </div>

            <div className="test-drive-process__step">
              <div className="test-drive-process__step-number">4</div>
              <div className="test-drive-process__step-icon">
                <FaComments />
              </div>
              <h3 className="test-drive-process__step-title">Tư vấn</h3>
              <p className="test-drive-process__step-description">Nhận tư vấn chi tiết về xe và các chương trình ưu đãi.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TestDrivePage; 