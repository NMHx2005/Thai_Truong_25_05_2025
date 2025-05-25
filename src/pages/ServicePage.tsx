import React from 'react';
import { FaCheckCircle, FaTools, FaCarCrash, FaTachometerAlt, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const ServicePage: React.FC = () => {
  return (
    <div className="service-page">
      {/* Page Banner */}
      <div className="page-banner service-page__banner">
        <div className="page-banner__container">
          <h1 className="page-banner__title">Dịch Vụ BMW</h1>
          <p className="page-banner__subtitle">Chăm sóc xe BMW của bạn với dịch vụ chuyên nghiệp</p>
        </div>
      </div>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="service-overview__container">
          <div className="service-overview__row">
            <div className="service-overview__col">
              <h2 className="service-overview__heading">Dịch Vụ Chính Hãng BMW</h2>
              <p className="service-overview__description">
                Tại BMW Việt Nam, chúng tôi cung cấp dịch vụ bảo dưỡng và sửa chữa chuyên nghiệp, đảm bảo chiếc xe BMW của bạn luôn trong tình trạng hoạt động tốt nhất.
              </p>
              <p className="service-overview__description">
                Đội ngũ kỹ thuật viên của chúng tôi được đào tạo bài bản tại Đức và sử dụng công nghệ chẩn đoán tiên tiến nhất để phát hiện và khắc phục mọi vấn đề.
              </p>
              <div className="service-overview__highlights">
                <div className="service-overview__highlight-item">
                  <FaCheckCircle />
                  <span>Phụ tùng chính hãng 100%</span>
                </div>
                <div className="service-overview__highlight-item">
                  <FaCheckCircle />
                  <span>Bảo hành dịch vụ toàn quốc</span>
                </div>
                <div className="service-overview__highlight-item">
                  <FaCheckCircle />
                  <span>Kỹ thuật viên được đào tạo tại Đức</span>
                </div>
                <div className="service-overview__highlight-item">
                  <FaCheckCircle />
                  <span>Công nghệ chẩn đoán hiện đại</span>
                </div>
              </div>
            </div>
            <div className="service-overview__col">
              <img src="/images/bmw-service-center.jpg" alt="BMW Service Center" className="service-overview__image" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="service-categories">
        <div className="service-categories__container">
          <h2 className="service-categories__title">DỊCH VỤ CỦA CHÚNG TÔI</h2>

          <div className="service-categories__row">
            <div className="service-categories__col">
              <div className="service-card">
                <div className="service-card__icon">
                  <FaTools />
                </div>
                <h3 className="service-card__title">Bảo Dưỡng Định Kỳ</h3>
                <p className="service-card__description">
                  Dịch vụ bảo dưỡng định kỳ theo tiêu chuẩn của BMW toàn cầu, giúp xe của bạn luôn trong tình trạng tốt nhất.
                </p>
                <ul className="service-card__features">
                  <li>Thay dầu và lọc dầu</li>
                  <li>Kiểm tra và thay lọc gió</li>
                  <li>Kiểm tra hệ thống phanh</li>
                  <li>Kiểm tra hệ thống điện</li>
                  <li>Cập nhật phần mềm</li>
                </ul>
                <a href="#" className="service-card__btn">Đặt lịch bảo dưỡng</a>
              </div>
            </div>

            <div className="service-categories__col">
              <div className="service-card featured">
                <div className="service-card__badge">Phổ biến</div>
                <div className="service-card__icon">
                  <FaCarCrash />
                </div>
                <h3 className="service-card__title">Sửa Chữa & Đồng Sơn</h3>
                <p className="service-card__description">
                  Dịch vụ sửa chữa và đồng sơn chuyên nghiệp, khôi phục xe của bạn về trạng thái nguyên bản.
                </p>
                <ul className="service-card__features">
                  <li>Sửa chữa thân vỏ</li>
                  <li>Đồng sơn theo tiêu chuẩn nhà máy</li>
                  <li>Thay thế phụ tùng chính hãng</li>
                  <li>Kiểm tra khung gầm</li>
                  <li>Bảo hành công việc</li>
                </ul>
                <a href="#" className="service-card__btn">Tư vấn sửa chữa</a>
              </div>
            </div>

            <div className="service-categories__col">
              <div className="service-card">
                <div className="service-card__icon">
                  <FaTachometerAlt />
                </div>
                <h3 className="service-card__title">Nâng Cấp Hiệu Suất</h3>
                <p className="service-card__description">
                  Dịch vụ nâng cấp hiệu suất chính hãng, tối ưu hóa khả năng vận hành của xe BMW.
                </p>
                <ul className="service-card__features">
                  <li>Nâng cấp phần mềm động cơ</li>
                  <li>Cải thiện hệ thống xả</li>
                  <li>Nâng cấp hệ thống treo</li>
                  <li>Tối ưu hóa hộp số</li>
                  <li>Nâng cấp phanh hiệu suất cao</li>
                </ul>
                <a href="#" className="service-card__btn">Tìm hiểu thêm</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="service-process">
        <div className="service-process__container">
          <h2 className="service-process__title">QUY TRÌNH DỊCH VỤ</h2>

          <div className="service-process__steps">
            <div className="service-process__step">
              <div className="service-process__step-number">1</div>
              <div className="service-process__step-content">
                <h3 className="service-process__step-title">Đặt Lịch Hẹn</h3>
                <p className="service-process__step-description">Đặt lịch hẹn trực tuyến hoặc qua điện thoại với trung tâm dịch vụ BMW gần nhất.</p>
              </div>
            </div>

            <div className="service-process__step">
              <div className="service-process__step-number">2</div>
              <div className="service-process__step-content">
                <h3 className="service-process__step-title">Tiếp Nhận Xe</h3>
                <p className="service-process__step-description">Cố vấn dịch vụ sẽ tiếp nhận xe và thông tin yêu cầu của bạn.</p>
              </div>
            </div>

            <div className="service-process__step">
              <div className="service-process__step-number">3</div>
              <div className="service-process__step-content">
                <h3 className="service-process__step-title">Kiểm Tra & Chẩn Đoán</h3>
                <p className="service-process__step-description">Kỹ thuật viên sẽ kiểm tra và chẩn đoán tình trạng xe bằng công nghệ hiện đại nhất.</p>
              </div>
            </div>

            <div className="service-process__step">
              <div className="service-process__step-number">4</div>
              <div className="service-process__step-content">
                <h3 className="service-process__step-title">Báo Giá & Xác Nhận</h3>
                <p className="service-process__step-description">Cố vấn dịch vụ sẽ liên hệ với bạn để báo giá và xác nhận các hạng mục cần thực hiện.</p>
              </div>
            </div>

            <div className="service-process__step">
              <div className="service-process__step-number">5</div>
              <div className="service-process__step-content">
                <h3 className="service-process__step-title">Thực Hiện Dịch Vụ</h3>
                <p className="service-process__step-description">Kỹ thuật viên thực hiện các hạng mục dịch vụ đã được xác nhận.</p>
              </div>
            </div>

            <div className="service-process__step">
              <div className="service-process__step-number">6</div>
              <div className="service-process__step-content">
                <h3 className="service-process__step-title">Kiểm Tra Chất Lượng</h3>
                <p className="service-process__step-description">Trưởng nhóm kỹ thuật kiểm tra lại chất lượng công việc trước khi bàn giao xe.</p>
              </div>
            </div>

            <div className="service-process__step">
              <div className="service-process__step-number">7</div>
              <div className="service-process__step-content">
                <h3 className="service-process__step-title">Bàn Giao Xe</h3>
                <p className="service-process__step-description">Cố vấn dịch vụ bàn giao xe và giải thích chi tiết các hạng mục đã thực hiện.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="service-packages">
        <div className="service-packages__container">
          <h2 className="service-packages__title">GÓI DỊCH VỤ</h2>

          <div className="service-packages__row">
            <div className="service-packages__col">
              <div className="package-card">
                <div className="package-card__header">
                  <h3 className="package-card__title">Gói Cơ Bản</h3>
                  <div className="package-card__price">2.500.000 VNĐ</div>
                </div>
                <div className="package-card__body">
                  <ul className="package-card__features">
                    <li><FaCheckCircle /> Thay dầu động cơ</li>
                    <li><FaCheckCircle /> Thay lọc dầu</li>
                    <li><FaCheckCircle /> Kiểm tra 20 điểm an toàn</li>
                    <li><FaCheckCircle /> Cập nhật phần mềm cơ bản</li>
                    <li><FaCheckCircle /> Vệ sinh nội thất cơ bản</li>
                    <li className="package-card__feature--unavailable"><i className="fas fa-times"></i> Thay lọc gió điều hòa</li>
                    <li className="package-card__feature--unavailable"><i className="fas fa-times"></i> Thay lọc gió động cơ</li>
                    <li className="package-card__feature--unavailable"><i className="fas fa-times"></i> Vệ sinh kim phun</li>
                  </ul>
                  <a href="#" className="package-card__btn">Chọn gói</a>
                </div>
              </div>
            </div>

            <div className="service-packages__col">
              <div className="package-card featured">
                <div className="package-card__badge">Phổ biến</div>
                <div className="package-card__header">
                  <h3 className="package-card__title">Gói Tiêu Chuẩn</h3>
                  <div className="package-card__price">4.500.000 VNĐ</div>
                </div>
                <div className="package-card__body">
                  <ul className="package-card__features">
                    <li><FaCheckCircle /> Thay dầu động cơ</li>
                    <li><FaCheckCircle /> Thay lọc dầu</li>
                    <li><FaCheckCircle /> Kiểm tra 30 điểm an toàn</li>
                    <li><FaCheckCircle /> Cập nhật phần mềm đầy đủ</li>
                    <li><FaCheckCircle /> Vệ sinh nội thất toàn diện</li>
                    <li><FaCheckCircle /> Thay lọc gió điều hòa</li>
                    <li><FaCheckCircle /> Thay lọc gió động cơ</li>
                    <li className="package-card__feature--unavailable"><i className="fas fa-times"></i> Vệ sinh kim phun</li>
                  </ul>
                  <a href="#" className="package-card__btn">Chọn gói</a>
                </div>
              </div>
            </div>

            <div className="service-packages__col">
              <div className="package-card">
                <div className="package-card__header">
                  <h3 className="package-card__title">Gói Cao Cấp</h3>
                  <div className="package-card__price">7.500.000 VNĐ</div>
                </div>
                <div className="package-card__body">
                  <ul className="package-card__features">
                    <li><FaCheckCircle /> Thay dầu động cơ cao cấp</li>
                    <li><FaCheckCircle /> Thay lọc dầu</li>
                    <li><FaCheckCircle /> Kiểm tra 40 điểm an toàn</li>
                    <li><FaCheckCircle /> Cập nhật phần mềm đầy đủ</li>
                    <li><FaCheckCircle /> Vệ sinh nội thất chuyên sâu</li>
                    <li><FaCheckCircle /> Thay lọc gió điều hòa</li>
                    <li><FaCheckCircle /> Thay lọc gió động cơ</li>
                    <li><FaCheckCircle /> Vệ sinh kim phun</li>
                  </ul>
                  <a href="#" className="package-card__btn">Chọn gói</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="service-locations">
        <div className="service-locations__container">
          <h2 className="service-locations__title">TRUNG TÂM DỊCH VỤ</h2>

          <div className="service-locations__row">
            <div className="service-locations__col">
              <div className="location-card">
                <div className="location-card__image">
                  <img src="/images/bmw-service-hanoi.jpg" alt="BMW Service Hà Nội" />
                </div>
                <div className="location-card__info">
                  <h3 className="location-card__name">BMW Service Hà Nội</h3>
                  <p className="location-card__address">
                    <FaMapMarkerAlt />
                    Số 132 Lê Duẩn, Đống Đa, Hà Nội
                  </p>
                  <p className="location-card__phone">
                    <FaPhone />
                    024.3333.7777
                  </p>
                  <p className="location-card__hours">
                    <FaClock />
                    Thứ 2 - Thứ 7: 8:00 - 17:30
                  </p>
                  <a href="#" className="location-card__btn">Xem bản đồ</a>
                </div>
              </div>
            </div>

            <div className="service-locations__col">
              <div className="location-card">
                <div className="location-card__image">
                  <img src="/images/bmw-service-hcm.jpg" alt="BMW Service Hồ Chí Minh" />
                </div>
                <div className="location-card__info">
                  <h3 className="location-card__name">BMW Service Hồ Chí Minh</h3>
                  <p className="location-card__address">
                    <FaMapMarkerAlt />
                    Số 245 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh
                  </p>
                  <p className="location-card__phone">
                    <FaPhone />
                    028.3333.7777
                  </p>
                  <p className="location-card__hours">
                    <FaClock />
                    Thứ 2 - Thứ 7: 8:00 - 17:30
                  </p>
                  <a href="#" className="location-card__btn">Xem bản đồ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="booking-form-section">
        <div className="booking-form-section__container">
          <div className="booking-form">
            <h2 className="booking-form__title">ĐẶT LỊCH DỊCH VỤ</h2>
            <p className="booking-form__subtitle">Điền thông tin để đặt lịch dịch vụ tại trung tâm BMW gần nhất</p>

            <form className="booking-form__form">
              <div className="booking-form__row">
                <div className="booking-form__col">
                  <label htmlFor="fullName" className="booking-form__label">Họ và tên</label>
                  <input type="text" className="booking-form__input" id="fullName" placeholder="Nhập họ và tên" />
                </div>
                <div className="booking-form__col">
                  <label htmlFor="phone" className="booking-form__label">Số điện thoại</label>
                  <input type="tel" className="booking-form__input" id="phone" placeholder="Nhập số điện thoại" />
                </div>
              </div>

              <div className="booking-form__row">
                <div className="booking-form__col">
                  <label htmlFor="email" className="booking-form__label">Email</label>
                  <input type="email" className="booking-form__input" id="email" placeholder="Nhập email" />
                </div>
                <div className="booking-form__col">
                  <label htmlFor="carModel" className="booking-form__label">Mẫu xe</label>
                  <select className="booking-form__select" id="carModel">
                    <option value="">Chọn mẫu xe</option>
                    <option value="3-series">BMW 3 Series</option>
                    <option value="5-series">BMW 5 Series</option>
                    <option value="7-series">BMW 7 Series</option>
                    <option value="x3">BMW X3</option>
                    <option value="x5">BMW X5</option>
                    <option value="x7">BMW X7</option>
                  </select>
                </div>
              </div>

              <div className="booking-form__row">
                <div className="booking-form__col">
                  <label htmlFor="serviceDate" className="booking-form__label">Ngày đặt lịch</label>
                  <input type="date" className="booking-form__input" id="serviceDate" />
                </div>
                <div className="booking-form__col">
                  <label htmlFor="serviceTime" className="booking-form__label">Thời gian</label>
                  <select className="booking-form__select" id="serviceTime">
                    <option value="">Chọn thời gian</option>
                    <option value="8:00">8:00</option>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:30">14:30</option>
                    <option value="15:30">15:30</option>
                  </select>
                </div>
              </div>

              <div className="booking-form__full-width">
                <label htmlFor="serviceType" className="booking-form__label">Loại dịch vụ</label>
                <select className="booking-form__select" id="serviceType">
                  <option value="">Chọn loại dịch vụ</option>
                  <option value="maintenance">Bảo dưỡng định kỳ</option>
                  <option value="repair">Sửa chữa</option>
                  <option value="bodywork">Đồng sơn</option>
                  <option value="performance">Nâng cấp hiệu suất</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className="booking-form__full-width">
                <label htmlFor="notes" className="booking-form__label">Ghi chú</label>
                <textarea className="booking-form__textarea" id="notes" rows={3} placeholder="Nhập yêu cầu chi tiết"></textarea>
              </div>

              <div className="booking-form__actions">
                <button type="submit" className="booking-form__btn-submit">Đặt lịch ngay</button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicePage; 