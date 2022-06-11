// external components
import type { NextPage } from "next";
import Image from "next/image";
// assets
import * as background from "../public/images/background.png";

const Home: NextPage = () => {
  return (
    <div>
      <Image
        id="home"
        loading="eager"
        priority={true}
        src={background}
        alt="background"
        layout="fill"
        objectFit="cover"
        objectPosition="center bottom"
        unoptimized={true}
        quality={100}
        style={{ transform: "translateZ(0)" }} // keeps background crisp on chrome/brave
      />
    </div>
  );
};

export default Home;
