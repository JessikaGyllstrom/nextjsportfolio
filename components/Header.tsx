import React from 'react'
import { urlFor, sanityClient } from '../lib/sanity'
import { useState } from "react"; // import state
import Link  from 'next/link'

type Props = {}

function Header({}: Props) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const handleClick = (e, path) => {
    console.log("I clicked on the art Page");
    setIsNavOpen(false)
  }
  return (
    <header className='top-0 flex justify-between items-center max-w-5xl mx-auto pt-2 p-2 px-3 overflow-hidden'>
        <div className='flex flex-row'>
          <Link href="/"><img src={urlFor('image-cbece69870934dd72adc277bb66ceab37a217635-100x100-png').width(40).url() } ></img></Link>
        </div>
        <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-1"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
            <span className="block h-0.5 w-4 bg-slate-100"></span>
            <span className="block h-0.5 w-4 bg-slate-100"></span>
            <span className="block h-0.5 w-4 bg-slate-100"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 p-3"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-slate-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="9" y1="3" x2="3" y2="9" />
                <line x1="3" y1="3" x2="9" y2="9" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[200px]">
              <li className="my-4 uppercase text-xs">
                <Link href="/" onClick={(e) => handleClick(e, "/")}><span className='link link-underline link-underline-blue pb-1 text-xs'>Home</span></Link>
              </li>
              <li className="my-4 uppercase text-xs">
                <a href="/about" onClick={(e) => handleClick(e, "/about")}><span className='link link-underline link-underline-blue pb-1 text-xs'>About</span></a>
              </li>
              <li className="my-4 uppercase text-xs">
                <Link href="/webbdev" onClick={(e) => handleClick(e, "/webbdev")}><span className='link link-underline link-underline-blue pb-1 text-xs'>Webbdev</span></Link>
              </li>
              <li className="my-4 uppercase text-xs">
                <Link href="/art" onClick={(e) => handleClick(e, "/art")}><span className='link link-underline link-underline-blue pb-1 text-xs'>Art</span></Link>
              </li>
              <li className="my-4 uppercase text-xs">
                <Link href="/contact" onClick={(e) => handleClick(e, "/contact")}><span className='link link-underline link-underline-blue pb-1 text-xs'>Contact</span></Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-4 lg:flex">
          <li>
            <Link href="/"><span className='link link-underline link-underline-blue pb-1 text-sm'>Home</span></Link>
          </li>
          <li>
            <a href="/about"><span className='link link-underline link-underline-blue pb-1 text-sm'>About</span></a>
          </li>
          <li>
            <Link href="/webbdev"><span className='link link-underline link-underline-blue pb-1 text-sm'>Webbdev</span></Link>
          </li>
          <li>
            <Link href="/art"><span className='link link-underline link-underline-blue pb-1 text-sm'>Art</span></Link>
          </li>
          <li>
            <Link href="/#contact"><span className='link link-underline link-underline-blue pb-1 text-sm'>Contact</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header