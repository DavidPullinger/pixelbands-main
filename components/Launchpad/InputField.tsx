import { InputHTMLAttributes } from "react";

export default function InputField(props: {
  name: string;
  description: string;
  explanationUrl?: string;
  attributes?: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between">
        <p>{props.description}</p>
        {props.explanationUrl ? (
          <a
            className="cursor-pointer"
            href={props.explanationUrl}
            target="_blank"
            rel="noreferrer"
          >
            (?)
          </a>
        ) : null}
      </div>
      <input
        type={props.attributes?.type}
        min={props.attributes?.min}
        max={props.attributes?.max}
        className="rounded h-8 w-full px-2 text-black"
        name={props.name}
      ></input>
    </div>
  );
}
