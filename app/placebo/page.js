'use client';

import Navbar from '../Navbar';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import brain from "@/public/brain.jpg";

export default function PlaceboPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selected, setSelected] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rawOutput, setRawOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setIsGenerating(true);
    setFeedback('');
    setSelected('');
    setQuestion('');
    setOptions([]);
    setCorrectAnswer('');
    setRawOutput('');

    const prompt = `
You are an expert tutor AI. Given a topic, generate a multiple choice question.

Format your output exactly like this:

<question>
What is the unit of electric current?

<options>
A. Volt  
B. Ampere  
C. Ohm  
D. Watt

<answer>
Correct answer: B

Now generate a question about: ${input.trim()}
`;

    try {
      const response = await fetch("https://api-inference.huggingface.co/models/deepseek-ai/deepseek-llm-7b-instruct", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: prompt })
      });
      

      const text = await response.text();
      const data = JSON.parse(text);
      const raw = data.generated_text || data[0]?.generated_text || '';
      console.log("LLM raw output:", raw);
      setRawOutput(raw);

      const { questionText, parsedOptions, correct } = parseStructuredLLMOutput(raw);

      if (questionText && parsedOptions.length === 4 && correct) {
        setQuestion(questionText);
        setOptions(parsedOptions);
        setCorrectAnswer(correct);
      } else {
        setFeedback("⚠️ Couldn't parse this question correctly.");
      }
    } catch (err) {
      console.error(err);
      setFeedback("❌ Error fetching or parsing the question.");
    }

    setIsGenerating(false);
  };

  const parseStructuredLLMOutput = (text) => {
    const qMatch = text.match(/<question>([\s\S]*?)<options>/i);
    const oMatch = text.match(/<options>([\s\S]*?)<answer>/i);
    const aMatch = text.match(/<answer>([\s\S]*)/i);

    const questionText = qMatch ? qMatch[1].trim().replace(/^[:\-–]/, '').trim() : '';
    const optionLines = oMatch ? oMatch[1].split('\n').map(l => l.trim()).filter(Boolean) : [];

    const parsedOptions = optionLines.map(line => {
      const match = line.match(/^([A-D])[\.\)]\s*(.*)$/);
      return match ? { label: match[1].toUpperCase(), text: match[2].trim() } : null;
    }).filter(Boolean);

    const answerMatch = aMatch ? aMatch[1].match(/correct answer[:\s]*([A-D])/i) : null;
    const correct = answerMatch ? answerMatch[1].toUpperCase() : '';

    return { questionText, parsedOptions, correct };
  };

  const handleSubmit = () => {
    if (!selected) {
      setFeedback("⚠️ Please select an option.");
      return;
    }
    if (selected === correctAnswer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Incorrect. The correct answer is ${correctAnswer}.`);
    }
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 min-h-screen flex items-center justify-center">
          <div className="text-4xl font-['0xProtoNerdFont'] dark:text-white">Loading...</div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 min-h-screen">
        <h1 className="text-4xl py-10 text-center font-['0xProtoNerdFont'] dark:text-white">Placebo</h1>
        <h1 className="text-4xl py-10 text-center font-['0xProtoNerdFont'] dark:text-white">WARNING : this page is in alpha stage, so it does not work yet</h1>
        <div className="flex justify-center">
          <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
            <Image src={brain} width={200} height={200} className="mx-auto" alt="brain" />
            <h3 className="text-xl font-medium pt-8 pb-2 font-['0xProtoNerdFont']">Generate Practice Questions</h3>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <textarea
            className="w-full max-w-xl p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
            rows={4}
            placeholder="Enter a topic like 'photosynthesis' or 'Pythagorean theorem'"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isGenerating ? 'Generating...' : 'Generate Question'}
          </button>

          {question && options.length === 4 ? (
            <div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-xl">
              <p className="text-lg font-semibold mb-4 dark:text-white">{question}</p>
              <div className="space-y-2">
                {options.map(({ label, text }) => (
                  <label key={label} className="flex items-center gap-2 dark:text-white">
                    <input
                      type="radio"
                      name="mcq"
                      value={label}
                      checked={selected === label}
                      onChange={() => setSelected(label)}
                      className="accent-blue-600"
                    />
                    {label}. {text}
                  </label>
                ))}
              </div>
              <button
                onClick={handleSubmit}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Check Answer
              </button>
              {feedback && (
                <p className="mt-4 text-md font-medium dark:text-white">{feedback}</p>
              )}
            </div>
          ) : rawOutput && (
            <pre className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full max-w-xl overflow-x-auto text-sm text-left whitespace-pre-wrap dark:text-white">
              {rawOutput}
            </pre>
          )}

          {feedback && !question && (
            <p className="mt-4 text-md font-medium dark:text-red-300">{feedback}</p>
          )}
        </div>
      </main>
    </>
  );
}
