import './style.scss';
import { Cart } from '@zocom/cart';
import { useSelector, useDispatch } from 'react-redux';
import { ReceiptTotal } from '@zocom/receipt-total';
import { Button } from '@zocom/button';
import { ProductItem } from '@zocom/product-item';
import { postOrder } from '..';
import {
  increaseQuantity,
  decreaseQuantity,
  emptyCart,
} from '../../../../src/reduxstore/slices/shoppingCartSlice';
import { RootState } from '../../../../src/reduxstore/store';

type OrderItem = {
  count: number;
  name: string;
  totalPrice: number;
};

type Order = {
  customerId?: string;
  totalSum: number;
  selection: OrderItem[];
};

export const CheckoutPage = () => {
  const dispatch = useDispatch();
  const shoppingCartItems = useSelector(
    (state: RootState) => state.shoppingCart.shoppingCartItems
  );

  function totalSum() {
    return shoppingCartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  function handleIncreaseQty(name: string) {
    dispatch(increaseQuantity(name));
  }

  function handleDecreaseQty(name: string) {
    dispatch(decreaseQuantity(name));
  }

  const orderItems: OrderItem[] = shoppingCartItems.map((item) => ({
    count: item.quantity, // Assuming you have a quantity property in your item structure
    name: item.name,
    totalPrice: item.price * item.quantity,
  }));

  const testOrder: Order = {
    totalSum: totalSum(),
    selection: orderItems,
  };

  async function createOrder() {
    const customerId = localStorage.getItem('customerId');

    if (!customerId) {
      const order: Order = await postOrder(testOrder);
      dispatch(emptyCart());
      if (order.customerId) {
        localStorage.setItem('customerId', order?.customerId);
      }
    } else {
      const existingCustomer: Order = {
        customerId,
        ...testOrder,
      };
      postOrder(existingCustomer);
      dispatch(emptyCart());
    }
  }

  return (
    <main className="checkout-page">
      <section className="checkout-page__cart">
        <Cart bgColor="transparent" />
      </section>

      {orderItems.length > 0 ? (
        <ul className="checkout-page__customer-cart">
          {orderItems.map((item) => (
            <ProductItem
              name={item.name}
              price={item.totalPrice}
              quantity={item.count}
              key={item.name}
              handleIncreaseQty={() => handleIncreaseQty(item.name)}
              handleDecreaseQty={() => handleDecreaseQty(item.name)}
            />
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}

      <section className="checkout-page__checkout">
        <section className="checkout-page__amount">
          <ReceiptTotal total={totalSum()} />
        </section>
        <Button onClick={() => createOrder()} type="primary">
          Take my Money!
        </Button>
      </section>
    </main>
  );
};