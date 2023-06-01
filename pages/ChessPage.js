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

function ChessPage() {
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
            <h3 style={{ textAlign: 'center' }} className = "text-7xl py-1 dark:text-white font-burtons">Android Chess Application</h3>

            <ul style={{ margin: 10, padding: 10, listStyle: 'none' }}>
                <li style={{ display: 'flex', justifyContent: 'center' }}>
                <a
                className='bg-gradient-to-r from-cyan-500 to-violet-400 text-white px-4 py-2 rounded-md ml-8'
                href = "https://agile.bu.edu/gitlab/public-projects/ec327-public-projects/group12project"
                target="_blank"
                rel="noopener noreferrer"
                >Code
                </a>
                </li>

                <li style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
                <a
                className='bg-gradient-to-r from-cyan-500 to-violet-400 text-white px-4 py-2 rounded-md ml-8'
                href = "https://drive.google.com/file/d/1azJUkuiKh-R_SPTCkGS0RP66cnYv5kCU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >Demo Video
                </a>
                </li>
                </ul>

          </div>
          <div className='gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image src={chess2} width={400} height={400} className='mx-auto'/>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-burtons text-left'> Objective & Background:</h3>
                <p className='font-burtons text-xl'>
                Worked on a group that created a chess app in Android Studio with fully functioning chess logic, user vs user gameplay, as well as user vs AI gameplay.
                </p>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-burtons text-left'> Basic Requirements Satisfied:</h3>
                <p className='font-burtons text-xl text-left'>
                - Local device user vs user gameplay
                </p>
                <p className='font-burtons text-xl text-left'>
                - Local device user vs computer gameplay
                </p>
                <p className='font-burtons text-xl text-left'>
                - Chess pieces follow traditional movement rules
                </p>
                <p className='font-burtons text-xl text-left'>
                - Game recognizes whose turn it is
                </p>
                <p className='font-burtons text-xl text-left'>
                - Game recognizes when a checkmate or stalemate is reached
                </p>
                <p className='font-burtons text-xl text-left'>
                - Game prompts user to keep playing, quit playing, or change modes upon game ending
                </p>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-burtons text-left'> Implementation:</h3>
                <p className='font-burtons text-xl text-left'>
                - Created class called Piece, which has several subclasses : Rook, Queen, etc
                </p>
                <p className='font-burtons text-xl text-left'>
                - In main activity, creates 8x8 matrix of Pieces, as well as two 8x8 matrices of TextViews, layered on top of each other, one for background tiles and one for pieces
                </p>
                <p className='font-burtons text-xl text-left'>
                - Logic is done on the Piece matrix, and then reflected on the TextView matrices
                </p>
                <p className='font-burtons text-xl text-left'>
                - Each click program checks whose turn, whether a win has happened, or whether the king is in check
                </p>
                <p className='font-burtons text-xl text-left'>
                - Bot can be supplemented after each player turn if mode is set to Bot
                </p>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-burtons text-left'> Additional Features:</h3>
                <p className='font-burtons text-xl text-left'>
                - Predictive move feature - ability to see possible moves
                </p>
                <p className='font-burtons text-xl text-left'>
                - Sound effects/animation
                </p>
                <p className='font-burtons text-xl text-left'>
                - Customizable UI - pieces, board colors, etc
                </p>
                <p className='font-burtons text-xl text-left'>
                - Leaderboard ranking system
                </p>
                <p className='font-burtons text-xl text-left'>
                - Different levels of bot strength/playing types
                </p>
            </div>
          </div>
          <div className='py-4 h-20'></div>
      </div>
    </div>
    </>
  )
}

export default ChessPage;