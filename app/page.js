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
import Navbar from './Navbar';

import gears from "../public/gears.png";
import computer from "../public/computer.png";
import me from "../public/me.png";
import pencil from "../public/pencil.png";

// Import images for research projects
import research1 from "../public/med.jpg";
import research2 from "../public/eye.avif";
import db from "../public/db.png";

import Link from 'next/link';
import stocks from "@/public/stocks.png";
import chess2 from "@/public/chess2.png";
import kart2 from "@/public/racekart2.png";
import memory from "@/public/memory.png";
import goose from "@/public/goose.png";
import paper from "@/public/paper.jpg";

import robot from "@/public/robot_cartoon.jpg";

export default function Home() {
  const iconColor = 'white';
  return (
    <>
      <Navbar/>

      <div className="dark">
      <Head>
        <title>Mike Terekhov</title>
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'> 
        
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-["0xProtoNerdFont"] text-white'>
                Mike Terekhov
              </h1>
              <ul className='flex items-center'>
                <li><a
                className='bg-gradient-to-r from-cyan-500 to-violet-400 text-white px-4 py-2 rounded-md ml-8 font-["0xProtoNerdFont"]'
                href="https://drive.google.com/file/d/1WottYI52WGizkozwfRnLm_hlz-4jYq25/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >Resume</a></li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-violet-400 font-medium font-["0xProtoNerdFont"] md:text-6xl'>Mike Terekhov</h2>
              <h3 className='text-2xl py-2 md:text-3xl text-white font-["0xProtoNerdFont"]'>MS CS @ University of Southern California</h3>
              <p className='text-md py-5 leading-8 text-white md:text-xl font-["0xProtoNerdFont"]'>
                Boston University - B.S. Mechanical Engineering with a Concentration in Machine Learning
              </p>
              <p className='text-md py-5 leading-8 text-white md:text-xl font-["0xProtoNerdFont"]'>
              University of Southern California - M.S. Computer Science
              </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <a href="https://www.linkedin.com/in/miketerekhov/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin style={{ color: iconColor }} />
              </a>
              <a href="https://github.com/MikeTerekhov" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{ color: iconColor }} />
              </a>
              <a href="https://www.strava.com/athletes/27456281" target="_blank" rel="noopener noreferrer">
                <FaStrava style={{ color: iconColor }} />
              </a>
            </div>
        
          <div>
            <h3 className = "text-3xl py-1 text-white font-['0xProtoNerdFont']">Current Research Projects</h3>
          </div>
          <div className='py-10'>
            <div className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className='flex-1 text-center shadow-lg p-10 rounded-xl bg-white'>
                <Image 
                  src={research1} 
                  width={200} 
                  height={200} 
                  className='mx-auto mb-6'
                  alt="Research Project 1"
                  priority
                />
                <h3 className='text-2xl font-medium pt-4 pb-2 font-["0xProtoNerdFont"]'>HIV Research AI Regimen Project</h3>
                <p className='text-gray-600 text-gray-800 font-["0xProtoNerdFont"]'>
                I am developing an AI-powered clinical decision tool using Retrieval-Augmented Generation (RAG) to optimize Antiretroviral Therapy recommendations for HIV patients globally. My project features a round-table style AI framework where multiple AI agents simulate perspectives of virologists, clinicians, and pharmacists to collaboratively refine treatments. I am implementing agentic workflows with Agents, Planning, and Reasoning Chains to analyze drug-mutation interactions and generate personalized treatment recommendations.
                </p>
              </div>
              <div className='flex-1 text-center shadow-lg p-10 rounded-xl bg-white'>
                <Image 
                  src={research2} 
                  width={200} 
                  height={200} 
                  className='mx-auto mb-6'
                  alt="Research Project 2"
                  priority
                />
                <h3 className='text-2xl font-medium pt-4 pb-2 font-["0xProtoNerdFont"]'>Vision Transformer Research</h3>
                <p className='text-gray-600 text-gray-800 font-["0xProtoNerdFont"]'>
                I am exploring methods to detect voids in Composite Oriented Strand Boards using machine learning, aiming for up to 95% accuracy. I formulated and implemented a Vision Transformer architecture with an encoder and 8 attention heads to explore advanced image representation techniques. My approach includes a preprocessing pipeline that segments 128×128 images into 16×16 patches for the Vision Transformer, enabling efficient processing of micro-CT scan data for void detection.
                </p>
              </div>
            </div>
          </div>

          <div>           
            <h3 className = "text-3xl py-1 text-white font-['0xProtoNerdFont']">Previous Research Projects</h3>
          </div>
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className='flex-1 text-center shadow-lg p-10 rounded-xl bg-white'>
                <Image 
                  src={robot} 
                  width={200} 
                  height={200} 
                  className='mx-auto mb-6'
                  alt="Research Project 1"
                  priority
                />
                <h3 className='text-2xl font-medium pt-4 pb-2 font-["0xProtoNerdFont"]'>AI vs Human Text Classifier</h3>
                <p className='text-gray-600 text-gray-800 font-["0xProtoNerdFont"]'>
                In this project, my team and I set out to explore whether machine learning models could effectively distinguish between human-written and AI-generated high school essays. We gathered a diverse dataset that included original human essays, AI-generated essays using models like GPT-4, GPT-2, Mistral, and Gemma, as well as both AI- and human-paraphrased texts. We applied classical text analysis methods such as Bag of Words, TF-IDF, and SVMs, alongside a neural network using GloVe embeddings. While traditional methods performed well on standard AI text, we found that they struggled with identifying AI-paraphrased versions of human essays. However, our GloVe-based model showed strong performance even in these more nuanced cases. Through this work, we demonstrated both the potential and the challenges in detecting AI-generated content, particularly as language models become more adept at mimicking human writing.
                </p>
              <a
                className='inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-violet-400 text-white rounded-md ml-8 font-["0xProtoNerdFont"]'
                href="https://drive.google.com/file/d/14LZD5HWmaSDkxoTXJlk9Q7aZp51L5ofT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >View Paper</a>
              </div>
            </div>
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className='flex-1 text-center shadow-lg p-10 rounded-xl bg-white'>
                <Image 
                  src={db} 
                  width={200} 
                  height={200} 
                  className='mx-auto mb-6'
                  alt="Research Project 1"
                  priority
                />
                <h3 className='text-2xl font-medium pt-4 pb-2 font-["0xProtoNerdFont"]'>LLM Text to SQL Model</h3>
                <p className='text-gray-600 text-gray-800 font-["0xProtoNerdFont"]'>
                For this project, we developed a text-to-SQL system by fine-tuning the DeepSeek-Coder 1.3B model using Low-Rank Adaptation (LoRA) on a curated dataset of 1000+ natural language and SQL query pairs from an NBA database. We integrated a Retrieval-Augmented Generation (RAG) module to dynamically improve prompts based on schema similarity, which helped optimize model performance. Through fine-tuning and data augmentation strategies, we increased SQL validity by 22% and result correctness by 23% over the baseline. I also built a custom evaluation framework to track SQL validity, result accuracy, and query matching across experiments.
                </p>
              <a
                className='inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-violet-400 text-white rounded-md ml-8 font-["0xProtoNerdFont"]'
                href="https://drive.google.com/file/d/1WPwQyYXss8MZE6a_H0Cv_1-NQ6HgR1wJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >View Paper</a>
              </div>
            </div>
      </main>
    </div>
    </>
  )
}
