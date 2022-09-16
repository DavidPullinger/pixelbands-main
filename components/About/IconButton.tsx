import { SVGIconParams } from "../SVGs";

export default function IconButton(props: {
  src: (props: SVGIconParams) => JSX.Element;
  url: string;
  text: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer"
      className={
        "border-2 border-solid hover:-translate-y-1 flex items-center justify-center gap-4 px-4 py-3 rounded-full w-full" +
        props.className
      }
    >
      <props.src height={props.height} width={props.width} />
      <p className="whitespace-pre">{props.text}</p>
    </a>
  );
}
