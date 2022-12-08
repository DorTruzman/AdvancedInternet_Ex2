import React from "react";
import Product from "./Product";

function ProductsList({
  products,
  cart,
  addToCart,
  removeFromCart,
  showOnlyCart,
}) {
  return (
    <>
      {products.map((product) => {
        const addProductToCart = () => {
          addToCart(product);
        };

        const removeProductFromCart = () => {
          removeFromCart(product._id);
        };

        if (
          !showOnlyCart ||
          (showOnlyCart && cart.hasOwnProperty(product._id))
        ) {
          return (
            <Product
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              isInCart={cart.hasOwnProperty(product._id)}
              addToCart={addProductToCart}
              removeFromCart={removeProductFromCart}
              disableCartButtons={showOnlyCart}
            />
          );
        } else return <></>;
      })}
    </>
  );
}

export default ProductsList;
