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
import mongo from "../public/mongo.png";

import home_screen from "../public/home_screen.png";
import mongo_website from "../public/mongo_website.png";
import nlp_screen from "../public/nlp_screen.png";
import sentiment from "../public/sentiment.png";
import document_list_page from "../public/document_list_page.png";
import doc_screen from "../public/doc_screen.png";

function DocRead() {
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
          <div>           
            <h3 style={{ textAlign: 'center' }} className = "text-7xl py-1 dark:text-white font-burtons">PDF Analyzer</h3>
          </div>
          <div className='gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                <Image src={paper} width={400} height={400} className='mx-auto'/>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-burtons text-left'> Objective & Background:</h3>
                <p className='font-burtons text-xl'>
                Full-stack application that allows user to upload PDFs and have them digitally analyzed. Used Python Flask for API implementation. Used MongoDB for backend storage of documents and their respective information.
                </p>
                <h3 className='text-4xl font-medium pt-8 pb-2 font-burtons text-left'> APIs:</h3>
                <p className='font-burtons text-xl'>
                Built seperate APIs to upload a PDF File, obtain sentiment of file, incorporate file-scraping features, and utilized OpenAI ChatGPT API.
                </p>
                <div style={{ padding: '20px' }}>
                    <p className='font-burtons text-left text-2xl'>
                    Upload: 
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - upload a PDF and checks the correct input file type using Pytest unit tests
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - saving to Mongo DB happens in here as well
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - uses allowed_file fucntion to check file format
                    </p>
                </div>

                <div style={{ padding: '20px' }}>
                    <p className='font-burtons text-left text-2xl'>
                    Extract Text: 
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - scrapes the PDF and extracts all containing text and returns it
                    </p>
                </div>

                <div style={{ padding: '20px' }}>
                    <p className='font-burtons text-left text-2xl'>
                    Get Summary: 
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - utilizes OpenAI API to prompt the model to summarize the text of the respective document
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - CREDIT CARD must be added to OpenAI account to make it functional - OpenAI bug
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - cuts down summary to three sentances - easily changed 
                    </p>
                </div>

                <div style={{ padding: '20px' }}>
                    <p className='font-burtons text-left text-2xl'>
                    Get Sentiment: 
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - Uses TextBlob Python library to optain sentiment from text
                    </p>
                </div>

                <div style={{ padding: '20px' }}>
                    <p className='font-burtons text-left text-2xl'>
                    Document List: 
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - displays all uploaded documents
                    </p>
                </div>

                <div style={{ padding: '20px' }}>
                    <p className='font-burtons text-left text-2xl'>
                    Document View:
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - renders page that shows link to NLP and the text that was extracted
                    </p>
                </div>

                <div style={{ padding: '20px' }}>
                    <p className='font-burtons text-left text-2xl'>
                    NLP:
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - renders page that will show sentiment analysis, GPT summary, and also creates a feature where you can search how many times a certain word appears in the respective text
                    </p>
                </div>

                <div style={{ padding: '20px' }}>
                    <p className='font-burtons text-left text-2xl'>
                    Sentiment Def:
                    </p>
                    <p className='font-burtons text-left text-xl'>
                    - renders a page that shows the TextBlob website defentition for the sentiment value given that gives user insight on what the meaning of the analysis is
                    </p>
                </div>

                <h3 className='text-4xl font-medium pt-8 pb-2 font-burtons text-left'> Mongo DB: </h3>
                <p className='font-burtons text-left text-xl'>
                    - Allows for more flexibility with sentiment analysis section by potentially allowing user to select different portions of text that they want to analyze
                </p>
                <p className='font-burtons text-left text-xl'>
                    - Due to the fact that the main entity of our project is a document, it would be very difficult to store this information in a structured table based format such as SQL
                </p>
                <p className='font-burtons text-left text-xl'>
                    - Wanted a highly flexible format that could easily be changed becuase new analysis tools are constantly being developed and added that we want to store in a database
                </p>

                <div style={{ padding: '20px' }}>
                <Image src={mongo} width={1500} height={1500} className='mx-auto'/>
                </div>

                <div style={{ padding: '20px' }}>
                <Image src={home_screen} width={1500} height={1500} className='mx-auto'/>
                </div>

                <div style={{ padding: '20px' }}>
                <Image src={document_list_page} width={1500} height={1500} className='mx-auto'/>
                </div>

                <div style={{ padding: '20px' }}>
                <Image src={doc_screen} width={1500} height={1500} className='mx-auto'/>
                </div>

                <div style={{ padding: '20px' }}>
                <Image src={nlp_screen} width={1500} height={1500} className='mx-auto'/>
                </div>

                <div style={{ padding: '20px' }}>
                <Image src={sentiment} width={1500} height={1500} className='mx-auto'/>
                </div>

                <div style={{ padding: '20px' }}>
                <Image src={mongo_website} width={1500} height={1500} className='mx-auto'/>
                </div>

            </div>
          </div>
          <div className='py-4 h-20'></div>
      </div>
    </div>
    </>
  )
}

export default DocRead;
