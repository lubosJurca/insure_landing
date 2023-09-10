import Footer from "./components/header_footer/Footer";
import Navbar from "./components/header_footer/Navbar";
import AboutUs from "./components/header_footer/main/AboutUs";
import Hero from "./components/header_footer/main/Hero";

import navLines2 from "./assets/images/navLines2.svg";
import navLines3 from "./assets/images/navLines3.svg";

const App = () => {
  return (
    <div className="max-w-[90rem] h-screen mx-auto relative overflow-x-auto">
      <header className=" py-6 px-6 sm:py-0 ">
        <Navbar />
      </header>

      <main>
        <Hero />
        <AboutUs />
        <img
          src={navLines2}
          alt="Nav Lines 2"
          className="absolute left-0 -top-[65%] sm:top-[70%] sm:-left-10  "
        />
        <img
          src={navLines3}
          alt="Nav Lines 2"
          className="absolute right-0 -bottom-[50%] sm:top-20 sm:z-0  -z-20"
        />
      </main>

      <footer className="bg-veryLightGray flex flex-col justify-center items-center relative px-6 z-10 py-16">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
