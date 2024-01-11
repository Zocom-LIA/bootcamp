import { Header } from "@zocom/header";
import "./style.scss";
import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";
import { ReceiptComponent } from "@zocom/receiptcomponent";
import { Link } from "react-router-dom";

export const Receipt = () => {
  return (
    <div className="receipt">
      <Header />
      <section className="receipt__section">
        <ReceiptComponent />
        <Link to="/menu">
          <Button type={ButtonType.STRETCH} style={StyleTypes.DARK}>
            Gör en ny beställning
          </Button>
        </Link>
      </section>
    </div>
  );
};
