import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Adjust this path if needed

export default function LogoSplash() {
  const [scale, setScale] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setScale(true), 1000); // animate quickly
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black z-50">
      <img
        src={logo}
        alt="CollabVerse Logo"
        className={`w-40 h-40 transition-transform duration-600 ${
          scale ? "scale-600" : "scale-700"
        }`}
      />
    </div>
  );
}

