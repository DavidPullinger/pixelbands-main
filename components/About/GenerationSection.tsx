// external components
import Image from "next/image";
import Link from "next/link";
// custom components
import { MagicEden, Blob, Blob2, OpenSea } from "@/components/SVGs";
import { GenerationSectionParams, IconButton } from "@/components/About";

export default function GenerationSection(props: GenerationSectionParams) {
  return (
    <section
      className={
        "relative w-screen overflow-hidden bg-accent ml-[50%] p-10 md:p-14 -translate-x-1/2 rounded-3xl md:rounded-none " +
        props.className
      }
    >
      <Blob className="absolute top-0 right-0 -z-10" height={400} />
      <Blob2
        className="absolute top-0 right-0 -z-10 hidden md:block"
        height="100%"
      />
      <div className="w-fit mx-auto lg:mx-0">
        <h1>Generation {props.genNum}</h1>
        <div className="flex pb-8 pt-4 justify-between">
          <div>
            <p className="opacity-80">Collection Name</p>
            <h2 className="opacity-40">{props.collName}</h2>
          </div>
          <div className="text-right">
            <p className="opacity-80">Collection Size</p>
            <h2 className="opacity-40">{props.collSize}</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto lg:flex-row gap-6 md:gap-20">
        <Image
          className="rounded w-full max-w-[450px]"
          src={props.collImage}
          alt="gen1"
          layout="raw"
        />
        <div className="mx-auto flex flex-col items-center lg:items-start lg:mx-0 gap-6">
          <h2 className="opacity-40">Collection Description</h2>
          <div>
            <p className="leading-relaxed max-w-[40ch] text pb-2">
              {props.collDescription}
            </p>
            (
            <Link href={props.readMoreUrl}>
              <a className="underline underline-offset-1 px-[2px] font-bold">
                Read More
              </a>
            </Link>
            )
          </div>
          <div className="flex flex-col items-center gap-8 justify-between lg:flex-row">
            <IconButton
              src={MagicEden}
              text="Buy on Magic Eden"
              url={props.magicEdenUrl}
              height={20}
            />
            <IconButton
              src={OpenSea}
              text="Buy on Open Sea"
              url={props.openSeaUrl}
              height={25}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
