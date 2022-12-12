import React, { useState } from "react";
import { createEntity } from "../services/fetchService";
import ProductsList from "./ProductsList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Cart({ products, cart, addToCart, removeFromCart }) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

  const submitDetails = () => {
    createEntity({
      name: "customer",
      entity: {
        name,
        phone,
        address,
        products: Object.values(cart).map((item) => item._id),
      },
    });

    alert(`${name} היקר/ה, פרטיך נשלחו בהצלחה והזמנתך תטופל בהקדם. תודה!`);
    window.location = "/";
  };

  return (
    <>
      <ProductsList
        showOnlyCart
        products={products}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <div>
        מחיר סה"כ:{" "}
        {Object.values(cart).reduce((prev, curr) => prev + curr.price, 0)} ₪
      </div>
      <div>
        <Form style={{ textAlign: "center", margin: 10 }}>
          <Form.Control
            className="mb-3"
            value={name}
            placeholder="שם מלא"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="mb-3"
            value={phone}
            placeholder="מספר טלפון"
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="mb-3"
            value={address}
            placeholder="כתובת למשלוח"
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
          <Button
            className="mb-3"
            disabled={!name || !phone || !address}
            onClick={(e) => {
              e.preventDefault();
              submitDetails();
            }}
          >
            שלח
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Cart;
