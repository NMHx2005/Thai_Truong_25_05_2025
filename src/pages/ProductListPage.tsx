import React, { useState } from 'react';
import { Product } from '../api/types'; // Import Product type
import ProductCard from '../components/product/ProductCard'; // Import ProductCard component

const ProductListPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewOption, setViewOption] = useState('grid');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    // console.log('Filtering by category:', category);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    // console.log('Sorting by:', event.target.value);
  };

  const handleViewChange = (view: string) => {
    setViewOption(view);
    // console.log('Changing view to:', view);
  };

  // Hardcoded product data - replace with actual data fetching later
  const products: Product[] = [
    {
      _id: '1',
      Product_Name: 'BMW 3 Series',
      CategoryID: 'sedan',
      Main_Image: '/images/new_bmw_3_series_sedan.webp',
      List_Image: [], // Add actual images if available
      Specifications: { 'Engine': '2.0L TwinPower Turbo', 'Horsepower': '258 hp', 'Transmission': '8-speed Automatic' },
      Status: 'available',
      Stock: 10,
      Price: 1869000000,
      Description: 'Dòng sedan thể thao và thanh lịch.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      _id: '2',
      Product_Name: 'BMW 5 Series',
      CategoryID: 'sedan',
      Main_Image: '/images/new_bmw_5_series.webp',
      List_Image: [],
      Specifications: { 'Engine': '2.0L TwinPower Turbo', 'Horsepower': '300 hp', 'Transmission': '8-speed Automatic' },
      Status: 'available',
      Stock: 8,
      Price: 2969000000,
      Description: 'Biểu tượng của sự sang trọng và hiệu suất.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      _id: '3',
      Product_Name: 'BMW 7 Series',
      CategoryID: 'sedan',
      Main_Image: '/images/7_series.webp',
      List_Image: [],
      Specifications: { 'Engine': '3.0L TwinPower Turbo', 'Horsepower': '340 hp', 'Transmission': '8-speed Automatic' },
      Status: 'available',
      Stock: 5,
      Price: 5369000000,
      Description: 'Đỉnh cao của sự tiện nghi và công nghệ.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      _id: '4',
      Product_Name: 'BMW X3',
      CategoryID: 'suv',
      Main_Image: '/images/x3_2_.webp',
      List_Image: [],
      Specifications: { 'Engine': '2.0L TwinPower Turbo', 'Horsepower': '252 hp', 'Transmission': '8-speed Automatic' },
      Status: 'available',
      Stock: 12,
      Price: 2499000000,
      Description: 'SUV nhỏ gọn đa năng và linh hoạt.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      _id: '5',
      Product_Name: 'BMW X5',
      CategoryID: 'suv',
      Main_Image: '/images/x5_resize.webp',
      List_Image: [],
      Specifications: { 'Engine': '3.0L TwinPower Turbo', 'Horsepower': '340 hp', 'Transmission': '8-speed Automatic' },
      Status: 'available',
      Stock: 9,
      Price: 3469000000,
      Description: 'SUV hạng trung sang trọng và mạnh mẽ.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      _id: '6',
      Product_Name: 'BMW X7',
      CategoryID: 'suv',
      Main_Image: '/images/x7-xdrive40i-m-sport.png',
      List_Image: [],
      Specifications: { 'Engine': '3.0L TwinPower Turbo', 'Horsepower': '340 hp', 'Transmission': '8-speed Automatic' },
      Status: 'available',
      Stock: 7,
      Price: 5549000000,
      Description: 'SUV 7 chỗ đẳng cấp và tiện nghi.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      _id: '7',
      Product_Name: 'BMW 4 Series Coupe',
      CategoryID: 'coupe',
      Main_Image: '/images/4_gc.webp',
      List_Image: [],
      Specifications: { 'Engine': '2.0L TwinPower Turbo', 'Horsepower': '258 hp', 'Transmission': '8-speed Automatic' },
      Status: 'available',
      Stock: 6,
      Price: 2999000000,
      Description: 'Thiết kế coupe thể thao và cá tính.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      _id: '8',
      Product_Name: 'BMW M3 Competition',
      CategoryID: 'm',
      Main_Image: '/images/di23_000192972.webp',
      List_Image: [],
      Specifications: { 'Engine': '3.0L M TwinPower Turbo', 'Horsepower': '510 hp', 'Transmission': '8-speed Automatic' },
      Status: 'available',
      Stock: 3,
      Price: 4299000000,
      Description: 'Hiệu suất đỉnh cao từ bộ phận M.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      _id: '9',
      Product_Name: 'BMW M4 Competition',
      CategoryID: 'm',
      Main_Image: '/images/di23_000192972 (1).webp',
      List_Image: [],
      Specifications: { 'Engine': '3.0L M TwinPower Turbo', 'Horsepower': '530 hp', 'Transmission': '8-speed Automatic' },
      Status: 'available',
      Stock: 2,
      Price: 8999000000,
      Description: 'Sự kết hợp giữa thiết kế coupe và hiệu suất M.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      _id: '10',
      Product_Name: 'BMW i4',
      CategoryID: 'i',
      Main_Image: '/images/i4.webp',
      List_Image: [],
      Specifications: { 'Motor': 'Electric', 'Horsepower': '340 hp', 'Range': 'Up to 590 km' },
      Status: 'available',
      Stock: 15,
      Price: 3599000000,
      Description: 'Gran Coupé thuần điện đầu tiên.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      _id: '11',
      Product_Name: 'BMW iX3',
      CategoryID: 'i',
      Main_Image: '/images/new_bmw_ix3_series.webp',
      List_Image: [],
      Specifications: { 'Motor': 'Electric', 'Horsepower': '286 hp', 'Range': 'Up to 460 km' },
      Status: 'available',
      Stock: 11,
      Price: 4699000000,
      Description: 'SUV thuần điện đa dụng.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  // Simple filtering logic
  const filteredProducts = activeCategory === 'all' ? products : products.filter(p => p.CategoryID === activeCategory);

  // Simple sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.Price - b.Price;
    if (sortBy === 'price-desc') return b.Price - a.Price;
    if (sortBy === 'name-asc') return a.Product_Name.localeCompare(b.Product_Name);
    // For newest, we can sort by createdAt timestamp if available, otherwise no sort
    if (sortBy === 'newest') {
      if (a.createdAt && b.createdAt) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      return 0; // Keep original order if no timestamps
    }
    return 0;
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
            {sortedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
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
                <img src="/images/bmw-x5m.jpg" alt="BMW X5 M Competition" />
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
                    {/* Options can be generated from product data later */}
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
                    {/* Options can be generated from product data later */}
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
                    {/* Options can be generated from product data later */}
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