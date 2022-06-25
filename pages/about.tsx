// external components
import type { NextPage } from "next";
// custom components
import { AnimatedStraight, AnimatedGuitar } from "@/components/SVGs";
import { NumberedParagraph, TeamCard } from "@/components/About";
// assets
import {
  david,
  cronus,
  owen,
  j5,
  jrussell,
  kingkoi,
  kotin,
} from "public/images";

const paragraph_1 =
  "What if we could use the blockchain to create a new way of distributing music?";
const paragraph_2 =
  "What if we could create a system where artists could be paid directly by their fans?";
const paragraph_3 =
  "What if we could create a new music ecosystem that was transparent, fair, and decentralized?";

const team = [
  {
    name: "David",
    role: "Temp",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in cursus diam. Aenean finibus lacus ac tellus ornare, vel faucibus nisi scelerisque.",
    pfp: david,
  },
  {
    name: "Owen",
    role: "Temp",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in cursus diam. Aenean finibus lacus ac tellus ornare, vel faucibus nisi scelerisque.",

    pfp: owen,
  },
  {
    name: "Cronus",
    role: "Temp",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in cursus diam. Aenean finibus lacus ac tellus ornare, vel faucibus nisi scelerisque.",

    pfp: cronus,
  },

  {
    name: "J5",
    role: "Temp",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in cursus diam. Aenean finibus lacus ac tellus ornare, vel faucibus nisi scelerisque.",
    pfp: j5,
  },
  {
    name: "Kotin",
    role: "Temp",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in cursus diam. Aenean finibus lacus ac tellus ornare, vel faucibus nisi scelerisque.",
    pfp: kotin,
  },
  {
    name: "JRussell",
    role: "Temp",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in cursus diam. Aenean finibus lacus ac tellus ornare, vel faucibus nisi scelerisque.",
    pfp: jrussell,
  },
  {
    name: "Boi King Koi",
    role: "Temp",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in cursus diam. Aenean finibus lacus ac tellus ornare, vel faucibus nisi scelerisque.",
    pfp: kingkoi,
  },
];

const About: NextPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col max-h-[max(calc(100vh-16rem),540px)] gap-8">
        <h1 className="font-bold text-[50px]">
          Dope music meets the <span className="text-accent">Solana</span>{" "}
          blockchain
        </h1>
        <h2 className="text-[25px] pr-6">
          A new way to create, share, and discover music
        </h2>
        <AnimatedGuitar className="mx-auto" height={200} strokeWidth={4} />
      </section>
      <p className="mx-auto font-bold">SCROLL</p>
      <section className="ml-[50%] p-10 -translate-x-1/2 -z-10 w-screen bg-accent rounded-3xl flex flex-col gap-4 items-center">
        <NumberedParagraph text={paragraph_1} number={1} />
        <AnimatedStraight className="mx-auto" height={150} strokeWidth={6} />
        <NumberedParagraph text={paragraph_2} number={2} />
        <AnimatedStraight className="mx-auto" height={150} strokeWidth={6} />
        <NumberedParagraph text={paragraph_3} number={3} />
      </section>
      <section>
        <h1 className="font-bold text-[50px]">
          Meet the <span className="text-accent">Team</span>
        </h1>
        <h2 className="text-[25px] pb-8 pt-4">The brain and the brawn</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-16 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {team.map((member) => {
            return (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                pfp={member.pfp}
                bio={member.bio}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
