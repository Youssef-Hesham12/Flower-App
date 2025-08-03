"use client";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export default function Navigation({ col }: { col?: boolean }) {
  // Translation
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <nav
      className={`flex gap-5 ${col && "flex-col items-center"}  text-custom-blue-900 font-medium rtl:font-semibold text-base`}
    >
      {" "}
      <Link className={pathname === "/" ? "text-rose-500" : ""} href={"/"}>
        {t("home")}
      </Link>
      <Link className={pathname === "/all-products" ? "text-rose-500" : ""} href={"/all-products"}>
        {" "}
        {t("products")}
      </Link>
      <Link className={pathname === "/about" ? "text-rose-500" : ""} href={"/about"}>
        {" "}
        {t("about")}
      </Link>
      <Link className={pathname === "/contact" ? "text-rose-500" : ""} href={"/contact"}>
        {" "}
        {t("contact")}
      </Link>
      {locale === "en" ? (
        <Link locale="ar" className="text-rose-800 font-bold " href={pathname}>
          عربي
        </Link>
      ) : (
        <Link locale="en" className="text-rose-800 font-bold" href={pathname}>
          English
        </Link>
      )}
    </nav>
  );
}
