"use client";

import useRemoveCartItem from "@/hooks/cart/use-remove-cart-item";
import useUpdateQuantity from "@/hooks/cart/use-update-quantity";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

export default function CardItemComponent({ item, token }: { item: CartItem; token: string }) {
  const { removeCartItem } = useRemoveCartItem();
  const { updateQuantity } = useUpdateQuantity();
  return (
    <div
      key={item.product._id}
      className="border-2 border-gray-300 md:border-none  rounded-lg py-2 grid md:grid-cols-6 grid-cols-1 gap-5 md:gap-0 justify-items-center items-center my-2 "
    >
      <div className="col-span-1 relative md:h-28 h-32 rounded-lg border border-gray-400 md:w-5/6 sm:w-2/6 w-1/2 mx-auto">
        <Image
          src={item.product.imgCover}
          alt="Product Image"
          fill
          sizes="100vw"
          className="object-cover rounded-lg "
        />
      </div>
      <div className="col-span-1 flex flex-col text-gray-500 font-light ">
        <p className="font-semibold text-custom-blue-900 text-center">{item.product.title}</p>
      </div>
      <p className="col-span-1 font-semibold text-custom-blue-900">${item.product.price}</p>
      <div className="col-span-1 text-custom-rose-900 flex items-center gap-3 ">
        <button
          onClick={() =>
            updateQuantity({ productId: item.product._id, token, quantity: item.quantity - 1 })
          }
          className=" p-2 rounded-full hover:scale-105  bg-custom-rose-25  "
        >
          {" "}
          <Minus size={15} />
        </button>
        {item.quantity}
        <button
          onClick={() =>
            updateQuantity({ productId: item.product._id, token, quantity: item.quantity + 1 })
          }
          className=" p-2 rounded-full hover:scale-105 bg-custom-rose-25 "
        >
          {" "}
          <Plus size={15} />
        </button>
      </div>
      <p className="col-span-1 font-semibold text-custom-blue-900">
        ${item.quantity * item.product.price}
      </p>
      <button
        onClick={() => removeCartItem({ productId: item.product._id, token })}
        className="col-span-1 border p-2 rounded-full hover:scale-105 "
      >
        {" "}
        <X size={20} />
      </button>
    </div>
  );
}
