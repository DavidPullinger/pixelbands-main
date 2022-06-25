// custom types
import { SVGIconParams } from "../SVGs";

export default function IconLink(props: {
  src: (props: SVGIconParams) => JSX.Element;
  url: string;
  width: number;
  height: number;
}) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer"
      className="hover:text-accent"
    >
      <props.src width={props.width} height={props.height} />
    </a>
  );
}
