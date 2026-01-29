import { useEffect, useRef, useState } from "react";

export default function Typewriter({ text, speed = 500, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const intervalRef = useRef();

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    if (!text) return;
    intervalRef.current = setInterval(() => {
      i++;
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
      } else {
        clearInterval(intervalRef.current);
      }
    }, speed);
    return () => clearInterval(intervalRef.current);
  }, [text, speed]);

  return <span className={className}>{displayed}<span className="animate-pulse">|</span></span>;
}
