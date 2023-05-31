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
import kart from "../public/racekart.png";
import paper from "../public/paper.jpg";
import kart2 from "../public/racekart2.png";
import goose from "../public/goose.png";

function ChessPage() {
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
            <h3 style={{ textAlign: 'center' }} className = "text-3xl py-1 dark:text-white font-burtons">Chess</h3>
          </div>
          <div className='gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image src={kart2} width={100} height={100} className='mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2 font-burtons'> Relevant Courses Taken</h3>
                <p className='font-burtons'>
                Reinforcement Learning, Intro to Software Engineering, Intro to Machine Learning, Full Stack Software Development, Algorithms for Engineers, Signals and Systems
                </p>
            </div>
          </div>
          <div className='py-4 h-20'></div>
      </div>
    </div>
    </>
  )
}

export default ChessPage;