import React from "react";
import "./Product.css";

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
    <div className="product">
      <div>
        <img className="productImg" alt="Product" src={image} />
      </div>
      <div className="productDetails">
        <div>{name}</div>
        <div>{price + " ₪"}</div>
        <div className="description">{description}</div>
        {!disableCartButtons &&
          (!isInCart ? (
            <button
              onClick={() => {
                addToCart();
              }}
            >
              +
            </button>
          ) : (
            <button
              onClick={() => {
                removeFromCart();
              }}
            >
              X
            </button>
          ))}
      </div>
    </div>
  );
}

export default Product;
