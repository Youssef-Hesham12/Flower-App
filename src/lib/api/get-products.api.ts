"use server";

import { JSON_HEADER } from "../constants/api.constant";

const baseUrl = process.env.API;

export const getPopularProducts = async (endPoint: string) => {
  const response = await fetch(baseUrl + endPoint, {
    cache: "no-store",
    method: "GET",
    headers: {
      ...JSON_HEADER,
    },
  });
  try {
    const payload: APIResponse<ProductResponse> = await response.json();
    if ("message" in payload && payload.message === "success") {
      return payload.products;
    }
    return null;
  } catch (error) {
    console.log("error", error);
  }
};
