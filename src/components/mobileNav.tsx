'use client'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { faBarsStaggered, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./header";

const mobileNav = () => {
  const Pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger>
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className="text-red-500 text-4xl lg:hidden"
        />
      </SheetTrigger>

      <SheetContent className="bg-black">
        <SheetHeader>
          <SheetTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            <Link href="/shop">TrendVault</Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-14 text-lg whitespace-normal text-white">
          {links.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className={`${Pathname === link.link ? 'text-blue-500' : ''}`}
            >
              {link.name}
            </Link>
          ))}

    <div className="flex justify-center items-center gap-8 w-24 h-10 bg-black border-2 border-blue-500 p-2 rounded-full">
      <FontAwesomeIcon
          icon={faUser}
          className="text-white text-2xl lg:hidden"
        />
      <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-white text-2xl lg:hidden"
        />
        </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default mobileNav;
