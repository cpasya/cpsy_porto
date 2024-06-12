import { useEffect, useState } from "react";
import HeroBabel from "../sections/HeroBabel/HeroBabel";
import Hero from "../sections/Hero";

const Cover = () => {
  const [mobile, setMobile] = useState(undefined);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 576 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return <div className="">{mobile ? <Hero /> : <HeroBabel />}</div>;
};

export default Cover;
