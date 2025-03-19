"use client";

import Navbar from '../Navbar';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import stocks from "@/public/stocks.png";
import chess2 from "@/public/chess2.png";
import kart2 from "@/public/racekart2.png";
import paper from "@/public/paper.jpg";
import goose from "@/public/goose.png";
import memory from "@/public/memory.png";

export default function ProjectsPage() {
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
          <h1 className='text-4xl py-10 text-center font-["0xProtoNerdFont"] dark:text-white'>Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className='text-center shadow-lg p-10 rounded-xl dark:bg-white'>
              <Link href="/TraderIOS" className="block">
                <Image src={stocks} width={200} height={200} className='mx-auto' alt="Stock Trader IOS" />
              </Link>
              <h3 className='text-xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"]'>Stock Trader IOS</h3>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl dark:bg-white'>
              <Link href="/ChessPage" className="block">
                <Image src={chess2} width={200} height={200} className='mx-auto' alt="Android Chess App" />
              </Link>
              <h3 className='text-xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"]'>Android Chess App</h3>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl dark:bg-white'>
              <Link href="/Pytux" className="block">
                <Image src={kart2} width={200} height={200} className='mx-auto' alt="Self-Driving Kart" />
              </Link>
              <h3 className='text-xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"]'>Self-Driving Kart</h3>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl dark:bg-white'>
              <Link href="/DocRead" className="block">
                <Image src={paper} width={200} height={200} className='mx-auto' alt="Smart PDF Analyzer" />
              </Link>
              <h3 className='text-xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"]'>Smart PDF Analyzer</h3>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl dark:bg-white'>
              <Link href="/GoosePage" className="block">
                <Image src={goose} width={200} height={200} className='mx-auto' alt="Autonomous Goose-Chaser" />
              </Link>
              <h3 className='text-xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"]'>Autonomous Goose-Chaser</h3>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl dark:bg-white'>
              <Link href="/MemoryGame" className="block">
                <Image src={memory} width={200} height={200} className='mx-auto' alt="Swift Emoji Memory Card Game" />
              </Link>
              <h3 className='text-xl font-medium pt-8 pb-2 font-["0xProtoNerdFont"]'>Swift Emoji Memory Card Game</h3>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 