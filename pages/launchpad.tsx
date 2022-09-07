// external components
import type { NextPage } from "next";
import { FormEvent, useEffect, useRef } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { CreateNftOutput, Metaplex } from "@metaplex-foundation/js";
// custom components
import { AudioField, CreatorFieldList, ImageField, InputField, LaunchpadFormData } from "@/components/Launchpad";
import { verifyFormData } from "@/utils/dataVerification";
import { fetchUrl } from "@/utils/httpRequest";
import { useConfig } from "@/contexts/ConfigContext";
import { useMetaplex } from "@/contexts/MetaplexContext";
import { mintNFT } from "@/utils/metaplex";
import { PublicKey } from "@solana/web3.js";

const Launchpad: NextPage = () => {
  const wallet = useWallet();
  const { api_url } = useConfig();
  const { metaplex } = useMetaplex();
  const getCreators = useRef(() => [{ address: "", share: 0 }]);
  const getImage = useRef(() => "");
  const getAudio = useRef(() => "");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // get metadata from form
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as LaunchpadFormData;

    // we are lifting state up via refs (want to prevent rerenders)
    // get creators
    data["creators"] = getCreators.current();
    // get media
    data["image"] = getImage.current();
    data["audio"] = getAudio.current();

    // verify data of form is valid
    const formIsValid = verifyFormData(data, wallet);
    if (!formIsValid) return;

    // submit form data
    let res = await submitForm(data);
    if (!res.success) return;

    // mint nft using metadata url
    res = await mintSong(metaplex, res.response, data);
    if (!res.success) return;

    // sign nft metadata
    res = await signMetadata(res.response);
    if (!res.success) return;
    console.log(res.response);
  }

  function submitForm(data: LaunchpadFormData) {
    return fetchUrl(
      api_url + "/createvid",
      "POST",
      {
        "Content-Type": "application/json",
      },
      {
        image: data["image"],
        mp3: data["audio"],
        mp3Length: Math.floor((document.getElementById("launchpad-audio") as HTMLAudioElement).duration),
        wallet: wallet.publicKey?.toString(),
        nftName: data["songName"],
        nftAttr: [
          {
            trait_type: "Song Name",
            value: data["songName"],
          },
          {
            trait_type: "Album Name",
            value: data["albumName"],
          },
          {
            trait_type: "Artist Name",
            value: data["artistName"],
          },
          {
            trait_type: "Genre",
            value: data["genre"],
          },
        ],
        royalty: data["royalty"],
        creators: data["creators"],
        isGif: data["image"].split(";")[0].split("/")[1] === "gif",
      },
      {
        pending: "Creating song...",
        success: "Song created",
      }
    );
  }

  function mintSong(metaplex: Metaplex, uri: string, data: LaunchpadFormData) {
    let tempCreators = [
      {
        address: new PublicKey("BcmcMrm3LHT7MU1oBK1eepJWkB4qeLhUaRJPtEFisqtv"),
        share: 0,
      },
      ...data["creators"].map((c) => {
        return {
          address: new PublicKey(c.address),
          share: c.share,
        };
      }),
    ];

    return mintNFT(
      metaplex,
      {
        name: data["songName"],
        uri: uri,
        sellerFeeBasisPoints: data["royalty"] * 100,
        creators: tempCreators,
        symbol: "PXB_MSC",
      },
      {
        pending: "Minting song...",
        success: "Song minted",
      }
    );
  }

  function signMetadata(nftMetadata: CreateNftOutput) {
    return fetchUrl(
      api_url + "/signmetadata",
      "POST",
      {
        "Content-Type": "application/json",
      },
      {
        mint: nftMetadata.mintAddress.toString(),
      },
      {
        pending: "Signing metadata...",
        success: "Metadata signed",
      }
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Launchpad</h1>
        <div className="hidden md:block">
          <WalletMultiButton />
        </div>
      </div>
      <form onSubmit={onSubmit} id="songForm" className="flex flex-col gap-14 mb-10">
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-[2fr,5px,1fr] lg:gap-4">
          {/* ========== METADATA SECTION ================ */}
          <section className="flex flex-col gap-3">
            <h2 className="text-accent pt-4">Metadata</h2>
            <div className="flex gap-4">
              <InputField name="songName" description="Song Name" />
              <InputField name="albumName" description="Album Name" />
            </div>
            <div className="flex gap-4">
              <InputField name="artistName" description="Artist Name" />
              <InputField name="genre" description="Genre" />
            </div>
            <InputField name="royalty" description="Total Royalty Percentage" explanationUrl="faq/launchpad/#total-royalty" attributes={{ type: "number", min: 0, max: 100 }} />
            {/* ========== CREATORS SECTION ================ */}
            <CreatorFieldList getCreators={getCreators} />
          </section>
          <div className="hidden bg-white bg-opacity-20 rounded lg:block"></div>
          {/* ========== MEDIA SECTION ================ */}
          <section className="flex flex-col gap-3">
            <h2 className="text-accent pt-4">Media</h2>
            <ImageField getImage={getImage} />
            <AudioField getAudio={getAudio} />
          </section>
        </div>
        {/* ========== MINT SECTION ================ */}
        <section className="flex flex-col gap-4">
          <div className="flex gap-2 justify-center items-center">
            <input name="termsAgreed" type="checkbox" className="rounded text-black cursor-pointer" />
            <p>I agree to the terms and conditions</p>
          </div>
          <button type="submit" className="border-2 border-solid hover:-translate-y-1 px-4 py-3 rounded-full w-full max-w-md mx-auto">
            Mint NFT
          </button>
        </section>
      </form>
    </div>
  );
};

export default Launchpad;
