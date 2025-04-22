import { Link } from "gatsby"
import React, { useState } from "react"
import { FaSearch, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-orchiddark text-white z-50 w-full">
      <div className="max-w-screen-xl mx-auto grid grid-cols-[auto,1fr,auto] items-center px-6 py-4 gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Dorot Gardens Logo"
              className="h-16 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex justify-center space-x-10 font-extrabold text-xl">
          <Link to="/product" className="no-underline text-gray-200">
            Products
          </Link>
          <Link to="/recipe" className="no-underline text-gray-200">
            Recipes
          </Link>
          <Link to="/cookingclass" className="no-underline text-gray-200">
            Cooking Classes
          </Link>
          <Link to="/blog" className="no-underline text-gray-200">
            Blog
          </Link>
          <Link to="/about" className="no-underline text-gray-200">
            About Dorot Gardens
          </Link> 
        </div>

        {/* Right: Find us + Search */}
        <div className="hidden md:flex justify-end items-center space-x-4 text-sm font-semibold">
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-white text-lg" />
            <span>Find us at the freezer aisle</span>
          </div>
          <FaSearch className="text-white cursor-pointer text-lg" />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden col-span-3 flex justify-between items-center">
          {/* <Link to="/">
            <img
              src="/images/logo.webp"
              alt="Dorot Gardens Logo"
              className="h-14 w-auto cursor-pointer"
            />
          </Link> */}
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-orchiddark px-6 pb-4 space-y-4 text-md font-semibold">
          {["product", "recipe", "cookingclass", "blog", "about"].map(path => (
            <Link
              key={path}
              to={`/${path}`}
              className="block text-white no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          ))}
          <div className="flex items-center space-x-2 pt-2 border-t border-purple-400">
            <FaMapMarkerAlt className="text-white" />
            <span className="text-xl">Find us at the freezer aisle</span>
          </div>
        </div>
      )}
    </nav>
  )
}
