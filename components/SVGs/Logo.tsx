import { SVGIconParams } from ".";

export default function Logo(props: SVGIconParams) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 216 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g id="speaker">
        <path
          id="outline"
          d="M51.3125 15.3197C53.4755 6.33352 61.5144 0 70.7572 0H145.243C154.486 0 162.524 6.33351 164.687 15.3197L210.059 203.82C213.087 216.399 203.554 228.5 190.615 228.5H25.3852C12.4461 228.5 2.91259 216.399 5.94056 203.82L51.3125 15.3197Z"
          fill="white"
        />
        <circle id="large_p" cx="108.4" cy="154.9" r="54.4" fill="#221D51" />
        <circle id="small_p" cx="107.5" cy="54.5" r="26.5" fill="#221D51" />
        <circle id="large_w" cx="108" cy="154.5" r="17" fill="white" />
        <circle id="small_w" cx="108" cy="54.5" r="8" fill="white" />
      </g>
    </svg>
  );
}
