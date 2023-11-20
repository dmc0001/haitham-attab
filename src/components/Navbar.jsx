import { navLinks } from "../constatns";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-[66px] flex border-b-[0.5px] border-solid border-[#64FFDA]">
      <div className="flex h-full flex-col justify-center ml-4">
        <p className="text-[#64FFDA] text-center text-[22px] md:text-[27px] lg:text-[30px] font-[400] font-fira">
          Haithem Attab
        </p>
      </div>

      <div className="flex-grow"></div>

      {/* Hamburger menu icon for md and small devices */}
      <div className="md:hidden cursor-pointer flex items-center mr-4" onClick={toggleMenu}>
        <svg
          className="h-6 w-6 text-[#64FFDA] block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hamburger icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Menu items for large devices */}
      <div className="hidden md:flex h-full justify-center gap-16 mr-8">
        {navLinks.map((link, index) => (
          <div key={link.id} className="h-full flex gap-3 items-center">
            <span className="text-[#64FFDA] font-fira">0{index + 1}.</span>
            <span className="font-fira ">{link.title}</span>
          </div>
        ))}
      </div>

      {/* Menu items for md and small devices */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[66px] left-0 w-full bg-black text-white">
          {navLinks.map((link, index) => (
            <div key={link.id} className="p-4">
              <span className="text-[#64FFDA] font-fira">0{index + 1}.</span>
              <span className="font-fira ">{link.title}</span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};


export default Navbar;
