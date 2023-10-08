import { motion, AnimatePresence } from "framer-motion"
import Animation from "../components/Animation";

import {  useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react";

export default function MyComponent() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
    console.log(isVisible)
          return (
    <div ref={ref}>
                  <p>{isVisible ? "Visible" : "Not visible"}</p>
    </div>
  );
}
export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}