// import "./App.css";
import Nav from "./components/Nav";
import Items from "./components/Items";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
    <Nav cart={cart} setCart={setCart} />
  <Routes>
    <Route 
      path="/" 
      element={
        <>
          <Items cart={cart} setCart={setCart} />
          
        </>
        
      } 
    />
    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    
  </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
{/* <Route path="/" element={<Items cart={cart} setCart={setCart} />} /> */}
          {/* <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} /> */}
            {/* <Nav cart={cart} setCart={setCart} /> */}
            {/* <Items cart={cart} setCart={setCart} /> */}