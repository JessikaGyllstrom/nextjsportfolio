import React, { useEffect, useState } from "react";

export function ToggleTheme() {
  const [isDark, setIsDark] = useState(true);


  function setDark() {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
    setIsDark(true);
  }

  function setLight() {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
    setIsDark(false);
  }



  function toggleMode() {
    if (isDark) {
      setLight();
    } else {
      setDark();
    }
  }

  // when the page is loaded or refreshed, check for theme preference
  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  return (
    <>
      <label className="relative block w-7 h-3">
        <input
          onChange={toggleMode}
          type="checkbox"
          checked={isDark ? true : false}
          className="peer opacity-0"
        />
        <div
          className="absolute cursor-pointer left-0 top-0 bottom-0 right-0 bg-gray-400 rounded-3xl before:absolute before:w-3 before:h-3 before:rounded-full before:bg-gray-500 peer-checked:before:translate-x-3 peer-checked:before:bg-gray-600 before:transition-all duration-300 mr-1"
        >    
        </div>
      </label>
      <button>
        {isDark ? (
          <svg
            v-if="dark"
            v-else="dark"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) :
          <svg
            v-else="dark"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd" />
          </svg>}
      </button>
      </>
  );
}