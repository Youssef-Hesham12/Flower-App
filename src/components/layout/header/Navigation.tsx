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
      <Link className={pathname === "/" ? "text-[#F82BA9]" : ""} href={"/"}>
        {t("home")}
      </Link>
      <Link className={pathname === "/All-Categories" ? "text-[#F82BA9]" : ""} href={"/All-Categories"}>
        {" "}
        {t("All Categories")}
      </Link>
      <Link className={pathname === "/about" ? "text-[#F82BA9]" : ""} href={"/about"}>
        {" "}
        {t("about")}
      </Link>
      <Link className={pathname === "/contact" ? "text-[#F82BA9]" : ""} href={"/contact"}>
        {" "}
        {t("contact")}
      </Link>
      {locale === "en" ? (
        <Link locale="ar" className="bg-[#F82BA9] text-white rounded-lg p-1" href={pathname}>
          Ar
        </Link>
      ) : (
        <Link locale="en" className="bg-[#F82BA9] rounded-lg p-1 text-white p-2font-bold" href={pathname}>
          En
        </Link>
      )}
    </nav>
  );
}
