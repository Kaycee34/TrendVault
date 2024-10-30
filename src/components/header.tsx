import MobileNav from "./mobileNav";
import Nav from "./nav";

export const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/Shop",
  },
  {
    name: "About Us",
    link: "/AboutUs",
  },
  {
    name: "Contact us",
    link: "/ContactUs",
  },
  {
    name: "Sign Up",
    link: "/signup",
  },
];

const Header = () => {
  return (
    <header className="fixed top-0 h-[95px] w-full bg-black shadow-lg py-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <h1 className="font-bold text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
          TrendVault
        </h1>
        <div className="block md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:flex flex-none">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
