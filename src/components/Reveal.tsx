// src/components/Reveal.tsx
import React from "react";
import { useSpring, animated } from "@react-spring/web";

type RevealProps = {
  children: React.ReactNode;
  /** Jarak geser awal (px). Default 16 */
  y?: number;
  /** Delay ms */
  delay?: number;
  /** Jika false, animasi akan main lagi saat keluar/masuk viewport. Default true */
  once?: boolean;
  className?: string;
};

const supportsReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Reveal: React.FC<RevealProps> = ({
  children,
  y = 16,
  delay = 0,
  once = true,
  className,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Jika user minta reduce motion, langsung tampil tanpa animasi
    if (supportsReducedMotion) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  const styles = useSpring({
    from: { opacity: 0, transform: `translate3d(0, ${y}px, 0)` },
    to: {
      opacity: inView ? 1 : 0,
      transform: `translate3d(0, ${inView ? 0 : y}px, 0)`,
    },
    delay,
    config: { tension: 170, friction: 20, clamp: true },
    immediate: supportsReducedMotion, // non-animated kalau reduce motion
  });

  return (
    <animated.div ref={ref} style={styles} className={className}>
      {children}
    </animated.div>
  );
};

export default Reveal;
