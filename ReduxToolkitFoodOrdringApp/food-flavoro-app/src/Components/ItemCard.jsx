import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";

import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";

function ItemCard({ id, name, img, rupee, qty }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 relative">
        {/* 🗑 Delete Button */}
        <MdDelete
          onClick={() => {
            dispatch(removeFromCart({ id, name, img, rupee, qty }));
            toast(`${name} Removed!`, {
              icon: "🖐",
            });
          }}
          className="absolute right-7 text-gray-600 cursor-pointer"
        />

        {/* 🖼 Image */}
        <img src={img} alt={name} className="w-[50px] h-[50px]" />

        <div className="leading-5 w-full">
          <h2 className="font-bold text-gray-800">{name}</h2>
          <div className="flex justify-between items-center">
            <span className="text-green-500 font-bold">{rupee}</span>

            {/* ➕➖ Qty Controller */}
            <div className="flex justify-center items-center gap-2">
              {/* ➖ Decrement */}
              <AiOutlineMinus
                onClick={() => {
                  if (qty > 1) {
                    dispatch(decrementQty({ id }));
                    toast(`Value Decreased on this ${name}`, {
                      icon: "➖",
                    });
                  } else {
                    toast.error("Quantity cannot be less than 1");
                  }
                }}
                className="border-2 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />

              {/* 🔢 Qty */}
              <span>{qty}</span>

              {/* ➕ Increment */}
              <AiOutlinePlus
                onClick={() => {
                  dispatch(incrementQty({ id }));
                  toast(`Value Increased on this ${name}`, {
                    icon: "➕",
                  });
                }}
                className="border-2 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
