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
import chess2 from "../public/chess2.png";
import Pytux from './Pytux';
import chess_page from './chess';
import doc_read from './doc_read';
import goose_page from './goose_page';

function WorkPage() {
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
            <h3 className = "text-5xl py-1 dark:text-white font-burtons text-center">Projects</h3>
          </div>
          <div className='gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <a href="/Pytux">
                <Image src={kart2} width={200} height={200} className='mx-auto' />
            </a>

                <h3 className='text-xl font-medium pt-8 pb-2 font-burtons'> Self-Driving Kart</h3>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <a href="/doc_read">
                <Image src={paper} width={200} height={200} className='mx-auto' />
            </a>
                <h3 className='text-xl font-medium pt-8 pb-2 font-burtons'> Smart PDF Analyzer</h3>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <a href="/goose_page">
                <Image src={goose} width={200} height={200} className='mx-auto' />
            </a>
                <h3 className='text-xl font-medium pt-8 pb-2 font-burtons'> Autonomous Goose-Chaser</h3>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <a href="/chess">
                <Image src={chess2} width={200} height={200} className='mx-auto' />
            </a>
                <h3 className='text-xl font-medium pt-8 pb-2 font-burtons'> Android Studio Chess</h3>
            </div>
          </div>
          <div className='py-4 h-20'></div>
      </div>
    </div>
    </>
  )
}

export default WorkPage;

