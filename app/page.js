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
import { useState } from "react";
import Navbar from './Navbar';
import WorkPage from '@/pages/WorkPage';

import gears from "../public/gears.png";
import computer from "../public/computer.png";
import me from "../public/me.png";
import pencil from "../public/pencil.png";

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
                target="_blank"
                rel="noopener noreferrer"
                >Resume</a></li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-violet-400 font-medium font-burtons md:text-6xl'> Mike Terekhov </h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-white font-burtons'>AI/ML & Software Engineer</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-white font-burtons'>Recent college graduate from Boston University with a B.S. in mechanical engineering with a concentration in machine learning and currently pursuing a M.S. in computer science at the University of Southern California</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <a href="https://www.linkedin.com/in/miketerekhov/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin style={{ color: iconColor }} />
              </a>
              <a href="https://github.com/MikeTerekhov" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{ color: iconColor }} />
              </a>
              <a href="https://www.instagram.com/miketerekhov/" target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{ color: iconColor }} />
              </a>
              <a href="https://www.strava.com/athletes/27456281" target="_blank" rel="noopener noreferrer">
                <FaStrava style={{ color: iconColor }} />
              </a>
              <a href="https://twitter.com/MikeTerekhov" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle style={{ color: iconColor }} />
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
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:w-1/3'>
                <Image src={pencil} width={100} height={100} className='mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2 font-burtons'>Courses Taken</h3>
                <h4 className='font-burtons'>
                Reinforcement Learning
                </h4>
                <h4 className='font-burtons'>
                Intro to Software Engineering
                </h4>
                <h4 className='font-burtons'>
                Intro to Machine Learning
                </h4>
                <h4 className='font-burtons'>
                Full Stack Software Development
                </h4>
                <h4 className='font-burtons'>
                Algorithms for Engineers
                </h4>
                <h4 className='font-burtons'>
                Signals and Systems
                </h4>
                <h4 className='font-burtons'>
                Thermodynamics
                </h4>
                <h4 className='font-burtons'>
                Fluid Mechanics
                </h4>
                <h4 className='font-burtons'>
                Material Science
                </h4>
                <h4 className='font-burtons'>
                Mechanics of Materials
                </h4>
                <h4 className='font-burtons'>
                Intro to CAD
                </h4>
                <h4 className='font-burtons'>
                Manufacturing
                </h4>
                <h4 className='font-burtons'>
                Instrumentation
                </h4>
                <h4 className='font-burtons'>
                Heat Transfer
                </h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:w-1/3'>
                <Image src={computer} width={100} height={100} className='mx-auto'/>
                <h3 className='text-2xl font-medium pt-8 pb-2 font-burtons'>Computer Skills</h3>
                <h4 className='font-burtons'>
                C++
                </h4>
                <h4 className='font-burtons'>
                C
                </h4>
                <h4 className='font-burtons'>
                Python
                </h4>
                <h4 className='font-burtons'>
                JavaScript
                </h4>
                <h4 className='font-burtons'>
                Java
                </h4>
                <h4 className='font-burtons'>
                HTML
                </h4>
                <h4 className='font-burtons'>
                CSS
                </h4>
                <h4 className='font-burtons'>
                Keras
                </h4>
                <h4 className='font-burtons'>
                Tensorflow
                </h4>
                <h4 className='font-burtons'>
                Flask
                </h4>
                <h4 className='font-burtons'>
                SQLite
                </h4>
                <h4 className='font-burtons'>
                MongoDB
                </h4>
                <h4 className='font-burtons'>
                Postman
                </h4>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white lg:w-1/3'>
                <Image src={gears} width={100} height={100} className='mx-auto'/>
                <h3 className='text-2xl font-medium pt-8 pb-2 font-burtons'>Mechanical Skills</h3>
                <h4 className='font-burtons'>
                Solidworks
                </h4> 
                <h4 className='font-burtons'>
                NX
                </h4>
                <h4 className='font-burtons'>
                  AutoCAD
                </h4> 
                <h4 className='font-burtons'>
                  Laser-cutter
                </h4> 
                <h4 className='font-burtons'>
                 lathes
                </h4> 
                <h4 className='font-burtons'>
                  mills
                </h4>
                <h4 className='font-burtons'>
                  G-code
                </h4> 
                <h4 className='font-burtons'>
                COMSOL Multiphysics
                </h4>  
                <h4 className='font-burtons'>
                3D Printing - SLA & FDM
                </h4> 
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}
