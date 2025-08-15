import { useSpring } from "@react-spring/web";

export const useSpringFade = (isVisible: boolean) =>
  useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 200, friction: 20 },
  });
