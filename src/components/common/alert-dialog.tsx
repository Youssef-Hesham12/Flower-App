import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useTranslations } from "next-intl";
import Arrow from "./arrow";

export default function AlertDialogDemo({ email }: { email: string }) {
  // Translation
  const t = useTranslations();
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-[165px] h-[50px] text-white text-base rounded-lg font-medium bg-custom-rose-900 text-center flex justify-center items-center gap-1 ">
        {t("checkout-now")}
        <Arrow />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className=" !text-2xl !text-center ">
            <span className="text-green-700">✔</span> {t("your-order-is-confirmed")}
          </AlertDialogTitle>
          <AlertDialogDescription className=" !text-center ">
            {t("an-email-been-sent-to-your-mail-address-email", { email })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className=" !flex !justify-center !w-full ">
          <AlertDialogAction className="w-[165px] h-[50px] text-white text-base rounded-lg font-medium bg-custom-rose-900 text-center flex justify-center items-center gap-1 hover:bg-custom-rose-700 ">
            {t("okey")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
