// external components
import type { NextPage } from "next";
// custom components
import { AnimatedStraight, AnimatedGuitar } from "@/components/SVGs";
import { NumberedParagraph, TeamCard, GenerationSection } from "@/components/About";
// assets
import { david, cronus, owen, j5, jrussell, kingkoi, kotin } from "public/images";
import gen1 from "public/images/gen1.png";
import gen2 from "public/images/gen2.png";

const About: NextPage = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-20">
      {/**  ======= HERO SECTION  ========== */}
      <section className="flex flex-col gap-8">
        <div className="relative flex flex-col max-h-[max(calc(100vh-16rem),540px)] gap-4 lg:max-h-screen lg:gap-8">
          <h1 className="lg:pr-[20vw] max-w-[calc(1000px+20vw)]">
            Dope music meets the <span className="text-accent">Solana</span> blockchain
          </h1>
          <h2 className="pr-6 pb-4">A new way to create, share, and discover music</h2>
          <AnimatedGuitar className="mx-auto" width="100%" strokeWidth={4} />
          <div className="hidden lg:block whitespace-nowrap absolute top-[40vh] -left-6 text-[#483EA6] -z-10 text-[300px] opacity-20">Pixel Bands.</div>
        </div>
        <p className="mx-auto font-bold md:hidden">SCROLL</p>
      </section>
      {/**  ======= PROMPTS SECTION  ========== */}
      <section className="ml-[50%] p-14 -translate-x-1/2 -z-10 w-screen bg-accent rounded-3xl md:rounded-none flex flex-col gap-8">
        <h2 className="md:mx-auto">Our Prompts</h2>
        <div
          className={
            // small screen
            "flex flex-col gap-4" +
            // medium and larger screens
            " md:grid md:grid-cols-3 md:gap-10 lg:px-[10vw] md:content-center md:h-[30vh] md:text-center"
          }
        >
          <NumberedParagraph text={paragraph_1} number={1} />
          <AnimatedStraight className="mx-auto md:hidden" width="100%" height={150} strokeWidth={6} />
          <NumberedParagraph text={paragraph_2} number={2} />
          <AnimatedStraight className="mx-auto md:hidden" width="100%" height={150} strokeWidth={6} />
          <NumberedParagraph text={paragraph_3} number={3} />
        </div>
      </section>
      {/**  ======= TEAM SECTION  ========== */}
      <section>
        <h1>
          Meet the <span className="text-accent">Team</span>
        </h1>
        <h2 className="pb-8 pt-4">The brain and the brawn</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-16 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {team.map((member) => {
            return <TeamCard key={member.name} name={member.name} role={member.role} pfp={member.pfp} bio={member.bio} twitter={member.twitter} />;
          })}
        </div>
      </section>
      {/**  ======= GENERATIONS SECTION  ========== */}
      <section>
        <GenerationSection genNum="01" collImage={gen1} collName="The LoFi Collection" collSize={4444} magicEdenUrl="https://magiceden.io/marketplace/pixelbands" openSeaUrl="https://opensea.io/collection/pixelbands" collDescription={gen1Descr} readMoreUrl="/generations/generation1" />
        <GenerationSection className="!bg-primary" genNum="02" collImage={gen2} collName="The EDM Collection" collSize={5555} magicEdenUrl="https://magiceden.io/marketplace/pixelbands" openSeaUrl="https://opensea.io/collection/pixelbands" collDescription={gen2Descr} readMoreUrl="/generations/generation2" />
      </section>
    </div>
  );
};

const paragraph_1 = "What if we could use the blockchain to create a new way of distributing music?";
const paragraph_2 = "What if we could create a system where artists could be paid directly by their fans?";
const paragraph_3 = "What if we could create a new music ecosystem that was transparent, fair, and decentralized?";

const team = [
  {
    name: "Music Monke",
    role: "Music & Project Strategist",
    bio: "Web2 refugee, bedroom musician.",
    pfp: kotin,
    twitter: "MusicMonke",
  },
  {
    name: "Cronus",
    role: "Visual Artist",
    bio: "Crypto investor. NFT collector.",
    pfp: cronus,
    twitter: "CronusTitanNFT",
  },
  {
    name: "J5",
    role: "Engineer & Music Developer",
    bio: "Multi-platinum mix and mastering engineer. Former staff at Criteria Studios, founding member of BanditoDAO, and former MonkeDAO Board Member.",
    pfp: j5,
    twitter: "j5trades",
  },
  {
    name: "JRussell",
    role: "Artist Relations & Community Manager",
    bio: "DJ, Producer, Engineer, musician, crypto Degenerate.",
    pfp: jrussell,
    twitter: "joseph_russsell ",
  },

  {
    name: "Boi King Koi",
    role: "Marketing Manager",
    bio: "Music Producer, DJ, Podcaster, recording studio owner & operator. Basically, my life is music.",
    pfp: kingkoi,
    twitter: "boikingkoi",
  },
  {
    name: "Owen",
    role: "Developer",
    bio: "Crypto, NFT & Tech enthusiast. 4+ years in the Crypto space. Passionate about building tomorrow's reality.",
    pfp: owen,
    twitter: "NFTOwen",
  },
  {
    name: "David",
    role: "Full Stack Developer",
    bio: "All things crypto since 2021, StackOverflow expert since long before. Happy to be building a decentralized, open source web. ",
    pfp: david,
    twitter: "devid_sol",
  },
];

const gen1Descr = "PixelBands Generation 1 is a collection of 4444 instrumental NFTs in the LoFi genre (75 bpm,   Key of cmaj). The collection is made up of guitar, drum, bass, and keys stems from 80          musicians from the PixelBands Community.";

const gen2Descr = " PixelBands Generation 2 is the first expansion of PixelBands NFTs that explores a new genre.   It is a collection of 5555 NFTs in the EDM genre (128 bpm, Key of Fminor). The collection is   made up of drums, bass, leads (synth melody, vocal melody) and FX stems. The collection is     made up of over 700 unique stems created by more than 100 talented musicians from our          community.";

export default About;
