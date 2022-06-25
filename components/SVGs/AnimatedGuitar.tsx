import { useEffect, useRef } from "react";
import { AnimatedSVGIconParams } from ".";

export default function AnimatedGuitar(props: AnimatedSVGIconParams) {
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
      if (scrollY == 0) {
        path.style.strokeDashoffset = 1;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
  });

  return (
    /* SVG that covers the main SVG. It's stokeDashoffset goes from 0 to 1 in a 
      CSS animation signified by class animate-line*/
    <svg
      className={props.className}
      width="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 388 717"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        ref={maskSVG}
        d="M193.5 1.49999V244.5L155.5 296C135.5 283.5 131.5 267.5 139 228C122 208.5 97.6768 259.903 99 269C99 317.5 101 328.5 41 345C3.50003 364 -13.5 384 14.4999 447.5C31.6847 486.473 78.5579 495.543 99 501.5C162 499 167.61 476.199 180 458.5C192.39 440.801 165 412.5 189.5 388C199.777 377.723 245.786 357.806 238 332.5C236 326 220.602 336.468 211.5 335C196 332.5 176 331 193.5 315C212.276 297.834 273.833 173 332.5 101C357 91 361.02 93.8777 363 82C365 70 363 46.5 387 26.5C389.5 19.5 378.893 7.52381 374.5 8.49999C370 9.49999 366.643 11.6897 368.5 5.49999C370 0.499987 362.5 -0.500014 359.5 1.49999C356.5 3.49999 355 11 363 11C369.4 11 360.79 16.21 359 18C355.5 21.5 354.731 18.3548 356 15.5C358 11 351 9.49999 348 11.5C345 13.5 344 20.5 352 20.5C355 20.5 351.26 24.7401 349 27C346.5 29.5 342.5 31 344.5 25.5C346.183 20.872 339.5 19.5 336.5 21.5C333.5 23.5 332 31 340 31C346.4 31 338.667 36.6667 334 39.5C332.4 40.7 332.667 38 333 36.5C334.5 31.5 327 30.5 324 32.5C321 34.5 319.5 42 327.5 42C333.9 42 325.29 47.21 323.5 49C320 52.5 319.731 49.8548 321 47C323 42.5 315.5 40.5 312.5 42.5C309.5 44.5 309.5 52 317.5 52C320.5 52 315.76 55.7401 313.5 58C311 60.5 307 64.5 309 59C310.683 54.372 304 53 301 55C298 57 297 64 305 64C307.5 64 309 84.5 305 89C235.167 188 107.077 360 92 388C69.6538 429.5 75.1801 512.636 121 529C142 536.5 204.121 433.398 238 493C265 540.5 88.2896 509.737 184 618C193.5 628.746 193.5 627.5 193.5 717"
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
