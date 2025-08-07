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
      <Link href="/" className="font-['0xProtoNerdFont']">Mike Terekhov</Link>
      <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
        <div className="font-['0xProtoNerdFont']"> 
          <Link href="/" className="font-['0xProtoNerdFont']">Home</Link>
          <Link href="/projects" className="font-['0xProtoNerdFont']">Projects</Link>
          <Link href="/work" className="font-['0xProtoNerdFont']">Work Experience</Link>
          <Link href="/placebo" className="font-['0xProtoNerdFont']">Placebo</Link>
          <Link href="/resilientai" className="font-['0xProtoNerdFont']">ResilientAI</Link>
          <Link href="/terminal" className="font-['0xProtoNerdFont']">Terminal</Link>
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
