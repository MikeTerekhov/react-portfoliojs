"use client";

import Navbar from '../Navbar';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import plane from "../../public/plane2.png";
import ge1 from "../../public/ge1.png";
import ge2 from "../../public/ge2.png";
import ge3 from "../../public/ge3.png";

export default function QualityPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className={darkMode ? "dark" : ""}>
          <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 min-h-screen flex items-center justify-center'>
            <div className="text-4xl font-['0xProtoNerdFont'] dark:text-white">Loading...</div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={darkMode ? "dark" : ""}>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 min-h-screen'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={plane} width={400} height={400} className='mx-auto' alt="GE Aerospace" />

            <h3 className='text-4xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"] text-left'>Objective & Background:</h3>
            <p className='font-["0xProtoNerdFont"] text-xl'>
              Interned at GE Aviation manufacturing plant in Hooksett New Hampshire. I worked as a part of the quality engineering team in the Blisk department.
            </p>

            <h3 className='text-4xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"] text-left'>Roles & Responsibilities:</h3>

            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Worked with operators in the shop in observing and inspecting defected parts and performing root cause analysis
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Worked with manufacturing and design engineering teams in conducting priority part reviews where all teams would work together and fully inspect the manufacturing of a certain part
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Participated in shop-walks where inspections of all stages of the manufacturing process would occur
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Assisted in conducting monthly inventory and kept track of parts and their respective defects
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Participated in daily engineering team meeting where daily events and priorities would be discussed
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Analyzed part drawings utilizing GD & T principles
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Participated in LEAN manufacturing meetings where shop efficiency and workflow was analyzed and potential improvements would be suggested to improve efficiency and decrease costs
            </p>

            <h3 className='text-4xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"] text-left'>Accomplishments:</h3>

            <p className='font-["0xProtoNerdFont"] text-2xl text-center'>
              Digitized Part Heat-Map
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Designed and developed a heat map that would allow the operators at different stages of the manufacturing process to highlight the location and type of defect
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Wrote Python code to digitize this project and allow the data to be stored in an Excel sheet so that overtime the defects and their respective locations can be tracked
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Designed this in such a way so that it can be utilized for any part 
            </p>

            <p className='font-["0xProtoNerdFont"] text-2xl text-center pt-8'>
              NX
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Learned how to use NX CAD software
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Learned how to import existing parts and perform many different types of analysis on the part
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Participated in designing new parts and altering existing part designs to improve them
            </p>

            <p className='font-["0xProtoNerdFont"] text-2xl text-center pt-8'>
              Customer Returns
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Designed and implemented a section of the plant that would contain all of the customer returns in an organized manner
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Analyzed patterns in which parts would be returned and why and then used this data to perform root cause analysis
            </p>
            <p className='font-["0xProtoNerdFont"] text-xl text-left'>
              - Built the area in the plant and organized all of the existing returns
            </p>

            <div style={{ padding: '20px' }}>
              <Image src={ge1} width={750} height={750} className='mx-auto' alt="GE Aerospace Image 1"/>
            </div>
            <div style={{ padding: '20px' }}>
              <Image src={ge2} width={750} height={750} className='mx-auto' alt="GE Aerospace Image 2"/>
            </div>
            <div style={{ padding: '20px' }}>
              <Image src={ge3} width={750} height={750} className='mx-auto' alt="GE Aerospace Image 3"/>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 