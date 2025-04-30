"use client";

import { Button } from "@/components/ui/button";

export default function ForgotPasswordForm({ setAuthState }: AuthFormProps) {
  return (
    <>
      <Button onClick={() => setAuthState("verify-otp")}>ForgotPasswordForm</Button>
    </>
  );
}
