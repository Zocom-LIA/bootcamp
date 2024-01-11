import { useEffect, useState } from "react";
import { Header } from "@zocom/header";
import "./style.scss";
import { StyleTypes } from "@zocom/types";
import menuData from "./../../../../../data/menu.json";
import { mockOrder } from "@zocom/order";
import { Button, ButtonType } from "@zocom/button";

export interface MenuItemData {
  name: string;
  desc?: string;
  ingredients?: string[];
  price: number;
  id: number;
}

interface Menu {
  wontons: MenuItemData[];
  dip: MenuItemData[];
}

const MenuComponent = () => {
  const [menu, setMenu] = useState<Menu | null>(null);
  const [totalQuantity, setTotalQuantity] = useState(mockOrder.reduce((acc, item) => acc + item.quantity, 0));

  const addItemToCart = (item: MenuItemData) => {
    const findItemIndex = (itemId: number): number => {
      return mockOrder.findIndex((orderItem) => orderItem.id === itemId);
    };

    const itemIndex = findItemIndex(item.id);

    if (itemIndex !== -1) {
      mockOrder[itemIndex].quantity += 1;
    } else {
      mockOrder.push({ ...item, quantity: 1 });
    }

    console.log(mockOrder);
    const updatedTotalQuantity = mockOrder.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(updatedTotalQuantity);
    console.log("total", totalQuantity);
  };

  const handleWontonClick = (item: MenuItemData) => {
    console.log(`Clicked on ${item.name}`);
    addItemToCart(item);
  };

  const handleDipClick = (item: MenuItemData) => {
    console.log(`Clicked on ${item.name}`);
    addItemToCart(item);
  };

  useEffect(() => {
    setMenu(menuData);
  }, []);

  return (
    <div>
      <Header quantity={totalQuantity} showCircle={totalQuantity > 0 ? true : false} />
      <div className="menu">
        <h1 className="menu_h1">Meny</h1>
        {menu && (
          <div>
            {menu.wontons.map((item) => (
              <div key={item.id} className="menu-item" onClick={() => handleWontonClick(item)}>
                <div className="menu-item__name">
                  <h2 className="menu_h2">{item.name}</h2>
                  <p className="menu-item__divider"></p>
                  <div className="menu-item__price">
                    <h2 className="menu_h2">{item.price}</h2>
                    <h2 className="menu_h2">SEK</h2>
                  </div>
                </div>

                {item.ingredients && (
                  <ul className="ingredients-list">
                    {item.ingredients.map((ingredient, ingredientIndex) => (
                      <li key={ingredientIndex}>{ingredient}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <h2 className="menu_h2">Dipsås</h2>
            <div className="dip-buttons-container">
              {menu.dip.map((item) => (
                <Button key={item.id} type={ButtonType.REGULAR} style={StyleTypes.DEFAULT} onClick={() => handleDipClick(item)}>
                  <h2>{item.name}</h2>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { MenuComponent };
