"use client";

import Navbar from '../Navbar';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <div className={darkMode ? "dark" : ""}>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
          <h1 className='text-4xl py-10 text-center font-["0xProtoNerdFont"] dark:text-white'>Projects</h1>
          {/* Add your projects content here */}
        </main>
      </div>
    </>
  );
} 