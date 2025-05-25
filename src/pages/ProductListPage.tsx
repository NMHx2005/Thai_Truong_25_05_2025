import React, { useState } from 'react';

const ProductListPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewOption, setViewOption] = useState('grid');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    console.log('Filtering by category:', category);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    console.log('Sorting by:', event.target.value);
  };

  const handleViewChange = (view: string) => {
    setViewOption(view);
    console.log('Changing view to:', view);
  };

  // Dummy product data - replace with actual data fetching later
  const products = [
    { category: 'sedan', img: '/images/new_bmw_3_series_sedan.webp', title: 'BMW 3 Series', specs: ['258 HP', 'Xăng', 'Tự động'], price: '1.869.000.000 VNĐ', tags: ['Mới'] },
    { category: 'sedan', img: '/images/new_bmw_5_series.webp', title: 'BMW 5 Series', specs: ['300 HP', 'Xăng', 'Tự động'], price: '2.969.000.000 VNĐ', tags: [] },
    { category: 'sedan', img: '/images/7_series.webp', title: 'BMW 7 Series', specs: ['340 HP', 'Xăng', 'Tự động'], price: '5.369.000.000 VNĐ', tags: ['Luxury'] },
    { category: 'suv', img: '/images/x3_2_.webp', title: 'BMW X3', specs: ['252 HP', 'Xăng', 'Tự động'], price: '2.499.000.000 VNĐ', tags: [] },
    { category: 'suv', img: '/images/x5_resize.webp', title: 'BMW X5', specs: ['340 HP', 'Xăng', 'Tự động'], price: '3.469.000.000 VNĐ', tags: ['Bán chạy'] },
    { category: 'suv', img: '/images/x7-xdrive40i-m-sport.png', title: 'BMW X7', specs: ['340 HP', 'Xăng', 'Tự động'], price: '5.549.000.000 VNĐ', tags: ['Luxury'] },
    { category: 'coupe', img: '/images/4_gc.webp', title: 'BMW 4 Series', specs: ['258 HP', 'Xăng', 'Tự động'], price: '2.999.000.000 VNĐ', tags: [] },
    { category: 'm', img: '/images/di23_000192972.webp', title: 'BMW M3', specs: ['510 HP', 'Xăng', 'Tự động'], price: '4.299.000.000 VNĐ', tags: ['Performance'] },
    { category: 'm', img: '/images/di23_000192972 (1).webp', title: 'BMW M4', specs: ['530 HP', 'Xăng', 'Tự động'], price: '8.999.000.000 VNĐ', tags: ['Performance'] },
    { category: 'i', img: '/images/i4.webp', title: 'BMW i4', specs: ['340 HP', 'Điện', 'Tự động'], price: '3.599.000.000 VNĐ', tags: ['Electric'] },
    { category: 'i', img: '/images/new_bmw_ix3_series.webp', title: 'BMW iX3', specs: ['523 HP', 'Điện', 'Tự động'], price: '4.699.000.000 VNĐ', tags: ['Electric', 'Mới'] },
  ];

  // Simple filtering logic (can be expanded later)
  const filteredProducts = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  // Simple sorting logic (can be expanded later)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, ''));
    if (sortBy === 'price-desc') return parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, ''));
    if (sortBy === 'name-asc') return a.title.localeCompare(b.title);
    return 0; // newest (no sorting for this simple example)
  });

  return (
    <div className="product-list-page">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner__container">
          <h1 className="page-banner__title">Sản Phẩm BMW</h1>
          <p className="page-banner__subtitle">Khám phá dòng xe BMW đẳng cấp và sang trọng</p>
        </div>
      </div>

      {/* Product List Section */}
      <section className="product-list-section">
        <div className="product-list-section__container">

          {/* Product Categories Tabs */}
          <div className="product-categories-tabs">
            <button className={`product-categories-tabs__tab ${activeCategory === 'all' ? 'product-categories-tabs__tab--active' : ''}`}
                    onClick={() => handleCategoryClick('all')}>Tất cả</button>
            <button className={`product-categories-tabs__tab ${activeCategory === 'sedan' ? 'product-categories-tabs__tab--active' : ''}`}
                    onClick={() => handleCategoryClick('sedan')}>Sedan</button>
            <button className={`product-categories-tabs__tab ${activeCategory === 'suv' ? 'product-categories-tabs__tab--active' : ''}`}
                    onClick={() => handleCategoryClick('suv')}>SUV</button>
            <button className={`product-categories-tabs__tab ${activeCategory === 'coupe' ? 'product-categories-tabs__tab--active' : ''}`}
                    onClick={() => handleCategoryClick('coupe')}>Coupe</button>
            <button className={`product-categories-tabs__tab ${activeCategory === 'm' ? 'product-categories-tabs__tab--active' : ''}`}
                    onClick={() => handleCategoryClick('m')}>BMW M</button>
            <button className={`product-categories-tabs__tab ${activeCategory === 'i' ? 'product-categories-tabs__tab--active' : ''}`}
                    onClick={() => handleCategoryClick('i')}>BMW i</button>
          </div>

          {/* Product Filter and View Options */}
          <div className="product-filter-options">
            <div className="product-filter-options__sort-by">
              <label htmlFor="sortBy">Sắp xếp theo:</label>
              <select id="sortBy" className="product-filter-options__select" value={sortBy} onChange={handleSortChange}>
                <option value="newest">Mới nhất</option>
                <option value="price-asc">Giá: Thấp đến cao</option>
                <option value="price-desc">Giá: Cao đến thấp</option>
                <option value="name-asc">Tên: A-Z</option>
              </select>
            </div>
            <div className="product-filter-options__view">
              <span>Hiển thị:</span>
              <button className={`product-filter-options__view-btn ${viewOption === 'grid' ? 'product-filter-options__view-btn--active' : ''}`}
                      onClick={() => handleViewChange('grid')}>
                <i className="fas fa-th"></i>
              </button>
              <button className={`product-filter-options__view-btn ${viewOption === 'list' ? 'product-filter-options__view-btn--active' : ''}`}
                      onClick={() => handleViewChange('list')}>
                <i className="fas fa-list"></i>
              </button>
            </div>
          </div>

          {/* Product Grid/List */}
          <div className={`product-items ${viewOption === 'list' ? 'product-items--list-view' : ''}`}>
            {sortedProducts.map((product, index) => (
              <div key={index} className={`product-card ${viewOption === 'list' ? 'product-card--list-view' : ''}`}>
                <div className="product-card__image">
                  <img src={product.img} alt={product.title} />
                  {product.tags.length > 0 && (
                    <div className="product-card__tags">
                      {product.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={`product-card__tag product-card__tag--${tag.toLowerCase().replace(' ', '-')}`}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="product-card__info">
                  <h3 className="product-card__title">{product.title}</h3>
                  <div className="product-card__specs">
                    {product.specs.map((spec, specIndex) => (
                      <span key={specIndex} className="product-card__spec">
                        {/* Assuming simple icons for now - need actual icon mapping */}
                        {spec.includes('HP') && <i className="fas fa-tachometer-alt"></i>}
                        {spec.includes('Xăng') && <i className="fas fa-gas-pump"></i>}
                        {spec.includes('Điện') && <i className="fas fa-charging-station"></i>}
                        {spec.includes('Tự động') && <i className="fas fa-cog"></i>}
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="product-card__price">
                    <span className="product-card__price-value">{product.price}</span>
                  </div>
                  <div className="product-card__actions">
                    <a href="#" className="product-card__btn-detail">Xem chi tiết</a>
                    <a href="#" className="product-card__btn-test-drive">Đặt lái thử</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {/* Pagination implementation can be added here later */}
          <div className="pagination">
            <button className="pagination__btn pagination__btn--prev" disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="pagination__link pagination__link--active">1</button>
            <button className="pagination__link">2</button>
            <button className="pagination__link">3</button>
            <button className="pagination__btn pagination__btn--next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

        </div>
      </section>

      {/* Featured Product Section */}
      <section className="featured-product-section">
        <div className="featured-product-section__container">
          <div className="featured-product-section__row">
            <div className="featured-product-section__col">
              <div className="featured-product-section__content">
                <span className="featured-product-section__label">Sản phẩm nổi bật</span>
                <h2 className="featured-product-section__title">BMW X5 M Competition</h2>
                <p className="featured-product-section__description">
                  Sự kết hợp hoàn hảo giữa hiệu suất thể thao M và sự sang trọng của dòng SUV X5. Với động cơ V8 4.4L Twin-Turbo mạnh mẽ, BMW X5 M Competition mang đến trải nghiệm lái xe đỉnh cao.
                </p>
                <div className="featured-product-section__specs">
                  <div className="featured-product-section__spec-item">
                    <span className="featured-product-section__spec-value">625</span>
                    <span className="featured-product-section__spec-label">Mã lực</span>
                  </div>
                  <div className="featured-product-section__spec-item">
                    <span className="featured-product-section__spec-value">3.8</span>
                    <span className="featured-product-section__spec-label">0-100 km/h (giây)</span>
                  </div>
                  <div className="featured-product-section__spec-item">
                    <span className="featured-product-section__spec-value">250</span>
                    <span className="featured-product-section__spec-label">Tốc độ tối đa (km/h)</span>
                  </div>
                </div>
                <div className="featured-product-section__actions">
                  <a href="#" className="featured-product-section__btn-detail">Khám phá ngay</a>
                  <a href="#" className="featured-product-section__btn-test">Đặt lái thử</a>
                </div>
              </div>
            </div>
            <div className="featured-product-section__col">
              <div className="featured-product-section__image">
                <img src="/images/bmw-x5m.png" alt="BMW X5 M Competition" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Products Section */}
      <section className="compare-products-section">
        <div className="compare-products-section__container">
          <h2 className="compare-products-section__title">SO SÁNH XE</h2>
          <p className="compare-products-section__subtitle">So sánh các mẫu xe BMW để tìm ra chiếc xe phù hợp nhất với bạn</p>

          <div className="compare-products-section__compare-container">
            <div className="compare-products-section__row">
              <div className="compare-products-section__col">
                <div className="compare-products-section__select-group">
                  <label htmlFor="compare1">Xe thứ nhất</label>
                  <select id="compare1" className="compare-products-section__select">
                    <option value="">Chọn xe</option>
                    <option value="3-series">BMW 3 Series</option>
                    <option value="5-series">BMW 5 Series</option>
                    <option value="7-series">BMW 7 Series</option>
                    <option value="x3">BMW X3</option>
                    <option value="x5">BMW X5</option>
                    <option value="x7">BMW X7</option>
                  </select>
                </div>
              </div>
              <div className="compare-products-section__col">
                <div className="compare-products-section__select-group">
                  <label htmlFor="compare2">Xe thứ hai</label>
                  <select id="compare2" className="compare-products-section__select">
                    <option value="">Chọn xe</option>
                    <option value="3-series">BMW 3 Series</option>
                    <option value="5-series">BMW 5 Series</option>
                    <option value="7-series">BMW 7 Series</option>
                    <option value="x3">BMW X3</option>
                    <option value="x5">BMW X5</option>
                    <option value="x7">BMW X7</option>
                  </select>
                </div>
              </div>
              <div className="compare-products-section__col">
                <div className="compare-products-section__select-group">
                  <label htmlFor="compare3">Xe thứ ba (tùy chọn)</label>
                  <select id="compare3" className="compare-products-section__select">
                    <option value="">Chọn xe</option>
                    <option value="3-series">BMW 3 Series</option>
                    <option value="5-series">BMW 5 Series</option>
                    <option value="7-series">BMW 7 Series</option>
                    <option value="x3">BMW X3</option>
                    <option value="x5">BMW X5</option>
                    <option value="x7">BMW X7</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="compare-products-section__actions">
              <button className="compare-products-section__btn-compare">So sánh ngay</button>
            </div>
          </div>
        </div>
      </section>

      {/* Test Drive CTA Section */}
      <section className="test-drive-cta-section">
        <div className="test-drive-cta-section__container">
          <div className="test-drive-cta-section__row">
            <div className="test-drive-cta-section__col">
              <div className="test-drive-cta-section__content">
                <h2 className="test-drive-cta-section__title">Đặt lịch lái thử</h2>
                <p className="test-drive-cta-section__description">
                  Trải nghiệm cảm giác lái đỉnh cao cùng BMW. Đặt lịch lái thử ngay hôm nay để cảm nhận sự khác biệt.
                </p>
                <a href="#" className="test-drive-cta-section__btn-cta">Đặt lịch ngay</a>
              </div>
            </div>
            <div className="test-drive-cta-section__col">
              <div className="test-drive-cta-section__image">
                <img src="/images/test-drive.jpg" alt="BMW Test Drive" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductListPage; 