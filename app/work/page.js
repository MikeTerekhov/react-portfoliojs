"use client";

import Navbar from '../Navbar';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import plane from "../../public/plane2.png";
import ge1 from "../../public/ge1.png";
import ge2 from "../../public/ge2.png";
import ge3 from "../../public/ge3.png";

export default function WorkPage() {
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
          <h1 className='text-4xl py-10 text-center font-["0xProtoNerdFont"] dark:text-white'>Work Experience</h1>
          <div className="space-y-8">
            <div className='text-center shadow-lg p-10 rounded-xl dark:bg-white'>
              <Link href="/quality">
                <h3 className='text-xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"]'>GE Aerospace</h3>
                <Image src={plane} width={400} height={400} className='mx-auto' alt="GE Aerospace" />
              </Link>
              <h3 className='text-black text-xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"]'>Quality Engineering Intern</h3>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
