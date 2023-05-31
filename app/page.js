"use client"; // This is a client component 👈🏽

import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai';
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { useState } from "react";
import Navbar from './Navbar';
import WorkPage from '@/pages/WorkPage';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const iconColor = darkMode ? 'white' : 'black';
  return (
    <>
    <Navbar/>

    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mike Terekhov</title>
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'> 
        <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons dark:text-white'>
                Mike Terekhov
              </h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} 
                  className='cursor-pointer text-2xl'
                  style={{ color: iconColor }} 
                  />
                </li>
                <li><a
                className='bg-gradient-to-r from-cyan-500 to-violet-400 text-white px-4 py-2 rounded-md ml-8'
                href = "https://drive.google.com/file/d/1kTqMSNQEF80Q5FdJ91tSxPpc0_vhYlWw/view?usp=share_link"
                >Resume</a></li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-violet-400 font-medium font-burtons md:text-6xl'> Mike Terekhov </h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-white font-burtons'>AI/ML & Software Engineer</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-white font-burtons'>Recent college graduate from Boston University with a B.S. in mechanical engineering with a concentration in machine learning and currently pursuing a M.S. in computer science at the University of Southern California</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <a href="https://twitter.com/MikeTerekhov" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle
              style={{ color: iconColor }}
              />
              </a>
              <a href="https://www.linkedin.com/in/miketerekhov/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin style={{ color: iconColor }} />
              </a>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96' style={{ zIndex: 1 }}>
              <Image src={deved} style={{ objectFit: 'cover' }}/>
            </div>
        </section>

        <section>
          <div>           
            <h3 className = "text-3xl py-1 dark:text-white font-burtons">My Background</h3>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image src={design} width={100} height={100} className='mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2 font-burtons'> Relevant Courses Taken</h3>
                <p className='font-burtons'>
                Reinforcement Learning, Intro to Software Engineering, Intro to Machine Learning, Full Stack Software Development, Algorithms for Engineers, Signals and Systems
                </p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image src={code} width={100} height={100} className='mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2 font-burtons'> Skills</h3>
                <p className='font-burtons'>
                C++, C, Python, JavaScript, HTML, CSS, Java, Keras, Tensorflow, Flask, SQLite, MongoDB
                </p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image src={consulting} width={100} height={100} className='mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2 font-burtons'> Interests</h3>
                <p className='font-burtons text-center'>
                Self-Driving Reinforcement Learning Models
                </p>
                <p className='font-burtons text-center'>
                Full-Stack Development
                </p>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}
