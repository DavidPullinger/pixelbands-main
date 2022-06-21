// external components
import { ChevronDownIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
// custom components
import { AnimatedStraight, AnimatedGuitar } from "@/components/SVGs";
import { ArrowParagraph } from "@/components/About";

const paragraph_1 =
  "What if we could use the blockchain to create a new way of distributing music?";
const paragraph_2 =
  "What if we could create a system where artists could be paid directly by their fans?";
const paragraph_3 =
  "What if we could create a new music ecosystem that was transparent, fair, and decentralized?";

const About: NextPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <h1 className="font-bold text-[50px]">
          Dope music meets the <span className="text-accent">Solana</span>{" "}
          blockchain
        </h1>
        <h2 className="text-[25px] pr-6">
          A new way to create, share, and discover music
        </h2>
      </div>
      <AnimatedGuitar className="mx-auto" height={200} strokeWidth={4} />
      <p className="mx-auto font-bold">SCROLL</p>
      <div className="ml-[50%] p-10 -translate-x-1/2 -z-10 w-screen bg-accent rounded-3xl flex flex-col gap-4 items-center">
        <ArrowParagraph text={paragraph_1} number={1} />
        <AnimatedStraight className="mx-auto" height={150} strokeWidth={8} />
        <ArrowParagraph text={paragraph_2} number={2} />
        <AnimatedStraight className="mx-auto" height={150} strokeWidth={8} />
        <ArrowParagraph text={paragraph_3} number={3} />
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default About;
