"use client"; // This is a client component 👈🏽

import { useState } from "react";
import Navbar from '@/app/Navbar';

import Image from 'next/image';
import game_over from "../public/game_over.png";
import {useEffect } from 'react';

function TraderIOS() {

  return (
    <>
    <Navbar />

    <div >
      <div className='bg-white md:px-20 lg:px-40 dark:bg-gray-900'>


          <div>           
            <h3 style={{ textAlign: 'center' }} className = "pt-4 text-7xl py-1 dark:text-white font-droidMono">Stock Trader IOS</h3>
          </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <video width="700" height="600" controls>
                                <source src="/vid.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            </div>
      </div>
    </div>
    </>
  )
}

export default TraderIOS;
