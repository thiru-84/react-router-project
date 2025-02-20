import { useState, useEffect } from "react";

function Items({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.some((item) => item.id === product.id);
  
      if (itemExists) {
        return prevCart.filter((item) => item.id !== product.id); // Remove item
      } else {
        return [...prevCart, product]; // Add item
      }
    });
  };


  return (
    <>
      <div className=" grid  place-items-center pt-10 bg-neutral-100">
        <div className="flex flex-col justify-center mx-6">
          <div>
            <h2 className="text-3xl font-bold ">Deals of the Day</h2>

            <p className="pb-6 pt-2 text-sm opacity-50">
              Get the best deals before they are gone!
            </p>
          </div>

          {/* Map Function */}
          <div className="md:grid grid-cols-2 lg:grid-cols-4 gap-2 justify-center ">
            {products.map((product) => (
              <div
                key={product.id}
                className="max-w-sm overflow-hidden border border-gray-200 flex flex-col justify-between transition-all duration-300 group bg-white"
              >
                <img
                  className="w-80 h-80 mx-auto object-cover pt-4 transition-transform duration-300 group-hover:scale-105"
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={200}
                />
                <div className="px-4 py-4">
                  <div className="text-md font-bold mb-2">{product.title}</div>
                </div>
                <div className="flex justify-between align-bottom items-center px-4 pt-2 pb-6">
                  <div className="flex flex-col  gap-1">
                    <div className="text-3xl font-bold">${product.price} </div>
                    <span className="line-through text-md decoration-red-700 decoration-2 text-slate-400">
                      ${Math.floor(product.price + 50)}
                    </span>
                  </div>

                  <div>
                    {cart.some((item) => item.id === product.id) ? (
                      <button
                        onClick={() => addToCart(product)}
                        className="pl-4 pr-5 py-3 border border-red-700 hover:bg-red-100 rounded-full text-sm text-red-700 font-medium cursor-pointer"
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="pl-4 pr-5 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-full text-sm font-medium cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
