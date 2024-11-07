import Image from "next/image";
import Link from "next/link";
import bag from "@/assets/images/bags.jpg";
import shirt from "@/assets/images/shirt.jpg";
import shoe from "@/assets/images/shoes.jpg";
import watch from "@/assets/images/watch.jpg";
import Footer from "./footer";

const Categories = () => {
  const categoriesData = [
    { image: bag, label: "Bags", link: "/bags" },
    { image: shirt, label: "Clothes", link: "/clothes" },
    { image: shoe, label: "Shoes", link: "/shoes" },
    { image: watch, label: "Watches", link: "/watches" },
  ];

  return (
    <div id="categories" className="py-12">
      <h1 className="text-center font-strike text-black text-3xl font-bold mb-8">
        Shop by Category
      </h1>
      <div className="max-w-5xl mx-auto bg-black py-12 px-4 rounded-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categoriesData.map((category, index) => (
            <Link key={index} href={category.link} passHref>
              <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <Image
                  src={category.image}
                  alt={category.label}
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                />
                {/* Text over the image, always visible */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white font-bold text-xl opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {category.label}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
