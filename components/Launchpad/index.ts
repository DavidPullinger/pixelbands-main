export { default as InputField } from "./InputField";
export { default as CreatorField } from "./CreatorField";
export { default as CreatorFieldList } from "./CreatorFieldList";
export { default as ImageField } from "./ImageField";
export { default as AudioField } from "./AudioField";

export type LaunchpadFormData = {
  songName: string;
  albumName: string;
  artistName: string;
  genre: string;
  royalty: number;
  creators: {
    address: string;
    share: number;
  }[];
  image: string;
  audio: string;
  termsAgreed: string;
};
