"use client";

import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

export default function SetPasswordForm() {
  // Translation
  const t = useTranslations();

  // Form & Validation
  const schema = z
    .object({
      password: z
        .string({ required_error: t("password-required") })
        .min(1, t("password-required"))
        .regex(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          t("password-pattren"),
        ),
      confirmPassword: z.string({ required_error: t("confirm-password-required") }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwords-must-match"),
      path: ["confirmPassword"],
    });

  type Inputs = z.infer<typeof schema>;

  const form = useForm<Inputs>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
  });

  // Functions
  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <div className="p-10 bg-white rounded-lg shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-8">
            {/* Form Title */}
            <DialogHeader>
              <DialogTitle className="text-3xl font-normal me-auto">
                {t("set-a-password")}
              </DialogTitle>
              <DialogDescription className="sr-only">{t("set-a-password")}</DialogDescription>
            </DialogHeader>

            {/* Password Input */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  {/* Label for Accessibility */}
                  <Label className="sr-only">{t("create-password")}</Label>

                  {/* Input Field */}
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder={t("create-password")}
                      className="shadow-custom-input input-custom"
                    />
                  </FormControl>

                  {/* Validation Feedback */}
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Confirm Password input */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  {/* Label for Accessibility */}
                  <Label className="sr-only">{t("re-enter-password")}</Label>

                  {/* Input Field */}
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder={t("re-enter-password")}
                      className="shadow-custom-input input-custom"
                    />
                  </FormControl>

                  {/* Validation Feedback */}
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <DialogFooter>
              <Button
                type="submit"
                variant="submit"
                className="shadow-custom-submit-button m-auto w-full"
              >
                {t("set-a-password")}
              </Button>
            </DialogFooter>
          </div>
        </form>
      </div>
    </Form>
  );
}
