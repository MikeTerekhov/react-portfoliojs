import "./main.css";
import Link from 'next/link';
import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <header className='bg-gradient-to-r from-cyan-500 to-violet-400 text-white px-4 py-2'>
      <Link href="/" className="font-droidMono">Mike Terekhov</Link>
      <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
        <div className="font-droidMono"> 
          <Link href="/" className="font-droidMono">Home</Link>
          <Link href="/WorkPage" className="font-droidMono">Projects</Link>
          <Link href="/JobPage" className="font-droidMono">Work Experience</Link>
          <Link href = "/Placebo" className = "font-droidMono"> Placebo </Link>
        </div>
        <button className="nav-btn nav-close-btn" onClick={closeNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
