"use client";

import { authOptions } from "@/auth";
import useAddToCart from "@/hooks/cart/use-add-to-cart";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { BsHandbag } from "react-icons/bs";
import { toast } from "sonner";

export default function AddProductComponent({ product }: { product: Product }) {
  // Translation
  const t = useTranslations();
  const { addCartItem } = useAddToCart();
  const { data } = useSession({ required: false, ...authOptions });
  function addToCart() {
    if (data) {
      return addCartItem({ token: data?.token as string, productId: product._id, quantity: 1 });
    }
    toast.error(t("you-must-login-first"));
  }
  return (
    <button
      onClick={addToCart}
      className="shrink-0 handbag-icon me-4 bg-custom-violet-900 cursor-pointer  rounded-full flex items-center justify-center w-10 h-10 "
    >
      {/* The handbag icon */}
      <BsHandbag className="  text-lg text-white font-black  " />
    </button>
  );
}
