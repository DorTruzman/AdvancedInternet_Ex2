import "./App.css";
import React, { useEffect, useState } from "react";
import { getEntities } from "./services/fetchService";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

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
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>חנות דיגיטלית</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link active={!showCart} onClick={() => setShowCart(false)}>
              החנות
            </Nav.Link>
            <Nav.Link active={showCart} onClick={() => setShowCart(true)}>
              סל הקניות
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="store">
        {showCart ? (
          <>
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
    </>
  );
}

export default App;
