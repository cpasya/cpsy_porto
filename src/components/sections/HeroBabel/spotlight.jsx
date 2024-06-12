import { useRef, useEffect } from "react";

const SpotlightEffect = () => {
  const spotlightRef = useRef(null);
  let spotlightSize = "transparent 120px, rgba(12, 12, 12, 0.85) 200px)";

  useEffect(() => {
    const updateSpotlight = (e) => {
      spotlightRef.current.style.backgroundImage = `radial-gradient(circle at ${
        (e.pageX / window.innerWidth) * 100
      }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
    };

    window.onmousemove = (e) => updateSpotlight(e);

    window.onmousedown = (e) => {
      spotlightSize = "transparent 130px, rgba(0, 0, 0, 0.95) 150px)";
      updateSpotlight(e);
    };

    window.onmouseup = (e) => {
      spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px)";
      updateSpotlight(e);
    };

    return () => {
      window.onmousemove = null;
      window.onmousedown = null;
      window.onmouseup = null;
    };
  }, []);

  return <div ref={spotlightRef} className="spotlight"></div>;
};

export default SpotlightEffect;
