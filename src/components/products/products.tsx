// src/components/Products.tsx
'use client'
import Image from 'next/image';
import products from '../../../lib/products'; // Separate the product data into its own file for reuse

const Products = () => {
  // // Function to handle adding a product to the cart
  // const handleAddToCart = (productId: string) => {
  //   // Implement your add-to-cart logic here
  //   console.log(`Product ${productId} added to cart`);
  // };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold font-strike text-center mb-6">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md p-4 rounded-2xl mb-4 cursor-pointer hover:shadow-lg transition"
          >
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
              <p className="text-black font-bold text-xl">{product.name}</p>
              <p className="text-gray-400">{product.description}</p>
              <p className="text-lg font-bold">${product.price}</p>
              {/* Add to Cart Button */}
              <div className="mt-4">
                <button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 w-full rounded-lg hover:bg-blue-700 transition"
                  type="button"
                  // onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
