"use client";

import Navbar from '../Navbar';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import brain from "@/public/brain.jpg";

export default function PlaceboPage() {
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
          <h1 className='text-4xl py-10 text-center font-["0xProtoNerdFont"] dark:text-white'>Placebo</h1>
          <div className="flex justify-center">
            <div className='text-center shadow-lg p-10 rounded-xl dark:bg-white'>
                <Image src={brain} width={200} height={200} className='mx-auto' alt="brain" />
              <h3 className='text-xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"]'>coming soon ...</h3>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 