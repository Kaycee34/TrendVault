"use client"; 

import Image from 'next/image';
import img from '../assets/images/heroImg.png';

const Hero = () => {
  return (
    <div className='relative flex flex-col md:flex-row items-center justify-between bg-black text-gray-100 py-16 px-4 shadow-lg rounded-bl-[60px] rounded-br-[60px]'>
      {/* Text Section */}
      <div className='md:w-1/2 text-center mt-32 font-protest-strike md:text-left md:mt-24 space-y-6 md:space-y-8 md:ml-28'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold font-strike bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 drop-shadow-2xl animate-pulse -mt-6 md:-mt-9'>
          Ride the Wave of Style
        </h1>
        <p className='text-xl md:text-xl text-gray-300 font-sans'>
          Discover the latest trends in fashion at unbeatable prices. Elevate your wardrobe today!
        </p>
        <button className='mt-6 bg-customBlue hover:bg-blue-700 hover:scale-105 transition-transform duration-300 text-white font-semibold py-3 px-6 rounded-lg shadow-md animate-bounce glow-effect'>
          Shop Now
        </button>
      </div>

      {/* Image Section with subtle float */}
      <div className='md:w-1/2 mt-8 md:mt-0'>
        <Image
          src={img}
          alt="heroimg"
          width={500}
          height={300}
          className='rounded-lg transform hover:scale-105 transition-transform duration-500 bg-transparent animate-float'
        />
      </div>

      {/* Extra styling for animations */}
      <style jsx>{`
        .glow-effect {
          box-shadow: 0 0 15px rgba(0, 0, 255, 0.5);
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
