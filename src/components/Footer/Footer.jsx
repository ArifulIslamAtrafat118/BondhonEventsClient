import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="pt-10 lg:pt-12 bg-[#010313]  dark:bg-[#000000de]  text-white dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {" "}
        <div className=" flex flex-col items-center gap-5 md:grid md:grid-cols-3  ">
         <div className="col-span-2 flex justify-between gap-9  md:justify-around">
           {/* Contact Info */}
          <div className="text-start">
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <p>📍 Faridpur, Bangladesh</p>
            <p>📧 support@bondhonevents.com</p>
            <p>📞 +880 1704039559</p>
          </div>

          {/* Terms & Links */}
          <div className="text-start">
            <h2 className="text-lg font-semibold mb-3">Useful Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-green-600 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-green-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-green-600 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

         </div>
          {/* Social Media */}
          <div className="flex flex-col items-center justify-center gap-7">
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/arifulislam118/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ariful-islam-arafat-870617290/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} Bondhon Events. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

