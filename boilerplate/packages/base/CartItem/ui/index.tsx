import "./style.scss";

interface CartItemProps {
  name: string;
  price: number;
  id: number;
  quantity: number;
  showQuantityButtons?: boolean;
  itemIncrease?: (id: number) => void;
  itemDecrease?: (id: number) => void;
}

export const CartItem = ({ name, price, id, quantity, showQuantityButtons, itemIncrease, itemDecrease }: CartItemProps) => {
  const handleIncrease = () => {
    if (itemIncrease) {
      itemIncrease(id);
    }
  };

  const handleDecrease = () => {
    if (itemDecrease) {
      itemDecrease(id);
    }
  };

  const totalPrice = price * quantity;

  return (
    <li className="cart-item">
      <article className="cart-item__details">
        <p className="cart-item__name">{name}</p>
        <p className="cart-item__divider"></p>
        <p className="cart-item__price">{totalPrice} SEK</p>
      </article>
      <article className="cart-item__amount">
        {showQuantityButtons && (
          <button className="cart-item__btn cart-item__btn--add" onClick={handleIncrease}>
            +
          </button>
        )}
        <p className="cart-item__value">{quantity} stycken</p>
        {showQuantityButtons && (
          <button className="cart-item__btn cart-item__btn--remove" onClick={handleDecrease}>
            -
          </button>
        )}
      </article>
    </li>
  );
};
