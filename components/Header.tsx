import React from 'react'
import { urlFor, sanityClient } from '../lib/sanity'
import { useState } from "react"; // import state

type Props = {}

function Header({}: Props) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <header className='top-0 flex items-start justify-between max-w-5xl mx-auto pt-3 px-10 overflow-hidden'>
        <div className='flex flex-row items-center'>
          <a><img src={urlFor('image-cbece69870934dd72adc277bb66ceab37a217635-100x100-png').width(40).url() } ></img> </a>
        </div>
        <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-1"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-6 bg-slate-50 hover:bg-purple-800"></span>
            <span className="block h-0.5 w-6 bg-slate-100"></span>
            <span className="block h-0.5 w-6 bg-slate-100"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 p-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-slate-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="my-4 uppercase">
                <a href="/about"><span className='link link-underline link-underline-blue pb-1'>About</span></a>
              </li>
              <li className="my-4 uppercase">
                <a href="/webdev"><span className='link link-underline link-underline-blue pb-1'>Webbdev</span></a>
              </li>
              <li className="my-4 uppercase">
                <a href="/art"><span className='link link-underline link-underline-blue pb-1'>Art</span></a>
              </li>
              <li className="my-4 uppercase">
                <a href="/contact"><span className='link link-underline link-underline-blue pb-1'>Contact</span></a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-4 lg:flex">
          <li>
            <a href="/about"><span className='link link-underline link-underline-blue pb-1 text-sm'>About</span></a>
          </li>
          <li>
            <a href="/webdev"><span className='link link-underline link-underline-blue pb-1 text-sm'>Webbdev</span></a>
          </li>
          <li>
            <a href="/art"><span className='link link-underline link-underline-blue pb-1 text-sm'>Art</span></a>
          </li>
          <li>
            <a href="/contact"><span className='link link-underline link-underline-blue pb-1 text-sm'>Contact</span></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header