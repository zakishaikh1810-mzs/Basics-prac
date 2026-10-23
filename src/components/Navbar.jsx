import { Link } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-stone-200 shadow-md">

      {/* Navbar */}
      <div className="w-full px-6 sm:px-10 py-5">

        <div className="w-full flex flex-row items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-stone-800"
          >
            Cafe FM
          </Link>

          {/* Desktop Links */}
          <div className="hidden min-[721px]:flex items-center gap-10">

            <Link
              to="/"
              className="text-stone-700 hover:text-orange-600 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-stone-700 hover:text-orange-600 transition duration-300"
            >
             Products
            </Link>

            <Link
              to="/about"
              className="text-stone-700 hover:text-orange-600 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-stone-700 hover:text-orange-600 transition duration-300"
            >
              Contact
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-3xl text-stone-800 min-[721px]:hidden"
          >
            <MdOutlineMenuOpen />
          </button>

        </div>

      </div>

      {/* Mobile Full Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-stone-200 flex flex-col items-center justify-center gap-8">

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-8 text-3xl"
          >
            ✕
          </button>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-semibold"
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-semibold"
          >
            Prpoducts
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-semibold"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-semibold"
          >
            Contact
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;