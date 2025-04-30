/* eslint-disable react/jsx-key */
import { getCart } from "@/lib/actions/cart-action";
import { ArrowLeft } from "lucide-react";
//import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import CardItemComponent from "./_components/CardItemComponent";
import { Link } from "@/i18n/routing";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Image from "next/image";
import AlertDialogDemo from "@/components/common/alert-dialog";

export default async function Cart() {
  // Translation
  const t = await getTranslations();
  const session = await getServerSession(authOptions);

  const { cart } = await getCart(session?.token as string);

  if (!cart.cartItems.length)
    return (
      <div className="container flex justify-center items-center h-[50vh] ">
        {/* {t("cart-empty")} */}
        <Image src="/assets/images/empty-cart.png" alt="empty-cart" width={180} height={0} />
      </div>
    );

  return (
    <section className="container grid grid-cols-12 gap-3 my-10  ">
      <div className="lg:col-span-9 col-span-12 ">
        <div className="  grid-cols-6 uppercase justify-items-center mb-2 md:grid hidden  font-semibold ">
          <p className="col-span-1 text-sm border-b-2 pb-2 border-gray-300">{t("image")}</p>
          <p className="col-span-1 text-sm border-b-2 pb-2 border-gray-300">{t("name")}</p>
          <p className="col-span-1 text-sm border-b-2 pb-2 border-gray-300">{t("price")}</p>
          <p className="col-span-1 text-sm border-b-2 pb-2 border-gray-300">{t("quantity")}</p>
          <p className="col-span-1 text-sm border-b-2 pb-2 border-gray-300">{t("total-0")}</p>
          <p className="col-span-1 text-sm border-b-2 pb-2 border-gray-300">{t("remove")}</p>
        </div>
        {cart?.cartItems.map((item) => (
          <CardItemComponent key={item.product._id} item={item} token={session?.token as string} />
        ))}
        {/* Button */}
        <div className=" flex justify-center">
          <Link
            href={"/all-products"}
            className="w-[200px] h-[50px] text-white text-base rounded-lg font-medium bg-custom-rose-900 text-center flex justify-center items-center gap-1 "
          >
            <ArrowLeft size={20} className="rtl:-scale-x-100" />
            {t("continue-shopping")}
          </Link>
        </div>
      </div>
      <div className="lg:col-span-3 col-span-12  justify-items-center  h-fit  ">
        <div className=" h-[415px] w-[300px] rounded-[20px] flex flex-col justify-between bg-custom-rose-25 p-10 text-custom-blue-900 ">
          <h3 className="text-xl font-semibold">{t("cart-summary")}</h3>
          <div className=" flex flex-col gap-2 mb-3 ">
            <div className="flex justify-between">
              <p className="font-bold text-custom-blue-900 ">{t("sub-total")}:</p>
              <p className=" text-gray-500 ">${cart?.totalPrice}</p>
            </div>
            <div className="flex justify-between ">
              <p className="font-bold text-custom-blue-900 ">{t("discount")}:</p>
              <p className="text-gray-500 ">%{cart?.discount}</p>
            </div>
            <div className="flex justify-between ">
              <p className="font-bold text-custom-blue-900 ">{t("shipping")}:</p>
              <p className="text-gray-500  ">Free</p>
            </div>
            <div className="flex justify-between ">
              <p className="font-bold text-custom-blue-900 ">{t("taxes")}:</p>
              <p className="text-gray-500">${cart?.totalPrice * 0.2}</p>
            </div>
          </div>
          <div className="flex justify-between -mt-5">
            <p className="font-bold text-custom-blue-900 ">{t("total")}</p>
            <p className="font-bold text-custom-rose-900 ">
              ${cart?.totalPrice * 0.2 + cart?.totalPriceAfterDiscount}
            </p>
          </div>
          <div className=" flex justify-center">
            <AlertDialogDemo email={session?.user?.email as string} />
          </div>
        </div>
      </div>
    </section>
  );
}
