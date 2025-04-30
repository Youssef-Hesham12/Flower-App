"use client";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function SearchComponent() {
  // Translations
  const t = useTranslations();
  // State
  const [show, setShow] = useState(false);
  return (
    <div>
      <Search className="text-rose-500 hover:cursor-pointer" onClick={() => setShow(true)} />
      {show && (
        <div
          className={` h-screen w-screen fixed top-0 left-0 bg-black opacity-65 flex items-center justify-center z-20 `}
        >
          <X
            size={32}
            className="text-white hover:cursor-pointer absolute top-10 right-10"
            onClick={() => setShow(false)}
          />
          {/* Search results */}
          <div className="relative w-1/2">
            <Input
              placeholder={t("search")}
              className="w-full bg-transparent text-white border-0 border-b  ring-offset-black focus-visible:shadow-none focus-visible:ring-0"
            />
            <Search className="absolute top-2  rtl:left-2 ltr:right-2 text-white hover:cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
}
