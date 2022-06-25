export default function NumberedParagraph(props: {
  text: string;
  number: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <p className="font-bold text-2xl">{props.number}</p>
      <p>{props.text}</p>
    </div>
  );
}
