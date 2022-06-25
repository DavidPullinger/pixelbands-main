import { useEffect, useRef } from "react";
import { AnimatedSVGIconParams } from ".";

export default function AnimatedStraight(props: AnimatedSVGIconParams) {
  const maskSVG = useRef(null);
  useEffect(() => {
    const path = maskSVG.current as any;
    const center = window.innerHeight / 2;
    const onScroll = () => {
      const boundaries = path.getBoundingClientRect();
      const top = boundaries.top;
      const height = boundaries.height;
      const percentage = (center - top) / height;
      const drawLength = percentage > 0 ? percentage : 0;
      path.style.strokeDashoffset = drawLength < 1 ? 1 - drawLength : 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
  });

  return (
    /* SVG that covers the main SVG. It's stokeDashoffset goes from 0 to 1 in a 
      CSS animation signified by class animate-line*/
    <svg
      className={props.className}
      width="100%"
      height={props.height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 114 600"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        ref={maskSVG}
        d="M57 0V100C-18 100 -18 198.8 57 200C132 201.5 132 299.5 57 300C-18 300.5 -18 400 57 400C132 400 132 500 57 500C57 500 57 565 57 600L17 550L57 600L97 550"
        stroke="white"
        strokeWidth={props.strokeWidth}
        strokeLinejoin="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
      />
    </svg>
  );
}
