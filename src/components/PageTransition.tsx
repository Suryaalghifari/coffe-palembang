// src/components/PageTransition.tsx
import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";

// Supaya dipakai fleksibel (kamu sudah memakainya membungkus <Routes/>)
const PageTransition: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 210, friction: 22 },
  });

  // will-change minta GPU; wrapper relatif biar aman
  return transitions((style, loc) => (
    <animated.div
      style={{ ...style, willChange: "opacity" }}
      className="relative"
    >
      {/* children di sini sudah <Routes> dari App.tsx */}
      {children}
    </animated.div>
  ));
};

export default PageTransition;
