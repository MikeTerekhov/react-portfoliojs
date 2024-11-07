"use client"; // This is a client component 👈🏽

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
import nn_test from "../public/nn_test.png";
import overfit from "../public/overfit.png";
import dataset from "../public/dataset.png";
import graph from "../public/graph.png";
import Qres from "../public/Qresult.png";
import Qtracks from "../public/Qtracks.png";
import linresults from "../public/linresult.png";
import lintracks from "../public/lintracks.png";
import doubleQalg from "../public/doubleQalg.png";
import eqns from "../public/eqns.png";
import {useEffect } from 'react';

function Pytux() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for dark mode preference when component mounts
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

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
          <div>           
            <h3 style={{ textAlign: 'center' }} className = "text-7xl py-1 dark:text-white font-burtons">Self-Driving Kart</h3>
          </div>
          <div className='gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image src={kart2} width={400} height={400} className='mx-auto'/>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> Objective & Background:</h3>
                <p className='font-droidMono text-xl'>
                Using the Pytux Kart package in Python the goal of the group was to explore different methods of training the kart to complete a set of tracks provided. Part of the group experimented with a tradition convolutional neural network with varying network architectures, while the second half of the team experimented with reinforcement learning teachniques, such as Q-learning, to train the kart to effectively navigate the tracks. I was responsible for the reinforcement learning approaches.
                </p>
                <div style={{ padding: '20px' }}>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> CNN parameter & architecture tuning:</h3>
                <Image src={nn_test} width={1500} height={1500} className='mx-auto'/>
                </div>
                <div style={{ padding: '20px' }}>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> Altering dataset size and training epochs for CNN:</h3>
                <Image src={overfit} width={1500} height={1500} className='mx-auto'/>

                <ul style={{ margin: 10, padding: 10, listStyle: 'none' }}>
                <li style={{ display: 'flex', justifyContent: 'center' }}>
                <a
                className='bg-gradient-to-r from-cyan-500 to-violet-400 text-white px-4 py-2 rounded-md ml-8'
                href = "https://drive.google.com/file/d/1Yd7r4jR27ioRO0kLbZk7G-SW1CmxW_zd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                > Video of Overfitting
                </a>
                </li>
                </ul>

                <p className='font-droidMono text-left text-xl'>
                - Here it is shown how our CNN is overfitting and thinks that the road is to the right of the screen below the bridge, but actually the road continues straight ahead
                </p>
                </div>
                <div style={{ padding: '20px' }}>
                <Image src={dataset} width={1500} height={1500} className='mx-auto'/>
                <p className='font-droidMono text-left text-xl'>
                - Shows the difference between two identical network configurations and training times, but with one set having twice the amount of training images than the other
                </p>
                </div>
                <div style={{ padding: '20px' }}>
                <Image src={graph} width={1500} height={1500} className='mx-auto'/>
                <p className='font-droidMono text-left text-xl'>
                - Our general conclusion was to not overtrain the model to make the training and testing error as low as possible while also avoiding overfitting in our model
                </p>
                </div>
                <div style={{ padding: '20px' }}>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-burtons text-left'> Reinforcement Learning:</h3>
                <p className='font-droidMono text-xl'>
                Utilized a RL controller created by a team in prior years. Our main changes included tuning of the epsilon parameter and observing the exploration vs exploitation dilemma, changing the rewards for for different actions, and implementing linear approximation.
                </p>
                </div>
                <h1 className='font-droidMono text-3xl'>
                Q-Learning - Tuning Epsilon
                </h1>
                <p className='font-droidMono text-left text-xl'>
                - To start we set epsilon to be very high at 0.99, so that there is a 99% chance that the controller will take a random action in the first iteration of Q-Learning to highly encourage it to explore the tracks
                </p>
                <p className='font-droidMono text-left text-xl'>
                - From there, with ϵ(0) = 0.99 update ϵ(n)=(0.99)^(n+1) 
                </p>
                <p className='font-droidMono text-left text-xl'>
                - This way the probability of with which the controller takes a random action instead of leveraging the maximum Q value, decays exponentially
                </p>
                <p className='font-droidMono text-left text-xl'>
                - For testing purposes, we allow it to decay linearly simply subtracting 0.01 every iteration, for 100 iterations
                </p>
                <h1 className='font-droidMono text-3xl' style={{ padding: '20px' }}>
                Changing How Actions are Rewarded
                </h1>
                <p className='font-droidMono text-left text-xl'>
                - The given system gave a reward of +500 if the current aimpoint was more centered than the previous one and -200 otherwise, as well as a small +15 reward for keeping a velocity above 13
                </p>
                <p className='font-droidMono text-left text-xl'>
                - We did not see how this was beneficial given it does not reward decision making
                </p>
                <p className='font-droidMono text-left text-xl'>
                - Instead we give reward -1 for every frame the track is not completed, and +1e6 when a track is completed
                </p>
                <h1 className='font-droidMono text-3xl' style={{ padding: '20px' }}>
                Q-Learning with Linear Approximation
                </h1>
                <p className='font-droidMono text-left text-xl'>
                - We also implemented a version of the Q-Learning Controller that uses a feature vector to linearly approximate Q-values as weights for each respective feature
                </p>
                <p className='font-droidMono text-left text-xl'>
                - The Features we consider: how much the aimpoint changed, being rescued, difference between two aimpoints, on straight-away, on turn, speed, steering Angle of aimpoint 1, steering Angle of aimpoint 2
                </p>
                <h1 className='font-droidMono text-3xl' style={{ padding: '20px' }}>
                Double Q-Learning
                </h1>
                <p className='font-droidMono text-left text-xl' style={{ padding: '20px' }}>
                The goal of double Q-learning is to combat the overestimation problem with single Q-learning. The primary issue that results from the Q-learning algorithm is overestimation. This occurs because we use incremental averages to estimate the values of expectations and there is a discrepancy between these two values that leads to overestimation. The issue arises from the fact that Q-learning uses maximum Q values. Expectation of the max running average will tend to always be higher than the maximum expectation of the actual variable, which is what we are trying to model. 
                </p>
                <p className='font-droidMono text-left text-xl' style={{ padding: '20px' }}>
                The solution to this problem of overestimation is the double Q-learning algorithm. This algorithm combats over-estimation by initializing two Q-value functions that update each other. This mathematically checks out because Van Hasselt proved that the expectation of the second Q-value function is less than or equal to the maximum of the first Q-values. Hence when the first Q-values are updated, they are no longer updated with the maximum value since the second Q-values are used to update it. This leads the algorithm to reach good performance much quicker than traditional Q-learning.
                </p>
                <div style={{ padding: '20px' }}>
                <Image src={doubleQalg} width={1500} height={1500} className='mx-auto'/>
                </div>
                <p className='font-droidMono text-left text-xl' style={{ padding: '20px' }}>
                For implementing the double Q-learning algorithm, we started with the provided RL controller from previous years. The first step was creating a second Q-value table that would store the second set of values. Then the next step was changing the function that was called to update Q-values. The function was changed to randomly return either a value from the first or second Q-value table. The probability for returning each was equal at ½. The update equations also had to be altered so that each value was updated using the values from the differing Q-table :
                </p>
                <div>
                <Image src={eqns} width={750} height={750} className='mx-auto'/>
                </div>
                <p className='font-droidMono text-left text-xl' style={{ padding: '20px' }}>
                This ensures that we use different Q-values to combat the overestimation described earlier.  Next the getQValue function was changed to return a tuple that contained a Q-value from the first (A-table) and second (B-table) set. Next, for both computeValuefromQValues and the computeActionfromQValues functions, each value and action was calculated for both the A table value as well as the B table value. The A and B values were put into a tuple and then a random one was returned from the function. Another numpy file also had to be created to store the B Q-values.
                </p>
                <p className='font-droidMono text-left text-xl' style={{ padding: '20px' }}>
                We expected to see faster times across all track times as a result of the double Q-learning algorithm, but our results ended up being slower. Data from double Q-learning runs is not worth displaying here because it did not lead to any improvements in speed, and most of the tracks ended up maxing out over the time period. Despite not producing any meaningful results, from research it is evident that the double Q-learning algorithm can bring about drastic improvements if implemented correctly. At this point, it is unclear where our error lies within the implementation of the algorithm. 
                </p>
                <div style={{ padding: '20px' }}>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> Q-learning results:</h3>
                <div style={{ padding: '20px' }}>
                <Image src={Qres} width={1500} height={1500} className='mx-auto'/>
                </div>
                <div style={{ padding: '20px' }}>
                <Image src={Qtracks} width={1500} height={1500} className='mx-auto'/>
                </div>
                </div>
                <div style={{ padding: '20px' }}>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> Linear Approximation Q-learning results:</h3>
                <div style={{ padding: '20px' }}>
                <Image src={linresults} width={1500} height={1500} className='mx-auto'/>
                </div>
                <div style={{ padding: '20px' }}>
                <Image src={lintracks} width={1500} height={1500} className='mx-auto'/>
                </div>
                </div>

            </div>
          </div>
          <div className='py-4 h-20'></div>
      </div>
    </div>
    </>
  )
}

export default Pytux;

