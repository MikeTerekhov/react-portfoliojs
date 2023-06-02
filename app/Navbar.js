import "./main.css";
import Link from 'next/link';
import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import WorkPage from "../pages/WorkPage";
import JobPage from "@/pages/JobPage";

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
      <h3>Mike Terekhov</h3>
      <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
        <Link href="/">Home</Link>
        <Link href="/WorkPage">Projects</Link>
        <Link href="/JobPage">Work Experience</Link>
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
