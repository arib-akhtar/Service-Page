import React, { useState, useEffect } from 'react';

export default function ThemeToggler() {
  // state hook logic to initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    // Prevent errors on non-browser environments during build
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ayeroman-theme') || 'dark';
    }
    return 'dark'; // Fallback for build time
  });

  // UseEffect hook logic: runs whenever the 'theme' state changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    if (theme === 'dark') {
      // Apply .dark class to <html> for Tailwind's dark: prefix logic to activate
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save preference to localStorage so it persists between page reloads
    localStorage.setItem('ayeroman-theme', theme);
  }, [theme]);

  // Handle theme state toggle smoothly with scale animation
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    /* Interactive Button Component */
    <button 
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-[100] border border-[#D4AF37]/20 w-14 h-14 rounded-full flex items-center justify-center bg-slate-950/80 backdrop-blur-md shadow-[0_5px_30px_rgba(212,175,55,0.1)] group hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label="Toggle Night Mode"
    >
      <div className="relative w-7 h-7 flex items-center justify-center overflow-hidden">
        
        {/* Sun Icon (Inline SVG - appears when theme is 'light') */}
        <svg
          className={`w-6 h-6 text-[#D4AF37] stroke-current absolute transition-all duration-500 ease-in-out ${
            theme === 'light' ? 'translate-y-0 opacity-100 rotate-0' : '-translate-y-full opacity-0 -rotate-90'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>

        {/* Moon Icon (Inline SVG - appears when theme is 'dark') */}
        <svg
          className={`w-5 h-5 text-[#D4AF37] stroke-current fill-[#D4AF37]/20 absolute transition-all duration-500 ease-in-out ${
            theme === 'dark' ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-full opacity-0 rotate-90'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>

      </div>
    </button>
  );
}