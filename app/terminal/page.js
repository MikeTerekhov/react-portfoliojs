"use client";

import Navbar from '../Navbar';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FaTerminal, FaHome, FaProjectDiagram, FaBriefcase, FaPills, FaBrain, FaQuestionCircle } from 'react-icons/fa';

export default function TerminalSimulator() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState([]);
  const [currentPath, setCurrentPath] = useState('/');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [command]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const commands = {
    'help': {
      description: 'Show available commands',
      execute: () => {
        return `Available commands:
  help                    - Show this help message
  clear                   - Clear terminal
  home                    - Navigate to home page
  projects                - Navigate to projects page
  work                    - Navigate to work experience page
  placebo                 - Navigate to placebo page
  resilientai             - Navigate to ResilientAI dashboard
  ls                      - List available pages
  pwd                     - Show current path
  about                   - About this terminal
  exit                    - Exit terminal (go to home)`;
      }
    },
    'clear': {
      description: 'Clear terminal',
      execute: () => {
        setHistory([]);
        return 'Terminal cleared.';
      }
    },
    'home': {
      description: 'Navigate to home page',
      execute: () => {
        router.push('/');
        return 'Navigating to home page...';
      }
    },
    'projects': {
      description: 'Navigate to projects page',
      execute: () => {
        router.push('/projects');
        return 'Navigating to projects page...';
      }
    },
    'work': {
      description: 'Navigate to work experience page',
      execute: () => {
        router.push('/work');
        return 'Navigating to work experience page...';
      }
    },
    'placebo': {
      description: 'Navigate to placebo page',
      execute: () => {
        router.push('/placebo');
        return 'Navigating to placebo page...';
      }
    },
    'resilientai': {
      description: 'Navigate to ResilientAI dashboard',
      execute: () => {
        router.push('/resilientai');
        return 'Navigating to ResilientAI dashboard...';
      }
    },
    'ls': {
      description: 'List available pages',
      execute: () => {
        return `Available pages:
  /home                   - Home page
  /projects               - Projects showcase
  /work                   - Work experience
  /placebo                - Placebo page
  /resilientai            - ResilientAI dashboard
  /terminal               - This terminal`;
      }
    },
    'pwd': {
      description: 'Show current path',
      execute: () => {
        return `Current path: ${currentPath}`;
      }
    },
    'about': {
      description: 'About this terminal',
      execute: () => {
        return `Terminal Simulator v1.0
Built with Next.js and React
Navigate your portfolio using commands!
Type 'help' for available commands.`;
      }
    },
    'exit': {
      description: 'Exit terminal',
      execute: () => {
        router.push('/');
        return 'Exiting terminal...';
      }
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = command.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', content: `$ ${command}` }];
      
      if (cmd === '') {
        setHistory(newHistory);
        setCommand('');
        return;
      }

      if (commands[cmd]) {
        const result = commands[cmd].execute();
        setHistory([...newHistory, { type: 'output', content: result }]);
      } else {
        setHistory([...newHistory, { type: 'error', content: `Command not found: ${cmd}. Type 'help' for available commands.` }]);
      }
      
      setCommand('');
    }
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className={darkMode ? "dark" : ""}>
          <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 min-h-screen flex items-center justify-center'>
            <div className="text-4xl font-['0xProtoNerdFont'] dark:text-white">Loading Terminal...</div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={darkMode ? "dark" : ""}>
        <main className='bg-black px-6 md:px-10 lg:px-20 min-h-screen'>
          {/* Terminal Header */}
          <div className='py-6'>
            <div className='flex items-center mb-4'>
              <FaTerminal className='text-green-400 text-2xl mr-3' />
              <h1 className='text-3xl font-bold text-green-400 font-["0xProtoNerdFont"]'>
                Portfolio Terminal
              </h1>
            </div>
            <p className='text-green-300 font-["0xProtoNerdFont"]'>
              Type &apos;help&apos; to see available commands
            </p>
          </div>

          {/* Terminal Window */}
          <div className='bg-gray-900 border border-green-500 rounded-lg p-4 h-96 overflow-y-auto' ref={terminalRef}>
            {/* Welcome Message */}
            <div className='text-green-400 font-["0xProtoNerdFont"] mb-4'>
            </div>

            {/* Command History */}
            {history.map((entry, index) => (
              <div key={index} className='mb-2'>
                <div className='text-green-400 font-["0xProtoNerdFont"]'>
                  {entry.content}
                </div>
                {entry.type === 'output' && (
                  <div className='text-white font-["0xProtoNerdFont"] mt-1 ml-4'>
                    {entry.content.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
                {entry.type === 'error' && (
                  <div className='text-red-400 font-["0xProtoNerdFont"] mt-1 ml-4'>
                    {entry.content}
                  </div>
                )}
              </div>
            ))}

            {/* Current Command Input */}
            <div className='flex items-center'>
              <span className='text-green-400 font-["0xProtoNerdFont"] mr-2'>$</span>
              <input
                ref={inputRef}
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleCommand}
                className='flex-1 bg-transparent text-white font-["0xProtoNerdFont"] outline-none'
                placeholder='Type a command...'
              />
            </div>
          </div>

          {/* Quick Commands */}
          <div className='mt-6'>
            <h3 className='text-green-400 font-["0xProtoNerdFont"] mb-3'>Quick Commands:</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3'>
              <button
                onClick={() => setCommand('home')}
                className='p-2 bg-gray-800 text-green-400 rounded font-["0xProtoNerdFont"] hover:bg-gray-700 transition-colors flex items-center'
              >
                <FaHome className='mr-2' />
                home
              </button>
              <button
                onClick={() => setCommand('projects')}
                className='p-2 bg-gray-800 text-green-400 rounded font-["0xProtoNerdFont"] hover:bg-gray-700 transition-colors flex items-center'
              >
                <FaProjectDiagram className='mr-2' />
                projects
              </button>
              <button
                onClick={() => setCommand('work')}
                className='p-2 bg-gray-800 text-green-400 rounded font-["0xProtoNerdFont"] hover:bg-gray-700 transition-colors flex items-center'
              >
                <FaBriefcase className='mr-2' />
                work
              </button>
              <button
                onClick={() => setCommand('placebo')}
                className='p-2 bg-gray-800 text-green-400 rounded font-["0xProtoNerdFont"] hover:bg-gray-700 transition-colors flex items-center'
              >
                <FaPills className='mr-2' />
                placebo
              </button>
              <button
                onClick={() => setCommand('resilientai')}
                className='p-2 bg-gray-800 text-green-400 rounded font-["0xProtoNerdFont"] hover:bg-gray-700 transition-colors flex items-center'
              >
                <FaBrain className='mr-2' />
                resilientai
              </button>
              <button
                onClick={() => setCommand('help')}
                className='p-2 bg-gray-800 text-green-400 rounded font-["0xProtoNerdFont"] hover:bg-gray-700 transition-colors flex items-center'
              >
                <FaQuestionCircle className='mr-2' />
                help
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 