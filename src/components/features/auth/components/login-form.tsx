"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import useLogin from "@/hooks/auth/use-login";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function LoginForm({ setAuthState }: AuthFormProps) {
  // Translations
  const t = useTranslations();
  const { isPending, error, login } = useLogin();
  // State
  const [showPassword, setShowPassword] = useState(false);
  // Form & Validation
  const Schema = z.object({
    email: z
      .string({ required_error: t("email-required") })
      .email(t("email-valid"))
      .min(1, t("email-required")),
    password: z.string({ required_error: t("password-required") }).min(1, t("password-required")),
  });
  type Inputs = z.infer<typeof Schema>;
  const form = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(Schema),
  });

  // Functions
  const onSubmit: SubmitHandler<Inputs> = (values) => {
    login({ ...values });
  };

  return (
    <>
      {/* Login Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Email */}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* Label For Better Accessibility */}
                <Label className="sr-only">{t("email-label")}</Label>

                {/* Input */}
                <Input
                  {...field}
                  placeholder={t("email-placeholder")}
                  className="input-custom font-normal shadow-custom-input"
                />

                {/* Feedback Message */}
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          {/* Password */}
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* Label For Better Accessibility */}
                <Label className="sr-only">{t("password-label")}</Label>
                <div className=" relative">
                  {/* Input */}
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder={t("password-placeholder")}
                    className="input-custom shadow-custom-input !mt-6"
                  />
                  {/* Show Password Icon */}
                  {showPassword ? (
                    <FaRegEye
                      role="button"
                      onClick={() => setShowPassword(false)}
                      className="text-2xl mx-3 cursor-pointer absolute rtl:left-0 ltr:right-0 md:top-[15px] top-[9px]"
                    />
                  ) : (
                    <FaRegEyeSlash
                      role="button"
                      onClick={() => setShowPassword(true)}
                      className="text-2xl mx-3 cursor-pointer absolute rtl:left-0 ltr:right-0 md:top-[15px] top-[9px]"
                    />
                  )}
                </div>

                {/* Feedback Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error.message}</p>}

          {/* Forgot Password & Create Account */}
          <div className="flex justify-between items-center mt-10">
            {/* Create Account Text */}
            <span className="text-sm font-normal">
              {t("no-account")}

              {/* Create Account Button */}
              <button
                type="button"
                className="text-custom-rose-900 text-sm font-semibold border-b-2 border-custom-rose-900 ms-1"
                onClick={() => setAuthState("register")}
              >
                {t("create-account")}
              </button>
            </span>

            {/* Forgot Password Button */}
            {/* <button
              type="button"
              className="text-custom-rose-900 text-sm font-semibold border-b-2 border-custom-rose-900 ms-1"
            >
              {t("forget-password")}
            </button> */}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="button-submit flex items-center justify-center w-full text-base h-[52px] font-medium mb-8 mt-10"
            disabled={(form.formState.isSubmitted && !form.formState.isValid) || isPending}
          >
            {isPending ? <p>loading...</p> : t("login")}
          </Button>
        </form>
      </Form>
    </>
  );
}
