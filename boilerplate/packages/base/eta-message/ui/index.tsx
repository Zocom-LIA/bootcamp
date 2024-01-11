
/*
import React from 'react';
import { Header } from "@zocom/header";
import "./style.scss";
import boxTopImage from '../../../.././../assets/boxtop 1.svg'; // Import the image

// Local Component Types 
export enum ButtonType {
  'REGULAR' = 'regular',
  'STRETCH' = 'stretch'
}

// Component Props 
type ButtonProps = {
  children: React.ReactNode | React.ReactNode[];
  type?: ButtonType;
  onClick: () => void;
}

// Button Component 
const Button = ({ 
  children, 
  type = ButtonType.REGULAR,
  onClick
}: ButtonProps) => {
  return (
    <button className={`button__${type}--default`} onClick={() => onClick()}>{children}</button>
  );
}

const EtaPage = () => {
  // Mock ETA and order number (replace them with actual values later)
  const mockEta = "5 minutes";
  const mockOrderNumber = "123456";



    // Add the image , // Display the mock ETA // Display the order number
  return (
    <div>
      <Header />
      <div className="eta-page">
      <img src={boxTopImage} alt="Box Top" className="eta-page__image" /> 
        <h1 className="eta-page__title">Dina wontons tillagas</h1>
        <h2 className='eta-page__h2'>ETA: {mockEta}</h2> 
        <p>#{mockOrderNumber}</p> 
        <div className="eta-page__buttons">
          <Button type={ButtonType.STRETCH} onClick={() => console.log('Order More clicked')}>
            beställ mer
          </Button>
          <Button type={ButtonType.STRETCH} onClick={() => console.log('See Receipt clicked')}>
            Se kvitto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EtaPage; // Use default export
*/


import React, { useState } from 'react';
import { Header } from "@zocom/header";
import "./style.scss";
import boxTopImage from '../../../.././../assets/boxtop 1.svg'; // Import the image

/* Local Component Types */
export enum ButtonType {
  'REGULAR' = 'regular',
  'STRETCH' = 'stretch'
}

/* Component Props */
type ButtonProps = {
  children: React.ReactNode | React.ReactNode[];
  type?: ButtonType;
  onClick: () => void;
}

/* Button Component */
const Button = ({ 
  children, 
  type = ButtonType.REGULAR,
  onClick
}: ButtonProps) => {
  return (
    <button className={`button__${type}--default`} onClick={() => onClick()}>{children}</button>
  );
}

const EtaPage = () => {
  // Mock ETA and order number (replace them with actual values later)
  const mockEta = "5 minutes";
  const mockOrderNumber = "123456";

  // State to track whether the order is done or not
  const [orderDone, setOrderDone] = useState(false);

  // Function to handle order completion
  const handleOrderCompletion = () => {
    setOrderDone(true);
  };

  return (
    <div>
      <Header />
      <div className={`eta-page ${orderDone ? 'order-done' : ''}`}>
        <img src={boxTopImage} alt="Box Top" className="eta-page__image" />
        <h1 className="eta-page__title">{orderDone ? 'Dina wontons är klara' : 'Dina wontons tillagas'}</h1>
        {orderDone ? null : <h2 className='eta-page__h2'>ETA: {mockEta}</h2>}
        <p>#{mockOrderNumber}</p>
        <div className="eta-page__buttons">
          <Button type={ButtonType.STRETCH} onClick={handleOrderCompletion}>
            {orderDone ? 'Beställ mer' : 'Beställ mer / Done'}
          </Button>
          <Button type={ButtonType.STRETCH} onClick={() => console.log('See Receipt clicked')}>
            Se kvitto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EtaPage;
