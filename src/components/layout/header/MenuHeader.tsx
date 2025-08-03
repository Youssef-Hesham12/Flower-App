"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Navigation from "./Navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";

export default function MenuHeader() {
  // states
  const [menuOpen, setMenuOpen] = useState(true);
  const locale = useLocale();
  return (
    <AnimatePresence>
      <div>
        {" "}
        <IoIosMenu
          fontSize={28}
          fontWeight={700}
          className="text-rose-500 md:hidden cursor-pointer "
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {/* Navigation */}
        {!menuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0.7, x: locale == "ar" ? -230 : 230 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.7, x: locale == "en" ? -230 : 230 }}
            transition={{ duration: 0.1 }}
            className={`flex gap-5 text-custom-blue-900 font-medium rtl:font-semibold text-base fixed bg-white top-0 ltr:right-0 rtl:left-0 w-1/2 h-50 flex-col p-6 justify-center !z-[100]  transition delay-300 duration-300 ease-in-out`}
          >
            <div className="flex flex-row-reverse justify-between items-center">
              {/* Logo */}
              <Image src="/assets/images/Logo.png" alt="Logo" width={86} height={0} />
              <IoMdClose
                fontSize={28}
                fontWeight={700}
                onClick={() => setMenuOpen(true)}
                className="  cursor-pointer"
              />
            </div>
            <Navigation col />
          </motion.div>
        )}
        {!menuOpen && (
          <div
            className={`  fixed !z-30 top-0 left-0 w-full h-[110vh] bg-black opacity-50 transition delay-300 duration-300 ease-in-out `}
            onClick={() => setMenuOpen(true)}
          ></div>
        )}
      </div>
    </AnimatePresence>
  );
}
