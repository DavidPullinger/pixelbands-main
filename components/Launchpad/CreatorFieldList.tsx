// external
import { ChangeEvent, MutableRefObject, useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { PlusIcon } from "@heroicons/react/solid";
// custom
import { CreatorField } from "@/components/Launchpad";

export default function CreatorFieldList(props: {
  getCreators: MutableRefObject<() => { address: string; share: number }[]>;
}) {
  const {
    creators,
    addCreator,
    removeCreator,
    updateCreator,
    updateCreatorViaPaste,
  } = useCreators();

  useEffect(() => {
    props.getCreators.current = getCreators;
  });

  function getCreators() {
    // don't return id
    return creators.map(({ id, ...rest }) => {
      return rest;
    });
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-accent">Creators</h2>
      {creators.map((creator) => {
        return (
          <CreatorField
            key={creator.id}
            address={creator.address}
            share={creator.share}
            id={creator.id}
            removeCreator={removeCreator}
            updateCreator={updateCreator}
            paste={updateCreatorViaPaste}
          />
        );
      })}
      {creators.length < 4 ? (
        <PlusIcon
          onClick={addCreator}
          className="w-6 cursor-pointer text-accent"
        />
      ) : null}
    </div>
  );
}

function useCreators() {
  const emptyCreator = () => {
    return {
      address: "",
      share: 0,
      id: Math.random(),
    };
  };
  const wallet = useWallet();
  const [creators, setCreators] = useState([emptyCreator()]);

  function addCreator() {
    setCreators([...creators, emptyCreator()]);
  }
  function removeCreator(id: number) {
    setCreators(creators.filter((creator) => creator.id !== id));
  }
  function updateCreator(
    id: number,
    field: "address" | "share",
    ev: ChangeEvent<HTMLInputElement>
  ) {
    setCreators(
      creators.map((creator) => {
        if (creator.id === id) {
          return {
            address: field === "address" ? ev.target.value : creator.address,
            share:
              field === "share"
                ? Number.parseInt(ev.target.value) || 0
                : creator.share,
            id: creator.id,
          };
        }
        return creator;
      })
    );
  }
  function updateCreatorViaPaste(id: number) {
    setCreators(
      creators.map((creator) => {
        if (creator.id === id) {
          return {
            address: wallet.publicKey?.toBase58() || "No wallet connected",
            share: creator.share,
            id: creator.id,
          };
        }
        return creator;
      })
    );
  }

  return {
    creators,
    addCreator,
    removeCreator,
    updateCreator,
    updateCreatorViaPaste,
  };
}
