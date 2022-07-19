// external components
import Image from "next/image";
// custom components
import { IconLink } from "@/components/Shared";
// assets
import { TeamCardParams } from ".";
import { Twitter } from "@/components/SVGs";

export default function TeamCard(props: TeamCardParams) {
  return (
    <div className="flex flex-col gap-1 rounded-lg">
      <Image
        className="rounded"
        src={props.pfp}
        alt="profile picture"
        layout="responsive"
      />
      <div className="flex flex-col gap-1">
        <p className="text-[25px] uppercase text-accent">{props.name}</p>
        <div className="flex items-center justify-between">
          <p className="text-[18px] uppercase font-bold">{props.role}</p>
          <IconLink
            src={Twitter}
            url={"https://twitter.com/" + props.twitter}
            width={18}
            height={18}
          />
        </div>
        <p className="pt-2">{props.bio}</p>
      </div>
    </div>
  );
}
