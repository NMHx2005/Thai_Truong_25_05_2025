import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import { setCartItems, setLoading, setError } from '../store/slices/cartSlice';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { cartService } from '../api/services/cart';

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchItems = async () => {
      if (user) {
        dispatch(setLoading(true));
        try {
          const cartItems = await cartService.getCartItems();
          dispatch(setCartItems(cartItems));
        } catch (err: any) {
          dispatch(setError(err.message || 'Failed to fetch cart items'));
        } finally {
          dispatch(setLoading(false));
        }
      }
    };

    fetchItems();
  }, [dispatch, user]);

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Vui lòng đăng nhập để xem giỏ hàng</p>
        <Link to="/login" className="text-primary-600 hover:text-primary-500">
          Đăng nhập
        </Link>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-8">Đang tải...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Giỏ hàng trống</p>
        <Link to="/" className="text-primary-600 hover:text-primary-500">
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Giỏ hàng</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>
        <div>
          <CartSummary items={items} />
        </div>
      </div>
    </div>
  );
};

export default CartPage; 