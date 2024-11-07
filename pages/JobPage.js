import Head from 'next/head';
import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { useState } from "react";
import Navbar from '@/app/Navbar';
import '@/app/workPage.css';
import Pytux from './Pytux';
import chess_page from './ChessPage';
import doc_read from './DocRead';
import goose_page from './GoosePage';
import Link from 'next/link';
import {useEffect } from 'react';

import plane from "../public/plane2.png";


function JobPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for dark mode preference when component mounts
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const iconColor = darkMode ? 'white' : 'black';
  return (
    <>
    <Navbar/>

    <div className={darkMode ? "dark" : ""}>
      <div className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'> 
        <section>
            <nav className='py-10 mb-12 flex justify-between'>
              <ul className='flex items-center'>
                <li className="ml-auto">
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} 
                  className='cursor-pointer text-2xl'
                  style={{ color: iconColor }} 
                  />
                </li>
              </ul>
            </nav>
        </section>
          <div>           
            <h3 className = "text-5xl py-1 dark:text-white font-droidMono text-center">Work Experience</h3>
          </div>
          <div className='gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Link href="/QualityPage">
                <h3 className='text-xl font-medium pt-8 pb-2 font-droidMono'> GE Aerospace </h3>
                <Image src={plane} width={400} height={400} className='mx-auto' />
            </Link>
                <h3 className='text-xl font-medium pt-8 pb-2 font-droidMono'> Quality Engineering Intern</h3>
            </div>
          </div>
          <div className='py-4 h-20'></div>
      </div>
    </div>
    </>
  )
}

export default JobPage;