"use client";

import { addCartItem } from "@/lib/actions/cart-action";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export default function useAddToCart() {
  // Translation
  const t = useTranslations();

  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async ({
      productId,
      token,
      quantity,
    }: {
      productId: string;
      token: string;
      quantity: number;
    }) => {
      const response = await addCartItem({ productId, token, quantity });

      return response;
    },
    onSuccess: () => {
      toast.success(t("add-to-cart-success"));
    },
    onError: () => {
      toast.error(t("something-went-wrong-0"));
    },
  });

  return { isPending, error, addCartItem: mutate };
}
