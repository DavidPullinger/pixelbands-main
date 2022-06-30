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
    role: "Full Stack Developer",
    bio: "Passionate about all things web",
    pfp: david,
  },
  {
    name: "Owen",
    role: "Dev",
    bio: "Passionate about building tomorrow's reality",
    pfp: owen,
  },
  {
    name: "Cronus",
    role: "Temp",
    bio: "Short bio",
    pfp: cronus,
  },

  {
    name: "J5",
    role: "Chief Engineer & Music Developer",
    bio: "Multi-platinum mix and mastering engineer. Former staff at Criteria Studios, founding member of BanditDAO, and former MonkeDAO Board Member",
    pfp: j5,
  },
  {
    name: "Music Monke",
    role: "Music & Project Strategy",
    bio: "Web2 refugee, bedroom musician",
    pfp: kotin,
  },
  {
    name: "JRussell",
    role: "Artist Relations & Community",
    bio: "Musician, percussionist, instructor. Crypto and NFTs since 2021.",
    pfp: jrussell,
  },
  {
    name: "Boi King Koi",
    role: "Marketing",
    bio: "Music Producer, DJ, Podcaster, recording studio owner & operator. Basically, my life is music.",
    pfp: kingkoi,
  },
];

const About: NextPage = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <section className="flex flex-col gap-4 md:gap-16">
        <section className="relative flex flex-col max-h-[max(calc(100vh-16rem),540px)] gap-4 lg:max-h-screen lg:gap-8">
          <h1 className="font-bold text-[50px] md:text-[70px] lg:text-[90px] lg:pr-[20vw]">
            Dope music meets the <span className="text-accent">Solana</span>{" "}
            blockchain
          </h1>
          <h2 className="text-[25px] pr-6 pb-4 md:text-[35px] lg:text-[45px]">
            A new way to create, share, and discover music
          </h2>
          <AnimatedGuitar className="mx-auto" height={200} strokeWidth={4} />
          <div className="hidden lg:block whitespace-nowrap absolute top-[40vh] -left-6 text-[#483EA6] -z-10 text-[300px] opacity-20">
            Pixel Bands.&nbsp;&nbsp;
          </div>
        </section>
        <p className="mx-auto font-bold md:hidden">SCROLL</p>
        <section className="ml-[50%] p-14 -translate-x-1/2 -z-10 w-screen bg-accent rounded-3xl flex flex-col gap-8">
          <h1 className="text-[25px] md:mx-auto md:text-[35px] lg:text-[45px]">
            Our Prompts
          </h1>
          <div
            className={
              // small screen
              "flex flex-col gap-4" +
              // medium and larger screens
              " md:grid md:grid-cols-3 md:gap-10 lg:px-[10vw] md:content-center md:h-[30vh] md:text-center"
            }
          >
            <NumberedParagraph text={paragraph_1} number={1} />
            <AnimatedStraight
              className="mx-auto md:hidden"
              height={150}
              strokeWidth={6}
            />
            <NumberedParagraph text={paragraph_2} number={2} />
            <AnimatedStraight
              className="mx-auto md:hidden"
              height={150}
              strokeWidth={6}
            />
            <NumberedParagraph text={paragraph_3} number={3} />
          </div>
        </section>
      </section>
      <section>
        <h1 className="font-bold text-[50px] md:text-[70px]">
          Meet the <span className="text-accent">Team</span>
        </h1>
        <h2 className="text-[25px] pb-8 pt-4 md:text-[35px]">
          The brain and the brawn
        </h2>
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
