// src/components/AnimatedLink.tsx  (pindahkan ke /components bila perlu)
import React from "react";
import { useNavigate } from "react-router-dom";
import { animated } from "@react-spring/web";
import { useSpringButton } from "../hooks/useSpringButton";

type Props = {
  to: string;
  className?: string;
  children: React.ReactNode;
  delayMs?: number; // tunda navigasi agar efek press terlihat
  as?: React.ElementType; // default <a>
} & React.ComponentPropsWithoutRef<"a">;

const AnimatedLink: React.FC<Props> = ({
  to,
  className,
  children,
  delayMs = 90,
  as: Inner = "a",
  onClick,
  ...rest
}) => {
  const nav = useNavigate();
  const { style, bind } = useSpringButton();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    e.preventDefault();
    if (delayMs > 0) setTimeout(() => nav(to), delayMs);
    else nav(to);
  };

  // Wrapper HANYA untuk transform (no bg/shadow), biar tidak bikin “chip”
  return (
    <animated.span
      style={style}
      {...bind}
      className="inline-block align-middle" // aman, tanpa styling visual
    >
      <Inner href={to} onClick={handleClick} className={className} {...rest}>
        {children}
      </Inner>
    </animated.span>
  );
};

export default AnimatedLink;
