import navLines from "../../assets/images/navLines.png";

const MobileNav = ({ mobNavOpen,closeMenu }) => {
  return (
    <section
      className={`${
        mobNavOpen ? "flex" : "hidden"
      } sm:hidden justify-center origin-top absolute top-16 left-0 z-20 bg-veryDarkViolet
     w-[100%] h-screen text-veryLightGray uppercase text-center px-6 text-2xl animate-open-menu `}
      onClick={closeMenu}
    >
      <nav aria-label="mobile-nav" className="min-w-full font-Karla font-bold">
        <ul className="mt-6">
          <li className="py-4 hover:opacity-80 mt-4 ">
            <a href="#">How we work</a>
          </li>
          <li className="py-4 hover:opacity-80 mt-4">
            <a href="#">Blog</a>
          </li>
          <li className="py-4 hover:opacity-80 mt-4">
            <a href="#">Account</a>
          </li>
          <li className="py-4 duration-300 hover:bg-veryLightGray hover:text-veryDarkViolet mt-4 border-[1.5px]">
            <a href="#">View plans</a>
          </li>
        </ul>
      </nav>
      <img
        src={navLines}
        alt="lines"
        className="absolute z-30 bottom-0 w-[100%] right-0"
      />
    </section>
  );
};

export default MobileNav;
