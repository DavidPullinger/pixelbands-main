// external components
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function ArrowParagraph(props: {
  text: string;
  number: number;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4">
        <p className="font-bold text-2xl">{props.number}</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
