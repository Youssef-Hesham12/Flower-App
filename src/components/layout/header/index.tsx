import Image from "next/image";
import { User } from "lucide-react";

import { FaUser } from "react-icons/fa";
import { PiBagBold } from "react-icons/pi";
import { getServerSession } from "next-auth";
import AuthDialog from "@/components/features/auth/auth-dialog";
import MenuHeader from "./MenuHeader";
import Navigation from "./Navigation";
import SearchComponent from "./SearchComponent";
import { Link } from "@/i18n/routing";
import { authOptions } from "@/auth";
import { getCart } from "@/lib/actions/cart-action";

export default async function Navbar() {
  // Get user session information
  const session = await getServerSession(authOptions);

  const cart = await getCart(session?.token as string);

  return (
    <header className="flex justify-between items-center container my-4   bg-white ">
      {/* Logo */}
      <Link href={"/"}>
        <Image src="/assets/images/Logo.svg" alt="Logo" width={86} quality={100} height={0} />
      </Link>

      {/* Navigation */}
      <div className="md:block hidden ">
        <Navigation />
      </div>

      {/* Actions */}
      <div className="flex gap-5  items-center">
        
        {/* Login Button: Only show if user is not logged in */}
        {!session?.user && (
          <div className="flex items-center">
            <AuthDialog />
          </div>
        )}
        {/* Search */}
        <SearchComponent />
       

        {/* Cart */}
        {session?.user && (
          <Link href="/cart" className="relative">
            <PiBagBold fontSize={26} className="text-[#F82BA9]" />
            <div className="absolute -top-4 -right-2 bg-[#F82BA9] text-white rounded-full w-5 h-fit flex justify-center items-center">
              {cart?.numOfCartItems}
            </div>
          </Link>
        )}

        {/* User Profile: Only show if user is logged in */}
        {session?.user &&
          (session?.photo ? (
            
            <FaUser fontSize={25} className="text-[#F82BA9]" />
          ) : (
            <User className="text-[#F82BA9] w-8 h-8" />
          ))}
        <MenuHeader />
      </div>
    </header>
  );
}
