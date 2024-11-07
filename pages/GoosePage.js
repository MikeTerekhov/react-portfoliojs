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
import cnn1 from "../public/cnn1.png";
import cnn2 from "../public/cnn2.png";
import cnn3 from "../public/cnn3.png";
import cnn_test from "../public/cnn_test.png";
import data from "../public/data.png"

import cnn_results from "../public/cnn_results.png";
import yolo_models from "../public/yolo_models.png";
import yolo_example from "../public/yolo_example.png";
import pic_example from "../public/pic_example.png";
import differences from "../public/differences.png"
import toy_example from "../public/toy_example.png";
import drone from "../public/drone.png";
import {useEffect } from 'react';

function GoosePage() {
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
            <h3 style={{ textAlign: 'center' }} className = "text-7xl py-1 dark:text-white font-droidMono">Goose Chaser</h3>
          </div>
          <div className='gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image src={goose} width={400} height={400} className='mx-auto'/>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> Objective & Background:</h3>
                <p className='font-droidMono text-xl'>
                Worked on a group for our senior capstone project creating a goose repelling drone that is able to perform autonomous flight and recognize geese using image recognition software. Our group split of four split up into a physical drone building team and a software/image recognition team. I led the image recognition team to creating a fully functioning software model that was able to identify multiple geese in an image and draw a bounding box around the indentified geese.
                </p>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> Initial Software Design - Simple CNN:</h3>
                <p className='font-droidMono text-xl'>
                - Initial approach was to use a convolutional neural network that returns a boolean value of whether the image contains a goose or not
                </p>

                <div style={{ padding: '20px' }}>
                <Image src={data} width={1500} height={1500} className='mx-auto'/>
                <p className='font-droidMono text-xl text-left'>
                - Image above shows a sample of our data set that we collected using google images of geese as well as real images that took around Boston
                </p>
                </div>
                <div style={{ padding: '20px' }}>
                <Image src={cnn1} width={1500} height={1500} className='mx-auto'/>
                </div>

                <div className='lg:flex gap-10'>
                  <div style={{ padding: '20px' }}>
                  <Image src={cnn2} width={750} height={750} className='mx-auto'/>
                  </div>
                  <div style={{ padding: '20px' }}>
                  <Image src={cnn3} width={750} height={750} className='mx-auto'/>
                  </div>
                </div>

                <div style={{ padding: '20px' }}>
                <Image src={cnn_test} width={1500} height={1500} className='mx-auto'/>
                </div>

                <h3 className='text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> Final Software Design - YOLOv5 Model:</h3>
                <p className='font-droidMono text-xl text-left'>
                - Realized we needed the location of the goose and a method of detecting multiple geese in a single image
                </p>
                <p className='font-droidMono text-xl text-left'>
                - Decided to utilize YOLOv5 image recognition software with our own trained class of goose
                </p>

                <div style={{ padding: '20px' }}>
                <Image src={yolo_models} width={1500} height={1500} className='mx-auto'/>
                <p className='font-droidMono text-xl text-left'>
                - Used the YOLOv5s model which is the second smallest model
                </p>
                <p className='font-droidMono text-xl text-left'>
                - Due to the fact that we are training locally on a macbook, we decided to use the smallest model so that we can train as many models as fast as possible so that we can experiment with varying training teachniques
                </p>
                </div>

                <div style={{ padding: '20px' }}>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> Training Process:</h3>
                <p className='font-droidMono text-xl text-left'>
                - Selected 20 images from our dataset that included geese from all angles, and also included varying amounts of geese in each image
                </p>
                <p className='font-droidMono text-xl text-left'>
                - Used a prebuilt image labeling software called LabelImg to go through our dataset and draw bounding boxes around each instance of a goose in each image
                </p>
                <p className='font-droidMono text-xl text-left'>
                - Export all images and their labels in YOLO format to the model and train it for varying number of epochs
                </p>
                <p className='font-droidMono text-xl text-left'>
                - Tested our model on training images, new images that were not a part of our dataset, live camera footage from our laptop camera
                </p>
                </div>

                <div className='lg:flex gap-10'>
                  <div style={{ padding: '20px' }}>
                  <Image src={yolo_example} width={750} height={750} className='mx-auto'/>
                  </div>
                  <div style={{ padding: '20px' }}>
                  <Image src={pic_example} width={750} height={750} className='mx-auto'/>
                  </div>
                  <div style={{ padding: '20px' }}>
                  <Image src={toy_example} width={750} height={750} className='mx-auto'/>
                  </div>
                </div>

                <div style={{ padding: '20px' }}>
                <Image src={differences} width={1500} height={1500} className='mx-auto'/>
                <p className='font-droidMono text-xl text-left'>
                - Image above shows the differences we encountered when experimenting with varying training techniques
                </p>
                </div>

                <div style={{ padding: '20px' }}>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> Model Results with 20 training images trained for 250 epochs:</h3>
                <Image src={cnn_results} width={1500} height={1500} className='mx-auto'/>
                <p className='font-droidMono text-xl text-left'>
                - Reached the conclusion that there is not much benefit to training our model for more than around 100 epochs
                </p>
                <p className='font-droidMono text-xl text-left'>
                - Increasing the dataset size for training is the most optimal way of improving the accuracy of the model
                </p>
                </div>

                <div style={{ padding: '20px' }}>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-droidMono text-left'> Our Final Drone:</h3>
                <Image src={drone} width={1500} height={1500} className='mx-auto'/>
                </div>

            </div>
          </div>
          <div className='py-4 h-20'></div>
      </div>
    </div>
    </>
  )
}

export default GoosePage;