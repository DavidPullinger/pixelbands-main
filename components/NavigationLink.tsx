// external functions
import { useRouter } from "next/router";
// external components
import Link from "next/link";

export default function NavLink(props: {
  num: string;
  name: string;
  url: string;
  onClick: any;
}) {
  const route = useRouter();

  return (
    <li
      className={
        "cursor-pointer hover:text-accent" +
        " " + // ! Need to have this
        (props.url == route.pathname ? "text-accent" : "")
      }
      onClick={props.onClick}
    >
      <span className="font-bold pr-5 md:hidden lg:inline">{props.num}</span>
      <Link href={props.url}>{props.name}</Link>
    </li>
  );
}
