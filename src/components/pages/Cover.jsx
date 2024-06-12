import { useEffect, useState } from "react";
import HeroBabel from "../sections/HeroBabel/HeroBabel";
import Hero from "../sections/Hero";

const Cover = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className="">{isMobile ? <Hero /> : <HeroBabel />}</div>;
};

export default Cover;
