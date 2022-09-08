// external components
import { ClipboardIcon, XIcon } from "@heroicons/react/outline";
import { ChangeEvent } from "react";

export default function CreatorField(props: { address: string; share: number; id: number; removeCreator: (id: number) => void; updateCreator: (id: number, field: "address" | "share", ev: ChangeEvent<HTMLInputElement>) => void; paste: (id: number) => void }) {
  return (
    <div className="flex gap-2">
      <div className="flex gap-6 w-full">
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex justify-between">
            <p>Creator Address</p>
          </div>
          <div className="flex gap-4 relative">
            <input onChange={(ev) => props.updateCreator(props.id, "address", ev)} value={props.address} className="rounded h-8 w-full px-2 text-black absolute" />
            {props.address.length === 0 ? <ClipboardIcon className="w-6 text-accent absolute right-1 cursor-pointer mt-1" onClick={() => props.paste(props.id)} /> : null}
          </div>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex justify-between">
            <p>Creator Share</p>
            <a target="_blank" href="faq/launchpad/#creator-share">
              (?)
            </a>
          </div>
          <input onChange={(ev) => props.updateCreator(props.id, "share", ev)} className="rounded h-8 w-full px-2 text-black" type="number" min={0} max={100} />
        </div>
      </div>
      <XIcon onClick={() => props.removeCreator(props.id)} className="h-6 mb-1 self-end cursor-pointer text-accent" />
    </div>
  );
}
