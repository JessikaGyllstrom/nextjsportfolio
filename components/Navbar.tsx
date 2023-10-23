"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menu = [
  { title: 'home', path: '/' },
  { title: 'art', path: '/art' },
  { title: 'webbdev', path: '/webbdev' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentRoute = usePathname();

 return (
   <nav className="flex min-h-[10vh] items-center justify-between flex-wrap p-3 mb-2  border-gray-200 bg-slate-800/40">
     <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/"><img src="https://cdn.sanity.io/images/n28frzwy/production/6da30a96738dcd41323d25fb791b2ab5c09e8d43-100x100.png" width={50}></img></Link>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
    <div
      className={`w-full flex flex-col lg:flex lg:flex-row lg:w-auto ${isOpen ? "flex" : "hidden"}`}
     >
      {menu.map((item, idx) => {   
        return (
          <Link
            href={item.path}
            key={idx}
            className={`cursor-pointer flex text-sm font-extralight mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-teal-300 ${
            currentRoute === item.path
                  ? 'text-purple-500 '
                  : 'text-white-200'
              }`}
          >
            {item.title}
          </Link>
          //        <Link
          //   className={isActive ? 'text-blue' : 'text-black'}
          //   href={item.path}
          //   key={item.title}
          // >
          //   {item.title}
          // </Link>
          // <Link key={index} href={item.path}>
          //   <a
          //     className={`cursor-pointer ${
          //       router.pathn === item.path
          //         ? 'text-blue-500'
          //         : 'hover:bg-gray-900 hover:text-blue-500'
          //     }`}
          //   >
          //     {item.title}
          //   </a>
          // </Link>
        )
      })}
      {/* <div className="text-sm w-full flex flex-col justify-center items-center lg:flex-row">
        <Link href="/" className="flex mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-teal-300">Home</Link>
        <Link href="/webbdev" className="flex mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">Webbdev</Link>
        <Link href="/art" className="flex mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">Art</Link>
        <Link href="/" className="flex mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">Skills</Link>
        <Link href="/" className="flex mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">Education</Link>
      </div> */}
     </div>
   </nav>
 );
}