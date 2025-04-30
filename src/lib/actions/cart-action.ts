"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { revalidateTag } from "next/cache";
export async function getCart(token: string) {
  const response = await fetch(`${process.env.API}/cart`, {
    method: "GET",
    headers: { ...JSON_HEADER, Authorization: "Bearer " + token },
    next: { tags: ["getCart"] },
  });

  const payload: successCart = await response.json();

  return payload;
}
export async function removeCartItem({ productId, token }: { productId: string; token: string }) {
  const response = await fetch(`${process.env.API}/cart/${productId}`, {
    method: "DELETE",
    headers: { ...JSON_HEADER, Authorization: "Bearer " + token },
  });

  const payload: successCart = await response.json();
  revalidateTag("getCart");

  return payload;
}
export async function updateQuantity({
  productId,
  token,
  quantity,
}: {
  productId: string;
  token: string;
  quantity: number;
}) {
  const response = await fetch(`${process.env.API}/cart/${productId}`, {
    method: "PUT",
    headers: { ...JSON_HEADER, Authorization: "Bearer " + token },
    body: JSON.stringify({ quantity }),
  });

  const payload: successCart = await response.json();
  revalidateTag("getCart");
  return payload;
}
export async function addCartItem({
  productId,
  token,
  quantity = 1,
}: {
  productId: string;
  token: string;
  quantity: number;
}) {
  const response = await fetch(`${process.env.API}/cart`, {
    method: "POST",
    headers: { ...JSON_HEADER, Authorization: "Bearer " + token },
    body: JSON.stringify({ product: productId, quantity }),
  });

  const payload: successCart = await response.json();
  revalidateTag("getCart");
  return payload;
}
