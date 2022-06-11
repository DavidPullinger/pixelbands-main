import { SVGIconParams } from "./SVGs";

export default function IconLink(props: {
  src: (props: SVGIconParams) => JSX.Element;
  url: string;
}) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer"
      className="hover:text-accent"
    >
      <props.src width={24} height={24} />
    </a>
  );
}
