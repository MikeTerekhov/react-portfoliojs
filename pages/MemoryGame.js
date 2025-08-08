"use client"; // This is a client component 👈🏽
import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from "react";
import Navbar from '@/app/Navbar';
import '@/app/workPage.css';
import '../app/globals.css';
import memory from "../public/memory.png";
import Head from 'next/head';
import start from "../public/emoji/start.png";
import initial from "../public/emoji/initial.png";
import not from "../public/emoji/not.png";
import correct from "../public/emoji/correct.png";
import {useEffect } from 'react';

function MemoryGame() {
  return (
    <>
    <Navbar/>

    <div className='bg-gray-900 px-10 md:px-20 lg:px-40'>
           <div>
            <h3 style={{ textAlign: 'center' }} className="text-white text-7xl py-8 px-4 font-droidMono">Swift Emoji Memory Card Game</h3>
          </div>
          <div className='gap-10'>
            <div className='bg-white text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={memory} width={400} height={400} className='mx-auto'/>

                <h3 className='text-black text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> Objective & Background:</h3>
                <h1 className='text-black font-droidMono text-xl text-left'>
                - Created a game in Swift using Xcode that allows user to flip over cards and attempt to guess cards with matching emojis.
                </h1>
                <h1 className='text-black font-droidMono text-xl text-left'>
                - Watched and followed along Stanford online course on IOS development where this was the project
                </h1>
                <h1 className='text-black font-droidMono text-xl text-left'>
                - Utilized Model-View-ViewModel MVVM architecture when developing the application
                </h1>
                <h1 className='text-black font-droidMono text-xl text-left'>
                - Separated functionality into seperate modules for more organized code
                </h1>
                <h1 className='text-black font-droidMono text-xl text-left'>
                - Experimented with varying animation techniques and custom shape drawing
                </h1>
                <h1 className='text-black font-droidMono text-xl text-left'>
                - Working on utilizing CoreData to keep track of games and profiles that play the game
                </h1>


                <div style={{ padding: '20px' }}>
                <Image src={start} width={400} height={400} className='mx-auto'/>
                </div>

                <div style={{ padding: '20px' }}>
                <Image src={initial} width={400} height={400} className='mx-auto'/>
                </div>
                <div style={{ padding: '20px' }}>
                <Image src={not} width={400} height={400} className='mx-auto'/>
                </div>

                <div style={{ padding: '20px' }}>
                <Image src={correct} width={400} height={400} className='mx-auto'/>
                </div>
            </div>
          </div>
          <div className='py-4 h-20'></div>
      </div>
    </>
  )
}

export default MemoryGame;
