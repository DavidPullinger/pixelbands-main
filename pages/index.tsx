import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as background from "../public/images/background.jpg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PixelBands</title>
      </Head>
      <Image
        src={background}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        unoptimized={true}
        placeholder="blur"
      />
    </div>
  );
};

export default Home;
