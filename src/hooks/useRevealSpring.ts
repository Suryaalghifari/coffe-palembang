import { useEffect, useMemo, useRef } from "react";
import { useSpring } from "@react-spring/web";

type Options = {
  /** offset muncul, default 12px */
  y?: number;
  /** threshold IO, default 0.12 */
  threshold?: number;
  /** sekali muncul lalu berhenti observe, default true */
  once?: boolean;
};

export function useRevealSpring(opts: Options = {}) {
  const { y = 12, threshold = 0.12, once = true } = opts;
  const ref = useRef<HTMLDivElement | null>(null);

  // hormati prefers-reduced-motion
  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const [style, api] = useSpring(() => ({
    from: { opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : y },
    to: { opacity: 1, y: 0 },
    config: { tension: 210, friction: 22 },
    immediate: prefersReduced,
  }));

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    const io = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          api.start({ opacity: 1, y: 0 });
          if (once) obs.unobserve(entry.target);
        }
      },
      { threshold }
    );

    // mulai dalam keadaan tersembunyi
    api.start({ opacity: 0, y });

    io.observe(el);
    return () => io.disconnect();
  }, [api, prefersReduced, threshold, once, y]);

  return { ref, style };
}
