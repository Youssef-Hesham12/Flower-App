"use client";

import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useVerifyOtp from "@/hooks/auth/use-verify-otp";

export default function VerifyOtpForm() {
  // Translation
  const t = useTranslations();

  // Mutations
  const { isPending, error, verifyOtp } = useVerifyOtp();

  // Form & Validation
  const schema = z.object({
    resetCode: z
      .string()
      .min(6, t("invalid-validation-code"))
      .regex(/^\d{6}$/, t("invalid-validation-code")),
  });
  type Inputs = z.infer<typeof schema>;

  const form = useForm<Inputs>({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(schema),
  });

  // Functions
  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    verifyOtp(values);
  };

  return (
    <Form {...form}>
      <div className="p-6 bg-white rounded-lg shadow-custom-dialog">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-8">
            {/* Form Title */}
            <DialogHeader>
              <DialogTitle className="text-3xl font-normal me-auto">{t("verify-code")}</DialogTitle>
              <DialogDescription className="sr-only">{t("verify-code")}</DialogDescription>
            </DialogHeader>

            {/* Verification Code Input */}
            <FormField
              control={form.control}
              name="resetCode"
              render={({ field }) => (
                <FormItem>
                  {/* Label for Accessibility */}
                  <Label className="sr-only">{t("enter-code")}</Label>

                  {/* Input Field */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("enter-code")}
                      className="shadow-custom-input input-custom"
                    />
                  </FormControl>

                  {/* Validation Feedback */}
                  <FormMessage className="text-red-500 text-sm" />

                  {/* Backend Error */}
                  {error && (
                    <FormMessage className="text-red-500 text-sm">{error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />

            {/* Resend Code */}
            <p className="text-custom-gray ms-auto">
              {t("didnt-receive-a-code")}{" "}
              <button type="button" className="text-custom-rose-900 hover:underline">
                {t("resend")}
              </button>
            </p>

            {/* Submit Button */}
            <DialogFooter>
              <Button
                type="submit"
                variant="submit"
                className="shadow-custom-submit-button m-auto w-full disabled:bg-custom-rose-700"
                disabled={isPending || !form.formState.isValid}
              >
                {t("recover-password")}
              </Button>
            </DialogFooter>
          </div>
        </form>
      </div>
    </Form>
  );
}
