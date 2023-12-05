import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, increaseQuantity, decreaseQuantity } from "../Store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);

  const handleRemove = (productID) => {
    dispatch(remove(productID));
  };

  const handleIncrease = (productID) => {
    dispatch(increaseQuantity({ id: productID }));
  };

  const handleDecrease = (productID) => {
    dispatch(decreaseQuantity({ id: productID }));
  };

  const getTotalAmount = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  return (
    <div className="font-sans antialiased bg-orange p-5">
      <h3 className="py-5 text-3xl font-semibold text-center">Your Cart</h3>
      <div className="grid grid-cols-1 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center">
              <img
                className="h-20 w-20 rounded-md object-cover mr-4"
                src={product.image}
                alt={product.name}
              />
              <div>
                <h5 className="text-lg font-semibold">{product.title}</h5>
                <span className="text-gray-700">${product.price}</span>
              </div>
            </div>
            <div className="flex flex-col items-center mt-4 md:mt-0">
              <div className="flex items-center mb-2">
                <button
                  className="bg-gray-200 text-gray-700 font-semibold py-2 px-3 rounded-l"
                  onClick={() => handleDecrease(product.id)}
                >
                  -
                </button>
                <span className="px-3">{product.quantity}</span>
                <button
                  className="bg-gray-200 text-gray-700 font-semibold py-2 px-3 rounded-r"
                  onClick={() => handleIncrease(product.id)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <button className="bg-white hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-lg">
            <Link
              to={{
                pathname: "/payment",
                state: { totalAmount: getTotalAmount() },
              }}
              className="bg-white hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-lg"
            >
              Checkout - Total: ${getTotalAmount()}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
