import { StaticImageData } from "next/image";

export { default as NumberedParagraph } from "./NumberedParagraph";
export { default as GenerationSection } from "./GenerationSection";
export { default as TeamCard } from "./TeamCard";
export { default as IconButton } from "./IconButton";

export type TeamCardParams = {
  name: string;
  role: string;
  bio: string;
  pfp: StaticImageData;
  twitter: string;
};

export type GenerationSectionParams = {
  className?: string;
  genNum: string;
  collImage: StaticImageData;
  collName: string;
  collSize: number;
  collDescription: string;
  magicEdenUrl: string;
  openSeaUrl: string;
  readMoreUrl: string;
};
