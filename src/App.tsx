import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import PriceListPage from './pages/PriceListPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ServicePage from './pages/ServicePage';
import TestDrivePage from './pages/TestDrivePage';
import NewsPage from './pages/NewsPage';


// Import main SCSS here
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="san-pham" element={<ProductListPage />} />
              <Route path="san-pham/:id" element={<ProductDetailPage />} />
              <Route path="bang-gia" element={<PriceListPage />} />
              <Route path="dich-vu" element={<ServicePage />} />
              <Route path="dat-hen-lai-thu" element={<TestDrivePage />} />
              <Route path="tin-tuc" element={<NewsPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="orders" element={<OrdersPage />} />
            </Route>
          </Routes>
        </main>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
};

export default App; 