import { CartItem } from "@zocom/cartitem";
import "./style.scss";
import { mockOrder } from "@zocom/order";
import { TotalPrice } from "@zocom/totalprice";
import logoIcon from "./../../../../../assets/logo.svg";

export const ReceiptComponent = () => {
  // fix these two later when BE
  const total = mockOrder.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const orderId = "4kjwsdf234k";

  return (
    <article className="receipt-view">
      <header className="receipt-view__header">
        <img src={logoIcon} className="header__logo" alt="logo icon" />
        <p className="header__text">kvitto</p>
        <p className="header__order-id">#{orderId}</p>
      </header>
      <ul>
        {mockOrder.map((item) => (
          <CartItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} showQuantityButtons={false} />
        ))}
      </ul>
      <TotalPrice total={total} />
    </article>
  );
};
