import { navLinks } from "../constatns";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos > currentScrollPos;

      setNavbarVisible(
        currentScrollPos < 10 || // Show the navbar if the scroll position is less than 10px
          (isScrollingDown && currentScrollPos > 10) // Show the navbar when scrolling up after passing 10px
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`bg-[#0A192F] w-full h-[66px] flex border-b-[0.5px] border-solid border-[#64FFDA] transition-all ${
        !isNavbarVisible && "transform -translate-y-full"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <div className="flex h-full flex-col justify-center ml-4">
        <p className="text-[#64FFDA] text-center text-[22px] md:text-[27px] lg:text-[30px] font-[400] font-fira">
          Haithem Attab
        </p>
      </div>

      <div className="flex-grow"></div>

      {/* Hamburger menu icon for md and small devices */}
      <div
        className="md:hidden cursor-pointer flex items-center mr-4"
        onClick={toggleMenu}
      >
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
          <Link to={link.id} key={link.id} smooth duration={500} className="h-full flex gap-3 items-center cursor-pointer hover:scale-[1.02]">
            <span className="text-[#64FFDA] font-fira">0{index + 1}.</span>
            <span className="font-fira ">{link.title}</span>
          </Link>
        ))}
      </div>

      {/* Menu items for md and small devices */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[66px] left-0 w-full bg-black text-white">
          {navLinks.map((link, index) => (
            <Link to={link.id} smooth duration={500} key={link.id} className="p-4 block" onClick={toggleMenu}>
              <span className="text-[#64FFDA] font-fira">0{index + 1}.</span>
              <span className="font-fira ">{link.title}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
