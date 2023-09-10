import { useState } from "react";
import insureSvg from "../../assets/images/inuserSvg.svg";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [mobNavOpen, setMovNavOpen] = useState(false);

  const toggleMenu = () => {
    setMovNavOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMovNavOpen(false)
  }

  return (
    <section className="flex justify-between items-center  py-2">
      <img src={insureSvg} alt="logo" />
      <nav aria-label="main" className="hidden font-Karla font-bold sm:flex  uppercase text-darkGrayishViolet ">
        <ul className="flex">
          <li className="py-3  pr-7 hover:opacity-80 mt-4 sm:mt-0 ">
            <a href="#">How we work</a>
          </li>
          <li className="py-3  pr-7 hover:opacity-80 mt-4 sm:mt-0">
            <a href="#">Blog</a>
          </li>
          <li className="py-3 pr-7 hover:opacity-80 mt-4 sm:mt-0">
            <a href="#">Account</a>
          </li>
          <li className="py-3 ps-7 pr-7 duration-300 hover:bg-veryDarkViolet hover:text-veryLightGray mt-4 border-[1.5px] sm:mt-0">
            <a href="#">View plans</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={toggleMenu}
        className="border-2 absolute right-6 sm:hidden"
      >
        {mobNavOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <MobileNav mobNavOpen={mobNavOpen} closeMenu={closeMenu} />
    </section>
  );
};

export default Navbar;
