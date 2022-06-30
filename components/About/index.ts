import { StaticImageData } from "next/image";

export { default as NumberedParagraph } from "./NumberedParagraph";
export { default as TeamCard } from "./TeamCard";

export type TeamCardParams = {
  name: string;
  role: string;
  bio: string;
  pfp: StaticImageData;
  twitter: string;
};
