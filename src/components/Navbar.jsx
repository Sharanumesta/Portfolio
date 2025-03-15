import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-20 w-screen bg-[#22577A] flex items-center justify-between px-6">
      {/* Logo */}
      <div className="text-[#C7F9CC] font-bold text-xl ms-10">Sharanu</div>

      {/* Desktop Menu */}
      <ul className="cursor-pointer hidden md:flex md:justify-evenly md:items-center space-x-6 text-[#C7F9CC]">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" color="#C7F9CC" />
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full h-screen bg-[#C7F9CC]/50 p-6 flex justify-center transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-4 font-semibold text-[#22577A] cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
