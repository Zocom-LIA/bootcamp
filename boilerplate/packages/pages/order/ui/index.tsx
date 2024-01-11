import { Header } from "@zocom/header";
import { CartItem } from "@zocom/cartitem";
import "./style.scss";
import { useState } from "react";
import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";
import { TotalPrice } from "@zocom/totalprice";
import { MenuItemData } from "../../../base/menu__item";
import { Link } from "react-router-dom";

interface OrderProps {
  cartItems: CartMenuItem[];
  total: number;
  totalQuantity: number;
}

interface CartMenuItem extends MenuItemData {
  quantity: number;
}

// change when doing real menu and not mockup
export const mockOrder: CartMenuItem[] = [];

export const Order = () => {
  const [cartItems, setCartItems] = useState<CartMenuItem[]>(mockOrder); // change for BE

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const order: OrderProps[] = [
    {
      cartItems: cartItems,
      total: totalPrice,
      totalQuantity: totalQuantity,
    },
  ];

  const handleIncreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const handleDecreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item)));
    setCartItems((prevItems) => prevItems.filter((item) => !(item.id === itemId && item.quantity === 0)));
  };

  // fix later, should send order to BE and then move onto ETA page?
  const handlePurchaseClick = () => {
    console.log("Purchased!");
    console.log(order);
  };

  return (
    <div className="order">
      <Header quantity={totalQuantity} showCircle={totalQuantity > 0 ? true : false} />
      <section className="order__section">
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} showQuantityButtons={true} itemIncrease={handleIncreaseQuantity} itemDecrease={handleDecreaseQuantity} />
          ))}
        </ul>
        {totalQuantity === 0 ? (
          <article>
            <h3 className="order__empty-text">Din varukorg är tom</h3>
            <TotalPrice total={totalPrice} />
            <Link to="/menu">
              <Button type={ButtonType.STRETCH} style={StyleTypes.DARK}>
                meny
              </Button>
            </Link>
          </article>
        ) : (
          <article>
            <TotalPrice total={totalPrice} />
            <Link to="/order/eta">
              <Button type={ButtonType.STRETCH} style={StyleTypes.DARK} onClick={handlePurchaseClick}>
                take my money!
              </Button>
            </Link>
          </article>
        )}
      </section>
    </div>
  );
};
