// src/components/Products.tsx
import Image from 'next/image';
import products from '../../../lib/products'; // Separate the product data into its own file for reuse
import Link from 'next/link';

function Products() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold font-strike text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} passHref>
            <div className="bg-white shadow-md p-4 rounded-2xl mb-4 cursor-pointer hover:shadow-lg transition">
              {/* Image Container */}
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold">${product.price}</p>
                {/* Add to Cart Button */}
                <div className="mt-4">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 w-full rounded-lg hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
              </div>
              </div>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
