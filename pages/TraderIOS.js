"use client"; // This is a client component 👈🏽

import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from "react";
import Navbar from '@/app/Navbar';
import '@/app/workPage.css';

import Image from 'next/image';
import game_over from "../public/game_over.png";

function TraderIOS() {
  const [darkMode, setDarkMode] = useState(false);
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
            <h3 style={{ textAlign: 'center' }} className = "text-7xl py-1 dark:text-white font-burtons">Stock Trader IOS</h3>
          </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh' // Adjust or remove to fit the entire viewport or parent
                            }}>
                            <video width="700" height="600" controls>
                                <source src="/vid.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            </div>
      </div>
    </div>
    </>
  )
}

export default TraderIOS;