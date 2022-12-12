import React from "react";
import "./Product.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Product({
  name,
  price,
  image,
  description,
  isInCart,
  addToCart,
  removeFromCart,
  disableCartButtons,
}) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ width: 200, height: 200 }}
        />
        <Card.Body>
          <Card.Title>
            {name} - {price + " ₪"}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          {!disableCartButtons && (
            <Button
              onClick={() => {
                !isInCart ? addToCart() : removeFromCart();
              }}
              variant={!isInCart ? "primary" : "secondary"}
            >
              {!isInCart ? "הוסף לסל" : "מחק מהסל"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
