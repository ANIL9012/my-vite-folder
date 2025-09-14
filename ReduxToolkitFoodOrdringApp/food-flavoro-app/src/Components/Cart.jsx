import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import {useNavigate} from "react-router-dom"; 

function Cart() {
  const [activecart, setActivecart] = useState(false);
  const cartItem = useSelector((state) => state.cart.cart);
  const totalQty = cartItem.reduce(
    (accumulator, currentValue) => accumulator + currentValue.qty,
    0
  );

  const totalPrice = cartItem.reduce(
    (total, item) => total + Number(item.qty) * Number(item.rupee || 0),
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 overflow-y-auto ${
          activecart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActivecart(!activecart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 
          cursor-pointer"
          />
        </div>

        {cartItem.length > 0 ? (
          cartItem.map((food) => {
            console.log("CartItem Food", food);
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                rupee={food.rupee}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-xl text-center font-bold text-gray-800">
            Your Cart is Empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Item: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button onClick={() => navigate("/success")} className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-3">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActivecart(!activecart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
}

export default Cart;
