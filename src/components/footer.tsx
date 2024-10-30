import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faLinkedinIn, faGithub, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons"; // Import specific icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-32">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info Section */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">TrendVault</h3>
          <p className="text-gray-400 mb-4">
            Your go-to destination for the latest fashion trends. We bring you high-quality apparel and accessories.
          </p>
          <p>&copy; {new Date().getFullYear()} TrendVault. All rights reserved.</p>
        </div>

        {/* Customer Service Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/help" className="hover:text-white transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-white transition-colors">
                Returns & Exchanges
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-white transition-colors">
                Shipping Information
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Stay in the Loop</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest trends and exclusive offers.</p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 border-t border-gray-700 pt-8 text-center">
        <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <Link href="https://www.linkedin.com/in/udechukwudestinykelechi" className="hover:text-white">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
          </Link>
          <Link href="https://github.com/Kaycee34" className="hover:text-white">
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </Link>
          <Link href="https://www.instagram.com/udechukwudestinykelechi" className="hover:text-white">
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </Link>
          <Link href="https://discord.com/channels/@me" className="hover:text-white">
            <FontAwesomeIcon icon={faDiscord} className="text-xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
