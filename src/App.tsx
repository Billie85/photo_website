import React, { useState, useEffect } from "react";
import Tablet from "./Tablet/Tablet.tsx";
import Desktop from "./Desktop/Desktop.tsx";
import Mobile from "./Mobile/Mobile.tsx";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isTablet = windowSize >= 600 && windowSize <= 1024;
  const isDesktop = windowSize >= 1025;
  const isMobile = windowSize <= 600;

  return (
    <div>
      {isTablet && (
        <Tablet />
      )}
      {isDesktop && (
        <Desktop />
      )}
      {isMobile && (
        <Mobile />
      )}
    </div>
  );
}

export default App;
