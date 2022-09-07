export default function FAQSection(props: {
  heading: string;
  description: string;
  id: string;
}) {
  return (
    <div
      id={props.id}
      className="target:bg-opacity-10 target:bg-white -mx-4 px-4 py-4 rounded"
    >
      <h2 className="text-accent">{props.heading}</h2>
      <p>{props.description}</p>
    </div>
  );
}
