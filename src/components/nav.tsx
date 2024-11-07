"use client";
import Link from "next/link";
import { links } from "./header";
import { usePathname } from "next/navigation";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Nav = () => {
  const Pathname = usePathname();
  return (
    <nav className="p-4">
      <div className="text-white flex items-center space-x-4 font-bold text-xl">
        {links.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className={`${Pathname === link.link ? "text-blue-500" : ""}`}
          >
            {link.name}
          </Link>
        ))}

        {/* Icon container with black background and ash border */}
        <div className="flex justify-center items-center gap-5 w-24 h-10 bg-black border border-gray-300 rounded-full">
          <Link href="Signup">
            <FontAwesomeIcon icon={faUser} className="text-red-500 text-lg" />
          </Link>

          {/* shadcn sheet component with shoppingCart icon for Cart history*/}
          <Sheet>
            <SheetTrigger>
              <FontAwesomeIcon
                icon={faShoppingCart} 
                className="text-red-500 text-lg"
              />
            </SheetTrigger>

            <SheetContent className="bg-black text-white" id="Cart">
              <SheetHeader>
                <SheetTitle className="text-white text-3xl font-strike">
                  Cart
                </SheetTitle>
              </SheetHeader>
              {/* Cart Content */}
              
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
export default Nav; 