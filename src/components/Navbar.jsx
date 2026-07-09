import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-50 border-b border-amber-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar Top */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="text-xl sm:text-2xl md:text-3xl font-black font-serif">
            🍽️ Saffron & Spice
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-lg font-medium">
            <Link to="/" className="hover:text-amber-600 transition">
              Home
            </Link>

            <Link to="/Menu" className="hover:text-amber-600 transition">
              Menu
            </Link>

            <Link to="/Contact" className="hover:text-amber-600 transition">
              Contact
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/Reserve">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold transition">
                Reserve a Table
              </button>
            </Link>

            <Link to="/Aadmin">
              <button className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full font-semibold transition">
                Admin
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col items-center gap-5 text-lg font-medium">

              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <Link to="/Menu" onClick={() => setIsOpen(false)}>
                Menu
              </Link>

              <Link to="/Contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              <Link to="/Reserve" onClick={() => setIsOpen(false)}>
                <button className="bg-amber-500 text-white px-5 py-2 rounded-full font-semibold">
                  Reserve a Table
                </button>
              </Link>

              <Link to="/Aadmin" onClick={() => setIsOpen(false)}>
                <button className="bg-black text-white px-5 py-2 rounded-full font-semibold">
                  Admin
                </button>
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;