import "./App.css";
import React, { useEffect, useState } from "react";
import { getEntities } from "./services/fetchService";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    if (!cart.hasOwnProperty(item._id)) setCart({ ...cart, [item._id]: item });
  };

  const removeFromCart = (itemId) => {
    const mutableCart = { ...cart };
    delete mutableCart[itemId];
    setCart({ ...mutableCart });
  };

  useEffect(() => {
    getEntities({ name: "product" }).then((productList) => {
      setProducts(productList);
    });
  }, []);

  return (
    <div className="store">
      {showCart ? (
        <>
          <button
            onClick={() => {
              setShowCart(false);
            }}
          >
            SHOP
          </button>
          <h1>סל הקניות שלך</h1>
          <Cart
            products={products}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setShowCart(true);
            }}
          >
            CART
          </button>

          <h1>המוצרים שלנו</h1>
          <ProductsList
            products={products}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </>
      )}
    </div>
  );
}

export default App;
