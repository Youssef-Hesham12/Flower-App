"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";

export default async function setRegisterAction(fields: RegisterForm) {
  const response = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    headers: { ...JSON_HEADER },
    body: JSON.stringify(fields),
  });

  const payload = await response.json();

  return payload;
}
