import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

function FoodCard({ id, img, name, rupee, desc, rating, handleToast }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
        <span className="text-orange-400">{id}</span>
        <img
          src={img}
          alt=""
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500"
        />
        <div className="text-sm flex justify-between">
          <h2>
            {/* {name} */}
            {name.length > 10 ? name.slice(0,20) + "..." : name}
            </h2>
          <span className="text-green-500">{rupee}</span>
        </div>
        <p className="text-sm font-normal">
          {desc.length > 10 ? desc.slice(0, 40) + "..." : desc}
        </p>
        <div className="flex justify-between">
          <span className="flex justify-center items-center">
            <FaStar className="mr-1 text-amber-400" /> {rating}
          </span>
          <button
            onClick={() => {
              dispatch(addToCart({ id, name, rupee, rating, img, qty: 1 }));
              handleToast(name);
            }}
            className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodCard;
