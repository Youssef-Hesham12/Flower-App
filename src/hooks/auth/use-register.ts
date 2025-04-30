"use client";

import setRegisterAction from "@/lib/actions/register.action";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export default function useRegister() {
  // Translation
  const t = useTranslations();
  // State

  // Mutation
  const { isPending, error, mutate, data } = useMutation({
    mutationFn: async (fields: RegisterForm) => {
      const response = await setRegisterAction(fields);
      if ("error" in response) {
        throw new Error(response?.error || t("register-failed"));
      }
      return response;
    },
    onSuccess: () => {
      toast.success(t("register-successful"));
    },
    onError: () => {
      toast.error(t("register-failed"));
    },
  });

  return { isPending, data, error, register: mutate };
}
