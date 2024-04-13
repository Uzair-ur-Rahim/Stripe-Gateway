import React, { useState } from 'react';
import './styles/app.css';

const Home = () => {
  const itemName = "Iphone Charger";
  const itemPrice = 5;
  const [quantity, setQuantity] = useState(1);
  const [finalAmount, setFinalAmount] = useState(itemPrice);

  const decrement = () => {
    if (quantity <= 1) {
      setQuantity(1);
      setFinalAmount(itemPrice);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
      setFinalAmount(finalAmount - itemPrice);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
    setFinalAmount(finalAmount + itemPrice);
  };

  const checkout = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/payments/create-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        items: [
          {
            id: 1,
            quantity: quantity,
            price: itemPrice,
            name: itemName,
          },
        ],
        payment_method_types: ['card'],
      }),
    });
    const data = await res.json();
    console.log("Data received from server:", data);
    if (data.url) {
      window.location = data.url;
    } else {
      console.error("Server response did not contain a valid URL.");
    }
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className="container">
      <h2>Product: {itemName}</h2>
      <p>Price per item: ${itemPrice}</p>
      <div className="quantity-control">
        <button onClick={decrement}>-</button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <p>Total Amount: ${finalAmount}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Home;
