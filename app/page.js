"use client"; // This is a client component 👈🏽

import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai';
import { FaGithub, FaInstagram, FaStrava } from "react-icons/fa";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import WorkPage from '@/pages/WorkPage';

import gears from "../public/gears.png";
import computer from "../public/computer.png";
import me from "../public/me.png";
import pencil from "../public/pencil.png";
import main from "../public/main2.png";

import ContactForm from './ContactForm';

export default function Home() {
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
      <Head>
        <title>Mike Terekhov</title>
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'> 
        
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-droidMono dark:text-white'>
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
                className='bg-gradient-to-r from-cyan-500 to-violet-400 text-white px-4 py-2 rounded-md ml-8 font-droidMono'
                href = "https://drive.google.com/file/d/1mxrRKMCGB85We-VsRQczcejRTEE42y2H/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                >Resume</a></li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-violet-400 font-medium font-droidMono md:text-6xl'> Mike Terekhov </h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-white font-droidMono'>MS CS @ University of Southern California</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-white font-droidMono'>Recent college graduate from Boston University with a B.S. in mechanical engineering with a concentration in machine learning and currently pursuing a M.S. in computer science at the University of Southern California</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <a href="https://www.linkedin.com/in/miketerekhov/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin style={{ color: iconColor }} />
              </a>
              <a href="https://github.com/MikeTerekhov" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{ color: iconColor }} />
              </a>
              <a href="https://www.strava.com/athletes/27456281" target="_blank" rel="noopener noreferrer">
                <FaStrava style={{ color: iconColor }} />
              </a>
            </div>
            {/* <div className='relative mx-auto bg-gradient-to-b from-purple-400 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96' style={{ zIndex: 1 }}>
              <Image src={main} style={{ objectFit: 'cover' }}/>
            </div> */}
        
              <ContactForm></ContactForm>
        
          <div>           
            <h3 className = "text-3xl py-1 dark:text-white font-droidMono">My Background</h3>
          </div>
          <div className='lg:flex gap-10 font-droidMono'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:w-1/3 font-droidMono'>
                <Image src={pencil} width={100} height={100} className='mx-auto'/>
                <h3 className='text-2xl font-medium pt-8 pb-2 font-droidMono'>Courses Taken</h3>
                <h4 className='font-droidMono'>
                Reinforcement Learning
                </h4>
                <h4 className='font-droidMono'>
                Software Engineering
                </h4>
                <h4 className='font-droidMono'>
                Machine Learning
                </h4>
                <h4 className='font-droidMono'>
                Advanced Algorithms
                </h4>
                <h4 className='font-droidMono'>
                Advanced Computer Vision
                </h4>
                <h4 className='font-droidMono'>
                Computer Security Systems
                </h4>
                <h4 className='font-droidMono'>
                Networks
                </h4>
                <h4 className='font-droidMono'>
                Mechanics of Materials
                </h4>
                <h4 className='font-droidMono'>
                Manufacturing
                </h4>
                <h4 className='font-droidMono'>
                Instrumentation
                </h4>
                <h4 className='font-droidMono'>
                Statics
                </h4>
                <h4 className='font-droidMono'>
                Mechanics
                </h4>
                <h4 className='font-droidMono'>
                Heat Transfer
                </h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:w-1/3'>
                <Image src={computer} width={100} height={100} className='mx-auto'/>
                <h3 className='text-2xl font-medium pt-8 pb-2 font-droidMono'>Computer Skills</h3>
                <h4 className='font-droidMono'>
                C++
                </h4>
                <h4 className='font-droidMono'>
                C
                </h4>
                <h4 className='font-droidMono'>
                Python
                </h4>
                <h4 className='font-droidMono'>
                JavaScript
                </h4>
                <h4 className='font-droidMono'>
                Java
                </h4>
                <h4 className='font-droidMono'>
                HTML
                </h4>
                <h4 className='font-droidMono'>
                CSS
                </h4>
                <h4 className='font-droidMono'>
                Keras
                </h4>
                <h4 className='font-droidMono'>
                Tensorflow
                </h4>
                <h4 className='font-droidMono'>
                Flask
                </h4>
                <h4 className='font-droidMono'>
                SQLite
                </h4>
                <h4 className='font-droidMono'>
                MongoDB
                </h4>
                <h4 className='font-droidMono'>
                Postman
                </h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:w-1/3'>
                <Image src={gears} width={100} height={100} className='mx-auto'/>
                <h3 className='text-2xl font-medium pt-8 pb-2 font-droidMono'>Mechanical Skills</h3>
                <h4 className='font-droidMono'>
                Solidworks
                </h4> 
                <h4 className='font-droidMono'>
                NX
                </h4>
                <h4 className='font-droidMono'>
                  AutoCAD
                </h4> 
                <h4 className='font-droidMono'>
                  Laser-cutter
                </h4> 
                <h4 className='font-droidMono'>
                 lathes
                </h4> 
                <h4 className='font-droidMono'>
                  mills
                </h4>
                <h4 className='font-droidMono'>
                  G-code
                </h4> 
                <h4 className='font-droidMono'>
                COMSOL Multiphysics
                </h4>  
                <h4 className='font-droidMono'>
                3D Printing - SLA & FDM
                </h4> 
            </div>
          </div>
        
      </main>
    </div>
    </>
  )
}
