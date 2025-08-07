"use client";

import Navbar from '../Navbar';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaRunning, 
  FaBrain, 
  FaChartLine, 
  FaUserFriends, 
  FaTrophy, 
  FaHeartbeat,
  FaCalendarAlt,
  FaGraduationCap,
  FaCode,
  FaDumbbell,
  FaRoute,
  FaClock,
  FaEnvelope,
  FaUser,
  FaLightbulb,
  FaFlag,
  FaMedal
} from 'react-icons/fa';

export default function ResilientAIDashboard() {
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

  const handleBookSession = () => {
    window.location.href = 'mailto:terekhovhd@gmail.com?subject=Resilient Running - Coaching Session&body=Hi! I\'m interested in booking a running coaching session. Please let me know about your availability and rates.';
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className={darkMode ? "dark" : ""}>
          <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 min-h-screen flex items-center justify-center'>
            <div className="text-4xl font-['0xProtoNerdFont'] dark:text-white">Loading Resilient Running...</div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={darkMode ? "dark" : ""}>
        <main className='bg-white px-6 md:px-10 lg:px-20 dark:bg-gray-900 min-h-screen'>
          {/* Hero Section */}
          <div className='py-8'>
            <div className='text-center mb-8'>
              <h1 className='text-5xl font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-4'>
                Resilient Running
              </h1>
              <p className='text-xl text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] max-w-3xl mx-auto'>
                Where Human Expertise Meets AI Innovation. Personalized running coaching powered by advanced analytics and your unique journey.
              </p>
              <div className='flex justify-center items-center mt-6 space-x-4'>
                <div className='flex items-center bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full'>
                  <FaRunning className='text-green-600 dark:text-green-400 mr-2' />
                  <span className='font-["0xProtoNerdFont"] text-green-700 dark:text-green-300'>Runner</span>
                </div>
                <div className='flex items-center bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full'>
                  <FaGraduationCap className='text-blue-600 dark:text-blue-400 mr-2' />
                  <span className='font-["0xProtoNerdFont"] text-blue-700 dark:text-blue-300'>Masters in CS</span>
                </div>
                <div className='flex items-center bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full'>
                  <FaBrain className='text-purple-600 dark:text-purple-400 mr-2' />
                  <span className='font-["0xProtoNerdFont"] text-purple-700 dark:text-purple-300'>AI-Powered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
            <div className='bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-green-100 font-["0xProtoNerdFont"]'>Active Runners</p>
                  <p className='text-3xl font-bold font-["0xProtoNerdFont"]'></p>
                </div>
                <FaUserFriends className='text-4xl' />
              </div>
            </div>

            <div className='bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-blue-100 font-["0xProtoNerdFont"]'>Personal Bests</p>
                  <p className='text-3xl font-bold font-["0xProtoNerdFont"]'></p>
                </div>
                <FaTrophy className='text-4xl' />
              </div>
            </div>

            <div className='bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-purple-100 font-["0xProtoNerdFont"]'>AI Predictions</p>
                  <p className='text-3xl font-bold font-["0xProtoNerdFont"]'></p>
                </div>
                <FaBrain className='text-4xl' />
              </div>
            </div>

            <div className='bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl text-white'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-orange-100 font-["0xProtoNerdFont"]'>Improvement</p>
                  <p className='text-3xl font-bold font-["0xProtoNerdFont"]'></p>
                </div>
                <FaChartLine className='text-4xl' />
              </div>
            </div>
          </div>

          {/* Biography and Philosophy Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
            {/* Biography */}
            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
              <div className='flex items-center mb-4'>
                <FaUser className='text-2xl text-blue-600 dark:text-blue-400 mr-3' />
                <h3 className='text-2xl font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"]'>
                  My Story
                </h3>
              </div>
              <div className='space-y-4 text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"]'>
                <p>
                  As a competitive runner with years of experience pushing my own limits, I understand the mental and physical challenges that come with training. My journey from struggling to complete my first mile to achieving personal bests has taught me that every runner's path is unique.
                </p>
                <p>
                  With a Masters in Computer Science, I've developed a unique approach that combines traditional running wisdom with cutting-edge AI analytics. This allows me to provide personalized training plans that adapt to your progress, lifestyle, and goals.
                </p>
                <p>
                  I believe that the best coaching comes from someone who has both lived the experience and can leverage technology to optimize your training. My dual expertise in running and AI gives me a unique perspective that no traditional coach can offer.
                </p>
                <div className='mt-4'>
                  <a 
                    href="https://www.strava.com/athletes/27456281" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-["0xProtoNerdFont"] transition-colors'
                  >
                    <FaRunning className='mr-2' />
                    Follow my running journey on Strava
                  </a>
                </div>
              </div>
            </div>

            {/* Training Philosophy */}
            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
              <div className='flex items-center mb-4'>
                <FaLightbulb className='text-2xl text-yellow-600 dark:text-yellow-400 mr-3' />
                <h3 className='text-2xl font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"]'>
                  Training Philosophy
                </h3>
              </div>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <div className='w-3 h-3 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-1'>Individualized Approach</h4>
                    <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-sm'>
                      Every runner is different. I create custom plans based on your current fitness, goals, and lifestyle constraints.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-1'>Data-Driven Decisions</h4>
                    <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-sm'>
                      AI analytics help identify patterns and optimize your training, but human intuition guides the final decisions.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-1'>Sustainable Progress</h4>
                    <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-sm'>
                      Focus on long-term development over short-term gains. Injury prevention and recovery are as important as training.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='w-3 h-3 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-1'>Mental Strength</h4>
                    <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-sm'>
                      Running is as much mental as physical. I help you develop the mindset needed to push through challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Running Journey Node Graph */}
          <div className='mt-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl'>
            <h3 className='text-3xl font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-6 text-center'>
              My Running Journey
            </h3>
            <div className='relative'>
              {/* Connection Lines */}
              <div className='absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-green-400 transform -translate-y-1/2 z-0'></div>
              
              {/* Journey Nodes */}
              <div className='relative z-10 grid grid-cols-1 md:grid-cols-6 gap-4 items-center'>
                {/* Junior Year XC */}
                <div className='flex flex-col items-center'>
                  <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3 shadow-lg'>
                    <FaRunning className='text-white text-xl' />
                  </div>
                  <div className='text-center'>
                    <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] text-sm'>Junior Year</h4>
                    <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-xs'>Started XC</p>
                    <p className='text-blue-600 dark:text-blue-400 font-["0xProtoNerdFont"] text-xs font-bold'>5K: 27:00</p>
                  </div>
                </div>

                {/* Senior Year */}
                <div className='flex flex-col items-center'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-3 shadow-lg'>
                    <FaRunning className='text-white text-xl' />
                  </div>
                  <div className='text-center'>
                    <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] text-sm'>Senior Year</h4>
                    <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-xs'>XC Progress</p>
                    <p className='text-blue-600 dark:text-blue-400 font-["0xProtoNerdFont"] text-xs font-bold'>5K: 18:27</p>
                  </div>
                </div>

                {/* First Marathon */}
                <div className='flex flex-col items-center'>
                  <div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3 shadow-lg'>
                    <FaFlag className='text-white text-xl' />
                  </div>
                  <div className='text-center'>
                    <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] text-sm'>2022</h4>
                    <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-xs'>Chicago Marathon</p>
                    <p className='text-green-600 dark:text-green-400 font-["0xProtoNerdFont"] text-xs font-bold'>2:53:00</p>
                  </div>
                </div>

                {/* 2023 Chicago */}
                <div className='flex flex-col items-center'>
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-3 shadow-lg'>
                    <FaFlag className='text-white text-xl' />
                  </div>
                  <div className='text-center'>
                    <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] text-sm'>2023</h4>
                    <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-xs'>Chicago Marathon</p>
                    <p className='text-green-600 dark:text-green-400 font-["0xProtoNerdFont"] text-xs font-bold'>2:41:00</p>
                  </div>
                </div>

                {/* 2023 Boston */}
                <div className='flex flex-col items-center'>
                  <div className='w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-3 shadow-lg'>
                    <FaMedal className='text-white text-xl' />
                  </div>
                  <div className='text-center'>
                    <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] text-sm'>2023</h4>
                    <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-xs'>Boston Marathon</p>
                    <p className='text-purple-600 dark:text-purple-400 font-["0xProtoNerdFont"] text-xs font-bold'>2:31:00</p>
                  </div>
                </div>

                {/* 2024 Berlin */}
                <div className='flex flex-col items-center'>
                  <div className='w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-3 shadow-lg'>
                    <FaTrophy className='text-white text-xl' />
                  </div>
                  <div className='text-center'>
                    <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] text-sm'>2024</h4>
                    <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-xs'>Berlin Marathon</p>
                    <p className='text-orange-600 dark:text-orange-400 font-["0xProtoNerdFont"] text-xs font-bold'>2:28:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Training Progress Chart */}
            <div className='lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-4'>
                Training Progress Analytics
              </h3>
              <div className='h-64 bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center'>
                <div className='text-center'>
                  <FaChartLine className='text-6xl text-green-500 mx-auto mb-4' />
                  <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"]'>
                    AI-powered training insights
                  </p>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
                    Personalized analytics dashboard coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Coaching Services */}
            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-4'>
                Coaching Services
              </h3>
              <div className='space-y-4'>
                <div className='flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                  <div className='flex items-center'>
                    <FaRoute className='text-green-500 mr-3' />
                    <span className='font-["0xProtoNerdFont"] text-gray-800 dark:text-white'>Race Training</span>
                  </div>
                  <span className='text-green-600 dark:text-green-400 font-["0xProtoNerdFont"]'>Active</span>
                </div>
                <div className='flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
                  <div className='flex items-center'>
                    <FaDumbbell className='text-blue-500 mr-3' />
                    <span className='font-["0xProtoNerdFont"] text-gray-800 dark:text-white'>Strength Plans</span>
                  </div>
                  <span className='text-blue-600 dark:text-blue-400 font-["0xProtoNerdFont"]'>Available</span>
                </div>
                <div className='flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
                  <div className='flex items-center'>
                    <FaHeartbeat className='text-purple-500 mr-3' />
                    <span className='font-["0xProtoNerdFont"] text-gray-800 dark:text-white'>Recovery Plans</span>
                  </div>
                  <span className='text-purple-600 dark:text-purple-400 font-["0xProtoNerdFont"]'>Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className='mt-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl'>
            <h3 className='text-3xl font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-6 text-center'>
              Why Choose Resilient Running?
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <FaRunning className='text-2xl text-green-600 dark:text-green-400' />
                </div>
                <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-2'>Running Expertise</h4>
                <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-sm'>
                  Years of competitive running experience with deep understanding of training principles
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <FaCode className='text-2xl text-blue-600 dark:text-blue-400' />
                </div>
                <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-2'>AI Innovation</h4>
                <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-sm'>
                  Masters in Computer Science enables cutting-edge AI-powered training analytics
                </p>
              </div>
              <div className='text-center'>
                <div className='bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <FaUserFriends className='text-2xl text-purple-600 dark:text-purple-400' />
                </div>
                <h4 className='font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-2'>Personalized Coaching</h4>
                <p className='text-gray-600 dark:text-gray-300 font-["0xProtoNerdFont"] text-sm'>
                  Human expertise combined with AI insights for truly personalized training plans
                </p>
              </div>
            </div>
          </div>

          {/* Upcoming Races & Goals */}
          <div className='mt-8 bg-gradient-to-r from-purple-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl'>
            <h3 className='text-3xl font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-6 text-center'>
              Upcoming Races & Goals
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* 2025 Chicago Marathon */}
              <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
                <div className='flex items-center mb-4'>
                  <FaFlag className='text-2xl text-blue-600 dark:text-blue-400 mr-3' />
                  <h4 className='text-xl font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"]'>
                    2025 Chicago Marathon
                  </h4>
                </div>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
                    <span className='font-["0xProtoNerdFont"] text-gray-800 dark:text-white'>Target Time</span>
                    <span className='font-bold text-blue-600 dark:text-blue-400 font-["0xProtoNerdFont"]'>Sub 2:20</span>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                    <span className='font-["0xProtoNerdFont"] text-gray-800 dark:text-white'>Current PR</span>
                    <span className='font-bold text-green-600 dark:text-green-400 font-["0xProtoNerdFont"]'>2:28:00</span>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
                    <span className='font-["0xProtoNerdFont"] text-gray-800 dark:text-white'>Improvement Needed</span>
                    <span className='font-bold text-purple-600 dark:text-purple-400 font-["0xProtoNerdFont"]'>8:00</span>
                  </div>
                </div>
              </div>

              {/* 2025 New York Marathon */}
              <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
                <div className='flex items-center mb-4'>
                  <FaTrophy className='text-2xl text-orange-600 dark:text-orange-400 mr-3' />
                  <h4 className='text-xl font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"]'>
                    2025 New York Marathon
                  </h4>
                </div>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg'>
                    <span className='font-["0xProtoNerdFont"] text-gray-800 dark:text-white'>Target Time</span>
                    <span className='font-bold text-orange-600 dark:text-orange-400 font-["0xProtoNerdFont"]'>Sub 2:20</span>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                    <span className='font-["0xProtoNerdFont"] text-gray-800 dark:text-white'>Current PR</span>
                    <span className='font-bold text-green-600 dark:text-green-400 font-["0xProtoNerdFont"]'>2:28:00</span>
                  </div>
                  <div className='flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
                    <span className='font-["0xProtoNerdFont"] text-gray-800 dark:text-white'>Goal</span>
                    <span className='font-bold text-purple-600 dark:text-purple-400 font-["0xProtoNerdFont"]'>Break 2:20</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ultimate Goal */}
            <div className='mt-6 bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl text-white text-center'>
              <h4 className='text-2xl font-bold font-["0xProtoNerdFont"] mb-2'>
                🎯 Ultimate Goal: Break 2:20 Marathon
              </h4>
              <p className='font-["0xProtoNerdFont"] text-red-100'>
                Pushing the boundaries of what's possible through dedicated training and AI-optimized preparation
              </p>
            </div>
          </div>

          {/* Get Started Section */}
          <div className='mt-8 flex justify-center'>
            <div className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full'>
              <h3 className='text-2xl font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-6 text-center'>
                Ready to Start Your Journey?
              </h3>
              <div className='flex justify-center'>
                <button 
                  onClick={handleBookSession}
                  className='p-8 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-["0xProtoNerdFont"] hover:from-green-600 hover:to-green-700 transition-all flex flex-col items-center text-xl shadow-lg hover:shadow-xl'
                >
                  <FaEnvelope className='text-4xl mb-4' />
                  Book Session
                </button>
              </div>
            </div>
          </div>
          <div>
          <h3 className='text-l font-bold text-gray-800 dark:text-white font-["0xProtoNerdFont"] mb-6 text-left'>
          ©
              </h3>
          </div>
        </main>
      </div>
    </>
  );
} 