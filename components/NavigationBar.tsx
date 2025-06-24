import React, { useEffect, useState } from 'react'


const sections = [
  "home",
  "about",
  "services",
  "testimonial",
  "team",
  "contact",
];


const NavigationBar = () => {
    const [activeSection, setActiveSection] = useState("home");
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPos = window.scrollY + 120; // buffer for fixed navbar
  
        for (let id of sections) {
          const section = document.getElementById(id);
          if (section) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
  
            if (scrollPos >= top && scrollPos < bottom) {
              setActiveSection(id);
              break;
            }
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // call initially
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      {/* Navbar section */}
      <nav className="bg-dark-200 sticky w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WeCare
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col items-center justify-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-dark-200 md:bg-dark-200 dark:border-gray-700">
              <li>
                <a
                  href="#home"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeSection === "home"
                      ? "text-green-500 font-semibold"
                      : "text-gray-900 dark:text-white"
                  } hover:text-green-400`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeSection === "about"
                      ? "text-green-500 font-semibold"
                      : "text-gray-900 dark:text-white"
                  } hover:text-green-400`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeSection === "services"
                      ? "text-green-500 font-semibold"
                      : "text-gray-900 dark:text-white"
                  } hover:text-green-400`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeSection === "testimonial"
                      ? "text-green-500 font-semibold"
                      : "text-gray-900 dark:text-white"
                  } hover:text-green-400`}
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeSection === "team"
                      ? "text-green-500 font-semibold"
                      : "text-gray-900 dark:text-white"
                  } hover:text-green-400`}
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeSection === "contact"
                      ? "text-green-500 font-semibold"
                      : "text-gray-900 dark:text-white"
                  } hover:text-green-400`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>  
  )
}

export default NavigationBar
