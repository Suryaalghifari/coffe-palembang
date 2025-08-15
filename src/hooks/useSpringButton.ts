// src/hooks/useSpringButton.ts
import { useState, useMemo } from "react";
import { useSpring } from "@react-spring/web";

export function useSpringButton() {
  const [down, setDown] = useState(false);
  const [over, setOver] = useState(false);

  const style = useSpring({
    to: {
      transform: `scale(${down ? 0.96 : over ? 1.02 : 1})`,
      boxShadow: over
        ? "0px 10px 24px rgba(0,0,0,0.12)"
        : "0px 6px 16px rgba(0,0,0,0.08)",
    },
    config: { tension: 300, friction: 18 },
  });

  const bind = useMemo(
    () => ({
      onMouseEnter: () => setOver(true),
      onMouseLeave: () => {
        setOver(false);
        setDown(false);
      },
      onMouseDown: () => setDown(true),
      onMouseUp: () => setDown(false),
    }),
    []
  );

  return { style, bind };
}
