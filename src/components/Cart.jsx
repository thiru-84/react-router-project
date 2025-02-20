import { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import ReducerAction from "./UseReducer/ReducerAction";

function Cart({ cart, setCart }) {
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity ?? 1),
    0
  );

  const handleIncrease = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item
    );
    setCart(newCart);
    dispatch({ type: "ADD", payload: 1 });
  };

  const handleDecrease = (id) => {
    const newCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max((item.quantity ?? 1) - 1, 1) }
        : item
    );
    setCart(newCart);
    dispatch({ type: "SUB", payload: 1 });
  };

  const [state, dispatch] = useReducer(ReducerAction, 1);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.some((item) => item.id === product.id);

      if (!itemExists) {
        const updatedCart = [...prevCart, product];
        console.log("Updated Cart:", updatedCart); 
        return updatedCart;
      } else {
        alert("Item already added to the cart");
      }

      return prevCart;
    });
  };

  return (
    <div className="container mx-auto lg:w-[650px] mt-8 md:mt-18">
      <div className="mx-6 flex flex-col justify-center">
        <Link to="/">
          <div className="flex gap-3 text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
            Back to Home
          </div>
        </Link>
        <div className="mt-5 bg-white w-full pb-2 border border-gray-200">
          <div className="p-4 border-b border-slate-300 flex justify-between">
            <h5>My Cart ({cart.length})</h5>
          </div>

          <div className="px-4">
            {cart.length === 0 ? (
              <div className="flex justify-center items-center">
                <p className="text-gray-500 text-center">Your cart is empty</p>
              </div>
            ) : (
              cart.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="flex flex-col md:flex-row justify-between md:items-center pt-3 pb-3 border-b border-slate-300"
                >
                  <div className="flex gap-6 items-center">
                    <div className="w-26 h-26 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={cartItem.image}
                        alt={cartItem.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-[200px]">
                      <p className="text-gray-700 font-bold text-sm">
                        {cartItem.title}
                      </p>
                      <p className="text-green-700 pt-2 text-md font-bold">
                        {/* ${cartItem.price} */}$
                        {cartItem.price * (cartItem.quantity ?? 1)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    {/* Quantity Buttons */}
                    <div className="flex gap-4 items-center">
                      <button
                        onClick={() => handleDecrease(cartItem.id)}
                        className=" w-8 h-8 flex justify-center border border-gray-300 rounded-md p-1 cursor-pointer hover:bg-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      </button>

                      <div>{cartItem.quantity ?? 1}</div>

                      <button
                        onClick={() => handleIncrease(cartItem.id)}
                        className=" w-8 h-8 flex justify-center border border-gray-300 rounded-md p-1 cursor-pointer hover:bg-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(cartItem.id)}
                      className="flex h-6 items-center hover:text-red-900 hover:bg-red-100 rounded-full cursor-pointer border border-red-700"
                    >
                      <span className="text-sm text-red-700 underline px-2 py-1">
                        Remove
                      </span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div>
            {cart.length === 0 ? null : (
              <div className="p-4 mt-4 border-t border-slate-300">
                <div className="flex gap-2 justify-between">
                  <div>
                    <h2 className="text-lg font-bold">Total:</h2>
                  </div>

                  <div className="flex flex-col  items-end gap-2">
                    <p className="text-sm font-normal p-2 bg-gray-50 rounded border-dashed border-1 border-gray-400 ">
                      Applied :
                      <span className="text-green-700"> 10% Discount</span>
                    </p>

                    <div className="flex  items-end gap-3">
                      <p className="text-sm line-through text-black opacity-70">
                        Real Price: ${grandTotal.toFixed(2)}
                      </p>
                      <p className="text-xl font-bold">
                        Offer Price: $
                        {Math.round(grandTotal - grandTotal * 0.1)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
