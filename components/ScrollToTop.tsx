"use client"; // This is a client component 👈🏽
import { Fragment, useEffect, useState } from "react"
import { FaCircleArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 200) {
              setShow(true);
          } else {
              setShow(false);
          }
      });
  });

  const scrollToTop = () => {

      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  }

  return (
    <Fragment>
      {
        (show) ? (
          <div className="fixed bottom-0 right-0 mb-6 mr-6 z-10">
            <button onClick={scrollToTop} className="rounded-full">
              <FaCircleArrowUp size={24} className="icon text-purple-600 hover:text-purple-900 transition"/>
            </button>
          </div>
        ) : (<Fragment/>)
      }
    </Fragment>
  )
}