import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const iconColor = darkMode ? 'white' : 'black';

  return (
    <div className={darkMode ? "dark" : ""}>
      <BsFillMoonStarsFill 
        onClick={() => setDarkMode(!darkMode)} 
        className='cursor-pointer text-2xl'
        style={{ color: iconColor }} 
      />
    </div>
  );
} 