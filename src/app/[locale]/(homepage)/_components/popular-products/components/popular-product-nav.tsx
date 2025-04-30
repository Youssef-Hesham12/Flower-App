"use client";

import { useTranslations } from "next-intl";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface PopularProductsNavProps {
  categories: Category[];
}

export default function PopularProductsNav({ categories }: PopularProductsNavProps) {
  // Translation
  const t = useTranslations();

  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Variables
  const selectedCategory = searchParams.get("category");

  // Functions
  function handleClick(categoryId: string) {
    const searchQuery = new URLSearchParams(searchParams);

    searchQuery.set("category", categoryId);

    router.replace(`${pathname}?${searchQuery.toString()}`, { scroll: false });
  }

  return (
    <div className="container mx-auto t-20 mb-10 pt-20 flex flex-wrap gap-2 items-center justify-between ">
      {/* Header */}
      <h2 className="capitalize after:absolute after:w-[53px] after:h-[2px] after:bg-custom-rose-900 rtl:after:right-0 after:left-0 after:top-full  before:content-[''] before:absolute before:bottom-0 rtl:before:right-0 before:left-0 before:w-[136px] before:h-[17px] before:bg-[#FEEDF7] before:z-[-1] before:rounded-e-lg font-bold text-cutom-blue text-lg sm:text-xl md:text-3xl relative">
        {t("propular-items")}
      </h2>

      {/* List of the first four categories */}
      <ul className="flex cursor-pointer gap-x-2 md:gap-x-6">
        {categories?.map((cat: Category, index: number) => (
          <li
            className="hover:text-custom-rose-900 duration-300 text-custom-blue-900 font-normal text-base md:text-lg font-inter "
            key={cat._id}
          >
            {/* Button for the category */}
            <button
              className={`${
                selectedCategory === cat._id || (!selectedCategory && index === 0)
                  ? "border-b-custom-rose-900 border-b-2"
                  : ""
              }`}
              onClick={() => handleClick(cat._id)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
