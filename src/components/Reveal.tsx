import React from "react";
import { animated } from "@react-spring/web";
import { useRevealSpring } from "../hooks/useRevealSpring";

type Props = React.PropsWithChildren<{
  className?: string;
  y?: number;
  threshold?: number;
}>;

const Reveal: React.FC<Props> = ({ children, className, y, threshold }) => {
  const { ref, style } = useRevealSpring({ y, threshold });
  return (
    <animated.div ref={ref} style={style} className={className}>
      {children}
    </animated.div>
  );
};

export default Reveal;
