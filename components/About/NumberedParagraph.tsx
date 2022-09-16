export default function NumberedParagraph(props: {
  text: string;
  number: number;
}) {
  return (
    <div className="flex items-center justify-start gap-4 md:flex-col">
      <p className="font-bold text-2xl sm:text-3xl opacity-40">
        0{props.number}
      </p>
      <p>{props.text}</p>
    </div>
  );
}
