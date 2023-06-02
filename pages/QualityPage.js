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

import home_screen2 from "../public/home_screen2.png";
import mid_game from "../public/mid_game.png";
import game_over from "../public/game_over.png";
import plane from "../public/plane2.png";

import ge1 from "../public/ge1.png";
import ge2 from "../public/ge2.png";
import ge3 from "../public/ge3.png";

function QualityPage() {
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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>           
            <h3 style={{ textAlign: 'center' }} className = "text-7xl py-1 dark:text-white font-burtons">Quality Engineering Internship</h3>

          </div>
          <div className='gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image src={plane} width={400} height={400} className='mx-auto'/>

                <h3 className='text-4xl font-medium pt-8 pb-2 font-burtons text-left'> Objective & Background:</h3>
                <p className='font-burtons text-xl'>
                Interned at GE Aviation manufacturing plant in Hooksett New Hampshire. I worked as a part of the quality engineering team in the Blisk department.
                </p>

                <h3 className='text-4xl font-medium pt-8 pb-2 font-burtons text-left'> Roles & Responsibilities:</h3>

                <p className='font-burtons text-xl text-left'>
                    - Worked with operators in the shop in observing and inspecting defected parts and performing root cause analysis
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Worked with manufacturing and design engineering teams in conducting priority part reviews where all teams would work together and fully inspect the manufacturing of a certain part
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Participated in shop-walks where inspections of all stages of the manufacturing process would occur
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Assisted in conducting monthly inventory and kept track of parts and their respective defects
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Participated in daily engineering team meeting where daily events and priorities would be discussed
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Analyzed part drawings utilizing GD & T principles
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Participated in LEAN manufacturing meetings where shop efficiency and workflow was analyzed and potential improvements would be suggested to improve efficiency and decrease costs
                </p>

                <h3 className='text-4xl font-medium pt-8 pb-2 font-burtons text-left'> Accomplishments:</h3>

                <p className='font-burtons text-2xl text-center'>
                    Digitized Part Heat-Map
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Designed and developed a heat map that would allow the operators at different stages of the manufacturing process to highlight the location and type of defect
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Wrote Python code to digitize this project and allow the data to be stored in an Excel sheet so that overtime the defects and their respective locations can be tracked
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Designed this in such a way so that it can be utilized for any part 
                </p>

                <p className='font-burtons text-2xl text-center pt-8'>
                    NX
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Learned how to use NX CAD software
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Learned how to import existing parts and perform many different types of analysis on the part
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Participated in designing new parts and altering existing part designs to improve them
                </p>

                <p className='font-burtons text-2xl text-center pt-8'>
                    Customer Returns
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Designed and implemented a section of the plant that would contain all of the customer returns in an organized manner
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Analyzed patterns in whcih parts would be returned and why and then used this data to perform root cause analysis
                </p>
                <p className='font-burtons text-xl text-left'>
                    - Built the area in the plant and organized all of the existing returns
                </p>

                
                  <div style={{ padding: '20px' }}>
                  <Image src={ge1} width={750} height={750} className='mx-auto'/>
                  </div>
                  <div style={{ padding: '20px' }}>
                  <Image src={ge2} width={750} height={750} className='mx-auto'/>
                  </div>
                  <div style={{ padding: '20px' }}>
                  <Image src={ge3} width={750} height={750} className='mx-auto'/>
                  </div>

            </div>
          </div>
          <div className='py-4 h-20'></div>
      </div>
    </div>
    </>
  )
}

export default QualityPage;