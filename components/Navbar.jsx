"use client";
import React, { useState, useEffect } from "react";
import { GoMoon } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true); // default dark
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Services", "Projects"];

  // Dark mode toggle effect
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div
      className={`w-full fixed top-0 z-50 py-3 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-10 h-20">
        {/* Logo */}
        <img
          className="h-20 md:h-24 w-auto object-contain"
          src={isDark ? "/images/logo6.png" : "/images/logo1.jpg"}
          alt="Logo"
        />

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex rounded-full shadow-md px-6 py-2 gap-6 ml-8 transition-colors duration-300 ${
            isDark ? "bg-gray-500" : "bg-gray-100"
          }`}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 rounded-full transition ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-700 hover:text-black hover:bg-white"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`text-2xl transition-colors duration-300 ${
              isDark ? "text-white" : "text-black"
            }`}
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <IoSunnyOutline /> : <GoMoon />}
          </button>

          {/* Hamburger */}
          <button
            className={`md:hidden text-2xl pr-2 transition-colors duration-300 ${
              isDark ? "text-white" : "text-black"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>

          {/* Desktop Contact */}
          <a
            href="#contact"
            className={`hidden md:flex rounded-full shadow-md px-6 py-3 items-center gap-2 ml-6 transition-colors duration-300 ${
              isDark
                ? "bg-gray-500 text-white hover:opacity-90"
                : "bg-gray-200 text-black hover:opacity-90"
            }`}
          >
            Contact Us <FiArrowUpRight />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden shadow-md px-6 py-4 flex flex-col gap-4 transition-colors duration-300 ${
            isDark ? "bg-gray-900" : "bg-gray-100"
          }`}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`py-2 border-b transition-colors duration-300 ${
                isDark
                  ? "text-gray-300 border-gray-700 hover:text-white"
                  : "text-gray-700 border-gray-300 hover:text-black"
              }`}
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`rounded-full px-5 py-2 flex items-center gap-2 mt-3 transition-colors duration-300 ${
              isDark
                ? "bg-gray-800 text-white hover:opacity-90"
                : "bg-gray-200 text-black hover:opacity-90"
            }`}
          >
            Contact Us <FiArrowUpRight />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
