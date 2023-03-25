import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation data
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Book A Session", href: "/bookasession" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Gallery", href: "/gallery" },
    // { title: "Footsteps", href: "/footsteps" },
    { title: "Services", href: "/services" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <nav className="bg-white text-black shadow-md h-16 z-50  sticky w-full">
      <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-black font-bold">
            <img src="/assets/Logos.png" alt="Logo" className="h-8 sm:h-10" />
          </a>
        </div>
        <div className="hidden sm:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        <div className="flex sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`sm:hidden  absolute  right-0 bg-white transition-all duration-300 ease-in-out shadow-md ${
            isOpen ? "block" : "hidden"
          }`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-8 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
